
// Closure

// In JavaScript, a closure is a function along with its lexical scope,  which allows it to access variables from its outer (enclosing) scope even after that scope has finished executing. 
// A closure allows a  function to remember and access variables from the environment in  which it was created, even if the function is executed in a different  scope.


// Lexical Scope 

// In JavaScript, lexical scope is the concept of determining the scope of a variable based on its declaration. This means that the scope of a variable is determined by the block of code in which it is declared, not by the block of code in which it is used.


// Inner lexical environment refer to outer lexical environment. When outer LE is not referenced, it is garbage collected


// CODE EXAMPLES 

const getValue = () => {
  let score = 10;
  return () => ++score; // yaad rkhna method return kr rha value ni
};

const value = getValue();
console.log(value()); // 11
console.log(value()); // 12

const newValue = getValue();
console.log(newValue()); // 11  Kynki naya reference bana hai

function loadBalance() {
  let userBalance = 100;

  function addBalance() {
    let newValue = ++userBalance;
    return newValue;
  }

  return { addBalance };
}


const balance = loadBalance();
console.log(balance.addBalance()) // 101
console.log(balance.addBalance()) // 102

console.log(loadBalance().addBalance()) // 101

