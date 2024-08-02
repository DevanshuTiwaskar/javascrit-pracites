// loop an array of objects and remove all objects which don't have gender's male and female


// var arr = [
//     {name:"devanshu",gender:"male"},
//     {name:"dev",gender:"male"},
//     {name:"abc",gender:"nonspecified"},
//     {name:"devanshi",gender:"female"},
//     {name:"devani",gender:"female"}
// ]
   
//-------------------------------------------------------------------------------------

//  easy way to solve this problem


// filter = kya karata hai, kuchh member ko rakhata hai aur kuch
// member ko nahin rakhata




// var newarr = arr.filter(function(elem){
//     return elem.gender === "male";

// })
// output = 
// newarr =  {name: 'devanshu', gender: 'male'}
//           {name: 'dev', gender: 'male'}



//   arr = newarr // this orignal array changes to newarr by this
// output = 
// arr =  {name: 'devanshu', gender: 'male'}
//           {name: 'dev', gender: 'male'}



//----------------------------------------------------------------------------------------





// second method to solve this problem


// step for solve this problem =

// step 1: sabse pahle total number of non-male count kro

// var count = 0;
// arr.forEach(function(elem){
//    if (elem.gender !== "male") count++;
// })



// step 2: ek non male bande ko hataane ka code likho

// for(var j = 0; j < arr.length; j++ ){
//      if (arr[j].gender !== "male") {
//         arr.splice(j,1);
//      }
// }


// step 3: fie us code ko total non-male times chala do

// for(var i = 0; i <= count; i++){
//     for(var j = 0; j < arr.length; j++ ){
//         if (arr[j].gender !== "male") {
//            arr.splice(j,1);
//         }
//    }
// }


// var count = 0;
// arr.forEach(function(elem){
//    if (elem.gender !== "male") count++;
// })

// for(var i = 0; i <= count; i++){
//     for(var j = 0; j < arr.length; j++ ){
//         if (arr[j].gender !== "male") {
//            arr.splice(j,1);
//         }
//    }
// }
// console.log(arr)

// output = 
// arr =  {name: 'devanshu', gender: 'male'}
//           {name: 'dev', gender: 'male'}



