
setTimeout(()=>{
    myFunction();
},3000)

myFunction2();

let myFunction=()=>console.log("myFunction is Called after 3second");

let myFunction2=()=> console.log 
    (
    "myFunction is called before myFunction even it is called after myFunction()"
    );
