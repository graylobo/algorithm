function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if(arr.length<1)return[-1];
  return arr;
  
}

console.log(solution([4, 3, 2,-5, 5, 10, 9, 8, 7, 3, 1, -3]));
