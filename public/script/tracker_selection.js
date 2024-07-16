const basic_tracker_names = {
    's3': 'Season 3 (Standard)',
    's3-race': 'Season 3 (Race Tracker)'
};

const adv_tracker_names = {};

const tracker_names = {...basic_tracker_names, ...adv_tracker_names};
const tracker_urls = {
    's3': 's3',
    's3-race': 's3-race'
}

let selected_tracker = null;
let room_id = null;

$(document).ready(function(){
    
    // Toggle next div element for special layouts
    $('#spec_title').click(function() {
        $(this).next().toggle('fast');
    });

    // Clicking tracker selection button
    $('button').not('#init_button').click(function() {
        let tid = $(this).attr('id');
        $('button').removeClass('selected');
        $(this).addClass('selected');
        $('#error_layout').hide();
        selected_tracker = tid;
        update_link();
    });

    // Set input event for the tracker id input box
    $('#room_id').on('input', function(event) {
        room_id = $("#room_id").val();
        room_id = room_id.replace(/\W/g, '');
        if (room_id === "") { room_id = null; }
        update_link();
    });

});

// Update the clickable link if either the roomname or selected tracker changes
function update_link() {
    const newurl = '/'.concat(tracker_urls[selected_tracker], '/', room_id);

    // Reset to invalid
    $("#init_url").removeAttr("href");
    $('#init_button').removeClass('ready');
    $('#init_button').addClass('notready');
    $('#error_length').show();

    // Validate
    if(room_id == null || room_id.length < 5) { return; }
    else { $('#error_length').hide(); }
    if(selected_tracker == null) { return; } 

    // Update the button link
    $('#init_button').removeClass('notready');
    $('#init_button').addClass('ready');
    $("#init_url").attr("href", newurl);
}