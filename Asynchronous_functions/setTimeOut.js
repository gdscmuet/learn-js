

/**
 *  We have used setTimeout () to implement the asynchronous behaviour of JavaScript .
 *  We have put the myFunction in setTimeout which will execute after 3 second even it is called first
 * myFunction2() is called after myFunction() but will execute First 
 * */ 



setTimeout(()=>{
    myFunction();
},3000)

myFunction2();

let myFunction=()=>console.log("myFunction is Called after 3second");

let myFunction2=()=> console.log 
    (
    "myFunction is called before myFunction even it is called after myFunction()"
    );


