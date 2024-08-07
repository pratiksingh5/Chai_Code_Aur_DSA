// Promise 

// A Promise in JavaScript acts as a placeholder that can resolve or reject in future.
// Promise adds asynchronous operation behaviour to JavaScript.

// When a promise is created, its prototype will be of type Promise, and its initial status is "pending", with the result being undefined.

// Promises have two main components:

// Status: Indicates the state of the promise (pending, fulfilled, or rejected).
// Result: The value associated with a fulfilled promise or the reason for a rejected promise. 

// A promise can be in one of the following states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise now has a value.
// Rejected: The operation failed, and the promise has a reason for the failure.


// A Promise in JavaScript acts as a placeholder for a value that may be available now, in the future, or never. It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// When a promise is created, its prototype will be of type Promise, and its initial status is "pending", with the result being undefined. A promise can be in one of the following states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise now has a value.
// Rejected: The operation failed, and the promise has a reason for the failure.
// Promises have two main components:

// Status: Indicates the state of the promise (pending, fulfilled, or rejected).
// Result: The value associated with a fulfilled promise or the reason for a rejected promise.
// Handling Promises
// Promises provide methods to handle the outcome of the asynchronous operation:

// .then(): Used to handle the fulfilled state and obtain the resolved value.
// .catch(): Used to handle the rejected state and catch any errors that occurred during the execution.
// .finally(): This method executes a callback when the promise is settled, meaning it will run whether the promise is fulfilled or rejected.



// CODE EXAMPLES 


console.log("Start");

setTimeout(() => {
    console.log("Timeout")
}, 0)

Promise.resolve("Promise")
    .then((res) => console.log(res))

console.log("End")

// Start 
// End 
// Promise 
// Timeout 