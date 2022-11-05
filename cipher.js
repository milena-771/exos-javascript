const string = process.argv[2];
const direction = process.argv[3];
const numString = process.argv[4];

const distance = parseInt(numString,10);

const words = [];

for (let i = 0; i<string.length; i++){
    let candidate = string[i];
    words.push(candidate);
}

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let letter = "";
let newWord = "";
let tmp = 0;
let k = 0;

for (let i = 0; i<words.length; i++){
    tmp = words[i];
    for (let j = 0; j<alphabet.length; j++){
        if(tmp == alphabet[j]){
            if(direction == "RIGHT"){
                if(j+distance<=25){
                    letter = alphabet[j+distance];
                    newWord += letter;
                }else{
                    k = (j+distance)-25;
                    letter = alphabet[k];
                    newWord += letter;
                }
            }else{
                if(j-distance>=0){
                    letter = alphabet[j-distance];
                    newWord += letter;
                }else{
                    k = 26 + (j-distance);
                    letter = alphabet[k];
                    newWord += letter
                }
            }
        }else if (tmp == " "){
            letter = tmp;
            newWord += letter;
            break;
        }
    }

}
console.log(newWord);


    





