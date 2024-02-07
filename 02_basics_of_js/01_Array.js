//Array

let Arr = [1,7,6,9,0,6]
console.log(Arr[5]);

let Arr2 = new Array(1,2,5,6,7)
console.log(Arr2)

//Array Methods

let myArray = [1,2,3,4,5]
myArray.push(7)
myArray.pop()
myArray.unshift(0)
myArray.shift()

console.log(myArray);

console.log(myArray.includes(9))
console.log(myArray.indexOf(4))

const newArray = myArray.join()
console.log(newArray);
console.log(typeof(newArray));

const num1 = [1,2,3,4,5]
console.log(num1);
console.log(num1.slice(1,3));
console.log(num1);
console.log(num1.splice(1,3));
console.log(num1);