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

    // Exercise 1 - removeEvenValues
    /*
    Write a function called "removeEvenValues".
    Given an object, "removeEvenValues" removes any properties whose values
    are even numbers.
    Do this in place and return the original object, do not construct a cloned object
    that omits the properties.
    */

    function removeEvenValues(obj){
        for(var key in obj){
            if(obj[key] % 2 === 0){
                delete obj[key];
            }
        }
        return obj
    }

    var obj = {
        a: 2,
        b: 3,
        c: 4
    };

    removeEvenValues(obj);
    console.log(obj); // --> {b: 3}

    // Exercise 2 - countNumberOfKeys
    /*
    Write a function called "countNumberOfKeys".
    Given an object, "countNumberOfKeys" returns how many properties the given
    object has.
    */

    function countNumberOfKeys(obj){
        var count = 0
        for(var key in obj){
            if(obj[key] !== undefined){
                count++
            }
        }
        return count;
    }

    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    var output = countNumberOfKeys(obj);
    console.log(output); // --> 3

    // Exercise 3 - removeOddValues
    /*
    Write an object, "removeOddValues" removes any properties whose values are
    odd numbers.
    */

    function removeOddValues(obj){
        for(var key in obj){
            if((obj[key])  % 2 >= 1){
                delete obj[key];
            }
        }
        return obj;
    }

    var obj = {
        a: 2,
        b: 3,
        c: 4
    };
    removeOddValues(obj);
    console.log(obj); // --> {a: 2, c: 4}
// --------------------------------------------------------------------------------------------

// Array String Methods 2

    // Exercise 1 - convertDoubleSpaceToSingle
    /*
    Write a function called "convertDoubleSpaceToSingle".
    Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with
    all the double spaces converted to single spaces.
    Notes:
    In order to do this problem, you should be familiar with "String.split", and
    "Array.join".
    */

    function convertDoubleSpaceToSingle(str){
        //split string based on double space
        var splitString = str.split("  ")
        // join array based on single space
        var str = splitString.join(" ");
        return str;
    }

    var output = convertDoubleSpaceToSingle("string  with  double  spaces");
    console.log(output); // --> "string with double spaces"
// --------------------------------------------------------------------------------------------


// Array Methods 7

    // Exercise 1 - joinThreeArrays
    /*
    Write a function called "joinThreeArrays".
    Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1"
    in order followed by the elements in "arr2" in order followed by the elements of
    "arr3" in order.
    Notes:
    You should be familiar with the "concat" method for this problem.
    */

    function joinThreeArrays(arr1, arr2, arr3){
        var joinArray1 = arr1.concat(arr2);
        var joinArray2 = joinArray1.concat(arr3);
        return joinArray2;
    }

    var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
    console.log(output); // --> [1, 2, 3, 4, 5, 6]

    // Exercise 2 - addToFrontOfNew
    /*
    Write a function called "addToFrontOfNew".
    Given an array and an element, "addToFrontOfNew" returns a new array
    containing all the elements of the given array, with the given element added to
    the front.
    Important: It should be a NEW array instance, not the original array instance.
    */

    function addToFrontOfNew(arr, element){
        var updatedArray = arr.slice();
        updatedArray.unshift(element);
        return updatedArray;
    }

    var input = [1, 2];
    var output = addToFrontOfNew(input, 3);
    console.log(output); // --> [3, 1, 2];
    console.log(input); // --> [1, 2]

    // Exercise 3 - addToBackOfNew
    /*
    Write a function called "addToBackNew".
    Given an array and an element, "addToBackNew" returns a clone of the given
    array, with the given element added to the end.
    Important: It should be a NEW array instance, not the original array instance.
    */

    function addToBackOfNew(arr, element){
        var copyArray = arr.slice();
        copyArray.push(element);
        return copyArray;
    }

    var input = [1, 2];
    var output = addToBackOfNew(input, 3);
    console.log(input); // --> [1, 2]
    console.log(output); // --> [1, 2, 3]

    // Exercise 4 - getAllElementsButNth
    /*
    Write a function called "getAllElementsButNth".
    Given an array and an index, "getAllElementsButNth" returns an array with all
    the elements but the nth.
    */

    function getAllElementsButNth(array, n){
        array.splice(n,1)
        return array;
    }

    var output = getAllElementsButNth(['a', 'b', 'c'], 1);
    console.log(output); // --> ['a', 'c']

// --------------------------------------------------------------------------------------------

