// When the page loads, attach functions to each tag and initialize some icons
window.onload = function() {
    var elemlist = document.body.getElementsByTagName("*");
    for(let i=0; i<elemlist.length; i++) {
        cllist = elemlist[i].classList;
        if(cllist.contains("cycle")) {
            let noloop = elemlist[i].classList.contains("noloop");
            elemlist[i].addEventListener("click", function(e) { cycle(e, this, false, noloop); });
            elemlist[i].addEventListener("contextmenu", function(e) { cycle(e, this, true, noloop); })
        }
        if(cllist.contains("toggle")) {
            elemlist[i].addEventListener("click", function(e) { toggle(e, this); });
            elemlist[i].addEventListener("contextmenu", function(e) { toggle(e, this); })
        }
        if(cllist.contains("badge")) {
            elemlist[i].addEventListener("click", function(e) { badge(e, this, "left"); });
            elemlist[i].addEventListener("contextmenu", function(e) { badge(e, this, "right"); });
        }
        if(cllist.contains("counter")) {
            elemlist[i].addEventListener("click", function(e) { count(e, this, "up", (e.shiftKey) ? 10 : 1); });
            elemlist[i].addEventListener("contextmenu", function(e) { count(e, this, "down", (e.shiftKey) ? 10 : 1); });
        }
        if(cllist.contains("split")) {
            elemlist[i].addEventListener("click", function(e) { split(e, this, "left"); });
            elemlist[i].addEventListener("contextmenu", function(e) { split(e, this, "right"); });
        }
        if(cllist.contains("cycletoggle")) {
            elemlist[i].addEventListener("click", function(e) { cycletoggle(e, this); });
            elemlist[i].addEventListener("contextmenu", function(e) { cycletoggle(e, this); });
        }
        if(cllist.contains("countertoggle")) {
            elemlist[i].addEventListener("click", function(e) { countertoggle(e, this, "up"); });
            elemlist[i].addEventListener("contextmenu", function(e) { countertoggle(e, this, "down"); });
        }
    }
    init(init_tracker);
    if(hidecontrols)
        document.getElementById("roomcontrols").hidden = true;
};

//  Cycle object handler
function cycle(e, element, reverse, noloop) { 
    e.preventDefault();
    var item = get_item(element)
    var opts = items[item]["opts"];
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
    var player = get_player(element);
    var state_data = {
        "player": player,
        "state": newstate,
    };
    rootRef.child("items").child(element.id).set(state_data);
}

// Toggle object handler
function toggle(e, element) {
    e.preventDefault();
    var curstate = !element.classList.contains("false");
    var player = get_player(element);
    var state_data = {
        "player": player,
        "state": !curstate,
    };
    rootRef.child("items").child(element.id).set(state_data);
}

// Badge object handler
function badge(e, element, clicktype) {
    e.preventDefault();
    var item = get_item(element);
    var player = get_player(element);
    var baseid = `${item}_base_${player}`;
    var badgeid = `${item}_badge_${player}`;
    var curstate_item = !document.getElementById(baseid).classList.contains("false");
    var curstate_badge = !document.getElementById(badgeid).classList.contains("hidden");

    if(clicktype === "left") {
        rootRef.child("items").child(baseid).set({
            "player": player,
            "state": !curstate_item,
        });
        rootRef.child("items").child(badgeid).set({
            "player": player,
            "state": curstate_badge,
        });
    } else if(clicktype === "right") {
        rootRef.child("items").child(baseid).set({
            "player": player,
            "state": curstate_item,
        });
        rootRef.child("items").child(badgeid).set({
            "player": player,
            "state": !curstate_badge,
        });
    } else {
        console.log(`Clicktype ${clicktype} not recognized`);
    }
}

// Count object handler
function count(e, element, direction, delta) {
    e.preventDefault();
    var item = get_item(element);
    var curstate = element.innerHTML === "" ? 0 : parseInt(element.innerHTML, 10);
    var mincount = items[item]["minimum"];
    var maxcount = items[item]["maximum"];
    if(direction === "up") {
        var newstate = (curstate+delta > maxcount) ? maxcount : curstate + delta;
    } else if(direction === "down") {
        var newstate = (curstate-delta < mincount) ? mincount : curstate-delta;
    } else {
        console.log(`Direction of count, ${direction}, must be up or down.`)
    }
    var player = get_player(element);
    var state_data = {
        "player": player,
        "state": newstate,
    };
    rootRef.child("items").child(element.id).set(state_data);
}

// Split object handler
function split(e, element, clicktype) {
    e.preventDefault();
    var item = get_item(element);
    var curstate = items[item]["opts"].indexOf(element.classList[2]); // Need a better way of handling this
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
    var player = get_player(element);
    var state_data = {
        "player": player,
        "state": newstate,
    };
    rootRef.child("items").child(element.id).set(state_data);
}

