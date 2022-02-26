// let input = require('fs').readFileSync('input.txt').toString().split('\n');
// let n = Number(input[0]);
// let data = input[1].split(' ').map(Number);
// data.sort((a, b) => a - b); // 오름차순 정렬
// let 측정할무게 = 1;
// for (무게추 of data) {
// // 잴 수 없는 무게를 찾았을 때
// if (측정할무게 < 무게추) break; // 현재 측정할무게보다 무게추무게가 더크면 잴 수 없으므로 현재 측정할 무게를 잴수 없음
// 측정할무게 += 무게추;
// }
// // 잴 수 없는 무게 출력
// console.log(target);

let input = require("fs").readFileSync("input.txt").toString().split("\n");
let n = Number(input[0]);
let data = input[1].split(" ").map(Number);

data = data.sort((a, b) => a - b);

let 측정할무게 = 1;
for (const 무게추 of data) {
  if (측정할무게 >= 무게추) {   
    측정할무게 += 무게추;
  } else {
    break;
  }
}


console.log(측정할무게);
