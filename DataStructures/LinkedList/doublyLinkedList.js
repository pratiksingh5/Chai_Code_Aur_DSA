class Node {
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
}


// insert at beginning

DoublyLinkedList.prototype.insertAtBeginning =  function(data){
    const newNode = new Node(data, this.head, null);

    if(this.head !== null){
      this.head.prev = newNode
    }
    this.head = newNode

    if(this.tail === null){
        this.tail = newNode
    }
}


DoublyLinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data, null, this.tail)

    if(this.tail.next !== null){
        this.tail.next = newNode
    }

    this.tail = newNode

    if(this.head === null) {
        this.head = newNode
    }
}

DoublyLinkedList.prototype.insertAtAfter = function(prevNode, data) {
    if(prevNode === null){
        console.log("Invalid Prev Node");
        return
    }

    const newNode = new Node(data, prevNode.next.prev, prevNode);

    if(prevNode.next !==  null) {
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode

    // handling tail
    if(newNode.next === null){
        this.tail = newNode
    }
}

//delete first node

DoublyLinkedList.prototype.deleteFirstNode = function() {
    if(this.head === null){
        return
    }

    if(this.head === this.tail) {
        this.head = null
        this.tail = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}


//delete last Node

DoublyLinkedList.prototype.deleteLastNode = function() {
    if(this.tail === null){
        return
    }

    if(this.head === this.tail) {
        this.head = null
        this.tail = null
    } else {
        this.tail = this.head.prev
        this.head.next = null
    }
}


// Reverse a doubly linked list 

DoublyLinkedList.prototype.reverse = function() {
    let current = this.head
    let temp = null

    while(current !== null) {
        // swapping
        temp = current.prev
        current.prev = current.next
        current.next = temp

       // move to next node 
       current = current.prev
    }

    if(temp !== null) {
        this.tail = this.head
        this.head = temp.prev
    }
}