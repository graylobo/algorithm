function solution(nums) {
    const len = nums.length;
    var answer = 0;
    for (let i = 0; i < len - 2; i++) {
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
          }
        }
      }
    }
  
    return answer;
  }
  
  function isPrime(num) {
    if (num % 2 === 0) {
      return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }