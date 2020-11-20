function set_setting_state(elementid, state) {
    if(elementid === "invert_layout") {
        invert_horiz_layout(state);
    }
}

// Invert the horizontal layout
function invert_horiz_layout(do_invert) {
    var ele1 = document.getElementById("tracker_items_songs");
    var ele2 = document.getElementById("tracker_rewards_keys");
    [ele1, ele2].forEach(function (item, idx) { item.classList.remove("box1", "box2"); });
    if(do_invert) {
        ele1.classList.add("box2");
        ele2.classList.add("box1");
    } else {
        ele1.classList.add("box1");
        ele2.classList.add("box2");
    }
}

// ===============================================
// Helpers for buttons to call settings
function swap_layout_orientation() {
    var curdirection = document.getElementById("tracker_items_songs").classList.contains("box1") ? false : true;
    rootRef.child("config").child("invert_layout").set(!curdirection);
}