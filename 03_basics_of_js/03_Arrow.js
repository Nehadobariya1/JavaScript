//thisc->current Contex
//Browser global object is window object

const user = {
    name : "Krish",
    price : 1099,

    welcomeMessage : function()
    {
        console.log(`${this.name}, Welcome to website.`);
        //console.log(this);
    }
}

user.welcomeMessage()
user.name = "Hemang"
user.welcomeMessage()

//console.log(this);  //{} -> empty

const  One = {
    userName : "Krish",

    welcome : function()
    {
        console.log(`${this.userName}, Welocome`)
    }
}
One.welcome()

const Details = () => 
{
    let user = "Raj"
    console.log(this.user);
}

Details()   //Undefined

//-----------------arrow Function
//-----------------Explicite return

const User = (no1, no2) => 
{
    return no1 + no2
}
console.log(User(10,5));


//----------------Implicite return 

const User1 = (no1, no2) => no1 + no2
const User2 = (no1, no2) => (no1 + no2)
const User3 = (no1, no2) => ({username: "raj"})

console.log(User1(10,2));

