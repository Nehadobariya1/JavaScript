//for 

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 7) {
        //console.log("7 is my Birthdate");
    }
    //console.log(element);
    
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        //console.log(`${i} ${j}`);
        
    }
    
}

for (let i = 1; i < 5; i++) {
    console.log();
    for (let j = 1; j <= 10; j++) {
        let result=i*j
        //console.log(`${i}*${j}=${result} `);
        
    }
    
}

let arr=["Ironman","Spiderman","batman"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

for (let i = 0; i < 10; i++) {
   console.log(i);
   if(i == 7)
   {
    console.log("detected");
    break
   }
    
}

for (let i = 0; i < 10; i++) {
    
    if(i == 7)
    {
     console.log("detected");
     continue
    }
    console.log(i);
     
 }