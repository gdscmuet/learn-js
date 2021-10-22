/*This File Showes How To Create an Array In JavaScript and 

what functions can be applied on Arrays

*/

/** 1: This is How You create an Array */

let Names = ["Aslam", "Ali", "Asadullah"];

///by doing console.log you will be able to see whole Array
console.log(Names);

/** You can see above you don't need any thing extra create the variable and assign the array */


/* 2: How exactly do you check the length of an array?  */

//Here is how

console.log(Names.length);

//Above console.log will output 3 , as we have declared our array with 3 values

/* 3: How to access array values ? */

/*

    You can access value of an array  by passing Index of value you want to access 
    Like If we want to access "ALI" we will need pass 1 to access ALI

*/

console.log(Names[1]);
//Above console log will output "Ali"


/*4: How Would you add Item in the array at its END? */

Names.push("Manzoor"); //This will add item at the end
console.log(Names);

/*Above Lines of Code will add name "Manzoor" at the end of an array, and
    console.log statement will print ['Aslam' , 'Ali' , 'Asadullah' , 'Manzoor']
*/


/* 5: How would you remove Item from the end of an array? */

Names.pop(); // This will remove the last item from an array
console.log(Names);

/* Above Lines will just remove the last element from an array 
 and console.log this array like this ['Aslam' , 'Ali' , 'Asadullah'] */

 /* 6: How would you add item to an array at its start ? */

 Names.unshift('Hira');
 console.log(Names);
 /* Above Lines will just add the element at the start of an array
    and now if we console.log our array , our values will look like 

    ['Hira','Aslam' , 'Ali' , 'Asadullah']
 */

/* 7: How would you remove item from an array beginning */

Names.shift();
console.log(Names);

/* Above lines will just remove the element from the start of an array , and if we console log we will get 

values ['Aslam' , 'Ali' , 'Asadullah'] as "HIRA" will be removed from the array

*/

/* 8: How would you find the index of an item in array? */
let index= Names.indexOf('Asadullah');

console.log(index);
/* In above lines will will return the index of value 'Asadullah' passed to indexOf which will return us 2 */

/* AUTHOR : https://github.com/sarwan920 */
