// Scope 

// Scope governs the accessibility of variables in different parts of the code. It determines where a variable can be accessed and where it cannot.

// There are three types of scopes:
// Global Scope: Variables declared in the global scope can be accessed from anywhere in the code.
// Local Scope: Variables declared within a function are only accessible within that function.
// Block Scope: Variables declared inside a block (like within curly braces {}) are only accessible within that block.

// Scope Chain: 

// Scope chain means a chain of references. JavaScript doesn't give up; it has a hunting mechanism for variables. It keeps searching for the variable. First, it will check in the local scope to see if the variable is accessible. If not, it will look in the outer scope. It will keep going until it reaches the global scope or the global execution context. This continuous hunting for a variable during the chain is called scope chaining. The execution context always searches from the inner scope to the outer scope, but it can't go from the outer scope to the inner scope.


// CODE SAMPLES 

