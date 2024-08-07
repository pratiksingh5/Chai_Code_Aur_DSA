// Explain Event Loop 

// JavaScript is a single-threaded language, meaning it can only execute one task at a time within a single call stack. However, despite this single-threaded nature, JavaScript is capable of performing asynchronous, non-blocking operations thanks to the event loop.

// The event loop is a fundamental mechanism in JavaScript that handles asynchronous operations. When a task, such as an HTTP request or a DOM event, is initiated, it is handed off to browser APIs.

// The event loop continuously monitors the call stack and the task queues. If the call stack is empty, the event loop first checks the microtask queue for any pending tasks and executes them. Once the microtask queue is empty, the event loop then checks the macrotask queue and moves tasks from there to the call stack for execution. This process ensures that high-priority tasks (microtasks) are executed before lower-priority tasks (macrotasks).


// CODE EXAMPLES 


const one = () => console.log("First");
const two = () => setTimeout(() => console.log("Second"), 500);
const three = () => console.log("Third")


two();
one();
three();

// Output 

// First 
// Third
// Second 