

const day={
  0:"SUN",
  1:"MON",
  2:"TUE",
  3:"WED",
  4:"THU",
  5:"FRI",
  6:"SAT"
}

function solution(a, b) {
  var answer = new Date(`${a} ${b} 2016`).getDay()
  console.log(answer)
  return day[answer];
}
solution(5,24)
