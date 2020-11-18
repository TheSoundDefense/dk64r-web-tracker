// Setting some global variables for user authentication
var uid = undefined;
var roomid = location.pathname.replace(/\/$/, "").split("/").pop().toLowerCase();
var g_password = location.search.replace(/\/$/, "").split("?").pop().toLowerCase();

if (g_password && g_password.length > 4 && g_password.includes("password=")) {
    g_password = g_password.substr(g_password.indexOf('=') + 1);
    console.log("Password override: ", g_password);
} else 
    g_password = "";

var authAttempted = false;
var rootRef = {};

// Log the user in and do an initial db sync
function init(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
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

  // rootRef.child('items').on('value', function (snapshot) {
  //   roomCreated = !!snapshot.val();
  // });
    rootRef.child('owner').on('value', function (data) {
        initialized = !!data.val();
        document.getElementById('notInitialized').hidden = initialized;
        document.getElementById('setPasscode').innerText = initialized ? 'Enter passcode' : 'Initialize room w/passcode';
        document.getElementById('ownerControls').hidden = !(initialized && (data.val() === uid));
    });
  // if (g_password !== "") {
  //   console.log("attempting auto login - please wait a few seconds!");
  // }
  // setTimeout(() => {
  //   if (g_password === "")
  //     return;
  //   if (initialized == false) //create room
  //   {
  //     console.log("attempt to create room");
  //     var editors = {};
  //     editors[uid] = true;
  //     rootRef.set({
  //       owner: uid,
  //       passcode: g_password,
  //       editors: editors
  //     });
  //     console.log("Created new due password set in url");
  //   }
  //   else //add to editors if room already exists
  //   {
  //     rootRef.child('editors').child(uid).set(g_password, function (error) {
  //       if (error) {
  //         console.log("Did not add to editors on page load");
  //         console.log(error);
  //       }
  //       else {
  //         console.log("Added to editors successfully due password set in url");
  //       }
  //     });
  //   }
  //   rootRef.child('owner').on('value', function (data) {
  //     document.getElementById('notInitialized').hidden = initialized;
  //     document.getElementById('setPasscode').style.visibility = (initialized) ? "hidden" : "visible";
  //     document.getElementById('passcode').hidden = initialized
  //     document.getElementById('ownerControls').hidden = !(initialized && (data.val() === uid));
  //   });
  // }, 4000);
}

// Set up room via password
function set_passcode() {
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