/* let currentYear = new Date().getFullYear()


const findTheOldest = function(arr) {

  return arr.reduce((oldestPerson, Person) => {

   let age = Person.yearOfDeath - Person.yearOfBirth;
   Person.age = age;
    
    if (Person.age > oldestPerson.age) {
        oldestPerson = Person;
    } else if (!Person.hasOwnProperty("yearOfDeath")) {
      
        Person.age = currentYear - Person.yearOfBirth

    }

    

    return oldestPerson;
  }, arr[0])

    
}; */

// Do not edit below this line



let currentDate = new Date();
let currentYear = currentDate.getFullYear()


const findTheOldest = function(arr) {
let age;
 
return arr.reduce((oldestPerson, Person) => {
        if (!Person.hasOwnProperty("yearOfDeath")) { // tests for yearOfDeath property

        age = currentYear - Person.yearOfBirth;             // calculates age if the person is alife
   
    } else {age = Person.yearOfDeath - Person.yearOfBirth } // calculates Person age if the person is dead
     
    Person.age = age;                                   // set age property in the Person Object

      if (Person.age > oldestPerson.age) {              // updates the oldest Person
          oldestPerson = Person;
      }
      
      
      return oldestPerson;
    }, arr[0])
  
      
  };
  

  





  module.exports = findTheOldest;