// CT object handler
function cycletoggle(e, element) {
    e.preventDefault();
    var item = get_item(element);
    if(e.shiftKey) {
        var toggle_element = document.getElementById(items[item]["toggle_obj"]);
        toggle(e, toggle_element);
    } else {
        var cycle_element = document.getElementById(items[item]["cycle_obj"]);
        cycle(e, cycle_element, !(e.button === 0), cycle_element.classList.contains("noloop"));
    }
}

// Counter Toggle object handler
function countertoggle(e, element, direction) {
    e.preventDefault();
    var item = get_item(element);
    var player = get_player(element);
    if(e.shiftKey) {
        var state_data = {
            "player": player,
            "state": "Found",
        };
        rootRef.child("items").child(element.id).set(state_data);
    } else {
        var curstate = !isNaN(element.innerHTML) ? parseInt(element.innerHTML, 10) : -1;
        var mincount = items[item]["minimum"];
        var maxcount = items[item]["maximum"];
        if(direction === "up") {
            var newstate = (curstate+1 > maxcount) ? maxcount : curstate + 1;
        } else if(direction === "down") {
            var newstate = (curstate-1 < mincount) ? mincount : curstate - 1;
        } else {
            console.log(`Direction of count, ${direction}, must be up or down.`)
        }
        var state_data = {
            "player": player,
            "state": newstate,
        };
        rootRef.child("items").child(element.id).set(state_data);
    }
}

// Function to update tracker state on db changes
function set_item_state(elementid, stateobj) {
    var player = stateobj["player"];
    var state = stateobj["state"];
    var element = document.getElementById(elementid);
    var item = get_item(element);
    if(element.classList.contains("cycle") || element.classList.contains("split") || element.classList.contains("ct_cycle")) {
        if(state === false) {
            set_item_state(elementid, {
                "player": player,
                "state": 0,
            });
            return;
        }
        element.classList.remove("false", ...items[item]["opts"]);
        element.classList.add(items[item]["opts"][state]);
        if(state === 0 && items[item]["disable_zero"])
            element.classList.add("false");
    }
    else if(element.classList.contains("toggle") || element.classList.contains("ct_toggle")) {
        toggle_state(element, state, "false");
    }
    else if(element.classList.contains("badge-item")) {
        if(elementid.includes("_base"))
            toggle_state(element, state, "false");
        else if(elementid.includes("_badge"))
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
            set_item_state(elementid, {
                "player": player,
                "state": 0,
            });
        else
            element.innerHTML = state;
    }
    else if(element.classList.contains("countertoggle")) {
        element.classList.remove("tblitz-text-found");
        element.classList.remove("tblitz-text");
        if(state === false) {
            element.classList.add("tblitz-text");
            element.innerHTML = "?";
        } else if(state === "Found") {
            element.classList.add("tblitz-text-found");
            element.innerHTML = state;
        } else {
            element.classList.add("tblitz-text");
            element.innerHTML = state;
        }
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

// Helper function to determine which player this element applies to.
function get_player(element) {
    if (!('player' in element.dataset)) {
        return undefined;
    }
    return element.dataset['player'];
}

// Helper function to get the base item type of this element.
function get_item(element) {
    if (!('item' in element.dataset)) {
        return undefined;
    }
    return element.dataset['item'];
}



// ===============================================================
// Build the cycle objects
function build_cycle(itemid, advcycle, player="") {
    var loop = items[itemid]["loop"] ? "" : " noloop";
    var disable_zero = items[itemid]["disable_zero"] ? " false" : ""
    var classes = `${advcycle}cycle ${items[itemid]["size"]}${loop} ${items[itemid]["opts"][0]}${disable_zero}`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}"></div>`;
}

// Build the toggle objects
function build_toggle(itemid, advtoggle, player="") {
    var classes = `${advtoggle}toggle ${itemid} ${items[itemid]["size"]} ${itemid} false`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}"></div>`;
}

// Build the counter objects
function build_counter(itemid, player="") {
    let baseclass = items[itemid].hasOwnProperty('baseclass') ? items[itemid].baseclass : "";
    var classes = `counter ${itemid} ${baseclass} ${items[itemid]["size"]} false`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}"></div>`;
}

// Build the badge objects
function build_badge(itemid, player="") {
    return `<div class="badge ${items[itemid]["size"]}" data-item="${itemid}" data-player="${player}" id="${itemid}_${player}">
        <div class="badge-item ${items[itemid]["opts"][0]} false" data-item="${itemid.concat("_base")}" data-player="${player}" id="${itemid.concat("_base")}_${player}"></div>
        <div class="badge-item ${items[itemid]["opts"][1]} hidden" data-item="${itemid.concat("_badge")}" data-player="${player}" id="${itemid.concat("_badge")}_${player}"></div>
        </div>`;
}

