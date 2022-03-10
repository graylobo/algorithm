// 입력을 인자로 받아 문제를 푸는 solution 함수
function solution(input) {
    const stack = [];
    let top = 0;
    let answer = "";
    const cmdObj = {
      push: (x) => (stack[top++] = x),
      pop: () => {
        if (top) {
          top--;
          return stack.splice(-1);
        }
        return -1;
      },
      size: () => top,
      empty: () => (!top ? 1 : 0),
      top: () => (top ? stack[top - 1] : -1),
    };
  
    input.slice(1).map((str) => {
      const [cmd, num] = str.split(" ");
      if (cmd === "push") cmdObj[cmd](num);
      else answer += `${cmdObj[cmd]()}\n`;
    });
    return answer;
  }
  
  // 아래는 백준에서 여러 줄의 입력을 받는 부분이다.
  const input = [];
  require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
      input.push(line);
    })
    .on("close", () => {
      console.log(solution(input));  // 이 부분에서 함수를 실행하고 정답을 출력한다.
      process.exit();
    });