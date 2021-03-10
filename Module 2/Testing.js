// assertEqual

    // Exercise 1 - assertEqual
    /*
    Write a  function called assertEqual. It will be a function that takes three parameters:
    actual will be a scalar value, and should ideally be the result of calling a funtion you
    are testing, and which returns a scalar value. Expected, also a scalar, should be the
    theoretical result of calling your function (or, what you "expect" the function to return).
    Finally, testName will be a string, and should describe what a call to the assertEqual is
    verifyin about the function being tested.

    Your function should compare actual and expected values with strict equality (triple
    equals ===), then log one of two messages to the console. In general, these assertion
    functions will need some kind of code or separate functions to test. For
    the first four Testing problems, we will provide examples that include functions like
    multiplyByTwo. It is not necessary for you to create these functions, but rather, they
    are presented to aid your understanding of how assertEqual should behave once
    you have built it.
    */



   function assertEqual(actual, expected, testName){
        if (output === expected){
            console.log('passed')
        } else {
            console.log('FAILED [' + testName + '] Expected ' + '"' + expected + '"' + ', but got ' + '"' + actual + '"');
        }
    }
    var actual = multiplyByTwo(2); // returns 4
    var expected = 4;
    var testName = 'it doubles 2 to 4'

    function multiplyByTwo(n) {
    return n * 2;
    }
    var output = multiplyByTwo(2); // returns 4
    assertEqual(output, 4, 'it doubles 2 to 4');

    function multiplyByTwo(n) {
    return (n * 2) + 1; // an incorrect implementation
    }
    var output = multiplyByTwo(2); // returns 5
    assertEqual(output, 4, 'it doubles 2 to 4');
//---------------------------------------------------------------------------------------------

// assertArraysEqual

    // Exercise 1 - assertArraysEqual
    /*
    Write a function called assertArraysEqual. It will be a function that takes three
    parameters: actual will be an array of scalar values, and should ideally be the result
    of calling a function that you are testing. (presumably the function being tested should
    return an array of scalar values); expected, aslo an array of scalar values, should be 
    the theoretical result of calling your function (or, what you "expect" the function to
    return). Finally, testName will be a string, and should describe what a call to
    assertArraysEqual is verifying about the function being tested.

    Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to
    strings so I can compare two strings" type of technique to implement this.

    We cannot simply compare an array directly to another array, as we could with scalar
    values. Consider the followingcode: */

    var scalar1 = 'equal';
    var scalar2 = 'equal';
    console.log("two scalars can be compared with each other using triple equals: ", scalar1 === scalar2);

    var array1 = ['a', 'b', 'c'];
    var array2 = ['a', 'b', 'c'];
    console.log("two arrays can be compared with each other using triple equals: ", array1 === array2);

    /*
    As this code demonstrates, we cannot ompare arrays directly. For More information
    on this topic, please console the lesson named 'Notes on Memory', which can be 
    found in the 'Reference Answers and In Depth Documentation' section at the end of
    this Module. With that in mind, there are typically two things that we must check in
    order to determine that two arrays of scalar values are indeed equal to one another.
    Do they have the same length, and do they contain the same values. This, your
    function must make a determination about these issues, then either log a passing
    mesage to the console or else a failure message. See the examples below for 
    precise details on the messages to be logged to the console.

    Mentioned previously, but worth noting again: In general these assertion functions
    will need some kind of code or separate functions to test. For this first four Testing
    problems, we will provide examples that include functions like
    generateFirstNFibonaccis. It is not necessary for you to create these functions.
    Rather, they are presented to aid your understanding of how assertArrayEqual
    should behave once you have built it
    */
    


function assertArraysEqual(actual, expected, testName){
// do they have same length
var sameLength = (actual.length === expected.length);
// do they have the same values
var sameValues = true;
for(var i = 0; i < expected.length; i++){
  if(expected[i] !== actual[i]){
    sameValues = false;
    break;
  }
}
if(sameValues && sameLength){
  console.log('passed')
} else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
}
}
var expected = ['b', 'r', 'o', 'k', 'e', ];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
//---------------------------------------------------------------------------------------------

// assertObjectsEqual

    // Exercise 1 - assertObjectsEqual
    /*
    Write function called assertObjectsEqual. It will be a function that takes three
    parameters: actual will be an object with scalar values, and should ideally be the
    result of calling a function thaty ou are testing. (Presumably the function being tested
    should return an object with scalar values); expected, also an object with scalar
    values, should be the theoretical result of calling your function (or, what you "expect"
    the function to return). Finally, testName will be a string, and should describe what a
    call to assertObjectsEqual is verifying about the function being tested.

    Please use JSON.stringify() on both objects, then compare them.

    Mentioned previous, but worth noting again: In general, these assertion functions
    will need some kind of code or separate functions to test. For the first four Testing
    problems, we will provide examples that include functions like updateObject. It is not
    necessary for you to create these functions. Rather, they are presented to aid your 
    understanding of how assertObjectsEqual should behave once you have built it.
    */

    function assertObjectsEqual(actual, expected, testName){
    // use JSON.stringify() on both objects
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
        if(actual === expected){
            console.log('passed');
        } else {
            console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
        }


    }

    var person = {
        firstName: 'Cassidy',
        lastName: 'Jacobs'
    };
    updateObject(person, 'firstName', 'Jack');
    var expected = {
        firstName: 'Jack',
        lastName: 'Jacobs'
    };

    assertObjectsEqual(person, expected, "updates person's existing first name field");
