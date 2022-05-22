
const lottos = [44, 1, 0, 0, 31, 25]
const win_nums = [31, 10, 45, 1, 6, 19]

function solution(lottos, win_nums) {
    const score ={
        0:6,
        1:6 ,
        2:5,
        3:4,
        4:3,
        5:2,
        6:1
    }
    let missingCount = lottos.filter(e=>e===0).length;
    let matchCount = win_nums.filter(e=>lottos.includes(e)).length;
    
    let maxScore = score[missingCount+matchCount];
    let lowScore = score[matchCount];
    var answer = [];
    answer.push(maxScore,lowScore)
    console.log(answer)
    return answer;
}


solution(lottos,win_nums)