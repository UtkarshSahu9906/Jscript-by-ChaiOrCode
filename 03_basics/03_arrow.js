const user = {
    username: "utkarsh",
    price: 999,

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     console.log(this)
// }

// chai()

// const chai = function(){
//     username: "utkarsh",
//     console.log(this.username);
// }

const chai = () =>{
        let username=  "utkarsh"
         console.log(this);
     }

//chai()

// const addTwo = (num1 , num2)=>{
//     return num1+num2
// }


//const addTwo = (num1 , num2) => num1 + num2
const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(2,3))


