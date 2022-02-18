// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let data = input.map((e) => Number(e)).map((e) => e % 42);
let data2 = input.reduce((a, c) => {
  a.push(Number(c) % 42);
  return a;
}, []);
// console.log(data);
// console.log(data2);
// data = new Set(data)


const sss = [1,2,3,4,5];

sss.reduce((a,c)=>{
    console.log(c)
},0)