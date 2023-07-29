const add = function(num1, num2) {
	
return num1 + num2;

};

//console.log(add(0, 0))

const subtract = function(num1, num2) {
	
  return num1 - num2;

};

const sum = function([...arr]) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
};

//console.log(sum([1, 2, 3]))

const multiply = function(...nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {

    product *= nums[i];
  }

return product
};

//console.log(multiply(10, 10, 10, 10, 100))



const power = function(n1, n2) {
	return n1**n2
};

const factorial = function(n) {  // beautiful
if (n == 0 || n == 1) {
  return 1
} else {
  return n * factorial(n - 1);
}


}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
