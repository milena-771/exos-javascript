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
let evens = [];
let odds = [];
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

if (evensBis.length != 0 && oddsBis.length !=0){
    console.log(`Nombres pairs : ${evensBis} (${evensBis.length}, le plus grand est ${maxEven})`);
    console.log(`Nombres impairs : ${oddsBis} (${oddsBis.length}, le plus grand est ${maxOdd})`);   
} else if (evensBis.length == 0){
    console.log(`Nombres pairs : ${evensBis} (${evensBis.length}, pas de plus grand)`);
    console.log(`Nombres impairs : ${oddsBis} (${oddsBis.length}, le plus grand est ${maxOdd})`);
} else if (oddsBis.length == 0){
    console.log(`Nombres pairs : ${evensBis} (${evensBis.length}, le plus grand est ${maxEven})`);
    console.log(`Nombres impairs : ${oddsBis} (${oddsBis.length}, pas de plus grand)`);
}
