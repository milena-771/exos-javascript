const string = process.argv[2];

const array = string.split(",");

const numbers = [];

for (let i = 0; i < array.length; i++){
    const candidate = array[i];
    const convertToNum = parseInt(candidate,10);
    numbers.push(convertToNum);
}
//console.log(numbers);

let count = 0;
let tmp = 0;
let occurencySuite = 0;
let occurencyRandom = 0;

for (let i = 0; i<numbers.length; i++){
    tmp = numbers[i];

    for(let j = 1; j<numbers.length; j++){
        if (tmp == numbers[j]){
            tmp = numbers[j];
            count++;
            if(tmp == numbers[j-1] && tmp == numbers[j++]){
                occurencySuite = tmp;
                break;
            }else if(count >=3){
                occurencyRandom = tmp;
            }
        }
    }
}

if(occurencySuite != 0){
    console.log(`Le nombre ${occurencySuite} apparaît 3 fois de suite`);
} else if (occurencyRandom != 0){
    console.log(`Le nombre ${occurencyRandom} apparaît 3 fois `);
}else{
    console.log(`Aucun nombre n'apparaît 3 fois`);
}