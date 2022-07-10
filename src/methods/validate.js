//takes two arguments
//returns an array of strings

export default function validate(value, gameword, answers){
        const lettersArray = value.toLowerCase().split("");
        const gamewordArray = gameword.toLowerCase().split("");
        const errors = [];
        const match = answers.find(answer => answer === value);
        if(match === value){
            errors.push(`"${value.toUpperCase()}" Already Exists`)
        }
        //check there is an input
        if (lettersArray.length === 0){
            errors.push("You need to enter a word");
        }
        //check length of input
        if (lettersArray.length > gamewordArray.length){
            errors.push("Word has too many letters");
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