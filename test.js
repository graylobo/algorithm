

function some1(){
  return new Promise((res,rej)=>{
    res("ㅋㅋㅋ")
    return"하위"
  })
}


function some2(){
  console.log("ㅎㅇ")
}


function some3(){
  console.log('111')
  some1().then(e=>{
    console.log(e)
  })
  console.log('222')
  some2()

  console.log('333')
}

some3()
