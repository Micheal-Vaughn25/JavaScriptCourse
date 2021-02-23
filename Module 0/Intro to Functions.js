// What is a function?
    // Functions are one of the fundamental building blocks in JavaScript
    // A function is a JavaScript procedure whis is:
        // A set of statements that perform a task or calculate a value
        // A function definition consists of a function keyword, followed by:
            // Name of the function
            // List of parameters to the function, enclosed by parentheses and separated by commas
            // The JS statements that define the function, enclosed in curly braces{}

// Example of function

// definition
function nameOfFunction(/*list of parameters*/) {
  /*statements that define the function*/
}

//calling the function (test)
var result = nameOfFunction(/*list of arguments*/);
console.log(result);
// --------------------------------------------------------------------------------------------

// Accumulator Pattern
// Exercise 1 - Filter Odd Elements
    /*
    Write a function called "filterOddElements".
    Given an array of numbers, "filterOddElements" returns an array containing only
    the odd numbers of the given array. If the input array contains no odd
    numbered elements, your function should return an empty array.
    */

function filterOddElements(numbers){
// If array is empty return empty array
    if (numbers.length === 0){
        return[];
    }
// Define variable to pass Odd Numbers into
var oddNumbers = []

// Define FOR statement to count only odd integers
for(var i = 0; i < numbers.length; i++){
    // Check if number is odd by using modulo (if divided by 2 and returns value number is odd)
    if(numbers[i] % 2 >= 1){
        // add to oddNumbers array using .push
        oddNumbers.push(numbers[i]);
    }
}
return oddNumbers;
}

// Test Case
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

// Exercise 2 - Generate Sum of Elements
    /*
    Write a function called "computeSumOfAllElements".
    Given an array of numbers, "computeSumOfAllElements" returns the sum of all
    the elements in the given array. If input array is empty, your function should 
    return 0.
    */

function computeSumOfAllElements(numbers){
    // Sets function up to return 0 if the array is empty
    if(numbers.length === 0){
        return 0;
    }
    // Set SUM variable to 0
    var sum = 0
    // FOR statement to add all numbers in array
    for(var i = 0; i < numbers.length; i++){
        // Sets SUM variable to equal the total of all numbers in array using +=(plus equals)
        sum += numbers[i];
    }
    // Return SUM variable
    return sum;
}

// Test case
var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);

// Exercise 3 - Generate Average of Elements
    /*
    Write a function called "computeAverageOfNumbers".

    Given an array of numbers, "computeAverageOfNumbers" returns their
    average. If input array is empty, your function should return 0.
    */

function computeAverageOfNumbers(numbers){
    if(numbers.length === 0){
        return 0;
    }
    var sum = 0
    var total = []
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
        var total = (sum / numbers.length)
    }
    return total
}
// Test Cases
var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);
// --------------------------------------------------------------------------------------------

// Scope Introduction

/*
// Code here is considered "global", not usually recommended
var Global_Variable = 'I am a global variable';

function THIS_IS_THE_FUNCTION_WE_ASKED_YOU_TO_WRITE(input_of_some_kind) {

  // variables created inside of a function are called local
  var localVariable = "I am a local variable";

  // I CAN ALSO MAKE USE OF THE PARAMETER(S) OF THE FUNCTION IF ANY
  // I can also make use of the parameter(s) of the function, if any
  input_of_some_kind; // <= THIS IS THE PARAMETER OF THIS FUNCTION
  for (var i = 1; i < 6; i++) {
    // variables created here are created anew each iteration
    var newlyCreatedEachIteration = 0;
  }
  // this statement ends the function
  return localVariable;
  // code below this statement will not run
}

// For now, there is no reason to write any code outside of the function templates provided
*/

// Exercise 1 - Debugging
    /*
    We are going to debug a function that takes in an object, and a target value.
    This function will iterate over the object's values, and attempt to locate the
    target value. If the value is found, the function should return the name of the
    key where the value is question is located, and if not, the function should return
    -1. Below is an example of the code running, assuming that you will have
    debugged the described function: keyOfObjectValue:
    */

// Original //
function keyOfObjectValue(object, target){
    for(var key in object){
        if(object[key] === target){
            return key;
        } else{
            return -1;
        }
    }
}

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);

// Revised //
function keyOfObjectValue(object, target){
    for(var key in object){
        if(object[key] === target){
            return key;
        } 
    }
    return -1;
}

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);

// Exercise 2 - Debugging 2
    /*
    We are going to debug a function that takes in an array of numbers. This
    function will iterate over the array's number elements, and return a count
    representing the number of elements whose value is greater than 40. If there
    are no values above 40, then the function should return 0. Below is an example
    of the code running, assuming that you will have debugged the described
    function: getElementsAbove40:
    */

// Original

