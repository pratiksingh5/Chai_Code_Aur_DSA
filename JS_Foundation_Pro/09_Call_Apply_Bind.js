// Call : Immediately invoked function with specified "this" 

// Apply: Same as call but arguments are passed as an Array 

// Bind : Returns a new function, when call has it's this value set to provided value


const person = {
    name: "Tithi",
    age: 25
}

function intro(interest, hobby){
    console.log(`My name is ${this.name} and I am ${this.age} years old. I like ${interest} and ${hobby}`)
}

intro.call(person, "math", "writing")

intro.apply(person, ["science", "painting"])

const boundIntro = intro.bind(person, "literature", "football");
boundIntro()