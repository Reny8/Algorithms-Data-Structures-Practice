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
      this.top.next = pointer
    }
    this.length++;
    console.log(this);
  }
  pop() {}
}
const myStack = new Stack();
myStack.push('Google')
myStack.push('Udemy')
myStack.push("Discord");
// myStack.pop()

//Queues
// FIFO
// building with inked lists
