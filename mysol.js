// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// let input = fs.readFileSync('input.txt').toString().split('\n');

let x = parseInt(input[0].split(" ")[0]); // 게임 횟수(X)
let y = parseInt(input[0].split(" ")[1]); // 이긴 횟수(Y)

let start = 1;
let end = 10 ** 9;

let ratio = parseInt((y * 100) / x);

let result = -1;

while(start<=end){
    
}
