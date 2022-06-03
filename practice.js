// Function to log all pairs of array
// O(n ** 2) - Quadratic Time
const boxes = ['a','b','c','d','e']
function logAllPairsOfArray(array) {
 for (let index = 0; index < array.length; index++) {
    for(let count = 0;count < array.length; count++) {
        console.log(array[index], array[count])
    }
 }
}
logAllPairsOfArray(boxes)
