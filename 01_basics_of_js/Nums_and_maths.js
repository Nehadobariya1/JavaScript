
//*-----------------------Nums--------------------------*

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed());

const num = 123.4659
console.log(num.toPrecision(5));

const hundrade = 1000000
console.log(hundrade.toLocaleString());
console.log(hundrade.toLocaleString('en-IN'));

//*---------------------------------Maths-----------------------*

console.log(Math.abs(-10.9)) //Positive value Converting
console.log(Math.round(10.9));
console.log(Math.round(10.3));
console.log(Math.ceil(10.5));
console.log(Math.floor(10.9));
//console.log(Math.random());
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
console.log(Math.min(10,45,50,90,100.10));
console.log(Math.max(500,400,56,1010));

console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);



const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (min - max + 1)));  //Negative Value
console.log(Math.round(Math.random() * (max - min + 1)) + min);