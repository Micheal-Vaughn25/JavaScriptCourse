// Conditionals 1

    // Exercise 1 - isOldEnoughToDrink
    /*
    Write a function called "isOldEnoughToDrink". Given a number, in this case an
    age, 'isOldEnoughToDrink' returns whether a person of this given age is old
    enough to legally drink in the United States. Notes: Legal Drinking age is 21
    */

function isOldEnoughToDrink(age) {

var drinkingAge = (age >= 21)
return drinkingAge;
}
    
var output = isOldEnoughToDrink(22);
console.log(output); // --> true

    // Exercise 2 - isOldEnoughToDrive
    /*
    Write a function called "isOldEnoughTodrive". Given a number, in this case an
    age, "isOldEnoughToDrive" returns whether a person of this given age is old
    enough to legally drive in the United States. Notes: Legal age is 16.
    */

function isOldEnoughToDrive(age){
    var drivingAge = (age >= 16)
    return drivingAge;
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true

    // Exercise 3 - isOldEnoughToVote
    /*
    Write a function called "isOldEnoughToVote". Given a number, in this case an
    age, 'isOldEnoughToVote' returns whether a person of this given age is old
    enough to legally vote in the United States. Notes: Legal age is 18.
    */

function isOldEnoughToVote(age){
var votingAge = (age >= 18);
return votingAge;
}

var output = isOldEnoughToVote(22);
console.log(output); // --> true

    // Exercise 4 - isOldEnoughToDrinkAndDrive
    /*
    Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in this
    case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this
    given age is old enough to legally drink and drive in the United States. Notes:
    The legal drinking age is 21 and it is always illegal to drink and drive in the US
    */

function isOldEnoughToDrinkAndDrive(age){
    var drinkAndDrive = (age == false)
    return drinkAndDrive;
}

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
// --------------------------------------------------------------------------------------------

// Objects 1

    // Exercise 1 - getProperty
    /*
    Write a function called "getProperty". Given an object and a key,"getProperty"
    returns the value of the property at the given key. Notes: If there is no
    property at the given key, it should return undefined.
    */

function getProperty(obj, key){
    var result = obj[key]
    return result;
}

var obj = {
    key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

    // Exercise 2 - addProperty
    /*
    Write a function called "addProperty". Given an object, and a key, "addProperty"
    sets a new property on the given object with a value of true.
    */

function addProperty(obj, key) {
obj[key] = true;
return obj;
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

    // Exercise 3 - removeProperty
    /*
    Write a function called "removeProperty". Given an object and a key, 
    "removeProperty" removes the given key from the given object.
    */

function removeProperty(obj, key){
delete obj[key]
return obj
}

var obj = {
    name: 'Sam',
    age: 20
}

removeProperty(obj, 'name');
console.log(obj.name); // -- undefined
// --------------------------------------------------------------------------------------------

// String Methods

    // Exercise 1 - getFullName
    /*
    Write a function called "getFullName". Given a first and a last name,
    "getFullName" returns a single string with the given first and last names
    separated by a single space.
    */

function getFullName(firstName, lastName){
var fullName = (firstName + " " + lastName);
return fullName;
}

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

    // Exercise 2 - getLengthofWord
    /*
    Write a function called "getLengthOfWord". Given a word, "getLengthOfWord"
    returns the length of the given word.
    */

function getLengthOfWord(word){
    var length = (word.length)
    return length;
}

var output = getLengthOfWord('some');
console.log(output); // --> 4

    // Exercise 3 - getLengthOfTwoWords
    /*
    Write a function called "getLengthOfTwoWords". Given 2 words,
    "getLengthOfTwoWords" returns the sume of their lengths.
    */

function getLengthOfTwoWords(word1, word2) {
var combinedWords = (word1 + word2)
var wordLength = combinedWords.length
return wordLength
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
// --------------------------------------------------------------------------------------------

// Conditionals 2
    // Excerise 1 - checkAge
    /*
    Write a function called "checkAge". Given a person's name and age,
    "checkAge" returns one of two messages: "Go Home, {insert_name_here}!", if
    they are younger than 21. "Welcome, {insert_name_here}!", if they are 21 or
    older. Naturally, replace "{insert_name_here}" with the given name.:)
    */

function checkAge(name, age){
if(age >= 21){
    return ("Welcome, " + name + "!");
} else {
    return ("Go home, " + name + "!");
}
}

var output = checkAge('Adrian', 22);
console.log(putput); // --> 'Welcome, Adrian!'

    // Exercise 2 - isGreaterThanTen
    /*
    Write a function called "isGreaterThan10". Given a number, "isGreaterThan10"
    returns whether the given number is greater than 10.
    */

function isGreaterThan10(num){
    return num > 10;
}
var output = isGreaterThan10(11);
console.log(output); // --> true

    // Exercise 3 - isLessThan30
    /*
    Write a function called "isLessThan30". Given a number, "isLessThan30" returns
    whether the given number is less than 30.
    */

function isLessThan30(num){
return num < 30;
}
var output = isLessThan30(9);
console.log(output); // --> true

    // Exercise 4 - equalsTen
    /* write a function called "equalsTen". Given a number, "equalsTen" returns
    whether or not the given number is 10.
    */

function equalsTen(num){
    return num === 10
}
var output = equalsTen(9);
console.log(output); // --> false
// --------------------------------------------------------------------------------------------

// Conditionals 3
    // Exercise 1 - isLessThan
    /*
    Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns
    whether num2 is less than num1.
    */

function isLessThan(num1, num2){
var compare = (num2 < num1);
return compare;
}

var output = isLessThan(9, 4);
console.log(output); // --> true

    // Exercise 2 - isGreaterThan
    /*
    Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan"
    returns whether num2 is greater than num1.
    */

    // Exercise 3 - isEqualTo
    /*
    Write a function called "isEqualTo". Given 2 numbers, "isEqualTo" returns
    whether num2 is equal to num1.
    */

function isEqualTo(num1, num2){
var compare = (num2 === num1);
return compare;
}

var output = isEqualTo(11, 10);
console.log(output); // --> false

    // Exercise 4 - isEven
    /*
    Write a function called "isEven". Given a number, "isEven" returns whether it is
    even.
    */

function isEven(num){
    if(num % 2 === 0){
        return true
    } else {
        return false
    }
    }
    
var output = isEven(11);
console.log(output); // --> false
// --------------------------------------------------------------------------------------------

// Conditionals 4
    // Exercise 1 - isOdd
    /*
    Write a function called "isOdd". Given a number, "isOdd" returns whether the
    given number is odd.
    */

function isOdd(num){
if(num % 2 >= 1){
    return true
} else {
    return false
}
}

var output = isOdd(9);
console.log(output); // --> true

    // Exercise 2 - isSameLength
    /*
    Write a function called "isSameLength".

    Given two words, "isSameLength" returns whether the given words have the 
    same length.
    */

function isSameLength(word1, word2){
if(word1.length === word2.length){
    return true;
} else {
    return false;
}
}
var output = isSameLength('words', 'super');
console.log(output); // --> true

    // Exercise 3 - areBothOdd
    /*
    Write a function called "areBothOdd".
    Given 2 numbers, "areBothOdd" returns whether or not both of the given
    numbers are odd.
    */

function areBothOdd(num1, num2){
var number1 = (num1 % 2 >= 1)
var number2 = (num2 % 2 >= 1)
if(number1 === true && number2 === true){
    return true
    } else {
    return false
}
}
    
var output = areBothOdd(1,3);
console.log(output); // --> true

    // Exercise 4 - isEitherEven
    /*
    Write a function called "isEitherEven".
    Given two numbers, "isEitherEven" returns whether or not either one of the
    given numbers is even.
    */

function isEitherEven(num1, num2){
var numberOne = (num1 % 2 === 0)
var numberTwo = (num2 % 2 === 0)
if(numberOne === true || numberTwo === true){
    return true
    }else if(numberOne === false && numberTwo === false) {
    return false
    }
}
    
var output = isEitherEven(1,4);
console.log(output); // --> true
// --------------------------------------------------------------------------------------------

// Conditionals 5

    //isOddLength
    /*
    Write a function called "isOddLength".
    Given a word, "isOddLength" returns whether the length of the given word is
    odd.
    */

function isOddLength(word){
var wordLength = (word.length);
if(wordLength % 2 >= 1){
    return true
} else {
    return false
}
}
var output = isOddLength('special');
console.log(output); // --> true
    
    // Exercise 2 - isEvenLength
    /*
    Write a function called "isEvenLength".
    Given a word, "isEvenLength" returns whether the length of the word is even.
    */

function isEvenLength(word){
var wordLength = word.length
if(wordLength % 2 === 0){
    return true
} else {
    return false
}
}
var output = isEvenLength('wow');
console.log(output); // --> false

    // Exercise 3 - isEvenandGreaterThan10
    /*
    Write a function called "isEvenAndGreaterThanTen".
    Given a number, "isEvenAndGreaterThanTen" returns whether it is both even
    and greater than 10.
    */

function isEvenAndGreaterThanTen(num){
var wordLength = num
if(wordLength > 10 && wordLength % 2 === 0){
    return true
} else{
    return false
}
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

function isEvenAndGreaterThanTen(num){
    var wordLength = num > 10
    var evenWord = num % 2 === 0
    if(wordLength && evenWord){
        return true
    } else{
        return false
    }
    }
    
    var output = isEvenAndGreaterThanTen(13);
    console.log(output); // --> false
// --------------------------------------------------------------------------------------------

// Math 1

    // Exercise 1 - average
    /*
    Write a function called "average".
    Given two numbers, "average" returns their average.
    */

function average(num1, num2){
var result = ((num1 + num2) / 2);
return result
}
var output = average(4,6);
console.log(output); // -->5

    // Exercise 2 - computeAreaOfATriangle
    /*
    Write a function called "computeAreaOfATriangle".
    Given the base and height of a triangle, "computeAreaOfATriangle" returns its
    area.
    */

function computeAreaOfATriangle(base, height){
var triangle = (base * height / 2)
return triangle;

}
var output = computeAreaOfATriangle(4,6);
console.log(output); // --> 12

    // Exercise 3 - cube
    /*
    Write a function called "cube".
    Given a number, "cube" returns the cube of that number.
    */

function cube(num) {
var cubed = (num ** 3)
return cubed;
}
var output = cube(3);
console.log(output); // --> 27

    // Exercise 4
    /*
    Write a function called "square".
    Given a number, "square" should return the square of the given number.
    */

function square(num) {
var squared = (num ** 2)
return squared;
}
var output = square(5);
console.log(output); // --> 25
// --------------------------------------------------------------------------------------------

// String Methods 2

    // Exercise 1 - computeAverageLengthOfWords
    /*
    Write a function called "computeAverageLengthOfWords".
    Given two words, "computeAverageLengthOfWords" returns the average of
    their lengths.
    */

function computeAverageLengthOfWords(word1, word2){
var combinedWords = (word1.length + word2.length)
var averageWords = (combinedWords / 2)
return averageWords;
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6