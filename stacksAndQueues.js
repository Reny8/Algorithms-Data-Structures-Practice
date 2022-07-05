//Stacks
// LIFO
//top and a bottom which can be built with linked lists or arrays
//building from arrays is not efficient
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return console.log(this.top);
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
    console.log(this);
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // stored the former this.top just in case you would like to use again
    const pointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}
// const myStack = new Stack();
// myStack.push('Google')
// myStack.push('Udemy')
// myStack.push("Discord");
// myStack.pop()

//Queues
// FIFO
// building with inked lists

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    // get first item
    return console.log(this.first);
  }
  enqueue(value) {
    // add
    const newNode = new Node(value)
    if (this.length === 0) {
        this.first = newNode;
        this.last = newNode
    } else {
        this.last.next = newNode;
        this.last = newNode
    }
    this.length++
    return console.log(this)
  }
  dequeue() {
    // remove from the beginning of the stack

  }
}

const myQueue = new Queue() 
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")