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

  }
  lookup(value) {}
}
const tree = new BinarySearchTree()
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
JSON.stringify(traverse(tree.root))


function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree
}