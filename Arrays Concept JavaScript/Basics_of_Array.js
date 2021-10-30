// Array is an ordered list of values. Each element in the array is accessed using index.
// There are two ways to create an array
// First one is to use the Array constructor

let marks = new Array(89, 78, 65, 77, 50);

// Second method is to use the array literal notation
let colors = ['Red', 'Blue', 'Green', 'Yellow'];

// Accessing array elements
console.log(colors[2]);
colors[1] = 'Brown';
console.log(colors);

// We can also find the length of the array
console.log(colors.length);

// Adding element at the end
colors.push('White');
console.log(colors);

// Adding element at the beginning
colors.unshift('Pink');
console.log(colors);

// Removing element from the end
colors.pop();
console.log(colors);

// Removing element from the beginning
colors.shift();
console.log(colors);

// Finding index of a particular element
let i = colors.indexOf('Brown');
console.log(i);

// Converting arrays to string
console.log(colors.toString());

// Deleting elements
delete marks[0];
console.log(marks);

// Merging two arrays
let merg = colors.concat(marks);
console.log(merg)

// Slicing an array
let part1 = colors.slice(2);
console.log(part1);
let part2 = colors.slice(1, 3);
console.log(part2);

// Sorting an array
console.log(marks.sort());

// Reversing an array
console.log(colors.reverse());

// filter method creats a new array with array elements that passes a test
let filter_arr = marks.filter(myFun);

function myFun(value) {
    return value > 70;
}
console.log(filter_arr);