// BUILDING A LINK LIST 10 --> 5 --> 16
let LinkedListStructure = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      let newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.printList();
    }
    prepend(value) {
      let newNode = new Node(value);
      // pointer to the head first item in the list
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this.printList();
    }
    insert(index, value) {
      if (index >= this.length || index === this.length -1 ) {
        return this.append(value)
      } else if (index === 0) {
        return this.prepend(value);
      }
      let newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const pointer = leader.next;
      leader.next = newNode;
      newNode.next = pointer;
      this.length++;
      this.printList();
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
    remove(index) {
      const leader = this.traverseToIndex(index -1)
     const unwantedNode = leader.next
     leader.next = unwantedNode.next
     this.length--
     return this.printList()
  
    }
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  
  myLinkedList.append(16);
  
  myLinkedList.prepend(1);
  
  myLinkedList.insert(2, 99);
  
  myLinkedList.remove(1)