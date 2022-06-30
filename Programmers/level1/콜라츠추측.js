// 내가 작성한 솔루션
function solution(num) {
  var answer = 0;
  let count = 0;
  while (num !== 1) {
    if (count >500){
      return -1;
    }
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num* 3 + 1;
    }
    count++;
  }
  return answer = count;
}
// 최다 득표 솔루션
function solution(num) {
  var answer = 0;
  while(num !=1 && answer !=500){
      num%2==0 ? num = num/2 : num = num*3 +1;
  answer++;
}
  return num == 1 ? answer : -1;
}
console.log(solution(626331));

