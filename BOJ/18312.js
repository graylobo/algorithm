// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split(" ");

let [n, k] = input.map(Number);

let result = 0;

for (let i = 0; i <= n; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  for (let j = 0; j < 60; j++) {
    if (j < 10) {
      j = "0" + j;
    }
    for (let z = 0; z < 60; z++) {
      if (z < 10) {
        z = "0" + z;
      }
      let time = i + "" + j + "" + z;
      if (time.includes(k)) {
        result++;
      }
    }
  }
}

console.log(result);