// Build the split items
function build_split(itemid, player="") {
    var classes = `split ${items[itemid]["size"]} ${items[itemid]["opts"][0]} false`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}"></div>`;
}

// Build the cycle toggle advanced object
function build_cycletoggle(itemid, player="") {
    var cycleobj = build_cycle(items[itemid]["cycle_obj"], "ct_");
    var toggleobj = build_toggle(items[itemid]["toggle_obj"], "ct_");
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="cycletoggle ${items[itemid]["size"]}" ${data_att} id="${element_id}">${cycleobj}${toggleobj}</div>`;
}

// Build the empty objects
function build_empty(itemid, player="") {
    var classes = `${items[itemid]["size"]}`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}"></div>`;
}

// Build the static objects
function build_static(itemid, player="") {
    var classes = `${items[itemid]["size"]} ${itemid}`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}"></div>`;
}

// Build counter toggle
function build_countertoggle(itemid, player="") {
    let baseclass = items[itemid].hasOwnProperty('baseclass') ? items[itemid].baseclass : "";
    var classes = `countertoggle ${baseclass} ${items[itemid]["size"]}`;
    var data_att = `data-item="${itemid}" data-player="${player}"`
    var element_id = `${itemid}_${player}`
    return `<div class="${classes}" ${data_att} id="${element_id}">?</div>`;
}

// Build a sub grid of 2x2 items in one majoritem square
// These elements are not able to be properly placed in the tracker grid at the moment
function build_subgrid_2item(itemlist, player="") {
    const html = `
        <div class="majoritem griditem">
            <div class="toggle subgrid_2x2_item1 ${itemlist[0]}" data-item=${itemList[0]} data-player=${player} id="${itemlist[0]}_${player}"></div>
            <div class="toggle subgrid_2x2_item2 ${itemlist[1]}" data-item=${itemList[1]} data-player=${player} id="${itemlist[1]}_${player}"></div>
        </div>`;
    return html;
}

function build_subgrid_3item(itemlist) { return ""; }


function build_item(itemid, player="") {
    // Check for multiple items in one square
    if(Array.isArray(itemid)) {
        console.log(`${itemid} is an array`);

        if(itemid.length === 2)
            return build_subgrid_2item(itemid, player);
        else if(itemid.length === 3)
            return build_subgrid_3item(itemid);
        else
            return '<div class="majoritem"></div>';
    }

    // Check for blank majoritem square
    if(itemid === "blank")
        return '<div class="majoritem"></div>';

    // Check for objects that are not defined
    if(!(itemid in items)) {
        console.log("Couldn't build itemid: ", itemid);
        return '<div class="majoritem"></div>';
    }

    // Build all of the normal types
    if(items[itemid]["type"] === "cycle")
        return build_cycle(itemid, "", player);
    else if(items[itemid]["type"] === "toggle")
        return build_toggle(itemid, "", player);
    else if(items[itemid]["type"] === "counter")
        return build_counter(itemid, player);
    else if(items[itemid]["type"] === "badge")
        return build_badge(itemid, player);
    else if(items[itemid]["type"] === "split")
        return build_split(itemid, player);
    else if(items[itemid]["type"] === "cycletoggle")
        return build_cycletoggle(itemid, player);
    else if(items[itemid]["type"] === "static")
        return build_static(itemid, player);
    else if(items[itemid]["type"] === "empty")
        return build_empty(itemid, player);
    else if(items[itemid]["type"] === "countertoggle")
        return build_countertoggle(itemid, player);
    else
        console.log("Couldn't build itemid: ", itemid);
}

// Build entire tracker from scratch
function build_tracker(trackerid, itemgrid, player="") {
    var trackerhtml = "";
    for(let i=0; i<itemgrid.length; i++) {
        trackerhtml += `<div class="row">`;
        for(let j=0; j<itemgrid[i].length; j++) {
            trackerhtml += build_item(itemgrid[i][j], player).concat(" ");
        }
        trackerhtml += "</div>";
    }
    document.getElementById(trackerid).innerHTML = trackerhtml;
}

// Build the middle key tracker from scratch
function build_key_tracker(trackerid) {
    var trackerhtml = "";
    var itemgrid = [];
    for (let i = 0; i < 8; i++) {
        itemgrid.push([`k${i+1}_toggle`, `level_${i+1}_text`, `k${i+1}_toggle`]);
    }
    var playergrid = [];
    for (let i = 0; i < 8; i++) {
        playergrid.push(["p1", "", "p2"]);
    }
    for (let i = 0; i < 8; i++) {
        trackerhtml += `<div class="row">`;
        for (let j = 0; j < 3; j++) {
            trackerhtml += build_item(itemgrid[i][j], playergrid[i][j]).concat(" ");
        }
        trackerhtml += "</div>";
    }
    document.getElementById(trackerid).innerHTML = trackerhtml;
}