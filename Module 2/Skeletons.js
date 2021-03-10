// Average

    /*
    Use the skeleton provided to write a working implementation of a sum and an
    average function. The solution will require that you wil luse your sum function within your
    average function. While you should create your own test suite to get the most out of
    this exercise, there are outmated tests provided as well.
    */

    // Skeleton

    // FUNCTION DEFINITIONS
    function average(numbers){
        // use sum function
        var totalSumOfArray = sum(numbers);
        var average = totalSumOfArray / numbers.length
        // returns the average of an array of numbers
        return average;
    }

    function sum(numbers){
        // returns the sum of an array of numbers
        // create result variable
        var result = 0;
        //iterate over array
        for(var i = 0; i < numbers.length; i++){
            // add each number in array to result variable
            result += numbers[i];
        }
        return result;
    }

    // ASSERTION FUNCTIONS TO BE USED
    function assertEquals(actual, expected, testName){
        if(actual === expected){
            return 'Pass';
        } else {
            return 'FAILED [' + testName + ']'
        }
    }

    // TEST CASES
    // sample input
    var input = [1, 2, 3, 4, 5];

    // test case for sum
    var actualSum = sum(input);
    var expectedSum = 15;
    assertEquals(actualSum, expectedSum, 'numbers added')

    // test case for average
    var actualAverage = average(input);
    var expectedAverage = 3;
    assertEquals(actualAverage, expectedAverage, 'average of numbers')
//---------------------------------------------------------------------------------------------
// Decorate Student List

    // Exercise
    /*
    Write a function called decorateClassListWithAges. Convert from an array, in this
    case a class list of names, to an array of object literals decorated with a name and an
    age for each student. Your decorateClassListWithAges function should use the
    provided getRandomIntInclusive as part of its solution. (The ages should be 
    randomly generated for each student, either age 10 or age 11).

    The "test suite" that you should write for this question will be one of the most complex we
    have seen so far. In order to verify that your code works as expected, you will need to
    find a way to iterate over the actual array result of your function, then ensure that the
    age value for each object in your results is "within the range" of 10 to 11. If you are 
    have tremendous difficulty constructing your test suite, please feel free to consult
    the reference answers.

    While you should create your own test suite to get the most out of this exercise, there 
    are automated tests provided as well.
    */

    // FUNCTION DEFINITIONS

    // USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
    function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function decorateClassListWithAges(classList){
        var result = [];
        for (var j = 0; j < classList.length; j++){
            var currentStudent = {};
            currentStudent.name = classList[j];
            currentStudent.age = getRandomIntInclusive(10, 11);
            result.push(currentStudent);
        }
        return result;
    }

    // ASSERTION FUNCTION TO BE USED
    function assertWithinRange(low, high, actual){
        if(low <= actual && high >= actual) {
            return true;
        } else {
            return false;
        }
    }

    function testDecoratedList(input, output){
        for(var i = 0; i < input.length; i++){
            if (input[i] !== output[i].name){
                return 'name does not match';
            }
            if (assertWithinRange(10, 11, output[i].age === false)){
                return 'age does not match';
            }
        }

    }

    // TEST CASES

    // Sample Input
    var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
    "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
    "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

    var classListAge = decorateClassListWithAges(classList);
    testDecoratedList(classList, classListAge)

    // Sample Output
    // var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
    // {"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
    // {"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
    // {"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
    // {"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
    // {"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
    // {"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
    // {"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
    // {"name":"Dora","age":10}]
