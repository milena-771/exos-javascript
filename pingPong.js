const string = process.argv[2];
console.log(string);

const pingsAndPongs = string.split(",");
console.log(pingsAndPongs);

let pings = 0;
let pongs = 0;

for (i=0; i <= pingsAndPongs.length - 1; i++){
    if(pingsAndPongs[i] == "ping"){
        pings++;
    }else{
        pongs++;
    }
}

console.log("Match result: ping vs pong: "+pings+" - "+pongs);



