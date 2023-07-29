/*const reverseString = function(str) {
let reversedStr = "";
let arr = [];
arr = str.split("");

arr = arr.reverse();

for (let i = 0; i < arr.length; i++) {

    reversedStr += arr[i] ;


}

return reversedStr;

}; */

const reverseString = function(str) {
   return str.split("").reverse().join("");
};




console.log(reverseString("hello"))
// Do not edit below this line
module.exports = reverseString;