//---------------------------------------------------------------------------------------------
// Isograms

    // Exercise 1 - isograms
    /*
    An isogram is a word that has no repeating letters, consecutive or non-consecutive.
    Your task is to write and test a function that determines whether a string is an
    isogram, following the format of the previous probelms. It should return true if the
    input string is an isogram, and should return false otherwise.

    While you should create your own test suite to get the most out of this exercise, there
    are automated tests provided as well.

    Notes:
    Assume your input is only letters
    Assume the empty string is an isogram
    Ignore Case
    Follow the pseudocode exactly!
    */

    // Skeleton

    // FUNCTION DEFINITIONS
    function isIsogram(text){
        // add each char to a set
        text = text.toLowerCase();
        var textArray = text.split('')
        var newSet = new Set(textArray)
        return newSet.size === textArray.length;
        }
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
        // note: a set drops dup values
        // thus, to see if all the chars were unique,
        // check length of text and the size of the set
    

    // ASSERTION FUNCTIONS TO BE USED
    function assertEqualTo(actual, expected, testName){
        if(actual === expected){
            return 'Pass'
        } else {
            return 'FAILED [' + testName + ']!'
        }
    }

    // TEST CASES
    var passOne = 'test'
    var testOne = isIsogram(passOne);
    assertEqualTo(testOne, true, 'string is Isogram')

    var failOne = 'tool'
    var testTwo = isIsogram(failOne);
    assertEqualTo(testTwo, false, 'string is Isogram')

    var passTwo = 'stop'
    var testThree = isIsogram(passTwo);
    assertEqualTo(testThree, true, 'string is Isogram')

    var failTwo = 'sleep'
    var testFour = isIsogram(failTwo)
    assertEqualTo(testFour, false, 'string is Isogram')
