
// 내가 작성한 솔루션
const d =[2,2,3,3]
const budget= 10
function solution(d, budget) {
  let answer=0;
  d = d.sort((a,b)=>a-b);
  for (const e of d) {
    budget-=e;
    if(budget<0){
      break;
    }
    answer++
  }
  console.log(answer)
  return answer;
}
solution(d,budget)
// 최다 득표 솔루션
