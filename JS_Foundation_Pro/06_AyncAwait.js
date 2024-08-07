// async await 

// In JavaScript async function returns a Promise. 
// The await keyword pauses the execution of the aync function until the awaited promise resolves.
// After await rest of async function gets in microtask queue. This allows for more readable and manageable asynchronous code.




// Promise.resolve("hello") == async function intro(){
//                                     return "hello"
//                                     }

// await can suspend asynchronous function while we wait for awaited value return a resolved promise 

// after await rest of async function gets in microtask queue 

// const one = () => Promise.resolve("one");    // Ye synchronous code hai

// async function test() {
//     console.log("Inside test function");
//     const result = await one();
//     console.log(result);
// }

// console.log("Before calling test function");

// test();

// console.log("After calling test function");


// Answer: 
// Before calling test function
// Inside test function
// After calling test function
// one


console.log("Script start");

setTimeout(() => console.log("Timeout"), 0)  // Macro task

new Promise((resolve, reject) => {
    console.log("Promise Constructor");  // Synchronous code
    resolve("Promise resolved")
}).then(function(res){
    console.log(res)  // microtask
})


async function asynFunction() {
    console.log("async Function start");
    await new Promise((resolve, reject) => {
        console.log("Promise inside Async Function");
        resolve("Async Await resolved")
    })

    console.log("Async function end")
}

asynFunction()

console.log("Script End")


// Answer : 
// Script start 
// Promise Constructor 
// async Function start 
// Promise inside Async Function 
// Script End 
// Promise resolved 
// Async function end 
// Timeout

// Async Await resolved  Ye Print nhi hua