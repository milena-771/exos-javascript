const input = process.argv[2];

const line = input.split(",");


let i = line.length;
let exited = "";

while(i>0){
    //console.log(`Actual state : ${line}`);

    exited = line[0];
    for(let j = 0; j<i; j++){
        line[j]=line[j+1];
    }
    line[i-1]= " '' ";
    i--;
    
    console.log(`Last exited : ${exited}`);
    console.log(`New state : ${line}`);
}