//---------------------------------------------------------------------------------------------

// assertWithinRange

    // Exercise 1 - assertWithinRange
    /*
    Write a function called assertWithinRange. It will be a function that takes four
    parameters: low a number value, which will be the lower bound of our range; high,
    also a number value, which will be upper bound on our range; actual, which will be a
    number value, and should ideally be the result of calling a function that you are 
    testing. Presumably the function being tested should return a number value. Finally,
    testName will be a string, and should describe what a call to assertWithinRange is 
    verifying about the function being tested.

    The idea here is similar to when someone says, "Give me a number between 1 and 5".
    Let us further consider that what you mean is "1, 2, 3, 4, or 5" i.e. our range should be
    inclusive.
    */

    function assertWithinRange(low, high, actual, testName){
        if(actual <= high && actual >= low){
            console.log('passed')
            } else {
                console.log('FAIL [' + testName + ']' + ' "' + actual + '" ' + 'not within range ' + low +' to ' + high);
            }
    }
    var blackjackScore = 20;
    assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
    // console output:
    // passed
//---------------------------------------------------------------------------------------------

// Applying assertEqual 1

    // Exercise 1 - applyAssertEqual
    /*
    During the next four problems, you will be asked again to write an assertion function,
    but in addition, you are going to use this assertion function to verify that some other
    function works. In a few cases, the provided code does not work. Your goal is to
    make use of the assertion functions by designing a "test suite". The next lesson is
    going to provide a precisely formatted and organized section of code; please use this
    to guide your work during the remainder of this module.

    Write an "assertEqual" function once more, from memory. Please DO NOT simply
    PASTE in from before (If you have to go back and look at your previously
    implemented code once, that is certainly okay, but come back here and write it from
    memory). Then use your assertion function in a series to test cases to thoroughly
    test the code. Use categorical reasoning to consider all the useful cases. The only
    automated test will be one to ensure that you have created a function that is named
    assertEqual. It is up to you to construct the rest of the "test suite".
    */

    // FUNCTION DEFINITIONS
    function square(n) {
        return n * n;
    }

    // ASSERTION FUNCTIONS TO BE USED
    function assertEqual(actual, expected, testName){
        if(actual === expected){
            console.log('passed')
        } else {
            console.log('FAILED [' + testName + ']')
        }
    }

    // TEST CASES
    var test1 = square(2)
    assertEqual(test1, 4, '2 is squared to 4')
    
// Applying assertEqual 2

    // Exercise - applyAssertEqual2
    /*
    Write an "assertEqual" function once more, from memory. Please DO NOT simply
    PASTE in from before (If you have to go back and look at your previously
    implemeneted code once, that is certainly okay, but come back here and write it from
    memory). Then use your assertion function in a series of test cases to thoroughly
    test the code. Use categorical reasoning to consider all the usefule cases. The only
    automated test will be one to ensure that you have created a function that is named
    assertEqual. It is up to you to construct the rest of the "test suite".

    The code under test is a function called every. Every is an example of a "higher
    order" function, meaning that it takes as a paramater, another function (higher order
    functions can also return functions as values). This function takes two parameters; the
    first will be an array of scalar values, and the second parameter will be
    callbackFunction. Thus when you are creating a test suite to verify that every
    works, you are going to need a function that you will use as an argument when you
    call every. Think about it like this, every is going to iterate over an array of scalar
    values, and apply a function to every value. This function MUST return a boolean
    value, mainly because we want every to tell us whether or not, EVERY value in the
    array returns true when the callbackFunction is called upon it.

    At this point, the general level of difficulty and complexity of the problems will
    increase. With that in mind, do not be disheartened if this takes you some time to
    figure out solutions. The first step will be to setup some tests for the code, then
    correct the errors in the implementation. If you are truly stumped, please feel free to
    consult the reference answers in the last section of the module. Ideally, you should
    eventually complete the problem on your own.
    */

    // FUNCTION DEFINITIONS
    function every(array, callbackFunction){
        var doesEveryElementMatch = true;

        for (var i = 0; i < array.length; i++) {
            if(doesEveryElementMatch === false) {
                return doesEveryElementMatch;
            }
            doesEveryElementMatch = callbackFunction(array[i]);  
        }

        return doesEveryElementMatch;
    }

    // ASSERTION FUNCTIONS TO BE USED
    function assertEqual (actual, expected, testName){
        if(expected === actual){
            return 'passed'
        } else {
            return 'FAILED [' + testName + ']'
        }
    }

    // TEST CASES
   function lessThan10(value){
       return value < 10;
   }
   var arrayTrue = [1, 2, 4, 7]
   var actualTrue = every(arrayTrue, lessThan10);
   assertEqual(actualTrue, true, 'all values true')

   var arrayFalse = [10, 15, 2, 9]
   var actualFalse = every(arrayFalse, lessThan10);
   assertEqual(actualFalse, false, 'one value false')
