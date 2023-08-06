

// Problem No-1

// let arr = [10,20,30,40,50]

// console.log(arr.length)
// console.log(arr)

// arr.unshift(1)

// console.log(arr.length)
// console.log(arr)

// arr.shift()

// console.log(arr.length)
// console.log(arr)

// let k = arr.pop()
// console.log(k)

// let i = arr.indexOf(30)
// console.log(i)


// let arr = [10,20,30,40]
// console.log(Array.isArray(arr))



// Problem No-2
// let k = 1
// while (k <= 10){
//     console.log("Man - ",k);
//     k++
// }


// Problem No-3

// for (let i=1; i<=10; i++){
//     console.log(i)
// }


// Problem No-4
// let arr = [10,20,30,40,50]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


// Problem No-13
// let arr = [10, 20, 30, 40, 50];
// let result = arr.join(' ');
// console.log(result);


// Problem No-14

// let arr1 = ["Rezwan","Mohabbat","Mitul","Rouf","Ozil"]
// for(let i=0; i<arr1.length; i++){
//     console.log(arr1[i])
//     if(arr1[i]=="Mitul")
//     break
// }


// Problem No-15

// let arr2 = [23,124,347,2,54,256,237,71,35,84,234,53,25,83,34,865,235]

// for (let i=0; i<arr2.length; i++) {
//     if(arr2[i]<=100){
//         continue
//     }
//     console.log(arr2[i])
// }



// Problem No-16
// let n = prompt("Enter your name : ")
// console.log("Your name is : ", n)


// Problem No-17
// var c = 34.456789
// console.log(parseFloat(c.toFixed(2)))


// Problem No-18
// let n = ['Apple', 'Banana', 'Orange']
// let k = n.indexOf("Banana")
// n[k] = "Mango"
// console.log(n)

// n.pop()
// console.log(n)

// n.push("Watermilon")
// console.log(n)



// Problem No-19
// function check(arr){
//     let c = [];
//     for(let i of arr){
//         if (i%2==0){
//             c.push(i)
//         }
//     }
//     return c
// }
// let a = [10,20,113,24,47,125,685,15476,23512]
// let even = check(a)
// console.log(even)


// Problem No-20
// function duplicateChecker(array){
//     const unique = []
//     for (let i=0; i<array.length; i++){
//         if(unique.includes(array[i])==false){
//             unique.push(array[i])
//         }
//     }
//     return unique
// }
// let arr = ["rezwan","mohabbat","mitul","zishan","rouf","soyeb","Rezwan", "mitul", "rouf"]
// arr = duplicateChecker(arr)
// console.log(arr)


// Problem No-21
// for(let i=0; i<=50; i++){
//     if(i%3==0 && i%5==0){
//         console.log("footbar")
//     }
//     else if(i%3==0){
//         console.log("foo")
//     }
//     else if(i%5==0){
//         console.log("bar")
//     }
//     else{
//         console.log(i)
//     }
// }


// Problem No-22
// function calculateWood(chairQ, tableQ, bedQ){
//     let chair = 3
//     let table = 10
//     let bed = 50

//     let woodForChair = 3*chairQ
//     let woodForTable = 10*tableQ
//     let woodForBed = 50*bedQ
//     let result = woodForChair+ woodForTable+ woodForBed
//     return result
// }
// let neededWood = calculateWood(0,0,1)
// console.log("Total wood required : ",neededWood)



// // Problem No-23
// function findCheppest(phones){
//     // let minPrice = phones[0].price
//     // for(let i=0; i<phones.length; i++){
//     //     let phn = phones[i]
//     //     if(phn.price<minPrice){
//     //         minPrice=phn.price
//     //     }
//     // }
//     // return minPrice

//     let cheapestPhn = phones[0]
//     for(let i=0; i<phones.length; i++){
//         let phn = phones[i]
//         if(phn.camera>cheapestPhn.camera){
//             cheapestPhn=phn
//         }
//     }
//     return cheapestPhn
// }

// let phones = [
//     { name: "Nokia", camera: "20", storage: "32GB", price: 26452, color: "White" },
//     { name: "Samsung", camera: "48", storage: "64GB", price: 54321, color: "silver" },
//     { name: "Redmi", camera: "28", storage: "64GB", price: 16787, color: "balck" },
//     { name: "Iphone", camera: "60", storage: "128GB", price: 156788, color: "Golden" },
//     { name: "Oppo", camera: "48", storage: "32GB", price: 16788, color: "pink" }
// ]

// let result = findCheppest(phones)
// console.log(result)



// Problem No-24

