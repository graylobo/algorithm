let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  let c = Number(input[i + 1].split(" ")[0]);
  let s = Number(input[i + 1].split(" ")[1]);
  arr.push([c, s, i]);
}
arr.sort((a, b) => a[1] - b[1]); // 크기를 기준으로 오름차순 정렬

let summary = 0; // 전체 누적 합
let colorSummary = Array(200001).fill(0); // 색상별 누적 합
let result = Array(n).fill(0); // 공의 등장 순서(i)별 최종 결과

let start = 0;
while (start < n) {
  // 크기가 같은 공의 마지막 인덱스 찾기
  let end = start;
  while (end < n && arr[start][1] == arr[end][1]) end += 1;
  // 이전 단계에서 구한 자기보다 작은 공들의 크기 합 - 같은 색상인 공들의 크기 합
  // 크기가 같은 공들 수만큼 반복
  for (let i = start; i < end; i++) {
    result[arr[i][2]] = summary - colorSummary[arr[i][0]];
  }
  // 합계 값 갱신 (크기가 같은 공의 합계를 전부구하기 위해 크기가 같은 공들 수만큼 반복)
  // 여기서 구한 값은 다음단계(자신보다 큰공)의 공에 할당된다
  for (let i = start; i < end; i++) {
    colorSummary[arr[i][0]] += arr[i][1]; // 크기가 같으면서 같은 색상인 공들의 크기 합
    summary += arr[i][1]; // 크기가 같은 공들의 크기 합
  }
  start = end; // end는 크기가 같은 공의 마지막의 다음 인덱스 이므로 start는 현재 공보다 큰 인덱스 값으로 시작한다
}
console.log(result.join("\n"));

// 시도1 (정답은 맞으나 시간초과)
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");
// // let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0]);
// let data = [];

// for (let i = 1; i <= n; i++) {
//   data.push(input[i].split(" ").map(Number));
// }
// data.sort((a,b)=>a[1]-b[1])

// console.log(data);

// let 점수합 = [];
// let answer = "";
// for (let i = 0; i < data.length; i++) {
//   let 기준색 = data[i][0];
//   let 기준값 = data[i][1];
//   let 총합 = 0;
//   for (let j = 0; j < data.length; j++) {
//     if (j === i) continue;
//     if (data[j][1] < 기준값 && data[j][0] !== 기준색) {
//       총합 += data[j][1];
//     }
//   }
//   answer += 총합 + "\r";
// }

// for (let i = 1; i <= n; i++) {
//   data.push(input[i].split(" ").map(Number));
// }

// let 점수합 = [];
// let answer = "";
// for (let i = 0; i < data.length; i++) {
//   let 기준색 = data[i][0];
//   let 기준값 = data[i][1];
//   let 총합 = 0;
//   for (let j = 0; j < data.length; j++) {
//     if (j === i) continue;
//     if (data[j][1] < 기준값 && data[j][0] !== 기준색) {
//       총합 += data[j][1];
//     }
//   }
//   answer += 총합 + "\r";
// }
// console.log(answer);