//---------------------------------------------------------------------------------------------
// Interpret A Skeleton

    // Exercise 1 - interpret a skeleton
    /*
    In this problem, you are to simply look at the partially implemented skeleton below
    and, by parsing it carefully, determine what is ought to do. While you should create
    your own test suite to get the most out of this exercise, there are automated tests
    provided as well.
    */

    // Skeleton

    // FUNCTION DEFINITION
    function findMaxRepeatCountInWord(word){
        // Break up individual words into individual letters.
        // Count the instances of each letter
        // Iterate all the counts and find the highest
        // Return this word's max repeat count
        var wordSplit = word.split('')
        var result = {};

        for(var i = 0; i < wordSplit.length; i++){
            if(result[wordSplit] === undefined){
                result[wordSplit] = 1;
                } else {
                    result[wordSplit]++;
                    }
                }
        var max = 0;
        for(var wordSplit in result){
            if (max < result[wordSplit]){
                max = result[wordSplit];
            }
        }
        return max;
        }

    function findFirstWordWithMostRepeatedChars(text){
        var maxRepeatCountOverall = 0;
        var wordWithMaxRepeatCount = '';

        // Break up input text into words (space-delimited).
        var singleWord = text.split(" ")
        // For each word..
        for (var j = 0; j < singleWord.length; j++){
        var repeatCountForWord = findMaxRepeatCountInWord[singleWord];
        // IF that max repeat count is higher than the overall max repeat count, then
            // update maxRepeatCountOverall
            // update WordWithMaxRepeatCount
        if(repeatCountForWord > maxRepeatCountOverall){
            maxRepeatCountOverall = repeatCountForWord;
            wordWithMaxRepeatCount = singleWord[j];
            }
        }
        return wordWithMaxRepeatCount;
    }

    // ASSERTION FUNCTIONS TO BE USED
    function assertEqualTo(actual, expected, testCase){
        if(actual === expected){
            return 'Pass'
        } else {
            return 'Failed [' + testCase + ']'
        }
    }

    // TESTS
    
    var actualMaxCount = findMaxRepeatCountInWord('bananas');
    var expectedMaxCount = 3;
    assertEqualTo(actualMaxCount, expectedMaxCount, 'should return count of letter that is repeated most often in input word');


    var actualWord = findFirstWordWithMostRepeatedChars('bananas are excellent');
    var expectedWord = 'bananas';
    assertEqualTo(actualWord, expectedWord, 'should return word with most repeated letters');

    /* 
    Correct Answer
    // FUNCTION DEFINITIONS
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var letters = word.split('');
  // Count the instances of each letter
  var counts = {};
  for (var i = 0; i < letters.length; i++) {
    if (counts[letters[i]] === undefined) {
      counts[letters[i]] = 1;
    } else {
      counts[letters[i]]++;
    }
  }
  // Iterate all the counts and find the highest
  var max = 0;
  for (var key in counts) {
    if (max < counts[key]) {
      max = counts[key];
    }
  }
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  var words = text.split(' ');

  for (var i = 0; i < words.length; i++) {
    var repeatCountForWord = findMaxRepeatCountInWord(words[i]);
    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = words[i];
    }
  }
  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

// TESTS FOR findMaxRepeatCountInWord
var actualMaxCount = findMaxRepeatCountInWord('bananas');
var expectedMaxCount = 3;
assertEqual(actualMaxCount, expectedMaxCount, 'should return count of letter that is repeated most often in input word');

// TESTS FOR findFirstWordWithMostRepeatedChars
var actualWord = findFirstWordWithMostRepeatedChars('bananas are excellent');
var expectedWord = 'bananas';
assertEqual(actualWord, expectedWord, 'should return word with most repeated letters');
/*
//---------------------------------------------------------------------------------------------
// Render Phone Number

    // Exercise 1 - render phone number
    /*
    This problem delves into a topic that we have not discussed yet. Object oriented
    programming in JavaScript is something that we will not go over directly during this
    course, however, the idea is relatively straightforward. Consider the case wherein we
    wish to create multiple objects, all of which have a relatively similar structure. We are
    also going to, rather than declaring functions as we have previously, assigns variables
    (this time properties of the prototype) to be function values. This works nearly
    identically as declaring functions. In general, when assign a variable to a function
    value, this is the rule we must follow:

    declaring a function means we can call that function anywhere within the scope of our declartion
    meaning we can call it above wheere it is declared if desired
    */
    declared('hello world');
    function declared(param){
        console.log(param);
    }

    However:

    assigned('hello world'); this code will not work, as "assigned" is not defined until later

    var assigned = function(param){
        console.log(param);
    }
    
    /*
    A commonly used example for object oriented programming is creating virtual cars:
    */

    // this is a constructor function, we will use it to create new instances of our car
    function Car(color,type){
        this.color = color;
        this.type = type;
        this.gas = 12;
    }

    // below are methods that we have attached to the car's PROTOTYPE chain
    Car.prototype.drive = function(){
        this.gas -= 1;
    }

    Car.prototype.paintJob = function(color){
        this.color = color;
    }

    /*
    In order to make use of this set of code, we have to create a new instance of our car.
    Below is a dmonstration of using the new keyword to generate a new instance of our
    constructor Car function.
    */

    // now we can generate a new car instance of Car using the constructor function as follows
    var myCar = new Car('blue', 'sedan');
    console.log('myCar', myCar);

    /* Picture that when we say new Car('blue', 'sedan'), what is happening inside the
    constructor function is essentially this:
    */

    function Car(color,type){
        // var this = {};
        this.color = color;
        this.type = type;
        this.gas = 12;
        // return this;
    }

    /*
    this is a context object, and is relatively complicated. For now, struggling through
    and playing with the code provided in the exercise below should be enough of an
    introduction to this topic. We will go into more detail as the Immersive program
    unfolds.
    */

    // furthermore, we can call methods on myCar. Essentially, this format allows each
    // instance to have access to a collection of methods
    myCar.drive(); // this is how we call the method
    console.log('myCar after driving once:', myCar);

    // Challenge
    /*
    Your code should accept an array of numbers that represent a phone number. E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
    Your code should return a string in this format: (650) 835-9172
    
    One version of an implementation:
    */
   function renderPhoneNumber(numbers){
       return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] +
       numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] +  numbers[8] + numbers[9];
   }

   /*
   This is not ideal, so here is our aim. Read the object-oriented skeleton. After you
   understand the flow of processing that it sketches out, fill in the implementation. If you
   find yourself hopelessly lost, please feel free to consult to reference answer for this 
   challenge.
   */


   // Skeleton

    // FUNCTION DEFINITION(S)
    function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
  }
  
  PhoneNumberFormatter.prototype.render = function() {
    var string = '';
    string += this.parenthesize(this.getAreaCode());
    string += ' ';
    string += this.getExchangeCode();
    string += '-';
    string += this.getLineNumber();
    return string;
  };
  
  PhoneNumberFormatter.prototype.getAreaCode = function() {
    return this.slice(0, 3);
  };
  
  PhoneNumberFormatter.prototype.getExchangeCode = function() {
    return this.slice(3, 6);
  };
  
  PhoneNumberFormatter.prototype.getLineNumber = function() {
    return this.slice(6, 10)
  };
  
  PhoneNumberFormatter.prototype.parenthesize = function(string) {
    return '(' + string + ')';
  };
  
  PhoneNumberFormatter.prototype.slice = function(start, end) {
    return this.numbers.slice(start, end).join('');
  };

  var formatter = new PhoneNumberFormatter([1,1,1,8,6,7,5,3,0,9]);
  console.log(formatter);

  var areaCode = formatter.slice(0, 3);
  console.log('areaCode:', areaCode)
  var formattedNumber = formatter.render();
  console.log(formattedNumber); // (111) 867-5309
  
  // ASSERTION FUNCTION(S) TO BE USED
  
  // TESTS CASES

