// function abc(num) {
//   return num <= 0 ? num * (-1) : num
// }
// console.log(abc(12));



// function pow(x, y) {
//   return x ** y
// }
// console.log(pow(-8, (1/3)));




// const floor = (num) => {
//   let arr = num.toString().split(".")
//   let startInt = arr.slice(0, 1) * 1
//   if(num > 0){
//     return startInt
//   }
//   else{
//     return startInt - 1
//   }
// }
// console.log(floor(5.66));



// const ceil = (num) => {
//   let arr = num.toString().split(".")
//   let startInt = arr.slice(0, 1) * 1
//   if(num > 0){
//     return startInt + 1
//   }
//   else{
//     return startInt
//   }
// }
// console.log(ceil(5));



// const trunc = (num) => {
// let arr = num.toString().split(".")
// return arr.slice(0, 1) * 1
// }
// console.log(trunc(-5.11));



// function sqrt(num) {
//     return num >= 0 ? num **(1/2) : "notug'ri"
// }




function round(num){
    let str = num.toString().split(".").slice(1,2)*1
    let num1 = num.toString().split(".").slice(0,1)*1
    // console.log( typeof num1)
    if(str>=5 && num>0){
      return num1+1
    }
    else if(str<5 && num>0){
      return num1
    }
    else if(str>=5 && num<0){
      return num1-1
    }
    else if(str<5 && num<0){
      return num1
    }
  }
  console.log(round(5.55))