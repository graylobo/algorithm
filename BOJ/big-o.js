// O(1)
function o_1(n) {
  let count = 0;
  console.log("연산횟수: " + count);
}

// O(logn)
function o_logn(n) {
  let count = 0;
  for (let i = n; n <= n; n = Math.floor(n / 2)) {
    if (n === 1) break;
    count++;
  }
  console.log("연산횟수: " + count);
}

// O(n)
function o_n(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
  }
  console.log("연산횟수: " + count);
}

// O(nlogn)
function o_nlogn(n) {
  let count = 0;

  // While문으로 구현시
  //   let y = n;
  //   while (n > 1) {
  //     n = Math.floor(n / 2);
  //     for (let i = 1; i <= y; i++) {
  //       console.log(i);
  //       count++;
  //     }
  //   }

  // For문 구현시
  for (let y = n; n > 1; n = Math.floor(n / 2)) {
    for (let i = 1; i <= y; i++) {
      count++;
    }
  }
  console.log("연산횟수: " + count);
}

// O(n2)
function o_n2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }

  console.log("연산횟수: " + count);
}
