// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0].split(" ")[0]); // 지방의 수(N)
let arr = input[1].split(" ").map(Number); // 각 지방의 예산 요청
let m = Number(input[2]); // 총 예산(M)

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

// 이진 탐색 수행(반복적)
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)

  // 배정된 예산의 총액 계산
  let total = 0;
  for (x of arr) {
    // 각 지방에서 요청한 예산을 하나씩 확인하며 예산배정
    // 요청한 예산이 상한액보다 적을 경우 요청한 예산액을 그대로 사용하면 되므로 Math.max가 아닌 min 사용
    // 만약 max로 하면 상한액 기준으로 total값이 누적이 돼서 요청한 총 예산이 주어진 예산보다 적음에도 불구하고
    // 주어진 예산보다 높게 나오게 된다
    total += Math.min(mid, x);
  }

  if (total <= m) {
    // 총 예산이 충분하다면, 상한액을 증가시키기
    result = mid;
    start = mid + 1;
  } else {
    // 총 예산이 부족하다면, 상한액을 감소시키기
    end = mid - 1;
  }
}
console.log(result);

// 내 풀이 (정답은 맞게나오는데 백준에서는 오답 처리나옴)
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");
// // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0]);
// let m = input[1].split(" ").map(Number);
// let o = Number(input[2]);

// let sum = m.reduce((a, c) => a + c);
// let biggest = m.reduce((a, c) => {
//   if (a > c) {
//     return a;
//   } else {
//     return c;
//   }
// });
// let answer = "";
// if (sum < o) {
//     console.log(biggest)
// } else {
//   let average = parseInt(o / n);
//   let filter = m.filter((e) => e < average);
//   let sum = filter.reduce((a, c) => a + c);
//   let count = m.reduce((a, c) => {
//     if (c > average) {
//       return ++a;
//     }
//     return a;
//   }, 0);
//   let 차액 = o - sum;
//   console.log(parseInt(차액/count));
// }
