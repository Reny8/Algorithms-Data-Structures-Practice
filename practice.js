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
  let reversed = ""
  for (let index = string.length - 1; index >= 0; index--) {
    reversed += string[index];
  }
  console.log(reversed);
}
// reverseString("Hello I am Reny")

// MOST EFFICIENT WAY TO REVERSE A STRING IN JS
function reverseString2(string) {
  let reversed = string.split('').reduce(function(element, index){
      return index += element
  })
  console.log(reversed);
}
// reverseString2("helloworld")

//HASH TABLE PRACTICE 
class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  
}
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhh!')
  }
}
//SEARCH 
console.log(user.age)
//ADDING
user.spell = 'abra kadabra'
console.log(user)
// ACCESSING IN MEMORY
user.scream()