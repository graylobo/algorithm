
// 내가 작성한 솔루션
function solution(s, n) {
  var answer = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].charCodeAt();
    let offset = 0;

    if(s[i]===" "){
      answer += " ";
      continue;
    }
    else if(/[a-z]/.test(s[i])){
      if(charCode+n>122){
         offset = charCode+n -122;
         answer += String.fromCharCode(97+offset-1)
      }
      else{
        answer +=  String.fromCharCode(charCode+n)
      }
    }
    else{
      if(charCode+n>90){
        offset = charCode+n -90;
        answer += String.fromCharCode(65+offset -1)
     }
     else{
       answer +=  String.fromCharCode(charCode+n)
     }
    }
  }
  return answer;
}
// 최다 득표 솔루션
function solution2(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

