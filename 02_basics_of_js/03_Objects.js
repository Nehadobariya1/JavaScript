const instagram = new Object()
instagram.name = "Prins"
instagram.Id = 1245768
instagram.isLoggine = true

// console.log(instagram.name);

const instagramUser = {
    email : "prins@gmail.com",
    fullName : {
        userFullName: {
            firstName : "Prins",
            lastName : "Dobariya"

        },
        perantesDetail: {
            fatherName : "Rameshbhai",
            motherName : "Ramaben"

        }
    },
    isLoggine : false
}

// console.log(instagramUser.fullName.perantesDetail.fatherName);
// console.log(instagramUser.fullName);

// const obj1 = Object.assign({},instagramUser.fullName.userFullName.firstName,instagram)
obj1 = {...instagram,...instagramUser}
// console.log(obj1);
console.log(Object.keys(instagram));
console.log(Object.values(instagram));
console.log(Object.entries(instagram));
console.log(instagram.hasOwnProperty("ID"));


//destructure

const patientDetails = {
    name : "Prins",
    age : 25,
    city : "Rajkot",
    Desies : "Paralized"
}

const {Desies} = patientDetails
const {Desies : rog} = patientDetails
console.log(Desies);
console.log(rog);







