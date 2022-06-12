// 내가 작성한 솔루션
const sizes =[[60, 50], [30, 70], [60, 30], [80, 40]]

function solution(sizes) {
  var answer = 0;
  const max = sizes.reduce((acc,cur)=>{
   if(Math.max(acc[0],acc[1]) < Math.max(cur[0],cur[1])){
     return cur
   }
   else{
     return acc;
   }
  })
  const maxVal = Math.max(max[0],max[1])
  const minVal = Math.min(max[0],max[1])
  let temp= []
  for (let i = 0; i < sizes.length; i++) {
    if(!(Math.min(sizes[i][0],sizes[i][1])<=minVal)){
      temp.push(Math.min(sizes[i][0],sizes[i][1]))
    }
  }
  if(temp.length===0){
    answer=max[0]*max[1]
  }
  else{
    let tempVal = temp.reduce((acc,cur)=>acc<cur?cur:acc)
    answer = maxVal*tempVal
  }
  console.log(answer)
  return answer;
}
solution(sizes)


// 최다 득표 솔루션
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}