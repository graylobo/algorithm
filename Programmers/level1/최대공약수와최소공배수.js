function solution(n, m) {
  let gcd = gcdlcm(n, m);
  let lcm = (n * m) / gcd; // 두수의 곱 / 최대공약수 = 최소공배수
  return [gcd, lcm];
}

// 최대공약수 구하는 함수
// 유클리드 호제법: 큰수를 작은수로 나누었을때  나머지가 0이면 작은수가 최대 공약수이고, 나머지가 0이 아니면 나머지가 0이될때까지 앞서 나눈 작은수와 나머지로 나눈다.
//                  
// 예) 36,8 인경우: 36%8 = 4, 8%4 = 0 이므로 4가 최대공약수
//     204,21 인경우: 204%21 = 15 , 21%15 = 6, 15%6 = 3 , 6%3 =0 이므로 3이 최대공약수
function gcdlcm(a, b) {
  return b ? gcdlcm(b, a % b) : a;
}

console.log(solution(21,204));

