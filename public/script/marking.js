// Custom "framework" to handle addClass and removeClass
"function" !== typeof Array.prototype.indexOf && (Array.prototype.indexOf = function (d) { for (var a = 0; a < this.length; a++)if (this[a] === d) return a; return -1 });
window.dome = function () {
  function d(a) { for (var b = 0; b < a.length; b++)this[b] = a[b]; this.length = a.length } d.prototype.forEach = function (a) { this.map(a); return this }; d.prototype.map = function (a) { for (var b = [], c = 0; c < this.length; c++)b.push(a.call(this, this[c], c)); return b }; d.prototype.mapOne = function (a) { a = this.map(a); return 1 < a.length ? a : a[0] }; d.prototype.hasClass = function (a) { return this.mapOne(function (b) { return b.classList ? b.classList.contains(a) : !!b.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)")) }) }; d.prototype.addClass =
    function (a) { var b = ""; if ("string" !== typeof a) for (var c = 0; c < a.length; c++)b += " " + a[c]; else b = " " + a; return this.forEach(function (a) { a.className += b }) }; d.prototype.removeClass = function (a) { return this.forEach(function (b) { for (var c = b.className.split(" "), d; -1 < (d = c.indexOf(a));)c = c.slice(0, d).concat(c.slice(++d)); b.className = c.join(" ") }) }; d.prototype.attr = function (a, b) { return "undefined" !== typeof b ? this.forEach(function (c) { c.setAttribute(a, b) }) : this.mapOne(function (b) { return b.getAttribute(a) }) }; d.prototype.on =
      function () { return document.addEventListener ? function (a, b) { return this.forEach(function (c) { c.addEventListener(a, b, !1) }) } : document.attachEvent ? function (a, b) { return this.forEach(function (c) { c.attachEvent("on" + a, b) }) } : function (a, b) { return this.forEach(function (c) { c["on" + a] = b }) } }(); d.prototype.off = function () {
        return document.removeEventListener ? function (a, b) { return this.forEach(function (c) { c.removeEventListener(a, b, !1) }) } : document.detachEvent ? function (a, b) {
          return this.forEach(function (c) {
            c.detachEvent("on" +
              a, b)
          })
        } : function (a, b) { return this.forEach(function (b) { b["on" + a] = null }) }
      }(); return { get: function (a) { a = "string" === typeof a ? document.querySelectorAll(a) : a.length ? a : [a]; return new d(a) }, ready: function (a) { "loading" != document.readyState ? a() : document.addEventListener("DOMContentLoaded", a) } }
}();


dome.ready(function () {
  dome.get('.toggle').on('touchstart', toggle);
  dome.get('.cycle').on('touchstart', cycle);
  dome.get('.toggle').on('click', toggle);
  dome.get('.cycle').on('click', cycle);
  dome.get('.toggle').on('contextmenu', toggle)
  dome.get('.cycle').on('contextmenu', cycle_reverse);
  dome.get('.counters').on('click', count_up);
  dome.get('.counters').on('contextmenu', count_down);
  dome.get('.splititem').on('click', split_toggle_left);
  dome.get('.splititem').on('contextmenu', split_toggle_right);
  dome.get('.badge').on('click', badge_click);
  dome.get('.badge').on('contextmenu', badge_rightclick);
  dome.get('#setPasscode').on('click', setPasscode);
  dome.get('#setPasscode').on('touchstart', setPasscode);
  dome.get('#resetRoom').on('click', resetFirebase);
  dome.get('#resetRoom').on('touchstart', resetFirebase);
  dome.get('#destroyRoom').on('click', destroyFirebase);
  dome.get('#destroyRoom').on('touchstart', destroyFirebase);
});

function badge_click(e) {
  e.preventDefault();
  var children = this.children
  var curItem = this.classList.item(0)
  var curState = !(children.item(0).classList.contains("false"));
  var curBadge = !(children.item(1).classList.contains("hidden"));
  
  if (!curState && !curBadge)
    rootRef.child('items').child(curItem).set("item");
  else if (curState && !curBadge)
    rootRef.child('items').child(curItem).set("none");
  else if (!curState && curBadge)
    rootRef.child('items').child(curItem).set("both");          
  else if (curState && curBadge)
    rootRef.child('items').child(curItem).set("badge");
  return;
}

function badge_rightclick(e) {
  e.preventDefault();
  var children = this.children
  var curItem = this.classList.item(0)
  var curState = !(children.item(0).classList.contains("false"));
  var curBadge = !(children.item(1).classList.contains("hidden"));
  
  if (!curState && !curBadge)
    rootRef.child('items').child(curItem).set("badge");
  else if (curState && !curBadge)
    rootRef.child('items').child(curItem).set("both");
  else if (!curState && curBadge)
    rootRef.child('items').child(curItem).set("none");          
  else if (curState && curBadge)
    rootRef.child('items').child(curItem).set("item");
  return;
}

function split_toggle_left(e) {
  e.preventDefault();
  var curItem = this.classList.item(0);
  var children = this.children;
  // Find current state
  var leftState = !(children.item(1).classList.contains("hidden") && children.item(3).classList.contains("hidden"));
  var rightState = !(children.item(2).classList.contains("hidden") && children.item(3).classList.contains("hidden"));

  // Toggle left state and display correct icon
  if (!leftState && !rightState)
    rootRef.child('items').child(curItem).set(children[1].classList.item(0));
  else if (!leftState && rightState)
    rootRef.child('items').child(curItem).set(children[3].classList.item(0));
  else if (leftState && !rightState)
    rootRef.child('items').child(curItem).set(children[0].classList.item(0));
  else if (leftState && rightState)
    rootRef.child('items').child(curItem).set(children[2].classList.item(0));
  return;
}

function split_toggle_right(e) {
  e.preventDefault();
  var curItem = this.classList.item(0);
  var children = this.children;
  // Find current state
  var leftState = !(children.item(1).classList.contains("hidden") && children.item(3).classList.contains("hidden"));
  var rightState = !(children.item(2).classList.contains("hidden") && children.item(3).classList.contains("hidden"));

  // Toggle left state and display correct icon
  if (!leftState && !rightState)
    rootRef.child('items').child(curItem).set(children[2].classList.item(0));
  else if (!leftState && rightState)
    rootRef.child('items').child(curItem).set(children[0].classList.item(0));
  else if (leftState && !rightState)
    rootRef.child('items').child(curItem).set(children[3].classList.item(0));
  else if (leftState && rightState)
    rootRef.child('items').child(curItem).set(children[1].classList.item(0));
  return;
}

function count_up(e) {
  e.preventDefault();
  var curItem = this.classList.item(0);
  var curCount = this.children[0].innerHTML;
  curCount++;
  rootRef.child('items').child(curItem).set(curCount);
}

function count_down(e) {
  e.preventDefault();
  var curItem = this.classList.item(0);
  var curCount = this.children[0].innerHTML
  if (curCount == 0) return;
  curCount--;
  rootRef.child('items').child(curItem).set(curCount);
}

function cycle(e) {
  e.preventDefault();
  var curItem = this.classList.item(0);
  var children = this.children;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (!el.classList.contains('hidden')) {
      var elToSet = children[i + 1];
      if (!elToSet) {
        elToSet = children[0];
        if (this.classList.contains('noloop')) {
          elToSet = children[i];
        }
      }
      rootRef.child('items').child(curItem).set(elToSet.classList.item(0));
      return;
    }
  }
}

function cycle_reverse(e) {
  e.preventDefault();
  var curItem = this.classList.item(0);
  var children = this.children;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (!el.classList.contains('hidden')) {
      var elToSet = children[i - 1];
      if (!elToSet) {
        elToSet = children[children.length - 1];
        if (this.classList.contains('noloop')) {
          elToSet = children[0];
        }
      }
      rootRef.child('items').child(curItem).set(elToSet.classList.item(0));
      return;
    }
  }
}

