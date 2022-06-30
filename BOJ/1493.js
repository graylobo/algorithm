let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");
// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
// 즉 큐브로 채울 박스의 크기가 4*4*8 이라면 큐브의 크기가 4를 넘어가면 안되므로 (넘어가면 큐브가 박스보다 커지므로 채우지못함)
// 4를 만들수있는 가장 근접한 2^를 찾는다 (가장근접한 2^ 의 크기 = 박스를 채울수있는 큐브중 가장 큰 크기)
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

const [length, width, height] = input[0].split(" ").map(Number);
let cubes = Array(20).fill(0); // 큐브의 종류는 최대 20개
let n = Number(input[1]); // 가지고있는 큐브종류 개수
for (let i = 2; i <= n + 1; i++) {
  // index[2] 부터 큐브의 종류와 개수가 들어오므로
  let 큐브종류 = Number(input[i].split(" ")[0]);
  let 큐브개수 = Number(input[i].split(" ")[1]);
  cubes[큐브종류] = 큐브개수;
}

let size = Math.min(nearestSquare(length), nearestSquare(width),nearestSquare(height));
let 사용한전체큐브개수 = 0;
let used = 0;

// 가장 큰 큐브사이즈부터 작은 큐브까지 반복
for (let i = size; i >= 0; i--) {
  // 이전에 사용한 한단계 큰 사이즈의 큐브를 현재 사이즈의 큐브 개수로 변환
  // 즉 이전에 4*4*4 사이즈의 큐브 1개를 사용했다면 현재 2*2*2 기준으로는 8개를 사용한것임
  used *= 8;
  cur = 2 ** i; // 현재의 정육면체 큐브의 길이
  // 현재 큐브크기 기준일때 박스에 채워넣을수있는 개수 - 현재 큐브크기 기준으로 박스에 이미 채워진 개수
  // = 현재 큐브크기 기준으로 박스에 넣어야할 남은 개수
  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;
  let 사용한큐브개수 = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수
  사용한전체큐브개수 += 사용한큐브개수;
  used += 사용한큐브개수;
}
if (used == length * width * height) console.log(사용한전체큐브개수);
// 박스를 가득 채운 경우
else console.log(-1); // 박스를 가득 채우지 못한 경우

// let input = require("fs").readFileSync("input.txt");
// input = input.toString().split("\n");

// const [length, width, height] = input[0].split(" ").map(Number);
// const n = Number(input[1]);
// let cubes = Array(20).fill(0);

// for (let i = 2; i < input.length; i++) {
//   const [큐브의종류, 큐브의개수] = input[i].split(" ").map(Number);
//   cubes[큐브의종류] = 큐브의개수;
// }

// // 인자로 들어온 값과 가장 근접한 제곱근값
// function nearlestSquare(x) {
//   let i = 1;
//   while (2 ** i <= x) {
//     i++;
//   }
//   return i - 1;
// }

// function requireCubeCount(length, width, height, currentCubeSize) {
//   let squared =
//     parseInt(length / currentCubeSize) *
//     parseInt(height / currentCubeSize) *
//     parseInt(width / currentCubeSize);
//   return squared;
// }

// let size = Math.min(nearlestSquare(length), nearlestSquare(width),nearlestSquare(height));

// let result = 0;
// let used = 0;

// for (let i = size; i >= 0; i--) {
//   used *= 8;
//   let currentCubeSize = 2 ** i;
//   let require = requireCubeCount(length, width, height, currentCubeSize) - used;
//   require = Math.min(require, cubes[i]);
//   result += require;
//   used += require;
// }

// console.log(result);
