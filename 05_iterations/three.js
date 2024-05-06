//for of loops

// ["","","","",""]
// [{},{},{},{},{}]

const arr = [1,2,3,4,6,7]

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world"

for (const iterator of greetings) {
    if(iterator==" "){
        continue
    }
    console.log(iterator)
}

// Maps 

const map = new Map()

map.set("india","IN")
map.set("use","USA")
map.set("china","CH")

console.log(map)


for (const key of map) {
    console.log(key)
}

// Both print Key and value 

for (const [key , value ] of map) {
    console.log(key+" :- "+value)
}


//This methird is not working on a Object

// const myObj ={
//     "name":"utkarsh",
//     "age":23
// }
// for (const obj of myObj) {
//     console.log(obj)
    
// }