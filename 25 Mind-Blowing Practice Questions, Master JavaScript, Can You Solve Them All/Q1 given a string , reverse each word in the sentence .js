//Q1 .given a string , reverse each word in the sentence ?

// var str = "hello my name is devanshu";

// var savestr = str.split(" ").map(function(word){
//     return word.split("").reverse().join("");
// })

// console.log(savestr.join(" "));








// var str = "my name is devanshu"

// var savestr = str.split(" ").map(function(word){
//     return word.split("").reverse().join("");
// })

// console.log(savestr.join(" "))

// output === ym eman si uhsnaved



// str.split(" ") = {"my" ,"name" ,"is" ,"devanshu"}
// .map() = The map method creates a new array by applying the provided function to each element of the array.
// word.split("") = "my" becomes ["m", "y"].and ,etc.
// .reverse() = it well reverse the word.
// .join = join the word then Store all things in savestr the console.log join(" ")



// var str = "my name is devanshu"

// let savestr =  str.split(" ").map(function(word){
//     return word.split("").reverse().join("");
// })

// console.log(savestr.join(" "))