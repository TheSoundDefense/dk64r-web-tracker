// Invert the horizontal layout
function invert_horiz_layout() {
    var ele1 = document.getElementById("tracker_items_songs");
    var ele2 = document.getElementById("tracker_rewards_keys");
    ["box1", "box2"].forEach(function (item, idx) {
        ele1.classList.toggle(item);
        ele2.classList.toggle(item);
    });
}