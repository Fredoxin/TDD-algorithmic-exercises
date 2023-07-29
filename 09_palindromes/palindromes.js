const palindromes = function (string) {
    let reversedString = "";
    let newString = string.replace(/[^a-zA-Z1-9]/g, "").toLowerCase()

    for (let i = 0; i < newString.length; i++) {

      reversedString += newString[newString.length - 1 - i];
      
}

return reversedString == newString;

}




// Do not edit below this line
module.exports = palindromes;
