const leapYears = function(year) {
if (year % 100 == 0) {
    if(year % 400 == 0) {
        return true;
    } else {return false}
} else if (year % 4 == 0) {
    return true
} else {return false} 


// trying a concise approach

//return year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 */



}

console.log(leapYears(200017))

// Do not edit below this line
module.exports = leapYears;
