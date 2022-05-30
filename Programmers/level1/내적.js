function solution(a, b) {
  var answer = a.reduce((acc, cur, i) => acc + cur * b[i], 0);
  return answer;
}
