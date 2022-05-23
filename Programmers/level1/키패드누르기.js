const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

const table = {
  0: "M",
  1: "L",
  2: "M",
  3: "R",
  4: "L",
  5: "M",
  6: "R",
  7: "L",
  8: "M",
  9: "R",
};
const keypad = {
  1: [1, 1],
  2: [1, 2],
  3: [1, 3],
  4: [2, 1],
  5: [2, 2],
  6: [2, 3],
  7: [3, 1],
  8: [3, 2],
  9: [3, 3],
  "*": [4, 1],
  0: [4, 2],
  "#": [4, 3],
};

function solution(numbers, hand) {
  let leftHandLastClickNum = -1;
  let rightHandLastClickNum = -1;
  numbers = numbers.map((e) => {
    switch (table[e]) {
      case "L":
        leftHandLastClickNum = e;
        break;
      case "R":
        rightHandLastClickNum = e;
        break;
      case "M":
        let currentNum = keypad["*"];
        let leftNum =
          keypad[leftHandLastClickNum === -1 ? "*" : leftHandLastClickNum];
        let rightNum =
          keypad[rightHandLastClickNum === -1 ? "#" : rightHandLastClickNum];
        let leftAbs =
          Math.abs(currentNum[0] - leftNum[0]) +
          Math.abs(currentNum[1] - leftNum[1]);
        let rightAbs =
          Math.abs(currentNum[0] - rightNum[0]) +
          Math.abs(currentNum[1] - rightNum[1]);
        if (leftAbs === rightAbs) {
          if (hand === "left") {
            leftHandLastClickNum = e;
            return "L";
          } else {
            rightHandLastClickNum = e;
            return "R";
          }
        } else if (leftAbs > rightAbs) {
          rightHandLastClickNum = e;
          return "R";
        } else {
          leftHandLastClickNum = e;
          return "L";
        }
        console.log(currentNum, leftAbs, rightAbs);
        break;
    }

    return table[e];
  });

  var answer = numbers.join();
  return answer;
}
solution(numbers, hand);
