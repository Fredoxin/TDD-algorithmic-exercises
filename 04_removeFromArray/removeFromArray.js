const removeFromArray = function(arr, ...element) {

const newArr = arr.filter((item) => {
   return !element.includes(item)
})
 return newArr;
 
}

console.log(removeFromArray([1,2,3,4], 4))
console.log(removeFromArray([1,2,3,4], 2, 3))

// Do not edit below this line
module.exports = removeFromArray;
 