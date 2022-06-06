const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3, 5, 5, 5, 5, 5];
function solution(N, stages) {
  stages = stages.sort((a, b) => a - b);
  let playerCount = stages.length;
  let some = {};

  for (const iterator of stages) {
    if (iterator === N + 1) {
      some[iterator - 1] = some[iterator - 1] || 0;
    } else {
      some[iterator] = some[iterator] ? (some[iterator] += 1) : 1;
    }
  }

  for (let i = 1; i <= N; i++) {
    some[i] = some[i] || 0;
  }
  let failLate = {};

  for (const key in some) {
    failLate[key] = some[key] / playerCount;
    playerCount -= some[key];
  }
  failLate = Object.entries(failLate).sort(([, a], [, b]) => b - a);
  var answer = [];
  for (const iterator of failLate) {
    answer.push(Number(iterator[0]));
  }
  console.log(answer);

  return answer;
}

solution(N, stages);
