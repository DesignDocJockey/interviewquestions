'use strict';
/*
 when an exception is thrown in an async function, this will return a rejected promise
*/

var returnedAsyncFunction = async() => {
    return 'Hello World';
};

// when an async function is called, everything returned from that function will be wrapped in a resolved promise
console.log(returnedAsyncFunction());
//output: Promise { 'Hello World' }

returnedAsyncFunction()
    .then(r => console.log(r));
//output: 'Hello World' 

/*
var returnedExceptionAsyncFunction = async() => {
    throw new Error('A Rejected Promise');
};

returnedExceptionAsyncFunction()
    .catch(error => console.log(error));
*/
/* Output:
Error: A Rejected Promise
    at returnedExceptionAsyncFunction (C:\DevProjects\nodejsquestions\Promises\async.js:19:11)
    at Object.<anonymous> (C:\DevProjects\nodejsquestions\Promises\async.js:22:1)
    at Module._compile (module.js:649:30)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
    at Function.Module.runMain (module.js:690:10)
    at startup (bootstrap_node.js:194:16)
    at bootstrap_node.js:666:3
*/