//get data from data
import data from '../Components/data/data';

//shuffle the data array using the Fisher-Yates algorithm
for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = data[i]
    data[i] = data[j]
    data[j] = temp
};

export const initialState = {
    word: data[0],
    score: 0,
    time: 0,
    highscore: 0,
    gameover: false,
    gamestart: true,
    data: data,
    submittedAnswers: [],
}
//create global variables to be used as the action types
export const SET_WORD = "SET_WORD";
export const SET_SCORE = "SET_SCORE";
export const SET_TIME = "SET_TIME";
export const SET_HIGHSCORE = "SET_HIGHSCORE";
export const SET_GAMEOVER = "SET_GAMEOVER";
export const SET_GAMESTART = "SET_GAMESTART";
export const SET_SUBMITTEDANSWERS = "SET_SUBMITTEDANSWERS";

//create export functions that take in the initial state value and includes the type already
export const setWord = (word) => ({
    type: SET_WORD,
    payload: word
});
export const setSubmittedAnswers = (submittedAnswer) => ({
    type: SET_SUBMITTEDANSWERS,
    payload: submittedAnswer
});
export const setScore = (score) => ({
    type: SET_SCORE,
    payload: score
});
export const setTime = (time) => ({
    type: SET_TIME,
    payload: time
});
export const setHighscore = (highscore) => ({
    type: SET_HIGHSCORE,
    payload: highscore
});
export const setGameover = (gameover) => ({
    type: SET_GAMEOVER,
    payload: gameover
});
export const setGamestart = (gamestart) => ({
    type: SET_GAMESTART,
    payload: gamestart
});

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORD:
            return {
                ...state,
                word: action.payload
            };
        case SET_SUBMITTEDANSWERS:
            return {
                ...state,
                submittedAnswers: [...state.submittedAnswers, action.payload],
                score: state.score + 1
            };
        case SET_SCORE:
            return {
                ...state,
                score: action.payload
            };
        case SET_TIME:
            return {
                ...state,
                time: action.payload
            };
        case SET_HIGHSCORE:
            return {
                ...state,
                highscore: action.payload
            };
        case SET_GAMEOVER:
            return {
                ...state,
                gameover: action.payload
            };
        case SET_GAMESTART:
            return {
                ...state,
                gamestart: action.payload
            };
        default:
            return state;
    }

};