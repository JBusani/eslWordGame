export const commonAnswers = {
    "knowledge" : [
      "den",
      "doe",
      "dog",
      "ego",
      "elk",
      "end",
      "gel",
      "god",
      "leg",
      "log",
      "nod",
      "ode",
      "old",
      "one",
      "lend",
      "loge",
      "long",
      "lone",
      "node",
      "noel",
      "ogle",
      "globe",
      "golden",
      "doge",
      "dong",
      "done",
      "lodge",
      "logon",
      "ogled",
      "olden",
      "endow",
      "enow",
      "glen",
      "gone",
      "lodge",
      "longed",
      "lowed",
      "owned",
      "weld",
      "wend",
      "wold"
    ],
    "meditation" : [
      "aid",
      "aim",
      "and",
      "ant",
      "ate",
      "dam",
      "den",
      "die",
      "dim",
      "din",
      "eat",
      "end",
      "ion",
      "mad",
      "man",
      "mat",
      "met",
      "mid",
      "min",
      "net",
      "nit",
      "not",
      "oat",
      "tea",
      "ten",
      "tie",
      "tin",
      "toe",
      "ton",
      "amid",
      "atom",
      "date"
    ],
    "treehouse" : [
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
"textbook" : ["bet", "boo", "bot", "box", "toe", "too", "took", "tool", "text", "book", "tot", "tet", "ebb", "ex", "oke"],
"bookcase" : [],
"teachers"  : [],
"classroom" : [],
"computers" : [],
"pencilcase" : [],
"whiteboard" : [],
"television" : [],
"erasers" : [],
"toolboxes" : [],
"chainsaws" : ["chain", "chins", "chin", "cash", "wash", "swan", "sawn", "sin", "as", "has", "his", "sac", "cans", "wins", "was", "awn", "ins", "ais", "sis"],
"character" : [],
"lighting" : [],
"audiences" : [],
"detective" : [],
"criminal" : [],
"performance" : ["force", "form", "fern", "free", "from", "peer", "pore", "poem", "prove", "per", "pen", "fee", "fen", "romp", "mere", "rope", "come", "cone", "cope", "core", "more", "norm", "once"],
"lampshade" : [],
"clothesline" : [],
"garabage" : [],
"environment" : [],
"electricity" : [],  
"skylights" : [], 
"memories" : [], 
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