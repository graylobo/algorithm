let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);
let answer = '';

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    answer += ' ';
  }
  for (let j = 0; j < i; j++) {
    answer += '*';
  }
  answer += '\n';
}
console.log(answer);