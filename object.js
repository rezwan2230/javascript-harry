
// OBJECT
// const info = {
//     name: "Rezwan",
//     id : "213-15-4559",
//     section : "PC-A",
//     cgpa : 3.59,
//     address : "Gaibandha"
// }
// console.log(info)


//  Get property value..
// system-1
// console.log(info.name)

// system-2
// console.log(info["name"])

// system-3
// let p = "name"
// let c = info[p]
// console.log(c)


// Get all the keys..
// console.log(Object.keys(info))


// Get all the values..
// console.log(Object.values(info))


// let k = Object.values(info)
// for(let i=0; i<k.length; i++){
//     console.log(k[i])
// }

//Set property value
// system -1
// info.name= "Zishan"
// console.log(info.name)
// // system -2
// info["name"]= "Mohabbat"
// console.log(info.name)
// // system -3
// let a = "name"
// info[a] = "Mitul"
// console.log(info.name)




// const info = {
//     name: "Rezwan",
//     id : "213-15-4559",
//     section : "PC-A",
//     cgpa : 3.59,
//     address : "Gaibandha"
// }

// let keys = Object.keys(info)

// for (let i=0; i<keys.length; i++){
//     let propertyNames = keys[i]
//     let propertyValues = info[propertyNames]
//     console.log(propertyNames, " : " , propertyValues)
    
// }



// For in loop
// let person = {
//     name : "Rezwan",
//     age : 23,
//     cgpa : 2.00,
//     address : "Gaibandha"
// }

// for (let i in person){
//     console.log(i," : ", person[i])
// }


//ROUND FUNCTION..
// let a = 10.33
// a = Math.round(a)
// console.log(a)



// let Marks = {
//     rezwan : 22,
//     mohabbat : 25,
//     mitul : 27,
//     ozil : 29
// }

// using normal loop
// for (let i=0; i<Object.keys(Marks).length; i++){
//         console.log(Object.keys(Marks)[i], " : ", Marks[Object.keys(Marks)[i]])
// }
console.log()


// Using For in LOOP
// for (let key in Marks){
//     console.log( key, " : " ,Marks[key])
// }