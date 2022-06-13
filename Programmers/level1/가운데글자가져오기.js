function solution(s) {
  var answer = "";
  let halfIndex = Math.floor(s.length / 2);
  answer = s.length % 2 === 0? s[halfIndex - 1] + s[halfIndex]:s[halfIndex]
  return answer;
}

solution("abcd");
