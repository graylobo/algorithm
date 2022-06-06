const answers = [1, 2, 3, 4, 5];
const patternOne = [1, 2, 3, 4, 5];
const patternTwo = [2, 1, 2, 3, 2, 4, 2, 5];
const patternThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
function solution(answers) {
  var answer = [];
  const one = checkCount(answers, patternOne);
  const two = checkCount(answers, patternTwo);
  const three = checkCount(answers, patternThree);
  const arr = [one, two, three];
  let max = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      answer.push(i + 1);
    }
  }
}

function checkCount(answers, pattern) {
  return answers.filter((e, i) => e === pattern[i % pattern.length]).length;
}

solution(answers);
