
// // problem -1 (complete)
// function cubeNumber(number) {
//     if(typeof number!='number'){
//         return "Please!! Enter a number"
//     }
//     return (number*number*number)
// }
// let result = cubeNumber("5")
// console.log(result)




// problem -2 (complete)
// function matchFinder(string1, string2) {
//     if(typeof string1!="string" || typeof string2!="string"){
//         return "Please!! enter two string"
//     }
//     else{
//         if(string1.includes(string2)){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }
// let result = matchFinder("“Peter Parker","pet")
// console.log(result)




// problem -3 (Complete)
// function sortMaker(arr) {
//     if (arr[0] < 0 || arr[1] < 0 || arr.length > 2) {
//         return "Invalid input";
//     }
//     else if (arr[0] == arr[1]) {
//         return "equal";
//     }
//     else {
//         let temp;
//         if(arr[0]<arr[1]){
//             temp = arr[0]
//             arr[0] = arr[1]
//             arr[1] = temp
//         }
//         return arr;
//     }
// }
// let a = [4,-2]
// let k = sortMaker(a);
// console.log(k);




// problem -4
function findAddress(obj) {
    if(typeof obj != "object"){
        return "Please provide a valid object"
    }
    else{
        const street = obj.street || "__"
        const house = obj.house || "__"
        const society = obj.society || "__"

        return `${street},${house},${society}`
    }
}
const input1 = {
    street: 10, 
    house: "15A", 
    society: "Earth Perfect" 
};

console.log(findAddress(input1)); 
const input2 = { 
    street: 10, 
    society: "Earth Perfect"
};
console.log(findAddress(input2)); 

const input3 = {
    street: 10 
};
console.log(findAddress(input3)); 



// problem -5 (complete)
// function canPay(changeArray, totalDue) {
//     if(changeArray.length==0){
//         return "The arary is empty. Please provide some element."
//     }
//     else if(typeof totalDue!="number" || totalDue<0){
//         return "Invalid input!! Please provide a positive number."
//     }
//     else{
//         let sum = 0
//         for(let i=0; i<changeArray.length; i++){
//             sum+=changeArray[i];
//         }
//         if(sum>=totalDue){
//             return true
//         }
//         return false
//     }
// }
// let array = [1,2,5]
// let result = canPay(array, 10)
// console.log(result)

