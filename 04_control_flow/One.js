//if

if(2 == 2)
{
    console.log("Execute");  
}

if (2 === "2")
{
    console.log("Execute");  // === check that both value and thair data type are same or not
}

//------------Block Scope --------------------------------

const score = 200
if(score > 100)
{
    const power = "Fly"
    console.log(`UserPower:${power}`);   
}
//console.log(`UserPower:${power}`);   //Generate Error because Power Variable Scope is Withing Block 


//----------implicite Scope --------------------------------

const balance = 1000
if(balance<=1000) console.log("True");  // Don't Use Professionaly

//---------------elseif-------------------------------------

const balanced = 250
if(balanced < 500)
{
    console.log("<500");
}else if(balanced < 800)
{
    console.log("<800");
}
else{
    console.log("more than 800");
}

//------------------All Condition are true than Allowed

const userLoggedIn = true
const creditCard = true

if(userLoggedIn && creditCard)
{
    console.log("Allow to buy course");
}
else 
{
    console.log("Fill all the details");
}

//---------------if One True than Allowed


if(userLoggedIn || creditCard)
{
    console.log("Allow to buy course");
}
else 
{
    console.log("Fill all the details");
}


//----------------------Switch-------------------

const month = 6

switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    default:
        console.log("Dont Mtched");
}


//falsy Values 

//------- false, 0, -0, BigInt 0n,  "", null, undefined, NAN ------

//truthy values

//  "0" (Zero in String), 'false' (String), " " (string), [], {}, function(){}, false == 0, false == '', 0 == ''

const userEmail = ""
if(userEmail)
{
    console.log("Got email");
}
else
{
    console.log("Don't get email");
}


//array chcek empty or not 

if(userEmail.length === 0)
{
    console.log("Empty");
}

//object chcek empty or not

const emptyobj = {}
if(Object.keys(emptyobj).length === 0)
{
    console.log("yes,Empty");
}



//-------Nullish Coalescing Oprator (??): null undefined-------

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);

//------Ternary Oprator----------

const price = 100
price <= 80 ? console.log("less than 80") : console.log("More than 80");





