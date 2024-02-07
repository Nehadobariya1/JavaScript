let name = "Kunj"
let age = "10 Years"

console.log(`Hello My Name is ${name} and my age is ${age} old`); //Concate

const gameName = new String('Hemang')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

//--------------Substring------------
const newString = gameName.substring(0,4) //cannot give negative value
console.log(newString);

//-------------Trim------------------
const stringOne = " Hemang "
console.log(stringOne);
console.log(stringOne.trim());  //Remove unnecessery Space 

//-----------Replace--------------

const url = "https://Yours.com/im%20dobariya"
console.log(url.replace('%20','-'));





