
const dartResult = "1D2S#10S";

function solution(dartResult) {
  var answer = 0;
  let result = [0, 0, 0];
  let index = -1;
  for (let i = 0; i < dartResult.length; i++) {
    if (Number.isInteger(dartResult[i]*1)) {
      index++; // 숫자인경우에만 다음 result index로 이동
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        result[index] += 10;
        i++;
      } else {
        result[index] += Number(dartResult[i]);
      }
    } else {
      switch (dartResult[i]) {
        case "S":
          result[index] **=  1;
          break;
        case "D":
          result[index] **=  2;
          break;
        case "T":
          result[index] **=  3;
          break;
        case "#":
          result[index] *= -1;
          break;
        case "*":
          if (index === 0) {
            result[index] *= 2;
          } else {
            result[index - 1] *= 2;
            result[index] *= 2;
          }
          break;
      }
    }
  }
  answer = result.reduce((a,b)=>a+b)
  return answer;
}

console.log(solution(dartResult))

