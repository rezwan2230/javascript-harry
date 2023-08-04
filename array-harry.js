
// let arr = [10,20,30, null, true, "Rezwan"]
// console.log(arr)
// console.log(arr[10])  //Undefined


// Some array method

// array to string  
// let arr2 = [10,20,30,40,50]
// console.log(arr2)
// let b = arr2.toString()
// console.log(b)

// join method
// let arr3 = [10,20,30,40,50]
// console.log(arr3.join("_"))

//push method (it returns array length)
// let a = [10,20,30]
// let c = a.push(40)
// console.log(c, a)

//pop method 
// let d = [10,20,30]
// a.pop()
// console.log(a)

// shift method
// let arr4 = [10,20,30,40,50]
// let k = arr4.shift()
// console.log(k, arr4)

// unshift method (it returns array length)
// let arr5 = [10,20,30,40,50]
// let p = arr5.unshift(5)
// console.log(p, arr5)

// delete operator (array length will be same)
// let d = [20, 38, 35, 24, 73, 56]
// console.log(d.length)
// delete d[0]
// console.log(d)
// console.log(d.length)

// array concate [it create a new array but the old arrays will not affected]..
// let num1 = [14,24,62,50,24,34,25,68]
// let num2 = [35,74,25,27,23,86,24,96]
// let num3 = [78,54,86,36,97,43,86,35]
// let newArray = num1.concat(num2, num3)
// console.log(newArray)
// console.log(num1)
// console.log(num2)
// console.log(num3)

// sort method() ***[This method sort array alphabatically]*** [and it also modify the orginal array]..
// let number = [24,64,145,21,56,42,753,1267]
// number.sort()
// console.log(number)
// let nam = ['Rezwan','mohabbat','mitul','abdur']     // Capital letters has more priority then small letters..
// nam.sort()
// console.log(nam)


// Sorting in accending/Decending Order and [reverse]
// let compare = (a,b)=>{
//     return a-b
//     // return b-a //For decending order
// }
// let number = [24,64,145,21,56,42,753,1267]
// number.sort(compare)
// number.reverse()
// console.log(number)


// splice method [It takes 4 argument (start, how many delete items, then replace that item)]
// let num1 = [14, 24, 62, 50, 24, 34, 25, 68]
// let deletedValue = num1.splice(2, 3, 25, 27, 30)
// // num1.splice(2, 3, 25, 27, 30, 43, 123, 54, 234, 32, 7656)   //You should run this..
// console.log(num1)
// console.log(deletedValue) 
// console.log(typeof deletedValue)  //It also an object


//slice method [it doesn't mode3fy the original array]
// let num5 = [14, 24, 62, 50, 24, 34, 25, 68]
// console.log(num5.slice(4))
// console.log(num5.slice(3,8))


//*******____VVI____********
//ForEach loop
// let number = [3,6,9,12,15,20]
// number.forEach((element)=>{
//     console.log(element*element)
// })


//For of loop
// let number = [3,6,9,12,15,20]
// for (let i of number){
//     console.log(i)
// }


//For in loop
// let number = [3,6,9,12,15,20]
// for(let i in number){
//     console.log(number[i])
// }

