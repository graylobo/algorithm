function solution(x) {
  let sum = String(x).split("").reduce((acc,cur)=>+acc+ +cur);
  return x%sum===0
}


console.log(solution(18))