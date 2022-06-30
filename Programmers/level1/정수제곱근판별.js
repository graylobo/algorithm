function solution(n) {
  let root = Math.sqrt(n);
  var answer = Number.isInteger(root) ? (root+1)*(root+1) :-1;
  return answer;
}

console.log(solution(121))
