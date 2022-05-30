const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let basket = [];
  let crashCount = 0;

  for (const position of moves) {
    for (const floor of board) {
      let current = floor[position - 1]; // moves인덱스가 1부터 시작하므로 -1 빼줌
      if (current === 0) {
        continue;
      }
      if (basket.length === 0) {
        basket.push(current);
      } else {
        if (basket[basket.length - 1] === current) {
          basket.pop();
          crashCount += 2;
        }
        else{
            basket.push(current)
        }
      }
      floor[position-1]=0;
      break;
    }
  }
  var answer = crashCount;
  return answer;
}


