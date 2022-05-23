const s = "one4seveneight";
const table = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  for (const key in table) {
    if (s.includes(key)) {
      let regExp = new RegExp(key, "gi");
      s = s.replace(regExp, table[key]);
    }
  }
  var answer = Number(s);
  console.log(answer);
  return answer;
}
solution(s);

// const s = "one4seveneight";
// const table = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };
// function solution(s) {
//   let copy = "";
//   let result = "";
//   for (const iterator of s) {
//     if (Number(iterator)) {
//       result += iterator;
//     } else {
//       copy += iterator;
//       if (copy in table) {
//         result += table[copy];
//         copy = "";
//       }
//     }
//   }

//   var answer = Number(result);
//   return answer;
// }

// solution(s);
