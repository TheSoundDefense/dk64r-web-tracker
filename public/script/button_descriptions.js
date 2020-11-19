var dungeon_text = ["unknowntext", "dekutext", "dctext", "jabutext", "foresttext", "firetext", "watertext", "shadowtext", "spirittext", "freetext"];

var items = {
    "forest_med_text": {
        "type": "cycle",
        "size": "rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "fire_med_text": {
        "type": "cycle",
        "size": "rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "water_med_text": {
        "type": "cycle",
        "size": "rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "shadow_med_text": {
        "type": "cycle",
        "size": "rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "spirit_med_text": {
        "type": "cycle",
        "size": "rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "light_med_text": {
        "type": "cycle",
        "size": "rewardtext",
        "opts": dungeon_text,
        "loop": true,
        "disable_zero": true,
    },
    "forestmed": {
        "type": "toggle",
        "size": "majoritem",
    },
    "firemed": {
        "type": "toggle",
        "size": "majoritem",
    },
    "watermed": {
        "type": "toggle",
        "size": "majoritem",
    },
    "shadowmed": {
        "type": "toggle",
        "size": "majoritem",
    },
    "spiritmed": {
        "type": "toggle",
        "size": "majoritem",
    },
    "lightmed": {
        "type": "toggle",
        "size": "majoritem",
    },
    "atrade_full": {
        "type": "cycle",
        "size": "majoritem",
        "opts": ["atrade0", "atrade1", "atrade2", "atrade3", "atrade4", "atrade5", "atrade6", "atrade7", "atrade8", "atrade9", "atrade10"],
        "loop": false,
        "disable_zero": true,
    },
    "gst": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 100,
    },
    "kokiri_emerald": {
        "type": "toggle",
        "size": "stones",
    },
    "goron_ruby": {
        "type": "toggle",
        "size": "stones",
    },
    "zora_sapphire": {
        "type": "toggle",
        "size": "stones",
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
    "bombbag": {
        "type": "toggle",
        "size": "majoritem",
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
    "ocarina": {
        "type": "toggle",
        "size": "majoritem",
    },
    "beans": {
        "type": "toggle",
        "size": "majoritem",
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
    "triforce": {
        "type": "counter",
        "size": "majoritem",
        "minimum": 0,
        "maximum": 999,
    },
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
    "foresttype": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["forestn", "forestmq"],
        "loop": false,
        "disable_zero": false,
    },
    "forestsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "forestbk": {
        "type": "toggle",
        "size": "keys",
    },
    "shadowtype": {
        "type": "cycle",
        "size": "dungname-col2",
        "opts": ["shadown", "shadowmq"],
        "loop": false,
        "disable_zero": false,
    },
    "shadowsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "shadowbk": {
        "type": "toggle",
        "size": "keys",
    },
    "welltype": {
        "type": "cycle",
        "size": "dungname-col3",
        "opts": ["welln", "wellmq"],
        "loop": false,
        "disable_zero": false,
    },
    "wellsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 3,
    },
    "firetype": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["firen", "firemq"],
        "loop": false,
        "disable_zero": false,
    },
    "firesk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 8,
    },
    "firebk": {
        "type": "toggle",
        "size": "keys",
    },
    "spirittype": {
        "type": "cycle",
        "size": "dungname-col2",
        "opts": ["spiritn", "spiritmq"],
        "loop": false,
        "disable_zero": false,
    },
    "spiritsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 5,
    },
    "spiritbk": {
        "type": "toggle",
        "size": "keys",
    },
    "forttype": {
        "type": "cycle",
        "size": "dungname-col3",
        "opts": ["fort1", "fort4"],
        "loop": false,
        "disable_zero": false,
    },
    "fortsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 4,
    },
    "watertype": {
        "type": "cycle",
        "size": "dungname-col1",
        "opts": ["watern", "watermq"],
        "loop": false,
        "disable_zero": false,
    },
    "watersk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 6,
    },
    "waterbk": {
        "type": "toggle",
        "size": "keys",
    },
    "ganontype": {
        "type": "cycle",
        "size": "dungname-col2",
        "opts": ["ganonn", "ganonmq"],
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
    "gtgtype": {
        "type": "cycle",
        "size": "dungname-col3",
        "opts": ["gtgn", "gtgmq"],
        "loop": false,
        "disable_zero": false,
    },
    "gtgsk": {
        "type": "counter",
        "size": "keys",
        "minimum": 0,
        "maximum": 9,
    },
}