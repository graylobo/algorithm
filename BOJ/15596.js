// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split("\n");

function f(n) {
  let str = n + "";
  if (str.length <= 2) {
    return true;
  } else {
    // 두 항의 차이 계산 (ex: 998 -> 9-9)
    let diff = Number(str[1]) - Number(str[0]);
    // 등차 수열인지 확인
    for (let i = 1; i < str.length - 1; i++) {
        // 앞서 구한 공차값(0)을 다음 두항(9,8)의 차이(-1)와 비교했을때 같지 않다면 등차수열이 아님
      if (Number(str[i + 1]) - Number(str[i]) != diff) {
        return false;
      }
    }
  }
  return true;
}

let n = Number(input[0]);
let result = 0;

// 1부터 n까지 한수의 개수 계산 
for (let i = 1; i <= n; i++) {
  if (f(i)) {
    result += 1;
  }
}
console.log(result);
