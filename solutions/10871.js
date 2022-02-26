// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let x = Number(input[0].split(" ")[1]);
let answer = "";

let data = input[1].split(" ").map((num) => Number(num));
for (let cur of data) {
  // 그 값이 x보다 작은 경우 출력
  if (cur < x) {
    answer += cur + " ";
  }
}
console.log(answer);
