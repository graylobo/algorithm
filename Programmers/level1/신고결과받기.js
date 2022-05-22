const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
const k =2;


// function solution(id_list, report, k) {
//     //#region 한유저가 동일한유저를 여러번 중복신고한경우 1번으로 처리하는 로직
//     let obj = report.map(e=>e.split(' ')).reduce((acc,cur)=>{
//         acc[cur[0]] = {...acc[cur[0]],[cur[1]]:0}
//         return acc
//     },{})
//     let copy = []
//     for (const key1 in obj) {
//         for (const key2 in obj[key1]) {
//             copy.push(`${key1} ${key2}`)
//         }
//     }
//     report= copy;
//     //#endregion


//     let 유저별신고상태= report.map(e=>e.split(' '))
//     let 유저별신고카운트 =유저별신고상태.reduce((acc,cur)=>{
//         let 신고당한유저id = cur[1]
//         acc[신고당한유저id] =  (acc[신고당한유저id]||0)+1;
//         return acc;
//     },{})
    
//     let aboveReportCountUser = []
//     for (const key in 유저별신고카운트) {
//         if(유저별신고카운트[key] >= k){
//             aboveReportCountUser.push(key)
//         }
//     }

//     let result = 유저별신고상태.reduce((acc,cur)=>{
//         let 신고한유저 = cur[0]
//         let 신고당한유저id = cur[1]
//         if(aboveReportCountUser.includes(신고당한유저id)){
//             acc[신고한유저] = (acc[신고한유저]||0)+1;
//             return acc
//         }
//         else return acc
//     },{})
//     var answer = [];
//     answer = id_list.map(e=>{
//         if(!result[e]){
//             return 0;
//         }
//         else{
//             return result[e]
//         }
//     })
//     return answer;
// }


function solution(id_list, report, k) {
    // 1. 중복을 제거
    report = [...new Set(report)].map(e=>e.split(' '));

    // 2. 유저별 신고당한 횟수 체크
    let 신고당한횟수 = new Map();
    for (const key of report) {
        신고당한횟수.set(key[1],신고당한횟수.get(key[1])+1||1); // 신고당한횟수.get(key[1]) 에 값이 지정되지않은경우 1로 초기화
    }

    let 메일발송횟수 = new Map();
    for (const key of report) {
        if(신고당한횟수.get(key[1])>=k){
            메일발송횟수.set(key[0],메일발송횟수.get(key[0])+1||1)
        }
    }
    let answer= id_list.map(e=>메일발송횟수.get(e)||0)
    console.log(answer)
    return answer;
}

solution(id_list,report,k)