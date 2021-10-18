function regular() {
    // returning object
    return { name: "john" }
}
let returnedValue = regular()
// printing object returned by regular function
console.log(returnedValue);

// same code written in arrow function
let arrow = () => ({ name: "john" });
returnedValue = arrow();
console.log(returnedValue);