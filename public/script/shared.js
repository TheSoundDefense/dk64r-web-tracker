// Valid things through url
// password=, hidecontrols=true

// Setting some global variables for user authentication
var uid = undefined;
var password_override = "";
var hidecontrols = false;
var authAttempted = false;
var rootRef = {};
var roomid = location.pathname.replace(/\/$/, "").split("/").pop().toLowerCase();
var urlquery = location.search.replace(/\/$/, "").split("?").pop().toLowerCase().split("&");

// Parse url controls
for(let i=0; i<urlquery.length; i++) {
    if(urlquery[i].includes("password="))
        password_override = urlquery[i].substr(urlquery[i].indexOf("=") + 1);
    else if(urlquery[i].toLowerCase().includes("hidecontrols=true"))
        hidecontrols = true;
}

// Log the user in and do an initial db sync
function init(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        uid = user.uid;
        rootRef = firebase.database().ref('games/' + roomid);
        callback();
    } else {
        console.log("Auth state not logged in");
        if(authAttempted) return;
        authAttempted = true;
        firebase.auth().signInAnonymously().catch(function(error) {
            console.log(error);
        });
    }});
}

// Initialize tracker elements using db on sync
function init_tracker() {
    var initialized = null;
    rootRef.child('items').on('child_added', function (data) {
        setItemState(data.key, data.val());
    });
    rootRef.child('items').on('child_changed', function (data) {
        setItemState(data.key, data.val());
    });
    rootRef.child('items').on('child_removed', function (data) {
        setItemState(data.key, false);
    });
    rootRef.child('owner').on('value', function (data) {
        initialized = !!data.val();
        document.getElementById('notInitialized').hidden = initialized;
        document.getElementById('setPasscode').innerText = initialized ? 'Enter passcode' : 'Initialize room w/passcode';
        document.getElementById('ownerControls').hidden = !(initialized && (data.val() === uid));
    });
}

// Set up room via password
function set_password() {
    var passcode = document.getElementById("passcode").value;
    if (document.getElementById('notInitialized').hidden) {
        rootRef.child('editors').child(uid).set(passcode);
    } else {
        var editors = {};
        editors[uid] = true;
        rootRef.set({
            owner: uid,
            passcode: passcode,
            editors: editors
        });
    }
}

// Destroy the db entry
function destroy_firebase() {
    rootRef.set({});
}

// Reset the db but keep config and user info
function reset_firebase() {
    rootRef.child('items').set({});
}