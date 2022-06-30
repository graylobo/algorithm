function solution(s) {
  var answer = s.split(" ").map((e)=>{
    let newWord ="";
    for (let i = 0; i < e.length; i++) {
      newWord += i%2===0 ? e[i].toUpperCase(): e[i].toLowerCase()
    }
    return newWord;
  }).join(" ");

  return answer;
}


console.log(solution("try hello world"))

