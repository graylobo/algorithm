let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

solution(input);
function solution(input) {
  let n = Number(input[0]);

  let names = [];
  for (let i = 1; i <= n; i++) {
    names.push(input[i]);
  }

  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < n - 1; i++) {
    if (names[i] < names[i + 1]) {
      // 증가한다면
      decreasing = false;
    } else {
      // 감소한다면
      increasing = false;
    }
  }

  if (increasing) console.log("INCREASING");
  else if (decreasing) console.log("DECREASING");
  else console.log("NEITHER");
}
