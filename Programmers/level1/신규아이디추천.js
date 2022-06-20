function solution(new_id) {
  var answer = "";
  answer = new_id.toLowerCase();
  answer = answer.replace(/[^\w-._]+/g, "");
  answer = dotMergeMethod(answer);
  answer = removeStartEndDot(answer);
  if (answer === "") {
    answer = "a";
  }
  if (answer.length >=16) {
    answer=answer.substring(0,15);
    if(answer.endsWith('.')){
      let index = answer.lastIndexOf(".");
      answer = answer.substring(0, index);
    }
  }

  if(answer.length <=2 ){
    let lastChar = answer[answer.length-1];
    while(answer.length < 3){
      answer += lastChar;
    }
  }

  return answer;
}

function dotMergeMethod(cha) {
  let dotMerge = [];
  let dot = "";
  for (const c of cha) {
    if(c ==='.'){
      if (dot === c) {
        continue;
      }
    }
    dot = c;
    dotMerge.push(c);
  }
  return dotMerge.join("");
}

function removeStartEndDot(s) {
  if (s.startsWith(".")) {
    s = s.slice(1);
  }
  if (s.endsWith(".")) {
    let index = s.lastIndexOf(".");
    s = s.substring(0, index);
  }

  return s;
}

console.log(solution('asdasjas..dlssk'))