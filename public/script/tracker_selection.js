const basic_tracker_names = {
    'ootr_rsl': 'OoTR Random Settings League',
    'ootmm': 'OoTR/MMR Combo Randomizer',
    'tblitz': 'Triforce Blitz'
};

const adv_tracker_names = {
    'beta_quest': 'Beta Quest Item Tracker',
    'ootr_rsl_horiz': 'OoTR Random Settings League (Horizontal)',
    'tsg_main': 'TSG Vertical Item Tracker',
    'tsg_mw': 'TSG Multiworld Item Tracker',
    'tsg_square': 'TSG Square Item Tracker',
    'tsg_3p': 'TSG 3 Player Layout Item Tracker',
    'tsg_meds': 'TSG Horizontal Medallion Tracker',
    'tsg_meds2': 'TSG Square Medallion Tracker'
};

const tracker_names = {...basic_tracker_names, ...adv_tracker_names};
const tracker_urls = {
    'ootr_rsl': 'rsl',
    'ootmm': 'ootmm',
    'tblitz': 'tblitz',
    'beta_quest': 'bqtrack',
    'ootr_rsl_horiz': 'horiz',
    'tsg_main': 'tsgmain',
    'tsg_mw': 'tsgmw',
    'tsg_square': 'tsgsquare',
    'tsg_3p': 'tsg3player',
    'tsg_meds': 'tsgmeds',
    'tsg_meds2': 'tsgmeds2'
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