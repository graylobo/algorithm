function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}
let fs = require("fs");
//   let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let query = input[3].split(" ").map(Number);

function check(arr, val) {
  let left = lowerBound(arr, val, 0, arr.length);
  let right = upperBound(arr, val, 0, arr.length);

  return right - left;
}

arr.sort((a, b) => a - b);
let answer = "";
for (let i = 0; i < m; i++) {
  if (check(arr, query[i]) !== 0) {
    answer += "1 ";
  } else {
    answer += "0 ";
  }
}

console.log(answer);
