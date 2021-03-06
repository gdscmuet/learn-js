// Topic Difficulty : Easy/Beginner

// In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.

// ## Declaration of an Array ##
// There are two ways to declare an array.
// var House = [ ];              //method no. 1
// var House = new Array();      //method no. 2

// ## Initialization of an Array ##
//Example (for Method 1):
// Initializing while declaring
var house = ["1BHK", "2BHK", "3BHK", "4BHK"];
//Example (for method 2):
// Initializing while declaring
// Creates an array having elements 10, 20, 30, 40, 50
var house = new Array(10, 20, 30, 40, 50);

//Creates an array of 5 undefined elements
var house1 = new Array(5);
//Creates an array with element 1BHK
var home = new Array("!BHK");

// An array in JavaScript can hold different elements
// We can store Numbers, Strings and Boolean in a single array.
//Example:
// Storing number, boolean, strings in an Array
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];

// ## Accessing Array Elements ##
// Array in JavaScript are indexed from 0 so we can access array elements as follows:
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
alert(house[0] + " cost= " + house[1]);
var cost_1BHK = house[1];
var is_for_rent = house[5];
alert("Cost of 1BHK = " + cost_1BHK);
alert("Is house for rent = " + is_for_rent);

// ## Length property of an Array ##
// Length property of an Array returns the length of an Array. Length of an Array is always one more than the highest index of an Array.
//Example below illustrates the length property of an Array:
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];

//len contains the length of the array
var len = house.length;
for (var i = 0; i < len; i++) alert(house[i]);
