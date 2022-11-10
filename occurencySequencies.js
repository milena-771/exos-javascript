const string = process.argv[2];

const array = string.split(",");

const numbers = [];

for (let i = 0; i < array.length; i++){
    const candidate = array[i];
    const convertToNum = parseInt(candidate,10);
    numbers.push(convertToNum);
}

let count = 0;
let occurencySequence = 0;
let occurencyRandom = 0;


for(let i =0; i<numbers.length; i++){
    let actual = numbers[i];
    for(let j = 1; j<numbers.length;j++){
        let next = numbers[j];
        if (actual == next){
            count++;
        } 
        if (count === 3){
            if(i-2 == 0){
                occurencySequence = actual;
                break;
            }else{
                occurencyRandom = actual;
                break;
            }
            
        }    
    }
    
}

if(occurencySequence != 0){
    console.log(`Le nombre ${occurencySequence} apparaît 3 fois de suite`);
}else if(occurencyRandom !=0){
    console.log(`Le nombre ${occurencyRandom} apparaît 3 fois`);
}else{
    console.log(`Aucun nombre n'apparaît 3 fois`);
}