/*const sumAll = function(n1, n2) {
let sum = 0;
if (typeof n1 != "number" || typeof n2 != "number" || n1 < 0 || n2 < 0) {
    return "ERROR"
}



else if (n1 > n2) {
    for (let i = n2; i <= n1; i++) {
        sum += i;
     
     }



} else {

    for (let i = n1; i <= n2; i++) {
   sum += i;

} }
return sum 


}; */



const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max ; i++) {
      sum += i;
    }
    return sum;
  };
  
  module.exports = sumAll;



console.log(sumAll (1, "dhf"))
console.log(sumAll (1, 9))

// Do not edit below this line
module.exports = sumAll;
