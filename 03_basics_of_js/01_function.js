function add(no1, no2){
    console.log(no1 + no2);
}
add(15,20)
const no = add(15,20)
console.log(no); //undefined

//--------------------------------------------------

function add(no3, no4){
   return no3 + no4
}
add(10,2)
const num = add(15,2)
console.log(num); //undefined

//---------------------------------------------------

function loginUserMessage (userName)
{   if(userName === undefined)
    {
        console.log("Please enter a username");
    }
    else{
        return `${userName} just logged in`
    }
}
console.log(loginUserMessage("Jhon"));

//--------------------------------------------------

function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(11,12,34,51));

//-------------------------------------------------

const user = {
    name : "Raj",
    age : 20,
    product : 'shirt'
}

function handleObjact(anyobject)
{
    console.log(`username is ${anyobject.name} and product is ${anyobject.product}`);
}
handleObjact(user)

