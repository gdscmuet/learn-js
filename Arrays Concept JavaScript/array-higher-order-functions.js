/*

What is higher order function?

A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

*/

/*

1: Array Method .reduce()

    The .reduce() method iterates through an array and returns a single value.

*/

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // 10

//Here above, the .reduce() method will sum all the elements of the array.

/*
2: Array Method .forEach()
    The .forEach() method executes a callback function on each of the elements in an array in order.

*/

const numbers = [28, 77, 45, 99, 27];

numbers.forEach((number) => {
  console.log(number);
});

//Here above, the callback function containing a console.log() method will be executed 5 times, once for each element.

/*

3:Array Method .filter()

    The .filter() method executes a callback function on each element in an array. 
    The callback function for each of the elements must return either true or false. 
    The returned array is a new array with any elements for which the callback function returns true.

*/


const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});

//Here above, the array filteredArray will contain all the elements of randomNumbers but 4.


/** 
 * Array Method .map()
 *The .map() method executes a callback function on each element in an array. 
 *It returns a new array made up of the return values from the callback function.
 * 
 */


 const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
 
console.log(announcements);

//in code above The original array does not get altered, and the returned array may contain different elements than the original array.