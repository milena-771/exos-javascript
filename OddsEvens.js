const string = process.argv[2];

const array = string.split(",");

const numbers = [];
for(let i=0; i<array.length; i++){
    const candidate = array[i];
    const oneNum = parseInt(candidate,10);
    numbers.push(oneNum);
};

//Tiroir 1
let countEven = 0;
let countOdd = 0;
for(let i = 0; i<numbers.length;i++){
    if (numbers[i] % 2 == 0){
        countEven++;
    }else{
        countOdd++;
    }
};
console.log(`Nombres pairs: ${countEven}, nombres impairs: ${countOdd}`);

//Tiroir 2
const evens = [];
const odds = [];
let tmp = 0;

for (let i =0; i<numbers.length; i++){
    tmp = numbers[i];
    if(tmp % 2 == 0){
        evens.push(tmp);
    }else{
        odds.push(tmp);
    }
}
console.log(`Nombres pairs: ${evens} (${evens.length}), nombres impairs: ${odds} (${odds.length})`);

//Tiroir 3
let evensBis = [];
let oddsBis = [];
let maxEven = 0;
let maxOdd = 0;

for (let i = 0; i<numbers.length; i++){
    tmp = numbers[i];
    if(tmp % 2 == 0){
        evensBis.push(tmp);
        if (tmp > maxEven){
            maxEven = tmp;
        }
    }else{
        oddsBis.push(tmp);
        if(tmp > maxOdd){
            maxOdd = tmp;
        }
    }
}


const output = `Evens ${evensBis} (${evensBis.length}, max = ${maxEven}), 
    Odds ${oddsBis} (${oddsBis.length}, max = ${maxOdd}) `;
console.log(output);
