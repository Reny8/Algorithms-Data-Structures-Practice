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
return firstArray.some(item => secondArray.includes(item))
}
console.log(commonItem(letters1, letters2));
