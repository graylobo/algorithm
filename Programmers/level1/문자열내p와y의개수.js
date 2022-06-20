const s ="pPoooyYy"

// 내가 작성한 솔루션
function solution(s){
  var answer = true;
  let res = [0,0]
  for (let i = 0; i < s.length; i++) {
    if(s[i].toLowerCase()==="p"){
      res[0]++
    }
    else if(s[i].toLowerCase()==="y"){
      res[1]++
    }
  }
  return answer = res[0]===res[1]
}
console.log(solution(s))
// 최다 득표 솔루션
function solution(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}