// Prototypal Inheritance 

// Linking of prototypes of a parent object to a child object to share and utilize properties of parent class.
// It means that properties and methods can be transferred from one object to another through the prototype.

// For example, methods like .join and .length are part of prototypal inheritance because these properties come from the main Object class in JavaScript and are available in your objects.

// In JavaScript, everything is an object, so objects can share properties. This means that arrays can use methods from objects, and strings can do the same.


// CODE EXAMPLES 

let faang = {
    name: "google",
    salary: function(){
        console.log("100K Salary")
    }
}

// let engineer = {
//     employeeId: 1278,
//     role: function(){
//         console.log("Frontend Developer")
//     }
// }

// engineer.__proto__ = faang;
// console.log(engineer)
// engineer.salary()


let engineer = Object.create(faang, {
    role: function(){
        console.log("Backend Developer")
    }
})

// let engineer = Object.create(faang, {
//     employeeId: {
//         value: 1278,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     role: {
//         value: function() {
//             console.log("Backend Developer");
//         },
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// console.log(engineer)
// engineer.salary()


// let res = Object.getPrototypeOf(faang);
// console.log(res)


// Property Shadowing: 

let obj1 = {
    name: "chai",
    __proto__ : {
        name: "tea"
    }
}

let obj2 = {
    name: "chai",
    __proto__ : {
        name: "tea",
        __proto__: {
            type: "masala"
        }
    }
}

console.log(obj1.name)
console.log(obj2.type)

// Monkey Patching 
// Do not add Array.prototype.customLength 
