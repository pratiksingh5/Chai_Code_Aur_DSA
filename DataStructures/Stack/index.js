class Stack {
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        this.stack.pop()
    }

    contains(element){
        return this.stack.includes(element)
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack = []
    }

    reverse(){
        this.stack.reverse()
    }

    printStack(){
        let str = "";
        for(let i = 0; i < this.stack.length; i++){
            str += this.stack[i] + "\n"
        }
        return str
    }

}


//usage

let myStack = new Stack();

myStack.push(4);
myStack.push(5);
myStack.push(1);

console.log(myStack.printStack())
console.log(myStack.peek())