const string = process.argv[2];

const array = string.split(",");

const numbers = [];
for(i=0; i<array.length; i++){
    const stringNum = array[i];
    const convertToNum = parseInt(stringNum, 10);
    numbers.push(convertToNum);
}

let sum = 0;
for(i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log("Sum is equal to "+sum);