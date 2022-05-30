const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = commands.map((e) => array.slice(e[0] - 1, e[1]).sort((a,b)=>a-b)[e[2] - 1]);
  return answer;
}

solution(array, commands);
