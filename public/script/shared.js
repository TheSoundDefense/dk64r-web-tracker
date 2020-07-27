
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

function destroyFirebase() {
    rootRef.set({});
}

function init(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user);
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
