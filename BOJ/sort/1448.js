// 출력: 첫째 줄에 삼각형 세 변의 길이의 합의 최댓값을 출력한다. 만약 삼각형을 만들 수 없으면 -1을 출력한다.

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
// 오름차순 정렬
arr.sort((a, b) => a - b);

let result = -1;
for (let i = 0; i < n - 2; i++) {
  // 삼각형 둘레의 최댓값을 구하는 것이므로 인접한 3개만 확인
  let a = arr[i];
  let b = arr[i + 1];
  let c = arr[i + 2];
  if (c < a + b) {
    // 삼각형의 조건(가장 긴변의 길이는 나머지 두변의 길이의 합보다 작음) 에 부합한다면
    result = a + b + c;
  }
}

console.log(result);

// // readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
// let fs = require("fs");
// // let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let n = Number(input[0]);
// let data = [];

// for (let i = 1; i <= n; i++) {
//   data.push(Number(input[i]));
// }
// data.sort((a, b) => a - b);

// let max = 0;
// let second = 0;
// let third = 0;
// let i = 1;
// let result = 0;
// while (true) {
//   max = data[data.length - i];
//   second = data[data.length - (i + 1)];
//   third = data[data.length - (i + 2)];
//   if (max < second + third) {
//       result = max+second+third;
//       break;
//   }
//   if(i>=data.length){
//       result = -1;
//       break;
//   }
//   i++;
// }

// console.log(result);
