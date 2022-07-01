// Function to log all pairs of array
// O(n^2) - Quadratic Time VERY SLOW NOT THE BEST METHOD
const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let index = 0; index < array.length; index++) {
    for (let count = 0; count < array.length; count++) {
      console.log(array[index], array[count]);
    }
  }
}
// logAllPairsOfArray(boxes)

// Fins 1st tweet, Find last tweet
// Space Complexity example
const posts = [
  { date: 2014, tweet: "hello, Just signed up!" },
  { date: 2015, tweet: "Just watched a movie" },
  { date: 2022, tweet: "Will be watching the new show tonight" },
];
function firstAndLast(array) {
  console.log(array[0]);
  console.log(array[array.length - 1]);
}
// firstAndLast(posts);

// Given 2 arrays, create a function that let's a user know whether these two arrays contain any common items
// arrays with no size limit
const letters1 = ["a", "b", "c", "x"];
const letters2 = ["z", "y", "a"];
function commonItem(firstArray, secondArray) {
  return firstArray.some((item) => secondArray.includes(item));
}
// console.log(commonItem(letters1, letters2));

function hasPairWithSum(arrayOfNumbers, sum) {
  const mySet = new Set();
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (mySet.has(arrayOfNumbers[index])) {
      return true;
    }
    mySet.add(sum - arrayOfNumbers[index]);
  }
  return false;
}

// console.log(hasPairWithSum([1, 2, 3, 6, 8], 10));

function reverseString(string) {
  let reversed = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reversed += string[index];
  }
  console.log(reversed);
}
// reverseString("Hello I am Reny")

// MOST EFFICIENT WAY TO REVERSE A STRING IN JS
function reverseString2(string) {
  let reversed = string.split("").reduce(function (element, index) {
    return (index += element);
  });
  console.log(reversed);
}
// reverseString2("helloworld")

//HASH TABLE PRACTICE
class HashTable {
  // amount of shelves in memory
  constructor(size) {
    this.data = new Array(size);
  }
  // function to create a small hash table
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // charCodeAt gives an integer between 0 to 65535 representing the UTF-16 code
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
      return undefined;
    }
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

// const table = new HashTable(50);
// table.set("grapes", 10000);
// table.set("apples", 54);
// table.set("oranges", 2);
// table.get("grapes");
// console.log(table.keys());

// PRACTICE PROBLEM WITH HASH TABLE SOLUTION
// FIRST RECURRING NUMBER IN THE ARRAY
function recurringNumber(array) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]] !== undefined) {
      return array[i];
    }
    hash[array[i]] = true;
  }
}
// console.log(recurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]));

// BUILDING A LINK LIST 10 --> 5 --> 16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);
