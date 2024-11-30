let fib = function(n) {
    if (n === 0) return 0
    if(n === 1) return 1

    return fib(n - 1) + fib(n - 2)
}

console.log(fib(8))

// 0 1 1 2 3 5 8 13 21 ... 


// Tribonacci   
// T0 = 0
// T1 = 1
// T2 = 1
// T (n + 3) = Tn + Tn + 1 + Tn + 2 

let tribonacci = function(n) {
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1

   return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}

console.log(tribonacci(8)) 
// Time  Limit Exceeds