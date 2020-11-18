var cycleoptions = {
    "forest_med_text": ["unknowntext", "freetext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext"],
    "fire_med_text": ["unknowntext", "freetext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext"],
    "water_med_text": ["unknowntext", "freetext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext"],
    "shadow_med_text": ["unknowntext", "freetext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext"],
    "spirit_med_text": ["unknowntext", "freetext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext"],
    "light_med_text": ["unknowntext", "freetext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext"],
    "atrade_full": ["atrade0", "atrade1", "atrade2", "atrade3", "atrade4", "atrade5", "atrade6", "atrade7", "atrade8", "atrade9", "atrade10"],
    "scale": ["scale0", "scale1", "scale2"],
    "strength": ["str0", "str1", "str2", "str3"],
    "spells": ["nospells", "dins", "farores", "dinsfarores"],
    "hooks": ["nohook", "hookshot", "longshot"],
    "magicarrows": ["nomagicarrows", "firearrows", "lightarrows", "magicarrows"],
    "boots": ["noboots", "ironboots", "hoverboots", "boots"],
    "ctrade_full": ["ctrade0", "ctrade1", "ctrade2", "ctrade3", "ctrade4", "ctrade5", "ctrade6", "ctrade7"],
    "dungeonopeners": ["noswordcard", "koksword", "gerudocard", "swordcard"],
    "tunics": ["notunics", "gorontunic", "zoratunic", "tunics"],
    "foresttype": ["forestn", "forestmq"],
    "shadowtype": ["shadown", "shadowmq"],
    "welltype": ["welln", "wellmq"],
    "firetype": ["firen", "firemq"],
    "spirittype": ["spiritn", "spiritmq"],
    "forttype": ["fort1", "fort4"],
    "watertype": ["watern", "watermq"],
    "ganontype": ["ganonn", "ganonmq"],
    "gtgtype": ["gtgn", "gtgmq"],
}

var badgecls = {
    "bottle_letter":    ["bottle", "ruto"],
    "magic_lens":       ["magic", "lensbadge"],
    "zlsong":           ["zl", "checkmark"],
    "sariasong":        ["epona", "checkmark"],
    "eponasong":        ["saria", "checkmark"],
    "sunsong":          ["sunsong", "checkmark"],
    "timesong":         ["songoftime", "checkmark"],
    "stormssong":       ["storms", "checkmark"],
    "minuetsong":       ["minuet", "checkmark"],
    "bolerosong":       ["bolero", "checkmark"],
    "serenadesong":     ["serenade", "checkmark"],
    "nocturnesong":     ["nocturne", "checkmark"],
    "requiemsong":      ["requiem", "checkmark"],
    "preludesong":      ["prelude", "checkmark"],
}

var countextrema = {
    "gst": [0, 100],
    "triforce": [0, 999],
    "forestsk": [0, 5],
    "shadowsk": [0, 5],
    "wellsk": [0, 3],
    "firesk": [0, 8],
    "spiritsk": [0, 5],
    "fortsk": [0, 4],
    "watersk": [0, 6],
    "ganonsk": [0, 2],
    "gtgsk": [0, 9],
}

// When the page loads, attach functions to each tag and initialize some icons
window.onload = function() {
    var elemlist = document.body.getElementsByTagName("*");
    for(let i=0; i<elemlist.length; i++) {
        cllist = elemlist[i].classList;
        if(cllist.contains("cycle")) {
            populate_base_images(elemlist[i]);
            let noloop = elemlist[i].classList.contains("noloop");
            elemlist[i].addEventListener("click", function(e) { cycle(e, this, false, noloop); });
            elemlist[i].addEventListener("contextmenu", function(e) { cycle(e, this, true, noloop); })
        }
        if(cllist.contains("toggle")) {
            elemlist[i].addEventListener("click", function(e) { toggle(e, this); });
            elemlist[i].addEventListener("contextmenu", function(e) { toggle(e, this); })
        }
        if(cllist.contains("badge")) {
            populate_base_images(elemlist[i]);
            elemlist[i].addEventListener("click", function(e) { badge(e, this, "left"); });
            elemlist[i].addEventListener("contextmenu", function(e) { badge(e, this, "right"); });
        }
        if(cllist.contains("counter")) {
            elemlist[i].addEventListener("click", function(e) { count(e, this, "up", (e.shiftKey) ? 10 : 1); });
            elemlist[i].addEventListener("contextmenu", function(e) { count(e, this, "down", (e.shiftKey) ? 10 : 1); });
        }
        if(cllist.contains("split")) {
            populate_base_images(elemlist[i]);
            elemlist[i].addEventListener("click", function(e) { split(e, this, "left"); });
            elemlist[i].addEventListener("contextmenu", function(e) { split(e, this, "right"); });
        }
    }
    init(init_tracker);
};

