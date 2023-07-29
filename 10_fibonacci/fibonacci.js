const fibonacci = function(index) {
const fibo = [0, 1]
if (index < 0) {
    return "OOPS"
} else {
for (let i = 1; i < index; i++) {

    fibo.push(fibo[i] + fibo[i - 1])
}
}
console.log(fibo)
return fibo[index]

};

// Do not edit below this line




console.log(fibonacci(4))
module.exports = fibonacci;

