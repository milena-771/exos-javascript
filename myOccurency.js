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
let suite = true;
let random = false;

for (let i = 0; i<numbers.length; i++){
    tmp = numbers[i];
    count++;

    for(let j = 1; j<numbers.length; j++){
        if (tmp == numbers[j]){
            tmp = numbers[j];
            count++;
            if(tmp == numbers[j-1] && tmp == numbers[j++]){
                suite == true;
                break;
            }
        }
    }
    if (count >=3){
        random == true;
        break;
    }else{
        count = 0;
    }
}

if(random == true){
    console.log(`Le nombre ${tmp} apparaît 3 fois`);
} else if (suite == true){
    console.log(`Le nombre ${tmp} apparaît 3 fois de suite`);
}else{
    console.log(`Aucun nombre n'apparaît 3 fois`);
}