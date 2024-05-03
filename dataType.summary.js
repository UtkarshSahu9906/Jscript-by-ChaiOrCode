// Primitive

// 7 types: String, Number, Boolean, null, undefind, Symbol, BigInt

const score = 120
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);

const bigNumber = 2321313343243422422n


 // Refrence (Non Primitive)

// Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"utkarsh",
    age:23,
}

const myFunction = function(){
    console.log("Hellow world");
}