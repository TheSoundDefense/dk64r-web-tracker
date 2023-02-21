var dungeon_text = ["unknowntext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext", "freetext", "stttext", "gbttext", "snowtext", "woodtext"];

var items = {
    "gomode": {
        "type": "toggle",
        "size": "majoritem",
    },
    "gomode_oot": {
        "type": "toggle",
        "size": "majoritem",
    },
    "gomode_mm": {
        "type": "toggle",
        "size": "majoritem",
    },
    // ========================================================================================================================
    // Medallions and Stones
    // ========================================================================================================================
    "forest_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "fire_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "water_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "shadow_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "spirit_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "light_med_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "kokiri_emerald_text": {
        "type": "cycle",
        "size": "stone_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "kokiri_emerald_text_full": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "goron_ruby_text": {
        "type": "cycle",
        "size": "stone_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "goron_ruby_text_full": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "zora_sapphire_text": {
        "type": "cycle",
        "size": "stone_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "zora_sapphire_text_full": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "forestmed": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "forestmed_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "forest_med_text",
        "toggle_obj": "forestmed",
    },
    "firemed": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "firemed_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "fire_med_text",
        "toggle_obj": "firemed",
    },
    "watermed": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "watermed_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "water_med_text",
        "toggle_obj": "watermed",
    },
    "shadowmed": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "shadowmed_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "shadow_med_text",
        "toggle_obj": "shadowmed",
    },
    "spiritmed": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "spiritmed_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "spirit_med_text",
        "toggle_obj": "spiritmed",
    },
    "lightmed": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "lightmed_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "light_med_text",
        "toggle_obj": "lightmed",
    },
    "kokiri_emerald": {
        "type": "toggle",
        "size": "stones",
    },
    "kokiri_emerald_full": {
        "type": "toggle",
        "size": "majoritem",
    },
    "kokiri_emerald_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "kokiri_emerald_text",
        "toggle_obj": "kokiri_emerald",
    },
    "kokiri_emerald_compact_full": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "kokiri_emerald_text_full",
        "toggle_obj": "kokiri_emerald_full",
    },
    "goron_ruby": {
        "type": "toggle",
        "size": "stones",
    },
    "goron_ruby_full": {
        "type": "toggle",
        "size": "majoritem",
    },
    "goron_ruby_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "goron_ruby_text",
        "toggle_obj": "goron_ruby",
    },
    "goron_ruby_compact_full": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "goron_ruby_text_full",
        "toggle_obj": "goron_ruby_full",
    },
    "zora_sapphire": {
        "type": "toggle",
        "size": "stones",
    },
    "zora_sapphire_full": {
        "type": "toggle",
        "size": "majoritem",
    },
    "zora_sapphire_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "zora_sapphire_text",
        "toggle_obj": "zora_sapphire",
    },
    "zora_sapphire_compact_full": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "zora_sapphire_text_full",
        "toggle_obj": "zora_sapphire_full",
    },
    // ==============================================================================================================
    // Major Items 
    // ==============================================================================================================
    "atrade_full": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["atrade0", "atrade1", "atrade2", "atrade3", "atrade4", "atrade5", "atrade6", "atrade7", "atrade8", "atrade9", "atrade10"],
        "loop": false,
        "disable_zero": true,
    },
    "claim_check": {
        "type": "toggle",
        "size": "majoritem",
    },
    "gst": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 100,
    },
    "bottle_letter": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["bottle", "ruto"],
    },
    "scale": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["scale0", "scale1", "scale2"],
        "loop": false,
        "disable_zero": true,
    },
    "slingshot": {
        "type": "toggle",
        "size": "majoritem",
    },
    "explosives": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["bombbag", "chubadge"],
    },
    "boomerang": {
        "type": "toggle",
        "size": "majoritem",
    },
    "strength": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["str0", "str1", "str2", "str3"],
        "loop": false,
        "disable_zero": true,
    },
    "magic_lens": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["magic", "lensbadge"],
    },
    "kokirisword_shield": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["kokirisword", "dekushieldbadge"],
    },
    "spells": {
        "type": "split",
        "size": "majoritem",
        "opts": ["nospells", "dins", "farores", "dinsfarores"],
        "disable_zero": true,
        "loop": false,
    },
    "hooks": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nohook", "hookshot", "longshot"],
        "loop": false,
        "disable_zero": true,
    },
    "bow": {
        "type": "toggle",
        "size": "majoritem",
    },
    "magicarrows": {
        "type": "split",
        "size": "majoritem",
        "opts": ["nomagicarrows", "firearrows", "lightarrows", "magicarrows"],
        "disable_zero": true,
    },
    "firearrows": {
        "type": "toggle",
        "size": "majoritem",
    },
    "hammer": {
        "type": "toggle",
        "size": "majoritem",
    },
    "boots": {
        "type": "split",
        "size": "majoritem",
        "opts": ["noboots", "ironboots", "hoverboots", "boots"],
        "disable_zero": true,
    },
    "mirrorshield": {
        "type": "toggle",
        "size": "majoritem",
    },
    "ctrade_full": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["ctrade0", "ctrade1", "ctrade2", "ctrade3", "ctrade4", "ctrade5", "ctrade6", "ctrade7"],
        "loop": false,
        "disable_zero": true,
    },
    "ctrade_scz": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["ctrade2", "ctrade3", "ctrade4", "ctrade5", "ctrade6", "ctrade7"],
        "loop": false,
        "disable_zero": false,
    },
    "ocarina": {
        "type": "toggle",
        "size": "majoritem",
    },
    "beans": {
        "type": "toggle",
        "size": "majoritem",
    },
    "gerudocard": {
        "type": "toggle",
        "size": "majoritem"
    },
    "dungeonopeners": {
        "type": "split",
        "size": "majoritem",
        "opts": ["noswordcard", "koksword", "gerudocard", "swordcard"],
        "disable_zero": true,
    },
    "tunics": {
        "type": "split",
        "size": "majoritem",
        "opts": ["notunics", "gorontunic", "zoratunic", "tunics"],
        "disable_zero": true,
    },
    "progsword": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nosword", "kokirisword", "mastersword"],
        "loop": false,
        "disable_zero": true,
    },
    "triforce": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 999,
    },

    // ========================================================================================================
    // Trade Quest 2.0 or OOTMM Trade Quest Items
    // ========================================================================================================
    "weirdegg": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["ctrade1", "checkmark"]
    },
    "zeldaletter": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["ctrade2", "checkmark"]
    },
    "skullmask": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["ctrade4", "checkmark"]
    },
    "maskoftruth_oot": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["ctrade7", "checkmark"]
    },
    "pocketcucco": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade0b", "checkmark"]
    },
    "cojiro": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade2", "checkmark"]
    },
    "oddmush": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade3", "checkmark"]
    },
    "oddpoultice": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade4", "checkmark"]
    },
    "poachersaw": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade5", "checkmark"]
    },
    "brokensword": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade6", "checkmark"]
    },
    "prescription": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade7", "checkmark"]
    },
    "eyeballfrog": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade8", "checkmark"]
    },
    "eyedrops": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["atrade9", "checkmark"]
    },
    "claimcheck2": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["atrade10", "checkmark"]
    },

    // ========================================================================================================
    // Songs
    // ========================================================================================================
    "zlsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["zl", "checkmark"]
    },
    "sariasong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["saria", "checkmark"]
    },
    "eponasong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["epona", "checkmark"]
    },
    "sunsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["sunsong", "checkmark"]
    },
    "timesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["songoftime", "checkmark"]
    },
    "stormssong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["storms", "checkmark"]
    },
    "minuetsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["minuet", "checkmark"]
    },
    "bolerosong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["bolero", "checkmark"]
    },
    "serenadesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["serenade", "checkmark"]
    },
    "nocturnesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["nocturne", "checkmark"]
    },
    "requiemsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["requiem", "checkmark"]
    },
    "preludesong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["prelude", "checkmark"]
    },

    // ========================================================================================================
    // Dungeon Vanilla/MQ, Keys
    // ========================================================================================================
    "forest_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["forestkl"],
        "loop": false,
        "disable_zero": false,
    },
    "forestsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "forestskc": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "forestbk": {
        "type": "toggle",
        "size": "keys",
    },
    "fire_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["firekl"],
        "loop": false,
        "disable_zero": false,
    },
    "firesk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 8,
    },
    "fireskc": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 8,
    },
    "firebk": {
        "type": "toggle",
        "size": "keys",
    },
    "water_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["waterkl"],
        "loop": false,
        "disable_zero": false,
    },
    "watersk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 6,
    },
    "waterskc": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 6,
    },
    "waterbk": {
        "type": "toggle",
        "size": "keys",
    },
    "shadow_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["shadowkl"],
        "loop": false,
        "disable_zero": false,
    },
    "shadowsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "shadowskc": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "shadowbk": {
        "type": "toggle",
        "size": "keys",
    },
    "spirit_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["spiritkl"],
        "loop": false,
        "disable_zero": false,
    },
    "spiritsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "spiritskc": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "spiritbk": {
        "type": "toggle",
        "size": "keys",
    },
    "ganon_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["ganonkl"],
        "loop": false,
        "disable_zero": false,
    },
    "ganonsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 2,
    },
    "ganonbk": {
        "type": "toggle",
        "size": "keys",
    },
    "well_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["wellkl"],
        "loop": false,
        "disable_zero": false,
    },
    "wellsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 3,
    },
    "fort_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["fortkl"],
        "loop": false,
        "disable_zero": false,
    },
    "fortsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 4,
    },
    "gtg_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["gtgkl"],
        "loop": false,
        "disable_zero": false,
    },
    "gtgsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 9,
    },
    "woodfall_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["woodfallkl"],
        "loop": false,
        "disable_zero": false,
    },
    "woodfallsk": {
        "type": "toggle",
        "size": "keys",
    },
    "woodfallbk": {
        "type": "toggle",
        "size": "keys",
    },
    "woodfallsf": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 15,
    },
    "snowhead_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["snowheadkl"],
        "loop": false,
        "disable_zero": false,
    },
    "snowheadsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 3,
    },
    "snowheadbk": {
        "type": "toggle",
        "size": "keys",
    },
    "snowheadsf": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 15,
    },
    "gbt_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["gbtkl"],
        "loop": false,
        "disable_zero": false,
    },
    "gbtsk": {
        "type": "toggle",
        "size": "keys",
    },
    "gbtbk": {
        "type": "toggle",
        "size": "keys",
    },
    "gbtsf": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 15,
    },
    "stt_keylabel": {
        "type": "cycle",
        "size": "keylabel",
        "opts": ["sttkl"],
        "loop": false,
        "disable_zero": false,
    },
    "sttsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 4,
    },
    "sttbk": {
        "type": "toggle",
        "size": "keys",
    },
    "sttsf": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 15,
    },
    "ssh_count": {
        "type": "counter",
        "size": "majoritem_9r",
        "minimum": 0,
        "maximum": 30,
    },
    "osh_count": {
        "type": "counter",
        "size": "majoritem_9r",
        "minimum": 0,
        "maximum": 30,
    },

    // ========================================================================================================
    // Triforce Blitz
    // ========================================================================================================
    "triforce_power": {
        "type": "countertoggle",
        "size": "majoritem",
        "baseclass": "tblitz-text",
        "minimum": 0,
        "maximum": 999,
    },
    "triforce_wisdom": {
        "type": "countertoggle",
        "size": "majoritem",
        "baseclass": "tblitz-text",
        "minimum": 0,
        "maximum": 999,
    },
    "triforce_courage": {
        "type": "countertoggle",
        "size": "majoritem",
        "baseclass": "tblitz-text",
        "minimum": 0,
        "maximum": 999,
    },

    // ========================================================================================================
    // Tools
    // ========================================================================================================
    "spacer_full": {
        "type": "empty",
        "size": "majoritem"
    },
    "spacer_half": {
        "type": "empty",
        "size": "halfmajoritem"
    },
    "shspacer": {
        "type": "empty",
        "size": "keys"
    },


    // ========================================================================================================
    // MM Major Items
    // ========================================================================================================
    "bow_mm": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "bombbagkeg_mm": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["bombbag", "keg_badge"]
    },
    "explosives_mm": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["bombbag_off", "bombbag", "blast_mask"],
        "loop": false,
        "disable_zero": true
    },
    "hookshot_mm": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "firearrows_mm": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "icearrows_mm": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "lightarrows_mm": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "pictobox": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "mirror_shield_mm": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "goht_compact": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "bottle_counter_mm": {
        "type": "counter",
        "baseclass": "bottle",
        "size": "majoritem_9r",
        "minimum": 0,
        "maximum": 6,
    },
    "expressmail": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["expressmail", "checkmark"]
    },
    "ocarina_mm": {
        "type": "toggle",
        "size": "majoritem",
    },
    "magic_lens_mm": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["magic", "lensbadge"],
    },
    "moontear": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["moontear", "checkmark"]
    },
    "landtd": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["landtd", "checkmark"]
    },
    "swamptd": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["swamptd", "checkmark"]
    },
    "mountaintd": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["mountaintd", "checkmark"]
    },
    "oceantd": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["oceantd", "checkmark"]
    },
    "roomkey": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["roomkey", "checkmark"]
    },
    "kafeiletter": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["kafeiletter", "checkmark"]
    },
    "pendant_mm": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["pendant_mm", "checkmark"]
    },
    "gold_dust": {
        "type": "badge",
        "size": "squish3b3in2b2",
        "opts": ["gold_dust", "checkmark"]
    },
    "strayfairy_clocktown": {
        "type": "toggle",
        "size": "keys",
    },

    // ========================================================================================================
    // MM Masks
    // ========================================================================================================
    "postmans_hat_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["postmans_hat", "checkmark"]
    },
    "all_nights_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["all_nights_mask", "checkmark"]
    },
    "stone_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "blast_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "great_fairy_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "deku_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "keaton_mask_check_mm": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["keaton_mask", "checkmark"]
    },
    "bremen_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["bremen_mask", "checkmark"]
    },
    "bunny_hood_mm_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["bunny_hood_mm", "checkmark"]
    },
    "don_gero_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["don_gero_mask", "checkmark"]
    },
    "mask_of_scents": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "goron_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "romani_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["romani_mask", "checkmark"]
    },
    "kafei_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["kafei_mask", "checkmark"]
    },
    "couples_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["couples_mask", "checkmark"]
    },
    "mask_of_truth_mm_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["mask_of_truth_mm", "checkmark"]
    },
    "zora_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "kamaro_mask_check": {
        "type": "badge",
        "size": "majoritem_9r",
        "opts": ["kamaro_mask", "checkmark"]
    },
    "gibdo_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "garo_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "captains_hat": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "giants_mask": {
        "type": "toggle",
        "size": "majoritem_9r",
    },
    "fierce_deity_mask": {
        "type": "toggle",
        "size": "majoritem_9r"
    },
    "garo_gibdo_split": {
        "type": "toggle",
        "size": "majoritem"
    },


    // ========================================================================================================
    // MM Songs
    // ========================================================================================================
    "timesong_mm": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["songoftime", "checkmark"]
    },
    "healingsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["healing", "checkmark"]
    },
    "eponasong_mm": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["epona", "checkmark"]
    },
    "soaringsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["soaring", "checkmark"]
    },
    "stormssong_mm": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["storms", "checkmark"]
    },
    "sonatasong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["sonata", "checkmark"]
    },
    "glullabysong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["glullaby", "checkmark"]
    },
    "bossanovasong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["bossanova", "checkmark"]
    },
    "elegysong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["elegy", "checkmark"]
    },
    "oathsong": {
        "type": "badge",
        "size": "majoritem",
        "opts": ["oath", "checkmark"]
    },


    // ========================================================================================================
    // MM Remains
    // ========================================================================================================
    "odolwa_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "odolwa_remains": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "odolwa_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "odolwa_text",
        "toggle_obj": "odolwa_remains",
    },
    "goht_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "goht_remains": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "goht_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "goht_text",
        "toggle_obj": "goht_remains",
    },
    "gyorg_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "gyorg_remains": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "gyorg_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "gyorg_text",
        "toggle_obj": "gyorg_remains",
    },
    "twinmold_text": {
        "type": "cycle",
        "size": "med_rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "twinmold_remains": {
        "type": "toggle",
        "size": "majoritem medallion",
    },
    "twinmold_compact": {
        "type": "cycletoggle",
        "size": "block-element",
        "cycle_obj": "twinmold_text",
        "toggle_obj": "twinmold_remains",
    },


}