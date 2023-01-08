const sentence = process.argv[2];

const chars = [];

//1- Lire la chaîne pour extraire les caractères un à un et les stocker dans un tableau
for(let i = 0; i<sentence.length;i++){
    let candidate = sentence[i];
    chars.push(candidate);
}

console.log(chars);

//2- Ne plus ajouter les caractères déjà rencontrés
/*const uniqueChars = [];
let occurencies = [];
let unique = "";
let memoire = "";
let count = 0;

for (let i = 0; i<sentence.length;i++){
    let actual = sentence[i];
    count++;
   for(let j = i+1; j<=sentence.length;j++){
        let next = sentence[j];
        if(actual != next){
            unique = actual;
            count = 0;
        }else{
            occurencies.push(actual);
            if(count == 1){
                uniqueChars.push(actual);
            }
            unique = "";
            count++;
            break;
        }
        count = 0;
    }
    for(let k = 0; k<=occurencies.length; k++){
        let occurency = occurencies[k];
        if(unique == occurency){
            memoire = "";
            break;
        }else{
            memoire = unique;
        }
    }
    
    if(memoire != ""){
        uniqueChars.push(memoire);
        
    }  


}   
console.log(uniqueChars);*/

const uniqueChars = [];
let occurency = "";
let unique = "";

for(i = 0;i<sentence.length;i++){
    let actual = sentence[i];
    for(j=i+1; j<=sentence.length;j++){
        let next = sentence[j];
        if(actual == next){
            occurency = actual;
            break;
        }else{
            unique = actual;
        }
    }
    if(unique != occurency && unique != ""){
        uniqueChars.push(unique);
    }
    unique = "";

    if(occurency != ""){
        let firstPop = "";
        for(k=0; k<uniqueChars.length;k++){
            if(occurency != uniqueChars[k]){
                firstPop = occurency;
            }else{
                break;
            }
        }
        if(firstPop != ""){
            uniqueChars.push(firstPop);
        }
    }
 
}
console.log(uniqueChars);

