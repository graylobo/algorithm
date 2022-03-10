let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let subject = input[0];
let score = input[1].split(" ").map(Number);

let max = score.reduce((a, c) => Math.max(a, c));

score =
  score.map((e) => (e / max) * 100).reduce((a, c) => a + c) / score.length;
console.log(score);
