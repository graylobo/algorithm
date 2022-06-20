const arr = [1,1,3,3,0,1,1]
function solution(arr)
{
    var answer =[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===arr[i+1]){
          arr[i]= -1
        }
    }
    answer = arr.filter(e=>e!==-1)
    return answer;
}



console.log(solution(arr))



