// function multiply(number){
//     //returns number to be sqrd by;
//     if (number < 0){
//         let numCount = number.toString().length -1;
//     } else {
//         numCount = number.toString().length;
//     }
//     return number * 5 ** numCount;
// }

function multiply(number){
    return number * 5 ** String(Math.abs(number)).length;
}

console.log(multiply(10)); // 250
console.log(multiply(5)); // 25
console.log(multiply(200)); // 250000
console.log(multiply(0)); // 
console.log(multiply(-2)); // -10
