// Hoisting 

// In JavaScript, before executing any code, the JavaScript engine performs a memory preparation phase known as hoisting.

// During this phase, the engine allocates memory for variables and functions.
// Function declarations are fully hoisted, meaning they can be invoked anywhere within their scope, even before their actual line of declaration.
// Variables declared with var are hoisted and initialized with undefined. This means you can access var variables before their declaration, but their value will be undefined.
// On the other hand:  Variables declared with let and const are also hoisted but remain uninitialized. Accessing them before their declaration in the code results in a ReferenceError.


// Temporal Deadzone 

// This period between the start of the block and the actual declaration of a let or const variable is called the Temporal Dead Zone (TDZ). The TDZ exists from the start of the block until the line where the variable is declared and initialized.


// CODE EXAMPLES 


// function abc(){
//     console.log(a, b. c);

//     const c = 30;
//     let b = 20;
//     var a = 10;
// }

// abc()

// Question: What will be the output? 


// a , b are in temproral deadzone.
// Temproral deadzone: variables which are in scope but yet to be defined 