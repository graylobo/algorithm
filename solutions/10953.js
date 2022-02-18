let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let i = 0;
while (i < input.length - 1) {
  let data = input[i].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);

  console.log(a + b);
  i++;
}

const input = require("fs").readFileSync("./input.txt").toString().split("\n");
let i = 0;
while (i < input.length - 1) {
  let nums = input[i].split(" ").map((x) => Number(x));

  a = nums[0];
  b = nums[1];

  console.log(a + b);
  i++;
}
