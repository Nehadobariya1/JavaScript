var price = 100
if (true)
{
    let price = 200
    console.log(`Inner: ${price}`);  //local Scope
}
console.log(price);  //global Scope

//----------------------------------------------------

console.log(addone(5));
function addone(num)
{
    return num + 1
}


let addTwo = function(num)
{
    return num + 5
}
console.log(addTwo(5));