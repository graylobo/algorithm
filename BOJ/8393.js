// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// let input = fs.readFileSync('input.txt').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);
let sum = 0;
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" "));
}
arr.sort((a, b) => Number(a[0] - Number(b[0])));
let answer = "";
arr.forEach((e) => (answer += e[0] + " " + e[1] + "\n"));
console.log(answer);
