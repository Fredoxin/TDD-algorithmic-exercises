const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]





//let arrTitles = [];
/*const getTheTitles = function(arrObj) {
    
    for (let i = 0; i < arrObj.length; i++) {

      arrTitles.push(arrObj[i].title); 

       
    }
    return arrTitles;
}; */




const getTheTitles = function(arr) {
  
return arr.map((book) => book.title)  
  

}; 

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
