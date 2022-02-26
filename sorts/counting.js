const arr = [1, 2, 3, 4, 5, 9, 7, 5, 2, 3, 1];

function countingSort(arr) {
  let maxValue = arr.reduce((a, b) => Math.max(a, b));
  let cnt = Array(maxValue + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    cnt[arr[i]]++;
  }

  let answer = "";
  for (let i = 0; i < cnt.length; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      answer += String(i);
    }
  }
  console.log(answer);
}
countingSort(arr);
