const inputs = process.argv[2];

const array = inputs.split(",");

const numbers = [];

for(let i = 0; i<array.length; i++){
    const candidate = array[i];
    const num = parseInt(candidate);
    numbers.push(num);
}


for(let i = 0; i<numbers.length;i++){
    console.log(numbers);
    for(let j = 0; j<numbers.length;j++){
        if(numbers[j]>numbers[j+1]){
            let tmp = numbers[j+1];
            numbers[j+1] = numbers[j];
            numbers[j] = tmp;
            console.log(numbers);
        }
    }
}
console.log(numbers);