function toggle(e) {
  e.preventDefault();
  var curState = !(this.classList.contains("false"));
  var curItem = this.classList.item(0);
  rootRef.child("items").child(curItem).set(!curState);
}

function setItemState(item, state) {
  var el = document.querySelectorAll('.' + item)[0];
  if (el.classList.contains('cycle') || el.classList.contains('splititem')) {
    // ====================================================
    for (var i = 0; i < el.children.length; i++) {
      var child = el.children[i];
      if (child.classList.contains(state)) {
        child.classList.remove('hidden');
      } else {
        child.classList.add('hidden');
      }
    }
    if (state === false) {
      el.children[0].classList.remove('hidden');
    }
    // ====================================================
  }
  else if (el.classList.contains('badge')) {
    var child1 = el.children[0];
    var child2 = el.children[1];
    if (state == "item") {
      child1.classList.remove('false');
      child2.classList.add('hidden');
    }
    else if (state == "badge") {
      child1.classList.add('false');
      child2.classList.remove('hidden');
    }
    else if (state == "both") {
      child1.classList.remove('false');
      child2.classList.remove('hidden');
    }
    else {
      child1.classList.add('false');
      child2.classList.add('hidden');
    }
  }
  else if (el.classList.contains('toggle')) {
    if (state) {
      el.classList.remove('false');
    } else {
      el.classList.add('false');
    }
  }
  else { // Counters
    if (state) {
      el.classList.remove('false');
      el.children[0].innerHTML = state;
      el.children[0].style.visibility = 'visible';
    }
    else {
      el.classList.add('false');
      el.children[0].innerHTML = 0;
      el.children[0].style.visibility = 'hidden';
    }
  }
}

function initTracker() {
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

  rootRef.child('items').on('value', function (snapshot) {
    roomCreated = !!snapshot.val();
  });
  rootRef.child('owner').on('value', function (data) {
    initialized = !!data.val();
    document.getElementById('notInitialized').hidden = initialized;
    document.getElementById('setPasscode').innerText = initialized ? 'Enter passcode' : 'Initialize room w/passcode';
    document.getElementById('ownerControls').hidden = !(initialized && (data.val() === uid));
  });
  if (g_password !== "") {
    console.log("attempting auto login - please wait a few seconds!");
  }
  setTimeout(() => {
    if (g_password === "")
      return;
    if (initialized == false) //create room
    {
      console.log("attempt to create room");
      var editors = {};
      editors[uid] = true;
      rootRef.set({
        owner: uid,
        passcode: g_password,
        editors: editors
      });
      console.log("Created new due password set in url");
    }
    else //add to editors if room already exists
    {
      rootRef.child('editors').child(uid).set(g_password, function (error) {
        if (error) {
          console.log("Did not add to editors on page load");
          console.log(error);
        }
        else {
          console.log("Added to editors successfully due password set in url");
        }
      });
    }
    rootRef.child('owner').on('value', function (data) {
      document.getElementById('notInitialized').hidden = initialized;
      document.getElementById('setPasscode').style.visibility = (initialized) ? "hidden" : "visible";
      document.getElementById('passcode').hidden = initialized
      document.getElementById('ownerControls').hidden = !(initialized && (data.val() === uid));
    });


  }, 4000);
}

function resetFirebase() {
  rootRef.child('items').set({});
}

function setPasscode() {
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

function ready() {
  init(initTracker);
}

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
  ready();
} else {
  document.addEventListener('DOMContentLoaded', ready);
}