//  Cycle object handler
function cycle(e, element, reverse, noloop) {
    e.preventDefault();
    var opts = cycleoptions[element.id];
    var curstate = -1;
    for(let i=0; i<opts.length; i++)
        curstate = element.classList.contains(opts[i]) ? i : curstate;
    if(reverse) {
        var newstate = noloop ?
            (curstate-1 < 0 ? 0 : curstate-1) :
            (curstate-1 < 0 ? opts.length-1 : curstate-1);
    } else {
        var newstate = noloop ?
            (curstate+1 >= opts.length ? curstate : curstate+1) :
            (curstate+1 >= opts.length ? 0 : curstate+1)
    }
    rootRef.child("items").child(element.id).set(newstate);
}

// Toggle object handler
function toggle(e, element) {
    e.preventDefault();
    var curstate = !element.classList.contains("false");
    rootRef.child("items").child(element.id).set(!curstate);
}

// Badge object handler
function badge(e, element, clicktype) {
    e.preventDefault();
    var baseid = element.id + "_base";
    var badgeid = element.id + "_badge";
    var curstate_item = !document.getElementById(baseid).classList.contains("false");
    var curstate_badge = !document.getElementById(badgeid).classList.contains("hidden");

    if(clicktype === "left") {
        rootRef.child("items").child(baseid).set(!curstate_item);
        rootRef.child("items").child(badgeid).set(curstate_badge);
    } else if(clicktype === "right") {
        rootRef.child("items").child(baseid).set(curstate_item);
        rootRef.child("items").child(badgeid).set(!curstate_badge);
    } else {
        console.log(`Clicktype ${clicktype} not recognized`);
    }
}

// Count object handler
function count(e, element, direction, delta) {
    e.preventDefault();
    var curstate = element.innerHTML === "" ? 0 : parseInt(element.innerHTML, 10);
    var mincount = countextrema[element.id][0];
    var maxcount = countextrema[element.id][1];
    if(direction === "up") {
        var newstate = (curstate+delta > maxcount) ? maxcount : curstate + delta;
    } else if(direction === "down") {
        var newstate = (curstate-delta < mincount) ? mincount : curstate-delta;
    } else {
        console.log(`Direction of count, ${direction}, must be up or down.`)
    }
    rootRef.child("items").child(element.id).set(newstate);
}

// Split object handler
function split(e, element, clicktype) {
    e.preventDefault();
    var curstate = cycleoptions[element.id].indexOf(element.classList[2]); // Need a better way of handling this
    var newstate = undefined;
    if(clicktype === "left") {
        switch(curstate) {
            case 0: newstate = 1; break;
            case 1: newstate = 0; break;
            case 2: newstate = 3; break;
            case 3: newstate = 2; break;
        }
    } else if(clicktype === "right") {
        switch(curstate) {
            case 0: newstate = 2; break;
            case 1: newstate = 3; break;
            case 2: newstate = 0; break;
            case 3: newstate = 1; break;
        }
    } else {
        console.log(`Clicktype ${clicktype} not recognized`);
    }
    rootRef.child("items").child(element.id).set(newstate);
}

// Function to update tracker state on db changes
function setItemState(elementid, state) {
    var element = document.getElementById(elementid);
    if(element.classList.contains("cycle") || element.classList.contains("split")) {
        if(state === false) {
            setItemState(elementid, 0);
            return;
        }
        element.classList.remove("false", ...cycleoptions[elementid]);
        element.classList.add(cycleoptions[elementid][state]);
        if(state === 0)
            element.classList.add("false");
    }
    else if(element.classList.contains("toggle")) {
        toggle_state(element, state, "false");
    }
    else if(element.classList.contains("badge-item")) {
        if(elementid.slice(-4) === "base")
            toggle_state(element, state, "false");
        else if(elementid.slice(-5) === "badge")
            toggle_state(element, state, "hidden");
    }
    else if(element.classList.contains("counter")) {
        element.classList.remove("false");
        if(state === 0) { 
            element.innerHTML = "";
            if(!element.classList.contains("false"))
                element.classList.add("false")
        }
        else if(state === false)
            setItemState(elementid, 0);
        else
            element.innerHTML = state;
    }
}

// Toggle helper function
function toggle_state(element, state, target) {
    if(state)
        element.classList.remove(target);
    else
        if(!element.classList.contains(target))
            element.classList.add(target);
}

// Initialize specific types of icons.
function populate_base_images(element) {
    if(element.classList.contains("split")) {
        element.classList.add(cycleoptions[element.id][0], "false");
    }
    else if(element.classList.contains("badge")) {
        element.innerHTML = 
            `<div class="badge-item ${badgecls[element.id][0]} false" id="${element.id.concat("_base")}"></div>
            <div class="badge-item ${badgecls[element.id][1]} hidden" id="${element.id.concat("_badge")}"></div>`;
    }
    else if(element.classList.contains("cycle")) {
        element.classList.add(cycleoptions[element.id][0], "false");
    }
}