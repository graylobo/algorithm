// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = [7, 9];
// 4 3 1 2 9 7

function quickSort(arr, start, end) {
  // 원소가 1개인 경우 종료
  if (start >= end) {
    return;
  }
  // 피벗은 첫번째 원소
  let pivot = start;

  // 왼쪽의 시작은 피벗다음인 두번째 원소부터
  let left = start + 1;
  // 오른쪽의 시작은 마지막 원소부터
  let right = end;

  // 왼쪽의 인덱스가 오른쪽의 인덱스보다 같거나 작을때까지
  while (left <= right) {
    // 피벗값보다 값이 작으면 left index 증가 (피벗보다 큰값을 찾을때까지 반복문 수행)
    while (left <= end && arr[left] <= arr[pivot]) {
      left++;
    }
    // 피벗값보다 값이 크면 right index 감소 (피벗보다 작은값을 찾을때까지 반복문 수행)
    while (right > start && arr[right] >= arr[pivot]) {
      right--;
    }
    // 위 2개의 while문을 빠져나왔다는것은 left 에는 피벗보다 큰 값의 index,
    // right에는 피벗보다 작은값의 index 가 들어있다는 의미이며 그런경우 다음 조건절 수행

    // left가 right보다 크다는 것은 해당 지점 기준으로 왼쪽은 피벗보다 반드시 작고
    // 오른쪽은 피벗보다 크다는 것이고, left와 right가 엇갈렸다면 분할되야할 지점이므로 해당 지점의 값과 피벗값을 교체
    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    }
    // 엇갈리지 않았다면 피벗 기준으로 작은 데이터(right의 인덱스에 해당하는 값)와
    // 큰 데이터(left의 인덱스에 해당하는 값)를 교체
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  // 위 while문이 종료됐다는것은 분할이 완료됐다는 의미이므로 이후
  // 왼쪽부분과 오른쪽부분을 각각 재귀적으로 분할정렬 수행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}
quickSort(arr, 0, arr.length - 1);

console.log(arr);
