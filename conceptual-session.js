
//Problem-1
// function isInteger(num){
//     if(typeof num!=='number'){
//         return "Please provide a number"
//     }
//     else if(num%1==0){
//         return true
//     }
//     return false
// }
// let result = isInteger(53)
// console.log(result)


// //Problem-2
// function isJavaScript(filename) {
//     if (typeof filename != 'string') {
//         return "Provide a string"
//     }
//     // if (filename.toLowerCase().endsWith(".js"))
//     //     return true
//     // else
//     //     return false

//     return filename.toLowerCase().endsWith(".js")
// }
// // let result = isJavaScript(34)
// let result = isJavaScript("index.js")
// console.log(result)


//Problem-2 solve by another way
// function isJavaScript(filename) {
//     if (typeof filename != 'string') {
//         return "Provide a string"
//     }
//     else{
//         let arr = filename.split(".")
//         let lastElement = arr.pop()
//         return (lastElement.toLowerCase() == "js")
//     }
// }
// let result = isJavaScript("index.js")
// console.log(result)



// //Problem-3
// function mindGame(num){
//     if(typeof num!='number'){
//         return "please!! provide a number"
//     }
//     else if(num>=1){
//         let final = (((num*3)+10)/2)-5
//         return final
//     }
//     else{
//         return "Please!! provide a positive number"
//     }
// }
// let result = mindGame(0)
// console.log(result)



// //Problem-4
// function isLGSeven(num) {
//     if (typeof num != 'number') {
//         return "please!! provide a number"
//     }
//     else{
//         let differ = num-7
//         if(differ<7){
//             return differ
//         }
//         else{
//             return num*2
//         }
//     }
// }
// let result = isLGSeven(7)
// console.log(result)


//Problem-5

// function findingBadDate(arr) {
//     if (!Array.isArray(arr)) {
//         return "Please!! provide me the array of number.."
//     }
//     else {
//         let count = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof arr[i] != "number") {
//                 return "Please!! provide me the array of number.."
//             }
//             else {
//                 if (arr[i] < 0) {
//                     count++
//                 }
//             }
//         }
//         return count
//     }
// }
// let array = [1,2,3,4,5]
// let result = findingBadDate(array)
// console.log(result)


//problem-6

// function printDetails(person){
//     if(typeof person!= 'object'){
//         console.log("Please provide me a valid object")
//     }
//     else{
//         const name = person.name || "nai"
//         const age = person.age || "nai"
//         const email = person.email || "nai"

//         return "amr name : "+name + "amr boyos : "+age+"amr email : "+email
//     }

// }

// let info = [
//     {name : "Rezwan", age : 23, email : "abc@gmail.com"}
// ]
// let k = printDetails(info)
// console.log(k)





var student = { name : "Yo Mama", age : 17 };
  age
console.log(student)