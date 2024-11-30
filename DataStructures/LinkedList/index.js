class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at the beginning

// 1. take data
// 2. convert to Node
// 3. Add this node to Head

// Humara node pehle null ko point kr rha tha toh whi hum change kr denge

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// Insert at the end

// 1. take data
// 2. Convert it to node
// 3. Check ih head is pointing to null
// Agar kr rha hai toh Add krdo matlab whi last hai
// 4. Par agar wo null ko point ni kar rha -->Mtlb wo koi data ko point kr rha --aur aisa hai toh --
// Hume jump karna hai next pe aur aage jump krte jana hai jab tk head null ko point naa kare

// Move to End Ka ninja technique

// 1. Assume head is last
// 2. verify (last.next ==  null) --> agar kr rha toh Add krdo [Mtlb last me add hogya ban gya tail]
// Simple sa baat hai bhai ki tail (Par hum head ko manege) null ko point tb hi krta hai jab uska next null ho , agar wo null nhi toh wo aakhri nhi

// Agar nai kr rha toh Update last with new value

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;

  while (last.next) {
    last = last.next; // Agar last.next hai toh usiko last maan lete hai
  }

  last.next = newNode;
};

// Insert at Given Node

// [6, ..] ---> ye indirect bol rha ki ye apka prevNode hai aap iske aage add kro

// [7, PrevNode.next]

// toh humne kya kiya [6, ..] --> iske nextNode ko 7 point(data) krwa diya aur
// [8, ...] -->
// [7,PrevNode.next] --> iska next point krega [8, ...]

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("The given prev Node cannot be null");
  }
  const newNode = new Node(data, prevNode.next); // Ye prevNode.next 8 wale ko point krega
  prevNode.next = newNode; // Yahan humne insert kr diya
};

// Delete First Node or Delete Head

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

// Delete Last Node (Second Last node)

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // nothing to delete if list is empty
  }

  if (!this.head.next) {
    this.head = null; // if there is only one node
  }

  let secondLast = this.head;

  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  // if list is empty
  if (!this.head) {
    this.head = this.head.next;
    return;
  }

  if(this.head.data === key) {
    this.head = this.head.next;
    return
  }

  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }

    current = current.next;
  }

  console.log("No node found with key", key)
};


//search operation

LinkedList.prototype.search = function(key){
    let current = this.head

    while(current){
        if(current.data === key){
            return true
        }
    }

    return false
}


//traversal

LinkedList.prototype.printList = function(){
    let current = this.head

    let listValues = []
    while(current){
        listValues.push(current.data)
        current = current.next
    }

    console.log(listValues.join(" -> "))

   
}