//---------------------------------------------------------------------------------------------
// Find Longest Palindrome

  // Exercise 1 - find longest palindrome
  /*
  Back to regular skeletons! Your task is to write a function that will find the longest
  single-word palindrome within an input phrase (string). The phrase inputed will only
  contain letters (no symbols, punctuation, or numbers). Your palindrome detection
  should be case-insensitive. If there are multiple palindromes of equal length, return
  the last one.

  Similarly to some of the previous problems in this section, there is a concept
  here that will be new to you. Ideally, your solution will use native method (built
  into the language) called .sort(). Essentially, when called, this method takes a
  function that tells the sorting operation how it should order the resulting sorted
  array. We have supplied a function inside of the skeleton. Please consult this
  MDN documentation, and read it carefully: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  */

  // Skeleton

  // FUNCTION DEFINITIONS
  function findLongestPalindrome(sentence){
      // split sentence into words
      var splitWords = sentence.split(' ');
      var palindromes = [];
      // iterate words and collect the palindromes
      for(var i = 0; i < splitWords.length; i++){
        
          if(isPalindrome(splitWords[i])) {
              palindromes.push(splitWords[i]);
          }
        }
          // sort the list of palindromes by word length
          var sortedPalindromes = palindromes.sort(sortAscendingByLength);
          var longestPalindrome = sortedPalindromes.pop()
          // return the largest item in the sorted list
          return longestPalindrome;

      }
 
      
  

  function reverseString(string){
    // split string into array
    var splitArray = string.split('');
    // reverse the array
    var reversedArray = splitArray.reverse();
    // convert array back into string
    var resultString = reversedArray.join('');
    // return reversed string
    return resultString;
  }

  function isPalindrome(word){
      word = word.toLowerCase();
      return word === reverseString(word);
  }

  function sortAscendingByLength(a, b){
      if(a.length > b.length){
          return 1;
      } else if (a.length < b.length){
          return -1;
      }
      return 0;
  }

  // ASSERTION FUNCTIONS TO BE USED
  function assertEqual(actual, expected, testName){
      if(actual === expected){
          return 'Pass';
      } else {
          return 'FAILED [' + testName + ']'
      }
  }

  // TEST CASES
  var wordOne = 'racecar'
  var palindromePass = isPalindrome(wordOne);
  assertEqual(palindromePass, true, 'word is palindrome');

  var wordTwo = 'sportscar'
  var palindromeFail = isPalindrome(wordTwo);
  assertEqual(palindromeFail, false, 'word is palindrome');

  var resultOfReverse = reverseString('abcdefg')
  assertEqual(resultOfReverse,'gfedcba', 'string is reversed')

  var resultOfLongest = findLongestPalindrome('madam racecar')
  assertEqual(resultOfLongest, 'racecar', 'longest palindrome')

//---------------------------------------------------------------------------------------------
