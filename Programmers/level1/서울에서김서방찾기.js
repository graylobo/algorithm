const some = ["hi","jo"]

let test = some.findIndex((e)=>e==="jo")
console.log(test)

function solution(seoul) {
  let idx = seoul.findIndex((e)=>e==="Kim")
  var answer = `김서방은 ${idx}에 있다`;
  return answer;
}