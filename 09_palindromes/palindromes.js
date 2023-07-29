

const palindromes = function (string) {
    let reversedString = "";
    let punctuation = string.slice(string.length -1)

for (let i = 0; i < string.length; i++) {

       reversedString += string[string.length - 1 - i];

}


if (string[string.length -1] == "." ||string[string.length -1] == "?" || string[string.length -1] == "!" ) {
   reversedString = reversedString.slice(1)
    reversedString += punctuation;
} 
console.log(reversedString)
console.log(string)
return reversedString.toLowerCase() == string.toLowerCase();

}

console.log(palindromes("Otto, otto"))


// Do not edit below this line
module.exports = palindromes;
