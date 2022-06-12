// 내가 작성한 솔루션
function solution(left, right) {
  let list ={}
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if(i%j===0){
        list[i] = list[i] ? list[i]+=1:1
      }
    }
    
  }
  var answer = 0;
  
  for (const key in list) {
    if(list[key]%2===0){
      answer+=Number(key)
    }
    else{
      answer-=Number(key)
    }
  }
  return answer;
}

solution(5,14)
// 최다 득표 솔루션

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 개수는 홀수인 점을 이용
      if (Number.isInteger(Math.sqrt(i))) {
          answer -= i;
      } else {
          answer += i;
      }
  }
  return answer;
}
