const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  let answer = absolutes.reduce(
    (acc, cur, i) => acc + (signs[i] ? cur : -cur),
    0
  );

  return answer;
}

solution(absolutes, signs);
