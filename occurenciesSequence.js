const string = process.argv[2];

const array = string.split(",");

const numbers = [];

for (let i = 0; i < array.length; i++){
    const candidate = array[i];
    const convertToNum = parseInt(candidate,10);
    numbers.push(convertToNum);
}
//console.log(numbers);

let occurencies = 0;
let combo = false;

for(let i=0; i<numbers.length; i++){
    let tmp = 0;
    for(let j=0; j<numbers.length; j++){
        if(numbers[i] == numbers[j] && numbers[j] == numbers[j-1] && numbers[j] == numbers[j+1]){
            tmp++;
            combo = true;
        }else if(numbers[i] == numbers[j]){
            tmp++;
        }
        if (tmp >= 3){
            occurencies = numbers[i]
        }
    }
}

if(occurencies != 0 && combo){
    console.log(`le nombre ${occurencies} apparaît 3 fois de suite`); // template literale
}else if (occurencies != 0)
    console.log(`Le nombre ${occurencies} apparaît 3 fois`);
else{
    "Aucun nombre n'apparaît 3 fois";
}



