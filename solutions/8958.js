let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\r\n");

let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let arr = input[i];
  let acc = 0;
  let score = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "O") {
      acc++;
      score += acc;
    } else {
      acc = 0;
    }
  }
  console.log(score);
}
