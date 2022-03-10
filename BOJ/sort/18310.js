let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

// 가운데(median) 값을 출력
console.log(arr[parseInt((n - 1) / 2)]);


// 정답은 나오지만 메모리 초과 됨
// data.sort((a, b) => a - b);

// let sumResult = [];
// for (let i = 0; i < n; i++) {
//   let sumData = [];

//   data.reduce((a, c) => {
//     sumData.push(Math.abs(a - c));
//     return a;
//   }, data[i]);
//   sumResult.push(sumData);
// }

// let rowIndex = 0;
// let minValue = 999999999999;

// for (let i = 0; i < sumResult.length - 1; i++) {
//   let aSum = sumResult[i].reduce((a, c) => a + c);
//   let bSum = sumResult[i + 1].reduce((a, c) => a + c);
//   let rowValue = Math.min(aSum, bSum);

//   if (rowValue < minValue) {
//     minValue = rowValue;

//     if (aSum < bSum) {
//       rowIndex = i;
//     } else {
//       rowIndex = i + 1;
//     }
//   }
// }

// console.log(data[rowIndex]);
