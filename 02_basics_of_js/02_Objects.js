//Singleton

//Object literal

let symbol = Symbol("Value1") //symbol type

const User = {
    name : "Prins",
    age : 22,
    [symbol] : "Value1",
    city : "Rajkot",
    email : "prins07@gmail.com",
    isLoggine : false,
    loginDay : ["Sunday","satday"]      
}
//console.log(User.name)
//console.log(User["name"])
console.log(User[symbol])

User[symbol] = "Key1"  //over ride
console.log(User[symbol]);
//Object.freeze(User)  // freez value 
User[symbol] = "Key5"  //over ride after freeze
console.log(User);

//Function

User.greeting = function(){
    console.log("Hello my dear User")
}
console.log(User.greeting());

User.greeting1 = function(){
    console.log(`Hello my dear User => ${this.name}`);
}
console.log(User.greeting1());

