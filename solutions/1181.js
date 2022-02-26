let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\r\n");

let count = Number(input[0]);
let arr = [];

for (let i = 1; i <= count; i++) {
  arr.push(input[i]);
}
arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
let answer = "";
[...new Set(arr)].forEach((e) => {
  answer += e + "\r";
});
console.log(answer);
