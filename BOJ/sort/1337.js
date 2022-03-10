let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

// 오름차순 정렬
arr.sort((a, b) => a - b);

let result = 0; // 연속적인 수열 길이의 최댓값
for (let i = 0; i < n; i++) {
  let slicedArr = arr.slice(i, i + 5);
  let cnt = 0; // 현재 수부터의 연속적인 수열 길이
  for (let j = 0; j < 5; j++) {
    // 존재하는지 확인
    if (slicedArr.includes(arr[i] + j)) {
      cnt += 1;
    }
    result = Math.max(result, cnt);
  }
}

// 올바른 배열이 되기위한 연속적인 원소의 개수 - 주어진 인풋값에서 연속적인 원소의 개수
// = 올바른 배열이 되기위해 필요한 원소의 개수
console.log(5 - result);
