function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  participant = participant.filter((e, i) => e !== completion[i]);

  var answer = participant[0];
  return answer;
}
