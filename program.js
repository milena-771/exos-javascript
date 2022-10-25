const string = process.argv[2];//node js not Javascript
console.log(string); //comand line argument as input

const array = string.split(","); //crée un tableau source à partir d'une chaine de caractères en indiquant le séparateur
console.log(array);

const numbers = []; // destination
for(let i =0; i<array.length; i++){ //loop code block
    const candidate = array[i]; //type string
    // objective : convert candidate into a number
    const number = parseInt(candidate, 10);
    numbers.push(number);
}
console.log(numbers);