const arr =[5, 9, 7, 10]
function solution(arr, divisor) {
  var answer = [];
  for (const iterator of arr) {
    if(iterator%divisor===0){
      answer.push(iterator)
    }
  }
  if(answer.length===0){
    answer.push(-1)
  }
  answer= answer.sort((a,b)=>a-b)
  console.log(answer)
  return answer;
}

solution(arr,5)