// Iteration 1

    // Exercise 1 - getIndexOf
    /*
    Write a function called "getIndexOf".
    Given a character and a string, "getIndexOf" returns the first position of the
    given character in the given string.
    Notes:
    Strings are zero indexed, meaning the first character in a string is at 
    position 0.
    When a string contains more than one occurence of a character, it should
    return the index of its first occurrence.
    If the character does not exist in the string, it should return -1.
    Do not use the native indexOf function in your implementation.
    */

    function getIndexOf(char, str){
        for(var i = 0; i < str.length; i++){
            if(str[i] === char){
                return i;
            }
        }
        return -1
    }

    var output = getIndexOf('a', "I am a hacker");
    console.log(output); // --> 2
// --------------------------------------------------------------------------------------------

// Conditionals 7

    //Exercise 1 - areValidCredentials
    /*
    Write a function called "areValidCredentials".
    Given a name and a password, "areValidCredentials", returns true if the name is
    longer than 3 characters, AND, the password is at least 8 characers long.
    Otherwise it returns false.
    */

    function areValidCredentials(name, password){
        if(name.length > 3 && password.length >= 8){
            return true
        } else {
            return false
        }
    }

    var output = areValidCredentials('Ritu', 'mylongpassword')
    console.log(output); // --> true


    // Exercise 2 - findMinLengthOfThreeWords
    /*
    Write a function called "findMinLengthOfThreeWords".
    Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest
    word.
    */

    function findMinLengthOfThreeWords(word1, word2, word3){
        if(word1.length < word2.length && word3.length){
            return word1.length
        } else if(word2.length < word1.length && word3.length){
                return word2.length
            } else if(word3.length < word1.length && word2.length){
                    return word3.length
                } else {
                    return (word1.length, word2.length, word3.length)
                }
            }
        
    

    var output = findMinLengthOfThreeWords('a', 'be', 'see');
    console.log(output); // --> 1

    // Exercise 3 - findMaxLengthOfThreeWords
    /*
    Write a function called "findMaxLengthOfThreeWords".
    Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest
    word.
    */

   function findMaxLengthOfThreeWords(word1, word2, word3){
    if(word1.length > word2.length && word1.length > word3.length){
        return word1.length;
    } else if(word2.length > word1.length && word2.length > word3.length){
        return word2.length;
    } else if(word3.length > word1.length && word3.length > word2.length){
        return word3.length;
    } else {
        return (word1.length, word2.length, word3.length)
    }
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
// --------------------------------------------------------------------------------------------

// Conditionals 9

    // Exercise 1 - getLongestOfThreeWords
    /*
    Write a function called "getLongestOfThreeWords".
    Given 3 words, "getLongestOfThreeWords" returns the longest of three words.
    Notes: 
    If there is a tie, it should return the first word in the tie.
    */

   function getLongestOfThreeWords(word1, word2, word3){
    // add strings to an array
    var words = [word1, word2, word3]
    // create a variable to start at index 0
    var longest = words[0]
    // iterate over array
    for(var i = 1; i< words.length; i++){
        // if array at index.length is greater than current longest variable
        if(words[i].length > longest.length){
            //overwrite longest variable with longest word
            longest = words[i];
        }
    }
    return longest
}

    var output = getLongestOfThreeWords('these', 'three', 'words');
    console.log(output); // --> 'these'


    // Exercise 2 - findShortestOfThreeWords
    /*
    Write a function called "findShortestOfThreeWords".
    Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given
    strings.
    Notes:
    If there are ties, it should return the first word in the parameters list.
    */

    function findShortestOfThreeWords(word1, word2, word3){
    // add string of words to an array
    var words = [word1, word2, word3]
    // create a variable to start at index 0
    var shortest = words[0]
    // iterate over the array
    for(var i = 1; i < words.length; i++){
        if(words[i].length < shortest.length){
            shortest = words[i];
            }
        }
        return shortest
    }

    var output = findShortestOfThreeWords('a', 'two', 'three');
    console.log(output); // --> 'a'
// --------------------------------------------------------------------------------------------

// Advanced 3

    // Exercise 1 - select
    /*
    Write a function called "select".
    Given an array and an object, "select" returns a new object whose properties
    are those in the given object AND whose keys are present in the given array.
    Notes:
    If keys are present in the given array, but are not in the given object, it
    should ignore them
    It does not modify the passed in object.
    */


    function select(arr, obj){
        // create a new object
        var result = {};
        // iterate over the array
        for(var i = 0; i < arr.length; i++){
            if(obj[arr[i]] !== undefined){
                result[arr[i]] = obj[arr[i]];
            }
        }
        return result;
    }

    var arr = ['a', 'c', 'e'];
    var obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };
    var output = select(arr, obj);
    console.log(output); // --> {a: 1, c: 3}
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
