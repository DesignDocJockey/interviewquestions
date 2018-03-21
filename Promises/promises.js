'use strict';
//https://scotch.io/tutorials/javascript-promises-for-dummies
/* Promises have 3 states: 
    -> pending 
    -> resolved 
    -> rejected

   Promises are asynchronous such that the code within the promise will run without blocking or waiting for the result. 
   Anything that need to wait for promise to proceed, you put that in a .then() clause
*/

var isPromisefullfilled = true;
//var isPromisefullfilled = false;

const jobOffer = new Promise( (resolve, reject) => {
    if (isPromisefullfilled)
    {
        let position = {
            job: 'Sr. Software Engineer',
            salary: '125K'
        };
        //when the result is successful, call the resolve (success_value) function passing in the return 
        //value
        resolve(position);
    } else {
        //when the result has failed, call the reject(failed_value) function passing in the error
        //value
        reject(new Error('promise was not fullfilled and hence rejected!'));
    }
});

jobOffer
    .then((fulfilled) =>{
        console.log('Promise has been fullfilled!');
        console.log(fulfilled);
        // output: {   job: 'Sr. Software Engineer', salary: '125K' }
    })
    .catch((error) =>{
        console.log('Promise has been rejected!');
        console.log(error.message);
        // output: 'promise was not fullfilled and hence rejected!'
    });

/* Promises can be chained together where it calls another function to execute asynchronously 
   after it has been resolved/rejected.

   For example, a promise can resolve itself, then call another function in the then() clause that
   will return another promise and so forth 
   i.e 
   promise1.then(promise2Function)
           .then(promise3Function)
           .then(promise4Function)
           .then(finallResolutionMethod)
           .catch((error) =>{ put catch error or promise failure here });
*/

const ConductInterview = (firstName, lastName, isScreenerPassed) => {
    return new Promise(
        (resolve, reject) => 
        {
            console.log('Conducting Interview');
            if(isScreenerPassed) {
                let interviewScore = { FirstName: firstName, LastName: lastName, Score: 85.00};
                resolve(interviewScore);
            }
            else
                reject(new Error('Canindate Failed Interview'));
        }
    );
};

const AssignSalaryRange = (interviewScore) => {
    return new Promise(
        (resolve, reject) => 
        {
            console.log('Interview Passed, Assigning Salary');
            if(interviewScore.Score >= 90) {
                let salaryRangeA = {FirstName: interviewScore.FirstName, LastName: interviewScore.LastName, minSalary: 22000000,  maxSalary: 28000000}
                resolve(salaryRangeA);
            }
            else if(interviewScore.Score < 90 && interviewScore.Score >= 80) {
                let salaryRangeB = {FirstName: interviewScore.FirstName, LastName: interviewScore.LastName, minSalary: 18000000,  maxSalary: 22000000}
                resolve(salaryRangeB);
            }
            else if(interviewScore.Score < 80 && interviewScore.Score >= 70) {
                let salaryRangeC = {FirstName: interviewScore.FirstName, LastName: interviewScore.LastName, minSalary: 10000000,  maxSalary: 18000000}
                resolve(salaryRangeC);
            }
            else {
                let salaryRangeD = {FirstName: interviewScore.FirstName, LastName: interviewScore.LastName, minSalary: 8000000,  maxSalary: 10000000}
                resolve(salaryRangeD);
            }
        }
    );
};

const CraftContract = (salaryRange) => {
    return new Promise(
        (resolve, reject) => 
        {
            console.log('Interview Passed, Salary Assigned, Crafting Contract');
            let contract = {
                FirstName: salaryRange.FirstName, 
                LastName: salaryRange.LastName, 
                minSalary: salaryRange.minSalary,  
                maxSalary: salaryRange.maxSalary,
                contractBody: 'This is your salary'
            };
            resolve(contract)
        });
};

var isScreenerPassed = true;
ConductInterview('Peyton', 'Manning', isScreenerPassed)
    .then(score => {
        return AssignSalaryRange(score);
    })
    .then(salary => {
        return CraftContract(salary);
    })
    .then(fullfilled => {
        console.log('Promise Fullfilled. Job Offer: ' + fullfilled.contractBody);
    })
    .catch(failure => {
        console.log(failure.message);
    });
