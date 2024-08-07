// print, size, isEmpty, enqueue, dequeue, peek , clear

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek(){
    return this.queue[0]
  }

  size(){
    return this.queue.length
  }

  clear(){
    this.queue = []
  }

  printQueue(){
    let str = "";
    for(let i = 0; i < this.queue.length; i++){
        str += this.queue[i]
    }
    return str
  }
}
