let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let time = input[0].split(" ");
let timer = Number(input[1]);
let hour = Number(time[0]);
let minute = Number(time[1]);

hour = Math.floor((hour * 60 + minute + timer) / 60);
minute = (hour * 60 + minute + timer) % 60;

console.log(hour >= 24 ? hour - 24 : hour, minute);