function getElementsAbove40(numbers) {

    for (var i = 0; i < numbers.length; i++) {
      var count = 0;
      if (numbers[i] > 40) {
        count++;
      }
    }
  
    return count;
  }

  var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
  console.log('should log 3:', result1);
  
  var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
  console.log('should log 0:', result2);

// Revised

function getElementsAbove40(numbers) {
    // iterate over the array
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
    // create count variable (This is the problem, since the variable is created in the 
    // for loop, it's recreated each time the program iterates over the array.)
     // var count = 0;
      // if each object in the array is greater than 40
      if (numbers[i] > 40) {
          // incremement count variable
        count++;
      }
    }
  
    return count;
  }

  var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
  console.log('should log 3:', result1);
  
  var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
  console.log('should log 0:', result2);

// Exercise 3 - Debugging
  /*
  We are going to debug a function that takes in an array of strings, representing
  words in a sentence. This function should iterate over the input array and
  should create, and return, a resulting sentence from the words therein. Below is
  an example of the code running, assuming that you will have debugged the
  described function: createSentence:
  */

// original

var sentence = "";

function createSentence(words){
    for (var i = 0; i < words.length; i++){
        // hint: does this line need to happen every iteration?
        sentence += words[i] + ' ';
        if (i === words.length - 1)
            sentence += '.';
    }
}

sentence;
}

var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);


// revised

// create global variable sentence that is empty. Trying to move this variable within function
//var sentence = "";

// create function createSentence that takes parameter of words
function createSentence(words){
    var sentence = "";
    // for loop that iterates each part of an array
    for (var i = 0; i < words.length; i++){
        // hint: does this line need to happen every iteration?
        // You only want to add a space to all words except last, Move this to Else statment
        // sentence += words[i] + ' ';
        // if statement missing {
        if (i === words.length - 1){
            sentence += words[i] + '.';
    } else
        sentence += words[i] + ' ';
}
// missing return
return sentence;
}

var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);
// --------------------------------------------------------------------------------------------
// Data Modeling

// Exercise 1 - Use an Object to count words in a sentence
    /*
    Write a function called "countWords".

    Given a string (words separated by spaces), "countWords" returns an object
    where each key is a word in the given string, with its value being how many
    times that word appeared in the given string. If given an empty string, your
    function should return an empty object.
    */



   function countWords(stringOfWords){
    // If given an empty string, your function should return an empty object.
    if (stringOfWords === ''){
        return {};
    }
    // variable to hold counts
    var counts = {};
    // Split array of words
    var words = stringOfWords.split(' ');
    //console.log(words)
    // Iterate over array of words
    for (var i = 0; i < words.length; i++){
        var currentWord = words[i];
        
        if(counts[currentWord] === undefined){
            counts[currentWord] = 1;
        } else {
            counts[currentWord]++;
            //console.log(counts)
        }
    }
        return counts;
}

var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);

// Exercise 2 - Use an Object to count letters in a word
    /*
    Write a function called "countAllCharacters".

    Given a string of characters, "countAllCharacters" returns an object where each
    key is a character in the given string, with its value being how many times that
    character appeared in the given string. If given an empty string, your function
    should return an empty object.
    */

function countAllCharacters(string){
// If given an emptry string, your function should return an empty object
if (countAllCharacters === ''){
    return {};
}
// variable to hold count
var counts = {};
// convert string into an array
var splitCharacters = string.split('')
// iterate over the array of letters
for(var i = 0; i < splitCharacters.length; i++){
    var currentLetter = splitCharacters[i];
    if(counts[currentLetter] === undefined){
        counts[currentLetter] = 1;
    } else {
        counts[currentLetter]++;
    }
}
return counts
}

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);
// --------------------------------------------------------------------------------------------

// Admissions Challenge Redux

    // Instructions
    // 1. Declare a variable named myArray and assign it to an empty array.
    var myArray = [];
    // 2. Now Populate myArray with two strings. Put your full name in the first
    // string, and your Skype handle in the second.
    var myArray = ('Micheal Vaughn', 'Micheal.vaughn@gmail.com')
    // 3. Next, declare a function named cutName. It should expect a parameter name.
    function cutName(name){}
    // 4. cutName should return an array by breaking up the input string into individual
    // words.
            function cutName(name) {
            // should return an array by breaking up input string into individual words
            var splitName
            var splitName = name.split(" ");
            return splitName;
          }
    // 5. Declare a new variable named myInfo and assign it to an empty object literal.
          var myInfo = {};
    // 6. Add the following three key-value pairs to myInfo:
          // Key: fullName, Value: the result of calling cutName on the name string within myArray.
          // Key: skype, Value: The skype handle within myArray.
          // Key: github, Value, If you have a github handle, enter it here as a string. If not 
          // set this to null instead.
          // assume that myArray, cutName, and myInfo all already exist
// simply add the properties to the existing myInfo object
var myInfo = {fullName: cutName(myArray[0]), skype: myArray[1], github: 'https://github.com/Micheal-Vaughn25'}
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------