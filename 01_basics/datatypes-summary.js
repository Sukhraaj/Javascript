// Primitive

// 7 types : String, Number, Boolen, null, undefined, symbol, BigInt

const  score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

 const bigNumber = 4235343427897n



// Refernce (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    names: "Sukhe",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non Primitive)

let myname = "Sukhe"

let anothername = myname

anothername = "Sukhraaj"

console.log(anothername)

let userOne = {
    email: "user@gmail.com",
    upi: "user@upi",
}

let userTwo = userOne

userTwo.email ="Sukhe@gmail.com",

console.log(userOne.email);
console.log(userTwo.email);
