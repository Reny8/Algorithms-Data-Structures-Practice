// Function to log all pairs of array
// O(n^2) - Quadratic Time VERY SLOW NOT THE BEST METHOD
const boxes = ['a','b','c','d','e']
function logAllPairsOfArray(array) {
 for (let index = 0; index < array.length; index++) {
    for(let count = 0;count < array.length; count++) {
        console.log(array[index], array[count])
    }
 }
}
// logAllPairsOfArray(boxes)

// Fins 1st tweet, Find last tweet
const posts = ['hello, Just signed up!', 'Just watched a movie', 'Will be watching the new show tonight']
console.log(posts[0])
console.log(posts[posts.length-1])
