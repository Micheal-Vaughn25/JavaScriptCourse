// WHILE loops
    // WHILE statement creates a loop that executes a specified statement as long as the test condition evaluates true
    // The condition is evaluated before executing the statement

    /* 
    Example Code
    while (/*test condition*/) {
        /* specified statement */
    }
    */

// Exercise 1
    /*
    We are going to complete a function that takes two parameters, both will be integers(start,end), and logs to the
    console, all of the integers starting with start, and ending with end. Your function should use a WHILE loop to
    log each integer from start, up to and including end, then return nothing. Below is an example of the code running,
    assuming that you will have completed the described function: loopASequence.
    */

function loopASequence(start, end){
    // create a loop which runs if start is less than or equal to end
    // log current value of start to console
    // increment value of start

while(start <= end){
    console.log(start);
    start++;
}
}

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7

// Exercise 2 - Loop over an Array
    /*
    We are going to complete a function that takes one parameter, an array of elements, and logs all of its
    elements (one at a time) to the console. Your function should use a while loop to log each element from
    the beginning to the end of the array, then return nothing. Below is an example of the code running,
    assuming that you will have completed the described function: loopAnArray.
    */

function loopAnArray(array){
    // create an index variable
    var index = 0
    // create a loop which iterates over the input array
        // log current array element to the console
        // increment value of index variable
    
var index = 0
while(index < array.length){
    console.log(array[index])
    index++
    }
}

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5

// Exercise 3 - Loop over a string 
    /*
    We are going to coplete a function that takes one parameter, a string of characters, and logs all of its 
    characters (one at a time) to the console. Your function should use a while loop to log each character
    from the beginning to the end of the string, then return nothing. Below is an example of the code running,
    assuming that you will have comleted the described function: loopAString
    */

function loopAString(string){
    // create an index variable
    // create a loop which iterates over the input string
        // log current string character to the console
        // increment value of index variable

var index = 0
while(index < string.length){
    console.log(string[index])
    index++
}
}

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d
// --------------------------------------------------------------------------------------------

// FOR Loops
    // FOR loops consists of three optional expressions, INITIALIZATION, CONDITION, and FINAL EXPRESSION
    
    // Coding Example
    /*
    for (initialization; condition; final-expression){
        statement
    }
    */

// Exercise 1 - FOR loop over a series of numbers
    /*
    We are going to complete a function that takes two parameters, both will be 
    integers (start, end), and logs to the console, all of the inegers starting with
    start, and ending with end. Your function should use a FOR loop to log each
    integeter from start, up to and including end, then return nothing, Below is an
    example of the code running, assuming that you will have completed the
    described function: loopASequenceAgain.
    */

