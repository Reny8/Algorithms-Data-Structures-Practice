class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new DoublyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}
