'use strict';
/*
http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

A callback function is a function passed into another function as an argument, which is then invoked 
inside the outer function to complete some kind of routine or action.

When we pass a callback function as an argument to another function, we are only passing the function definition.
We are not executing the function in the parameter.

Callbacks are often used to continue code execution after an asynchronous operation has completed

*/
const Look = (direction) => {
    console.log('Looking at direction: ' + direction.toUpperCase());
};

const Walk = (direction) => {
    console.log('Walking in direction: ' + direction.toUpperCase());  
};

//Walk('East');
//Look('East');

const UsingAsyncCallBackMethod = (direction, callBackFunction) => {
    if (typeof callBackFunction === "function")  {
        setTimeout(() => callBackFunction(direction), 
                    1000);
    }
};

console.log('Calling UsingCallBackMethod()');
UsingAsyncCallBackMethod('east', Walk);
UsingAsyncCallBackMethod('west', Look);
console.log('After Calling UsingCallBackMethod()');
console.log('Done with example #1!');


const logBasedOnType = (userData) => 
{
    console.log('Executing Callback method: logBasedOnType');
    if ( typeof userData === "string") {
        console.log(userData);
    }
    else if ( typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
    console.log('Done Executing Callback method: logBasedOnType');
};


const logType = (userData, callback) => {
    if (typeof callback === "function") {
        setTimeout(() => callback(userData), 
        2000);
    }
};

console.log('Example # 2: Calling logType() which is an Async method...');
logType( {name:"Rich", speciality:"JavaScript"}, 
         logBasedOnType);
console.log('Example # 2: Done Calling logType(), which will execute in an Asynchrnous fashion...');


const greatestQBEver = (name, mvpCount) => {
    console.log("Executing callback method: greatestQBEver()")
    console.log(name + " is the greatest QB Ever.");
    console.log("A " + mvpCount + " time NFL MVP.");
    console.log("Done Executing callback method: greatestQBEver()")
};

const whoIsTheGreatestQBEver = (name, mvpAwards, callback) => {
    if (typeof callback === "function") {
        setTimeout(() => callback(name, mvpAwards), 
        2500);
    }
};

whoIsTheGreatestQBEver('Peyton Manning', 6, greatestQBEver );