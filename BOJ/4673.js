// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

function d(n) {
  let result = 0;
  let str = n + "";
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  return result + n;
}

let selfNumber = new Array(10001).fill(true);

for (let i = 1; i <= 10000; i++) {
  let cur = d(i); // 해당 함수를 통해 리턴되는 값은 생성자가 있다는 의미 (셀프넘버가 아님)
  if (cur <= 10000) {
    selfNumber[cur] = false; //셀프넘버가 아닌 index를 false로 설정
  }
}

for (let i = 1; i <= 10000; i++) {
  // selfNumber 배열에서 true라는것은 셀프넘버라는 의미이므로 해당 위치 인덱스값을 출력
  if (selfNumber[i]) {
    console.log(i);
  }
}
