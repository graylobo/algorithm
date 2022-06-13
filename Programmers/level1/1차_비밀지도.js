// 내가 작성한 솔루션
const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push((arr1[i] | arr2[i]).toString(2));
  }
  answer = answer.map((e) => e.replace(/1/g, "#").replace(/0/g, " "));
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].length < n) {
      let offset = n - answer[i].length;
      for (let j = 0; j < offset; j++) {
        answer[i] = " " + answer[i];
      }
    }
  }
  return answer;
}

solution(n, arr1, arr2);
// 최다 득표 솔루션
function solution(n, arr1, arr2) {
  // 배운점: replace에 정규식을 넣고 2번째 인자에 콜백을 넘길경우 정규식과 매치되는 횟수만큼 수행되고 인자로는 매치되는 값을 넘겨준다
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

// 모자란 length만큼 앞에 0 채우기
const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
