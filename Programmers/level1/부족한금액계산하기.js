function solution(price, money, count) {

  var answer = -1;
  let inc =price;
  for (let i = 0; i < count; i++) {
    money -= price
    price+=inc
  }
  if(money>=0){
    answer=0;
  }
  else{
    answer = Math.abs(money)
  }
  return answer;
}


solution(3,20,4)