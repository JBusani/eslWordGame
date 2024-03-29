import axios from 'axios';

const options = {
  method: 'GET',
  url: `https://wordsapiv1.p.rapidapi.com/words/`,
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_URL
  }
};



 //use the above functions to create a call to check if a word is valid
 export const checkWord = async (word) => {
    try {
    	const response = await axios.request({...options, url: `https://wordsapiv1.p.rapidapi.com/words/${word}`});
    	console.log('This is the response', response.data);
        
    } 
    catch (error) {
            console.log(error.response.data.success);
            console.log(error.response.data.message);
            return error.response.data;
        }
    };