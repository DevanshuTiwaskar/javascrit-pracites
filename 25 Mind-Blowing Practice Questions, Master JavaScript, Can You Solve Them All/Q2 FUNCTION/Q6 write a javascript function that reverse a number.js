//Q6. write a javascript function that reverse a number

//ans          ==  fisrt method ===




  
// function reversekaro(num){
//     return Number(num.toString().split("").reverse().join(""))
// }

// console.log(reversekaro(12));



// function reversekaro(num){
//      return Number(num.toString().split("").reverse().join(""))
// }
// console.log(reversekaro(13));






// function reversekaro(num){
//     return Number(num.toString().split("").reverse().join(""))
// }

// console.log(reversekaro(12))




//                     ==== secand method =====

// function reversekaro(num){
//     var rev = 0;

//     while(num>0){
//         var rem = num % 10;---------------if num is 1234, rem will be 4.
//         rev = rev*10+rem;-----------------if rev is 0 and rem is 4, rev becomes 4.
//         num = Math.floor(num/10); ---------- if num is 1234, it becomes 123.
//     }
//     return rev;
// }

// console.log(reversekaro(1234))
  

//output == 4321


//  function reversekaro(num){
//     //  var rev = 0;

//      while(1234>0){

//         var rem = 1234%10;
//            rev = 0*10+4;
//            num = Math.floor(1234/10) 
       
//      }
//      return rev;
//     }
//     console.log(reversekaro(1234))
         



// function reversekaro(num){
//     rev = 0;

//     while(num>0){
//         rem = num % 10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//         }
//         return rev;

// }
// console.log(reversekaro(1234))


// function reversekaro(num){
//       rev = 0;

//       while(num>0){
//         rem = num % 10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//       }
//       return rev;
// }

// console.log(reversekaro(4824))



















