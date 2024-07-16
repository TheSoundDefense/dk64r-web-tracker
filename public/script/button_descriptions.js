var dungeon_text = ["unknowntext", "japestext", "aztectext", "factorytext", "galleontext", "foresttext", "cavestext", "castletext", "helmtext"];

var items = {
    "donkey": {
        "type": "toggle",
        "size": "majoritem",
    },
    "diddy": {
        "type": "toggle",
        "size": "majoritem",
    },
    "lanky": {
        "type": "toggle",
        "size": "majoritem",
    },
    "tiny": {
        "type": "toggle",
        "size": "majoritem",
    },
    "chunky": {
        "type": "toggle",
        "size": "majoritem",
    },
    "coconut": {
        "type": "toggle",
        "size": "majoritem",
    },
    "peanut": {
        "type": "toggle",
        "size": "majoritem",
    },
    "grape": {
        "type": "toggle",
        "size": "majoritem",
    },
    "feather": {
        "type": "toggle",
        "size": "majoritem",
    },
    "pineapple": {
        "type": "toggle",
        "size": "majoritem",
    },
    "bongos": {
        "type": "toggle",
        "size": "majoritem",
    },
    "guitar": {
        "type": "toggle",
        "size": "majoritem",
    },
    "trombone": {
        "type": "toggle",
        "size": "majoritem",
    },
    "sax": {
        "type": "toggle",
        "size": "majoritem",
    },
    "triangle": {
        "type": "toggle",
        "size": "majoritem",
    },
    "grab": {
        "type": "toggle",
        "size": "majoritem",
    },
    "charge": {
        "type": "toggle",
        "size": "majoritem",
    },
    "orangstand": {
        "type": "toggle",
        "size": "majoritem",
    },
    "twirl": {
        "type": "toggle",
        "size": "majoritem",
    },
    "punch": {
        "type": "toggle",
        "size": "majoritem",
    },
    "strong": {
        "type": "toggle",
        "size": "majoritem",
    },
    "rocketbarrel": {
        "type": "toggle",
        "size": "majoritem",
    },
    "sprint": {
        "type": "toggle",
        "size": "majoritem",
    },
    "mini_monkey": {
        "type": "toggle",
        "size": "majoritem",
    },
    "hunky": {
        "type": "toggle",
        "size": "majoritem",
    },
    "barrel_blast": {
        "type": "toggle",
        "size": "majoritem",
    },
    "spring": {
        "type": "toggle",
        "size": "majoritem",
    },
    "balloon": {
        "type": "toggle",
        "size": "majoritem",
    },
    "monkeyport": {
        "type": "toggle",
        "size": "majoritem",
    },
    "gone": {
        "type": "toggle",
        "size": "majoritem",
    },
    "slam": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["slam0", "slam1", "slam2", "slam3"],
        "loop": false,
        "disable_zero": true,
    },
    "diving": {
        "type": "toggle",
        "size": "majoritem",
    },
    "oranges": {
        "type": "toggle",
        "size": "majoritem",
    },
    "barrels": {
        "type": "toggle",
        "size": "majoritem",
    },
    "vines": {
        "type": "toggle",
        "size": "majoritem",
    },
    "camera_shockwave": {
        "type": "split",
        "size": "majoritem",
        "opts": ["nocamshock", "camera", "shockwave", "camshock"],
        "disable_zero": true,
        "loop": false,
    },
    "homing_sniper": {
        "type": "split",
        "size": "majoritem",
        "opts": ["noammo", "homing", "sniper", "homingsniper"],
        "disable_zero": true,
        "loop": false,
    },
    "donkey_blueprint": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 8,
    },
    "diddy_blueprint": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 8,
    },
    "lanky_blueprint": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 8,
    },
    "tiny_blueprint": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 8,
    },
    "chunky_blueprint": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 8,
    },
    "pearl": {
        "type": "counter",
        "size": "collectible",
        "minimum": 0,
        "maximum": 5,
    },
    "bean": {
        "type": "toggle",
        "size": "collectible",
    },
    "company_coin": {
        "type": "split",
        "size": "collectible",
        "opts": ["nocoin", "n64coin", "rwcoin", "n64rwcoin"],
        "disable_zero": true,
        "loop": false,
    },
    "rainbow_coin": {
        "type": "counter",
        "size": "collectible",
        "minimum": 0,
        "maximum": 16,
    },
    "crown": {
        "type": "counter",
        "size": "collectible",
        "minimum": 0,
        "maximum": 10,
    },
    "fairy": {
        "type": "counter",
        "size": "collectible",
        "minimum": 0,
        "maximum": 20,
    },
    "medal": {
        "type": "counter",
        "size": "collectible",
        "minimum": 0,
        "maximum": 40,
    },
    "gb": {
        "type": "counter",
        "size": "collectible",
        "minimum": 0,
        "maximum": 201,
    },
    "level_1_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_2_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_3_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_4_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_5_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_6_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_7_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_8_icon": {
        "type": "static",
        "size": "bosskey",
    },
    "level_1_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_2_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_3_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_4_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_5_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_6_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_7_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "level_8_text": {
        "type": "cycle",
        "size": "leveltext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "key_1": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_2": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_3": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_4": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_5": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_6": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_7": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "key_8": {
        "type": "badge",
        "size": "bosskey",
        "opts": ["key", "checkmark"],
    },
    "k1_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k2_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k3_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k4_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k5_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k6_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k7_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "k8_toggle": {
        "type": "toggle",
        "size": "bosskey"
    },
    "kong_cycle_1": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nokong", "donkey", "diddy", "lanky", "tiny", "chunky"],
        "loop": true,
        "disable_zero": true,
    },
    "kong_cycle_2": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nokong", "donkey", "diddy", "lanky", "tiny", "chunky"],
        "loop": true,
        "disable_zero": true,
    },
    "kong_cycle_3": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nokong", "donkey", "diddy", "lanky", "tiny", "chunky"],
        "loop": true,
        "disable_zero": true,
    },
    "kong_cycle_4": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nokong", "donkey", "diddy", "lanky", "tiny", "chunky"],
        "loop": true,
        "disable_zero": true,
    },
    "kong_cycle_5": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["nokong", "donkey", "diddy", "lanky", "tiny", "chunky"],
        "loop": true,
        "disable_zero": true,
    },
    "spacer_full": {
        "type": "empty",
        "size": "majoritem"
    },
    "spacer_half": {
        "type": "empty",
        "size": "halfmajoritem"
    }
}