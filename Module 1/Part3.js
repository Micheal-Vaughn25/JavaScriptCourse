// --------------------------------------------------------------------------------------------

// Array String Methods 1

    // Exercise 1 - getAllLetters
    /*
    Write a function called "getAllLetters".
    Given a word, "getAllLetters" returns an array containing every character in the
    word.

    Notes:
    If given an emptry string, it should return an empty array.
    You should be familiar with the 'split' method.
    */

   function getAllLetters(str) {
    if(getAllLetters === ''){
      return [];
    }
    var splitCharacters = str.split('');
    return splitCharacters;
    }
  
    var output = getAllLetters('Radagast');
    console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

    // Exercise 2 - getAllWords
    /*
    Wring a function called "getAllWords".
    Given a sentence, "getAllWords" returns an array containing every word in the
    sentence.
    Notes:
    If given an emptry string, it should return an empty array.
    You should be familiar with the 'split' method.
    */

    function getAllWords(str){
    if(str === ''){
        return [];
    }
    var splitWords = str.split(' ');
    return splitWords;
    }

    var output = getAllWords('Radagast the brown');
    console.log(output); // --> ['Radagast', 'the', 'Brown']

// --------------------------------------------------------------------------------------------

// Advanced 2

    // Exercise 1 - countWords
    /*
    Write a function called "countWords".
    Given a string, "countWords" returns an object where each key is a word in the
    given string, with its value being how many times that word appeared in the
    given string.
    Notes:
    If given an emptry string, it should return an empty object.
    */

   function countWords(str){
    if(str === ''){
      return {};
  }
  // declare a variable to count
  var count = {};
  // declare a variable used to split words
  var splitWords = str.split(' ');
  // console.log(splitWords);
  // iterate over the string
  for(var i = 0; i < splitWords.length; i++){
      var currentWord = splitWords[i];
      if(count[currentWord] === undefined){
          count[currentWord] = 1;
      } else {
          count[currentWord]++;
      }
  }
  return count;
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
// --------------------------------------------------------------------------------------------

// Conditionals 6

    // Exercise 1 - or
    /*
    Write a function called "or".
    Given 2 boolean expressions, "or" returns true or false, corresponding to the '||'
    operator. Notes:
    Do note use the || operator
    Use ! and && operators instead.
    */

    function or(expression1, expression2){
        return !(!expression1 && !expression2);
    }

    var output = or(true, false);
    console.log(output); // --> true;

    // Exercise 2 - isEitherEvenOrAreBoth7
    /*
    Write a function called "isEitherEvenOrAreBoth7".
    Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of
    them is even, or, both of them are 7.
    */


    function isEitherEvenOrAreBoth7(num1, num2){
        return(num1 === 7 && num2 === 7 || num1 % 2 === 0 || num2 % 2 === 0)
    }

    var output = isEitherEvenOrAreBoth7(3, 7);
    console.log(output); // --> false

    var output = isEitherEvenOrAreBoth7(2, 3);
    console.log(output); // --> true

    // Exercise 3 - isEitherEvenAndLessThan9
    /*
    Write a function called "isEitherEvenAndLessThan9".
    Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one
    of them is even, and, both of them are less than 9.
    */


    function isEitherEvenAndLessThan9(num1, num2){
        return((num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9);
    }

    var output = isEitherEvenAndLessThan9(2, 4);
    console.log(output); // --> true

    var output = isEitherEvenAndLessThan9(72, 2);
    console.log(output); // --> false
// --------------------------------------------------------------------------------------------


// Advanced 2

    // Exercise 1 - extend
    /*
    Write a function called "extend".
    Given two objects, "extend" adds properties from the 2nd object to the 1st
    object.
    Notes:
    Add any keys that are not in the 1st object.
    If the 1st object already has a given key, ignore it (do not overwrite the property values)
    Do not modify the 2nd object at all.
    */


    function extend(obj1, obj2){
        for(var keyFromObj2 in obj2){
            if(obj1[keyFromObj2] === undefined) {
                obj1[keyFromObj2] = obj2[keyFromObj2]
            }
        }
    }

    var obj1 = {
        a: 1,
        b: 2
    };
    var obj2 = {
        b: 4,
        c: 3
    };

    extend(obj1, obj2);

    console.log(obj1); // --> {1: 1, b: 2, c: 3}
    console.log(obj2); // --> {b: 4, c: 3}
// --------------------------------------------------------------------------------------------

// Objects 6

      // Exercise 1 - removeArrayValues
      /*
      Write a function called "removeArrayValues".
      Given an object, "removeArrayValues" removes any properties whose values
      are arrays.
      */

      function removeArrayValues(obj){
          for(var keyArray in obj){
              if(Array.isArray(obj[keyArray])){
                  delete obj[keyArray];
              }
          }
          return obj;
      }

      var obj = {
          a: [1, 3, 4],
          b: 2,
          c: ['hi', 'there']
      }
      removeArrayValues(obj);
      console.log(obj); // --> {b: 2}

      // Exercise 2 - removeNumberValues
      /*
      Write a function called "removeNumberValues".
      Given an object, "removeNumberValues" removes any properties whose values
      are numbers.
      */

     function removeNumberValues(obj){
        for(var key in obj){
            if(Number.isInteger(obj[key])){
                delete obj[key]
            }
        }
        return obj
    }

    var obj = {
        a: 2,
        b: 'remaining',
        C: 4
    };
    removeNumberValues(obj);
    console.log(obj); // --> {b: 'remaining'}

    // Exercise 3 - removeStringValues
    /*
    Write a function called "removeStringValues".
    Given an object, "removeStringValues" removes any properties on the given
    object whose values are strings.
    */

    function removeStringValues(obj){
        for(var key in obj){
            if(typeof(obj[key]) === 'string'){
                delete obj[key];
            }
        }
        return obj;
    }

    var obj = {
        name: 'Sam',
        age: 20
    }
    removeStringValues(obj);
    console.log(obj); // {age: 20}
    
// --------------------------------------------------------------------------------------------

// Objects 4

    // Exercise 1 - removeNumbersLargerThan
    /*
    Write a function called "removeNumbersLargerThan".
    Given a number and an object, "removeNumbersLargerThan" removes any
    properties whose values are numbers greater than the given number.
    */

    function removeNumbersLargerThan(num, obj){
        for(var key in obj){
            if(obj[key] > num){
                delete obj[key]
            }
        }
        return obj
        }

    var obj = {
        a: 8,
        b: 2,
        c: 'montana'
    }
    removeNumbersLargerThan(5, obj);
    console.log(obj); // --> {b: 2, c: 'montana'}


    // Exercise 2 - removeNumbersLessThan
    /*
    Write a function called "removeNumbersLessThan".
    Given a number and an object, "removeNumbersLessThan" removes any
    properties whose values are numbers less than the given number.
    */

    function removeNumbersLessThan(num, obj){
        for(var key in obj){
            if(obj[key] < num){
                delete obj[key];
            }
        }
        return obj;
    }

    var obj = {
        a: 8,
        b: 2,
        c: 'montana'
    }
    removeNumbersLessThan(5, obj);
    console.log(obj); // --> {a: 8, c: 'montana'}

    // Exercise 3 - removeStringValuesLongerThan
    /*
    Write a function called "removeStringValuesLongerThan".
    Given an number and an object, "removeStringValuesLongerThan" removes any
    properties on the given object whose values are strings longer than the given
    number.
    */

    function removeStringValuesLongerThan(num, obj){
        for(var key in obj){
            keyLength = obj[key]
            if(keyLength.length > num){
                delete obj[key];
            }
        }
        return obj;
    }

    var obj = {
        name: 'Montana',
        age: 20,
        location: 'Texas'
    };
    removeStringValuesLongerThan(6, obj);
    console.log(obj); // {age: 20, location: 'Texas'}
// --------------------------------------------------------------------------------------------

// Objects 5
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
