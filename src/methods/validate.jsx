//takes two arguments
//returns an array of strings

export default function validate(value, gameword){
    //we are going to store errors for all parts
        //in a single array
        const lettersArray = value.toLowerCase().split("");
        const gamewordArray = gameword.toLowerCase().split("");
        const errors = [];

        //check length of input is less than or equal to the gameword
        if (lettersArray.length > gamewordArray.length){
            errors.push("Word has too many letters");
        }
        //check there is an input
        if (lettersArray.length === 0){
            errors.push("You need to enter a word");
        }        
        //check that input letters are in the gameword
        for (let x = 0; x < lettersArray.length; x++){
            const letterValue = lettersArray[x];
            if(!gamewordArray.includes(letterValue)){
                
                errors.push(`${letterValue} is not acceptable`);
            } else{

                  //check for multiple letter uses
                let patt = new RegExp(`${lettersArray[x]}`, "g");
                let gamewordLetterCount = gameword.toLowerCase().match(patt).length;
                let valueLetterCount = value.toLowerCase().match(patt).length;

                if (valueLetterCount > gamewordLetterCount){
                    errors.push(`You have too many ${lettersArray[x]}`);
                    break;
                }

            }
        }

        console.log(errors);
        return errors;
}