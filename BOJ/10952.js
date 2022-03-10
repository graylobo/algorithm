let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");


let i = 0;
while (true) {
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  
  if (a === 0 && b === 0) {
    break;
  }
    console.log(a + b);
  i++;
}