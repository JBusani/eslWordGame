export const commonAnswers = {
    "erasers" : [
        "tree",
        "see",
        "set",
        "sue",
        "she",
        "toe",
        "the",
        "tee",
        "use",
        "rue",
        "rot",
        "out",
        "ore",
        "hut",
        "hot",
        "hero",
        "here",
        "hers",
        "hour",
        "hose",
        "shot",
        "sort",
        "terse",
        "those",
        "three",
        "souther",
        "reset",
        "store",
        "retuse",
        "ethos",
        "torus",
        "usher",
        "trues",
        "roues",
        "horse",
        "hoers",
        "suer",
        "roes",
        "hoes",
        "orts",
        "erst",
        "ruse",
        "rust",
        "ruth",
        "hues",
        "euro",
        "sere",
        "user",
        "rote",
        "rose",
        "tour",
        "thus",
        "sure",
        "shot",
        "shoe",
        "sort",
        "hero",
        "here",
        "tree",
    ],
    "pencils" : [
        "is",
        "epic",
        "ice",
        "pie",
        "pin",
        "sip",
        "pen",
        "sine",
        "lip",
        "nil",
        "cine",
        "clip",
        "pencil",
        "spin",
        "nice",
        "slice",
        "spine",
        "snipe",
        "lien",
        "lines",
        "lie",
        "isle",
        "less",
        "lens",
        "lice",
        "pecs",
        "sec",
        "sin",
        "slip",
        "nice",
        "sins",
        "sice",
        "pies",
        "pile",
        "pens",
        "snip",
        "spinel",
        "spile",
        "spice",
        "spiel",
        "spine",
        "spline",
        "clips",
        "since",
        "sic",
],
"textbook" : [],
"folders" : [],
"windows"   : [],
"bookcase" : [],
"teachers"  : [],
"classroom" : [],
"computers" : [],
"pencilcase" : [],
"whiteboard" : [],
"television" : [],
"treehouse" : [],
"toolboxes" : [],
"chainsaw" : [],
"curtain" : [],
"costume" : [],
"character" : [],
"lighting" : [],
"audiences" : [],
"detective" : [],
"criminal" : [],
"performance" : [],
"actress" : [],
"robbery" : [],
"servant" : [],
"arrests" : [],
"diamond" : [],
"lampshade" : [],
"clothesline" : [],
"garabage" : [],
"environment" : [],
"electricity" : [],  
"skylights" : [], 
"memories" : [], 
"litter" : [],  
"wildlife" : [], 
"scientists" : [],
"international" : [],
"recycling" : [],
"materials" : [],
"battery" : [],
"chemicals" : [],
"bracelets" : [],
"newspapers" : [],
"reuseable" : [],
"pollution" : [],
}

export function checkCommonAnswers(gameword, answer){
    //find the answer in the commonAnswers object
    //if the answer is in the object, return true
    //if the answer is not in the object, return false
    let answerArray = commonAnswers[gameword];
    return answerArray.includes(answer)

};