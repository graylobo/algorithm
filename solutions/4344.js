// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCount = Number(input[0]);

for (let i = 1; i <= testCount; i++) {
  let arr = input[i].split(" ").map(Number);
  let studentCount = arr[0];
  let studentScoreArr = [];
  for (let j = 1; j <= studentCount; j++) {
    studentScoreArr.push(arr[j]);
  }
  let average = studentScoreArr.reduce((a, c) => a + c) / studentCount;
  let overScoreStudentCount = studentScoreArr.filter((e) => e > average).length;
  let overScoreStudentCountRate = (
    (overScoreStudentCount / studentCount) *
    100
  ).toFixed(3);
  console.log(`${overScoreStudentCountRate}%`);
}