//---------------------------------------------------------------------------------------------

// Applying assertArraysEqual

   // Exercise 1 - applyAssertArraysEqual
   /*
   Write an "assertArraysEqual" function once more, from memory. Please DO NOT
   simply PASTE in from before (if you have to go back and look at your previously
   implemented code once, that is certainly okay, but come back here and write it from
   memory). Then use your assertion function in a series of test cases to thoroughly
   test the code. Use categorical reasoning to consider all the useful cases. The only
   automated test will be one to ensure that you have created a function that is named
   assertArraysEqual. It is up to you to construct the rest of the "test suite".

   Similarly to last time, the first step will be to setup some tests for the code, then
   correc the errors in the implementation. Be sure to organize tests for both functions.
   If you are truly stumped, please feel free to consule the reference answers in the last
   section of the module. Ideally, you should eventually complete the probelm on your 
   own.
   */


   // FUNCTION DEFINITIONS
   function map(array, callbackFunction){
       var newArray = [];
       
       for (var i = 0; i < array.length; i++){
           var element = array[i];
           newArray.push(callbackFunction(element))
       }

       return newArray;
   }

   function cubeAll(numbers){
       return map(numbers, function(n) {
           return n ** 3;
       });
   }

   // ASSERTION FUNCTIONS TO BE USED
   function assertArraysEqual(actual, expected, testName){
       var hasSameValues = true;
       for(var i = 0; i < actual.length; i++){
           if(actual[i] !== expected[i]){
               hasSameValues = false;
               break;
           }
       }
       var hasSameLengths = actual.length === expected.length;

       if (hasSameLengths && hasSameValues){
           return 'passed';
       } else {
           return 'FAILED [' + testName + ']'
       }
   }

   // TEST CASES
   function addOne(val){
       return val + 1;
   }
   var mapInput = [1, 2, 3];
   var actualMap = map(mapInput, addOne);
   var expectedMap = [2, 3, 4];
   assertArraysEqual(actualMap, expectedMap, 'should add one to value');


   var inputCube = [2, 4, 6]
   var actualCubeAll = cubeAll(inputCube);
   var expectedCube = [8, 64, 216]
   assertArraysEqual(actualCubeAll, expectedCube, 'should cube all')

   // Applying assertObjectsEqual

    // Exercise 1 - applyingAssertObjectsEqual
    /*
    Write an "assertObjectsEqual" function once more, from memory. Please DO NOT
    simply PASTe in from before (If you have to go back and look at your previously
    implemented code once, that is certainly okay, but come back here and write it from
    memory). Then use your assertion function in a series of test cases to thoroughly
    test the code. Use the categorical reasoning to consider all the useful cases. The only
    automated test will be one to ensure that you have created a function that is named
    assertObjectsEqual. It is up to you to construct the rest of the "test suite".

    Similary to last time, the first step will be to setup some tests for the code, then
    correct the errors in the implementation. Be sure to organize tests for both functions.
    If you are truly stumped, please feel free to consult the reference answers in the last
    section of the module. Ideally, you should eventually complete the probelm on your own.
    */
    
    // FUNCTION DEFINITION

    function addFullNameProp(obj){
        var firstName = obj.firstName;
        var lastName = obj.lastName;
        
        if(firstName && lastName) {
            obj['fullName'] = firstName + ' ' + lastName;
        }
        return obj;
    }


    // ASSERTION OBJECTS EQUAL
    function assertObjectsEqual(actual, expected, testName){
        var stringActual = JSON.stringify(actual);
        var stringExpected = JSON.stringify(expected);
        if(stringActual === stringExpected) {
            return 'pass'
        } else {
            return 'FAIL [' + testName + ']'
        }
    }

    // Test Cases
    var inputObj = {
        firstName: 'Mike',
        lastName: 'Vaughn'
    }
    var outputObj = addFullNameProp(inputObj);
    var expectedObject = {
        firstName: 'Mike',
        lastName: 'Vaughn',
        fullName: 'Mike Vaughn'
    }
    assertObjectsEqual(outputObj, expectedObject, 'full name shown');