// REPRESENTATION OF A BINARY TREE NODE
class binaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new binaryTreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //INSERT THE NUMBER TO LEFT
          if (!currentNode.left) {
            // If there is not a value in the left
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // INSERT THE NUMBER TO RIGHT
          if (!currentNode.right) {
            // If there is not a value in the right
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {}
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4)
tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
