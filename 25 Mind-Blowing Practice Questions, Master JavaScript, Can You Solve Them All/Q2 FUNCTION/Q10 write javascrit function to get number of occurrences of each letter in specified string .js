// // Q10 write javascrit function to get number of occurrences of each letter in specified string 

// --------------------------------------------------------------------------------------------------------------------------------------

//                       concept in console

// var  obj = {a: 1};

// if we want to check in object any  specifi property is their or not
// we use can to check the property

// obj.hasOwnProperty('b')
// = false 

// obj.hasOwnProperty('a')
// = true

// --------------------------------------------------------------------------------------------------------------------------------------


// And how to access the any value of property

// obj.a
// = 1

//  OR

// obj.['a']
// = 1

// --------------------------------------------------------------------------------------------------------------------------------------

// function occ(str){
//     let occurrences = {};
//     str.split("").forEach(function(elem){
//         if(occurrences.hasOwnProperty(elem) === false){
//             occurrences[elem] = 1;
//         }
//         else{
//             occurrences[elem]++;

//         }
//     })
//   return occurrences;
// }


// console.log(occ("apple"));
// console.log(occ("devanshu"));




// function occ(str){
//     let occurrences = {};
//     var allword = str.split("").forEach(function(elem){
//         if( occurrences.hasOwnProperty(elem) === false){
//            occurrences[elem] = 1;
//         }else{
//            occurrences[elem]++;

//         }
        
//     });
//        return occurrences;
// }


// console.log(occ("apple"));
// console.log(occ("devanshu"));