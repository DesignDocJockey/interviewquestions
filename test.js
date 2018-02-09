/* JavaScript Problem: 

/*What is the output of this? */
var x; // declaring x
console.log("x is " + x); 

/*Can you write a function that determines the data type of a parameter that is passed in */
function method(param){
    if(typeof param === 'String'){ 
      // If param is of type string then this block of code would execute
    }else if (typeof param === 'Number'){
      // If param is of type number then this block of code would execute
    }else if (typeof param == 'Boolean') {
     // If param is of type boolean then this block of code would execute
    }
}

/*What is the output of this:
*/
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
/*
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
*/
 
/*What is the output of this? */
const arr2 = [10, 12, 15, 21];
for (let i = 0; i < arr2.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
/*
The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3
*/
