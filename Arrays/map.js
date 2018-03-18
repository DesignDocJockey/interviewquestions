'use strict'

//the map() function is similar to the .select() extension method as it creates a
//a new array with the results of calling a provided callback function on every element in the calling array
//to transform those elements 
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length));
//output is: [8, 6, 7, 9]

//can also be written as
materials.map(function(material) { 
    return material.length; 
  });
//output is: [8, 6, 7, 9]

//callback is invoked with three arguments: 
//the value of the element
//the index of the element
//the Array object being traversed.

const starter = [1, 5, 5];
function multiplyByNext (val, index, arr) {
    var next = index + 1;
    // If at the end of array
    // use the first element
    if (next === arr.length) {
        next = 0;
    }
    return val * arr[next];
}

const transformed = starter.map(multiplyByNext);
console.log(transformed);
// Outputs: [5, 25, 5]

const arr = [1, 2, 3, 4];
let arrTimes5 = arr.map(element => {
    return element * 5;
});
console.log(arrTimes5);
//output is: [ 5, 10, 15, 20 ]

const colors = [
    {r: 255, g: 255, b: 255 }, // White
    {r: 128, g: 128, b: 128 }, // Gray
    {r: 0,   g: 0,   b: 0   }  // Black
];

console.log(colors);
let newArray = colors.map((element, index, array) =>  {
        let obj = {};
        console.log("r: " + element.r);
        console.log("g: " + element.g);
        console.log("b: " + element.b);
        obj.r = ((element.r + element.g)) * (index + 1);
        obj.g = ((element.g + element.b)) * (index + 1);
        return obj;
    });
console.log(newArray);
//output is: [ { r: 510, g: 510 }, { r: 256, g: 256 }, { r: 0, g: 0 } ]

const newArr = arr.map((element, index, array) => {
    return {
      value: element,
      index: index
    };
  });
  console.log(newArr);