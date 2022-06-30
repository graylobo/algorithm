function solution(n) {
  var answer = +String(n).split("").sort((a,b)=>b-a).join("")

  return answer;
}

console.log(solution(118372))