function loopASequenceAgain(start,end){
    // create a loop which loops from start to end
                // log current value to console

for(start; start <= end; start++){
        console.log(start)
}
}
loopASequenceAgain(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequenceAgain(3, 7);
  // console output:
    // 3
    // 4
    // 5
    // 6
    // 7

// Exercise 2 - Loop over an array
    /* 
    We are going to complete a function that takes one parameter, an array of
    elements, and logs all of its elements (one at a time) to the console. Your
    function should use a for loop to log each element from the beginning to the
    end of the array, then return nothing. Below is an example of the code running,
    assuming that you will have completed the described function: loopAnArrayAgain.
    */

function loopAnArrayAgain(array){
    // create a loop which iterates over the input array
        // log current array elemen to the console

for(var index = 0; index < array.length; index++ ){
    console.log(array[index])
}
}

loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5


// Exercise 3 - Loop over a string
    /*
    We are going to complete a function that takes one parameter, a sting of
    characters, and logs all of its characters (one at a time) to the console. Your
    function should use a FOR loop to log each character from the beginning to the
    end of the string, then return nothing. Below is an example of the code running,
    assuming that you will have completed the described function: loopAStringAgain.
    */

function loopAStringAgain(string){
    // create a loop which iterates over the input string
        // log current string character to the console

for(var i = 0; i < string.index; i++ ){
    console.log(string[i])
}        
}

loopAStringAgain('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAStringAgain('abcd');
// console output:
  // a
  // b
  // c
  // d

// Exercise 4 - Loop over every other value
    /*
    We are going to complete a function that takes one parameter, an array of
    elements, and logs every other one of its elements, beginning at index 0, to the
    console. Your function should use a loop to log every other element from the
    beginning, skipping every other element, until either end of the array, or one
    shy of the end (depending on odd or even length of the array passed), then
    return nothing. Below is an example o the code running, assuming that you will
    have completed the described function: loopEveryOther.
    */

function loopEveryOther(array){
    // create a loop which iterates over every other element of the input
        // log every other array element to the console

for(var index = 0; index < array.length; index+= 2){
    console.log(array[index]);
}        
}

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
    // a
    // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output;
    // 1
    // 3
    // 5


// Exercise 5 - Looping starting a specific index
    /*
    We are going to complete a function that takes two parameters, an array of
    elements, and an index, and logs every element, beggining at the inputted
    index(one at a time) to the console. Your function should use a loop to log
    every element from the inputed index, until the end of the array, then return
    nothing. Below is an example of the code running, assuming that you will have 
    completed the described function: loopStartingAtIndex.
    */

function loopStartingAtIndex(array, index){
    // create a loop which iterates from index to the end of the input array
        // log current array element to the console
for(var i = index; i < array.length; i++){
    console.log(array[i])
}

}

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5

// Exercise 6 - Loop in reverse order
    /*
    We are going to complete a function that takes one parameter, an array of
    elements, and logs every element, beginning at the back of hte input array and
    ending at the front of the input array, to the console. Your function should use a
    loop to log every element from the back of the array, up to the front of the array,
    then return nothing. Below is an example of the code running, assuming that
    you will have completed the described function: loopInReverse.
    */

function loopInReverse(array){
    // create a loop which iterates from back to front of hte input array
    // log current array element to the console
for(var i = array.length - 1; i > -1; i--){
    console.log(array[i]);
}

}

loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1

// Exercise 7 - Use a CONTINUE statement
    /*
    We are going to complete a function that takes two parameters, an array of
    elements and an index, and logs every element, except for the element at the
    input index, to the console. Your function should use a loop to log every
    element except one at te inputted index, and should also use a CONTINUE
    statement (must use a semi-colon after continue for tests to pass) to skip over
    the value at the inputted index, then return nothing. Your code should NOT use
    ELSE. Below is an example of the code running, assuming that you will have
    completed the described function: useContinue.
    */

function useContinue(array, index){
    // create a loop which iterates over the input array
        // if current index is equal to input index
            // use described statement to skip the next iteration of loop (must include semi-colon!)
        // log current array element to the console

for(var i = 0; i < array.length; i++){
    if(i === index){
        continue;
    }
    console.log(array[i]);
}
}

useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4

// Exercise 8 - Use a BREAK statement
    /*
    We are going to complete a function that takes two parameters, an array of
    elements and an index, and logs every element, except those whose index is
    greater than the input index. Your function should use a loop to log every
    element up to and including the element located at the input index, and should
    also use a BREAK statement (must use a semi-colon after break for tests to pass)
    to skip over the values with indexes greater than that of the input index, then
    return nothing. Your code should NOT use ELSE. Below is an example of the
    code running, assuming that you will have completed the described function:
    useBreak.
    */

function useBreak(array, index){
    // create a loop which iterates over the input array
        // if current index is greater than input index
            // use described statement to stop the loop complete (must include semi-colon!)
        // log current array element to the console

for(var i = 0; i < array.length; i++){
    if(i > index){
        break;
    }
console.log(array[i])
}
}
useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4
// --------------------------------------------------------------------------------------------

// FOR-IN loops
    // FOR-IN statements allow us to loop over the properties in an object

    // Coding Example
    /*
    for (variable in object){
        statement
    }
    */

// Exercise 1 - FOR-IN loop over an object
    /*
    We are going to complete a  function that takes one paramter, an object of
    properties, and logs all of its keys (one at a time) to the console. Your function
    should use a FOR-IN loop to log each key in the object, then return nothing. DO
    NOT USE Object.keys() in your solution. Below is an example of the code
    running, assuming that you will have completed the described function: loopOverKeys.
    */

function loopOverKeys(object){
    // create a loop which iterates over the input object
    // log current key to the console
for(var objectNames in object){
    console.log(objectNames);
    // console.log(object[objectNames]);
}
}

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year

// Exercise 2 FOR-IN loop over an object
    /*
    We are going to complete a function that takes one parameter, an object of
    properties, and logs all of its values (one at a time) to the console. Your function
    should use a FOR-IN loop to log each value in the object, then return nothing.
    DO NOT USE Object.values() in your solution. Below is an example of the
    code running, assuming that you will have completed the described function: 
    loopOverValues.
    */

function loopOverValues(object){
    // create a loop which iterates over the input object
        // log current value to the console

for(var objectNames in object){
    console.log(object[objectNames])
}
}

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913
// --------------------------------------------------------------------------------------------

// Nested Loops
    // Exercise 1 - FOR loop over an array of arrays
    /*
    We are going to complete a function that takes one parameter, an array of
    arrays, and logs all of its elements(log each element in first inner array, start to
    end, then second inner array, and so on...) to the console. Your function should
    use a nested FOR loop to log each element from all inner arrays, then return
    nothing. Below is an example of the code running, assuming that you will have
    completed the described function: loopAnArrayOfArrays.
    */

function loopAnArrayOfArrays(arrayOfArrays){
    // create a loop which iterates over the input array
        // create an inner loop which iterates over current inner array
            // log current element to the console

for(var x = 0; x < arrayOfArrays.length; x++){
    for(var y = 0; y < arrayOfArrays[x].length; y++){
        console.log(arrayOfArrays[x][y])
    }
}
}

loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

// Exercise 2 - FOR-IN loop over an object of objects
    /*
    We are going to complete a function that takes one parameter, a object of
    objects, and logs all of its values (log each value in first inner ojbect, one at a
    time, then second inner object, and so on...) to the console. Your function
    should use a nested FOR-In loop to log each value from all inner objects, then
    return nothing. Below is an example of the code running, assuming that you will
    have completed the described function: loopAnObjectOfObjects.
    */

function loopAnObjectOfObjects(nestedObject){
    // create a loop which iterates over the input object
        // create an inner loop which iterates over current inner object
            // log current value to the console

for(var key in nestedObject){
    for(var innerKey in nestedObject[key]){
        console.log(nestedObject[key][innerKey]);
    }
}
}

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c

// Exercise 3 - Loop over an array of objects
    /*
    We are going to complete a function that takes one parameter, an array of
    objects, and logs all of its values (log each value in first inner object, one at a
    time, then second inner object, and so on...) to the console. Your function
    should use a FOR-IN loop nested inside of a for loop to log each value from all
    inner objects, then return nothing. Below is an example of the code running,
    assuming that you will have completed the described function:
    loopAnArrayOfObjects.
    */

function loopAnArrayOfObjects(arrayOfObjects){
    // create a loop which iterates over the input array
        // create an inner loop which iterates over current inner object
            // log current value to the console

for(var x = 0;x < arrayOfObjects.length; x++){
    for(var key in arrayOfObjects[x]){
        console.log(arrayOfObjects[x][key]);
    }
}
}

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e

// Exercise 4 - Loop over an object of arrays
    /*
    We are going to complete a function that takes one parameter, an object of
    arrays, and logs all of its values (log each value in first inner array, one at a time,
    the second innter array, and so on...) to the console. Your function should use a
    FOR loop nested inside of a FOR-IN loop to log each value from all inner arrays,
    then return nothing. Below is an example of the code running, assuming that
    you will have completed the described function: loopAnObjectOfArrays.
    */

function loopAnObjectOfArrays(objectOfArrays){
    // create a loop which iterates over the input object
        // create an inner loop which iterates over current inner array
            // log current value to the console

for(var x in objectOfArrays){
    for(var y = 0; y < objectOfArrays[x].length; y++){
        console.log(objectOfArrays[x][y]);
    }
}
}

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z

// Exercise 6 - List all combinations of two arrays
    /*
    We are oging to complete a function that takes two parameters, both arrays,
    and logs all possible combinations of elements separated by a space (see
    example for details...) to the console. Your function should use a nested FOR
    loop to log all combinations of the two arrays, then return nothing. Below is an
    example of the code running, assuming that you will have completed the
    described function: generateCombinations.
    */

function generateCombinations(array1, array2){
    // create a loop which iterates over the first array
        // create an inner loop which iterates over the second array
            // log current elemnt of first array and current element of 
            // second array to the console with space in between

for(var x = 0; x < array1.length; x++){
    for(var y = 0; y < array2.length; y++){
        console.log(array1[x] + " " + array2[y]);
    }
}
}

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

