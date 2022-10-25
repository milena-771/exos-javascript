const input = process.argv[2];

const array = input.split(",");

const numbers = [];
for (i=0; i < array.length; i++){
    const candidate = array[i];
    const convertToNum = parseInt(candidate,10);
    numbers.push(convertToNum);
}
//console.log(numbers);

let min=0;
let max= numbers.length -1;
while (min<max){
    let tmp = numbers[min];
    numbers[min] = numbers[max];
    numbers[max] = tmp;
    min++;
    max--; 
}
console.log(numbers);