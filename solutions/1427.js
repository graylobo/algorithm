let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let n = input[0];
let cnt = Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = '';
// 내림차순이므로 9부터 0까지 
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + '';
  }
}
console.log(answer);