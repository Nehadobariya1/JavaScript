"use strict"; //treat all js code as new version

let name1 = "john"       //string => ""

let age = 25            //number (for large Number 'bigint')

let isAvailable = true  //boolean => true/false

let state;              //undefined

let mobileNo = null     //null => standalone value

//null is object

//console.table([name1,age,isAvailable,mobileNo]);

//------------------------------------TYPES-----------------------------------
//1.primitive datatype => 7types : String, Number,Boolean, Null, undefined, symbol, BigInt 
//2.Non-primitive datatype ( Refrence ) => 3types: Array, Objects, function




//---------------------------------------------------------------

//Primitive type  => Stack Memory
//Reference type  => Heap Memory

//*--------------Stack----------------*
let user = "Raj"
let OneUser = user

console.log(user);
console.log(OneUser);

OneUser = "Geet"
console.log(user); //Raj
console.log(OneUser);//Geet

//*--------------Heap----------------*

let user1 = {
    name:"Ravi",
    email:"abc@gmail.com"
}
let TwoUSer = user1

console.log(user1.name);
console.log(TwoUSer.name);

TwoUSer.name = "Krish"

console.log(user1.name);  //Krish
console.log(TwoUSer.name);  //Krish
