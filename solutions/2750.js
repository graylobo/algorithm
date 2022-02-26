let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let arr = [];
for (let i = 1; i <= Number(input[0]); i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
