
// It shows some undefined ..
// let a = [10,20,113,24,47,125,685,15476,23512]
// let k = a.map((value)=>{
//     if (value%2==0){
//         return value;
//     }
// })
// console.log(k)


// Map is used to create a new array by existing array..
// and ForEach loop is used to make some operation in exixting array element..

// let a = [10,20,113,24,47,125,685,15476,23512]
// let b = a.map((value)=>{
//     return value+5
// })
// console.log(b)


// let a = [10,20,113,24,47,125,685,15476,23512]
// let b = a.map((value, index)=>{
//     return value+index
// })
// console.log(b)


// let a = [10,20,113,24,47]
// let b = a.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value+index
// })
// console.log(b)


//Filter method
// let a = [10,20,93,47,24,67,25,30,35,113]
// let b = a.filter((value)=>{
//     // return (value%2==0)
//     return value<=30
// })
// console.log(b)


//Reduce method()
let a = [1,2,3,5,2,1]
let b = a.reduce((n1,n2)=>{
    return n1+n2
    // return n1+n2+2
})
console.log(b)

