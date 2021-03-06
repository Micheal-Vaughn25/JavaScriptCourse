// Arrays
    // Array is an "object" used to store an ordered list of multiple values in a single variable
    // Values of an array can be any type
    // Array indexes are zero based.
// --------------------------------------------------------------------------------------------
// Creating an Array
    // In order to create an array use a set of Square Brackets and separate values by commas

// Exercise
    // We are going to completa a function that takes no parameters, and returns a newly created
    // array. Your function should create a variable and assign it to a new array. Then return 
    // that variable. Below is an example of the code running, assuming that you will have 
    // completed the described function: createArray.

function createArray() {
    // create a result variable,
    var result;
    // assign it to a new array
    var result = ['a', 'b', 'c'];
    // return the result variable
    return result;
}

var resultArray = createArray();
console.log('should be an array:', Array.isArray(resultArray));
// --------------------------------------------------------------------------------------------

// Accessing an Element in an Array
    // Remember Arrays index begins at 0

// Exercise
    // We are going to complete a function that takes two parameters, an array and a numberical
    // index, and returns the element in the array located at the numberical index. Your function
    // should create a variable and assign it to an expression which accesses the element
    // located at the numerical index, then return that variable. Below is an example of the code
    // running, assuming that you will have completed the described function: accessAnElemnt.

function accessAnElement(array, index){
    // create a result variable,
    var result
    // assign it to an expression that accesses the element within array at the index
    var result = array[index];
    // return the result variable
    return result
}

var resultElement = accessAnElement (['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('shouldbe "Mouse":', resultElement);
// --------------------------------------------------------------------------------------------

// Reassigning an Element in an Array
    // Arrays are mutable. You can change them they are created using = operator

// Exercise
    // We are going to complete a function that takes three parameters, an array, a numerical index
    // a newValue, and returns the array after performing a reassignment. Your function should
    // reassign the element within the array, located at the numerical index, to the new input
    // value, and should then return the newly changed array. Below is an example of the code running
    // assuming that you will have completed the described function: reassignAnElement

function reassignAnElement(array, index, newValue) {
  // reassign the value in the array, located at the index, to the newValue parameter
  array[index] = newValue
  // return the input array
  return array
}

var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);
// --------------------------------------------------------------------------------------------

// Getting the Length of an Array
    // Length of an array can be found by using the .length property

// Exercise
    // We are going to complete a function that takes in one parameter, an array, and returns the
    // length of that array. Your function should create a variable and assign it to the length
    // of the input array using the .length property, and return that variable. Below are examples
    // of the code running, assuming that you will have completed the described function: getArrayLength

function getArrayLength(array){
    // create a legnth variable
    // assign it to the length of the array
    var length = array.length
    // return the length variable
    return length
}

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);
// --------------------------------------------------------------------------------------------

// Getting the last element of an Array
    // Using the .length property you can find the last element of an Array. Since Array Index
    // always start at 0 you can subtract 1 to get the last element of an Array

// Exercise
    // We are going to complete a function that takes in one parameter, an array, and returns the 
    // input array's last element. Your function should determine the length of the input array 
    // minus 1, and assign it to a lastIndex variable. Your function should create a lastElement
    // variable and assign it to an expression which uses lastIndex to access the last element in
    // the array, and return the lastElement variable. Below are examples of the code running, 
    // assuming that you will have completed the described function: getLastElement

function getLastElement(array){
    // create a lastIndex variable
    var lastIndex;
    // assign it to the last index in the array
    var lastIndex = array.length - 1;
    // create a lastElement variable
    var lastElement;
    // assign it to the last element in the string (make use of lastIndex)
    var lastElement = array[lastIndex]
    // return the lastElement variable
    return lastElement
}

var resultLastElement1 = getLastElement([1,2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3,4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);
// --------------------------------------------------------------------------------------------

// Adding an Element to the back of an Array
    // We can use the .push() method to add an element to the back of an existing Array

// Exercise
    /* 
    We are going to complete a function that takes in two parameters, an array and an element
    adds the element to the end of the array, and returns the array. Your function should use 
    the .push() method to add the input element to the end of hte input array, then return that
    array. Below are examples of the code running, assuming that you will have completed the
    described function: applyPush.
    */

function applyPush(array, element) {
    // add the element to the back of the array
    array.push(element);
    // return the array
    return array;
}

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc, "def", "ghi"]:', resultArray2);
// --------------------------------------------------------------------------------------------

// Removing an Element from the back of an Array
    // If you want to remove an element from the back of an existing array .pop() method can be
    // used to do so

// Exercise
    /*
    We are going to complete a function that takes in one parameter, an array, removes the last
    element from the back of the array, and returns the removed element. Your function should
    create a popped variable, assign it to an expression using the .pop() method to remove the
    last element from the array, then return that popped variable. Below are examples of the code
    running, assuming that you will have completed the described function: applyPop.
    */

function applyPop(array){
    // create a popped variable
    var popped;
    // assign it to an expression removing the last element from the array
    var popped = array.pop();
    // return the popped variable
    return popped;
}

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);
// --------------------------------------------------------------------------------------------

// Adding an Element to the front of an Array
    // If you need to add an element to the front of an array using the .unshift() method

// Exercise
    /*
    We are going to complete a function that takes in two parameters, an array and an element,
    adds the element to the front of the array, and returns the array. Your function should use
    the .unshift() method to add the input element to the front of the input array, then return
    that array. Below are examples of code running, assuming that you will have completed the 
    described function: applyUnshift.
    */

function applyUnshift(array, element){
    // add the element to the front of the array
    array.unshift(element)
    // return the array
    return array
}

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);
// --------------------------------------------------------------------------------------------

// Removing an Element from the front of an Array
    // If you need to remove an element from the front of an array use .shift() method

// Exercise
    /*
    We are going to complete a function that takes in one parameter, an array, removes the first
    element from the front of the array, and returns the removed element. Your function should
    create a shifted variable, assign it to an expression using the .shift() method to remove 
    the first element from the array, then return that shifted variable. Below are examples of code
    running, assuming that you will have completed the described function: applyShift.
    */

function applyShift(array){
    // create a shifted variable
    var shifted;
    // assign it to an expression removing the first element from the array
    var shifted = array.shift()
    // return the shifted variable
    return shifted
}

var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1);

var resultElement2 = applyShift(['islands', 'peninsulas', 'pacific']);
console.log('should log islands:', resultElement2);
// --------------------------------------------------------------------------------------------

// Adding an Element in General .splice()
    // If you want to add an element to an array without replacing anything use the .splice method
    // This method will allow you to add an element anywhere in an array

// Exercise
    /*
    We are going to complete a function that takes in three parameters, an array, an index, and an
    element, adds the element to the index of the array, without replacing any of the existing
    elements, and returns the array. Your function should use the .splice()method to add the input
    element to the input array, at the given index, and without replacing any of the existing 
    elements, then returns the array. Below are examples of the code running, assuming that you
    will have completed the described function: addAnElementInGeneral.
    */

function addAnElementInGeneral(array, index, element){
    // add the element to the array at the index given
    array.splice(index, 0, element);
    // (be sure not to replace any existing elements)
    // return the array
    return array;
}

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8, 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);
// --------------------------------------------------------------------------------------------

// Removing an Element in General .splice()
    // If you want to remove an element from an existing array you can use .splice() as well
    // First number in splice is the index, second number is the number of elements to remove

// Exercise
    /*
    We are going to complete a function that takes in two parameter,s an array and an index,
    removes the element from the index of the array, and returns the array. Your function shoud
    use the .splice() method to remove the element from the input array, at the given index, then
    return the array. Below are examples of the code running, assuming that you will have completed
    the described function: removeAnElementInGeneral.
    */

function removeAnElementInGeneral(array, index){
    // remove the element from the array at the index given
    array.splice(index, 1);
    // return the array
    return array;
}

var resultArray1 = removeAnElementInGeneral([8, 9,10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);
// --------------------------------------------------------------------------------------------

// Removing and Adding Elements in General .splice()
    // .splice can be used to remove and add elements in the same spot

// Exercise
    /*
    We are going to complete a function that takes in four parameters, an array, an index, and two
    new elements, remove 2 elements, beginning at the index, adds the two new elements, and returns
    the array. Your function should use the .splice() methord to remove two elements from the input
    array, at the given index, adds the two new elements in their place, then return the array. Below
    are examples of the code running, assuming that you will have completed the described function:
    applySplice.
    */

function applySplice(array, index, item1, item2){
    // remove two elements from the array at the index given, and adds item 1 and item 2 in their place
    array.splice(index, 2, item1, item2);
    // return the array
    return array;
}

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);
// --------------------------------------------------------------------------------------------

// Determining if a value is an Array
    // If you want to determine if a value is an array use Array.isArray() method

// Exercise
    /*
    We are going to complete a function that takes in one parameter, possibly an array, and returns whether
    the input is an array or not. Your function should create a variable, assign it to an expression that 
    tells whether the input parameter is an array or not, using the Array.isArray() method, then return that
    variable. Below are examples o the code running, assuming that you will have completed the described
    function: isAnArray.
    */

function isAnArray(input){
    // create a result variable
    var result;
    // assign it to a call to the applicable method
    var result = Array.isArray(input);
    // return the result variable
    return result;
}

var resultBoolean1 = isAnArray([1, 2, 3,]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);
// --------------------------------------------------------------------------------------------

// Slicing a portion of an Array (and making a copy)
    // If you want to make a copy of an existing array use the .slice() method


// Exercise
    /*
    We are going to complete a function that takes in three parameter,s an array and two integer indexes
    (start, end), and returns a portion of the array from before the start indx up to, but not including,
    the end index. Your function should create a sliceOfArray variable and assign it to a call to the slice
    method on the array, starting from before start, up to, but not including, end and return the sliceOfArray
    variable. Below are examples of the code running, assuming that you will have completed the described
    function: applySlice.
    */

function applySlice(array, start, end){
    // create a sliceOfArray variable
    var sliceOfArray;
    // assign it to a portion of the array from before start, up to, but not includign end
    var sliceOfArray = array.slice(start, end);
    // return the sliceOfArray varaible
    return sliceOfArray;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2)
// --------------------------------------------------------------------------------------------

// Using .slice() to make a copy
    // copy can be done by not passing indexes to .slice()

// Exercise
    /*
    We are going to complete a function that takes in one array parameter, and returns a copy of
    the array. Your function should create a copyOfArray variable and assign it to a call to the 
    slice method on the array which will make a copy, and return the copyPfArray variable. Below
    are examples of the code running, assuming that you will have completed the described function:
    makeAcopy.
    */

function makeACopy(array){
    // create a copyOfArray varaible
    var copyOfArray;
    // assign it to a copy of the array
    var copyOfArray = array.slice();
    // return the copyOfArray variable
    return copyOfArray;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);
// --------------------------------------------------------------------------------------------

// Adding the contents of an Array to another Array
    // If you want to add the contents of one array to another use .concat() method

// Exercise
    /*
    We are going to complete a function that takes in two array parameters, and returns an array 
    containing all of the elements of the two input arrays. Your function should create a 
    concattedArray variable and assign it to a call to the concat method on the input array,
    applied to the other input array, and return the concattedArray variable. Below are examples
    of the code running, assuming that you will have completed the described function: applyConcat.
    */

function applyConcat(array1, array2){
    // create a concattedArray variable
    var concattedArray;
    // assign it to the contents of both array1 and array2
    var concattedArray = array1.concat(array2);
    // return the concattedArray variable
    return concattedArray;
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);
// --------------------------------------------------------------------------------------------

// Transforming an Array into a String
    // If you want to transform an array into a string use the .join() method

// Exercise
    /*
    We are going to complete a function that takes in one array parameter (elements will be strings),
    and one string parameter, and returns a string that is the result of joining the elements of the
    string together, separated by the string parameter. Your function should create a joinedString
    variable and assign it to a call to the .join() method, and return the joinedString variable.
    Below are examples of the code running, assuming that you will have completed the described
    function: applyJoin.
    */

function applyJoin(arrayOfStrings, string){
    // create a joinedString variable
    var joinedString;
    // assign it to a string which is all of the strings in the input array separated by the input string
    var joinedString = arrayOfStrings.join(string);
    // return the joinedString variable
    return joinedString;
}

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);
// --------------------------------------------------------------------------------------------

// Transforming a String into an Array
    // If you want to transform a string into an array you can use the .split() method.
    // If you do not supply an argument the element will not split
    // if you supply an empty string the element will split by each space in the string
    // if you supply a string, the element will split based on the string

// Exercise
    /*
    We are going to comlete a function that takes in two string parameters (stringToBeSplit, Splitter),
    and returns an array that is the result of splittingthe stringToBeSplit parameter on the splitter
    parameter. Your function should create a splitString variable and assign it to a call to the .split()
    method, and return the splitString variable. Below are examples of the code running, assuming that you
    will have completed the described function: applySplit.
    */

function applySplit(stringToBeSplit, splitter){
    // create a splitString variable
    var splitString;
    // assign it to an array which contains the elements in the stringToBesplit separated by the splitter
    var splitString = stringToBeSplit.split(splitter);
    // return the splitString variable
    return splitString;
}

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);
// --------------------------------------------------------------------------------------------

// Using the indexOf Method on an Array
    // If you want to determine where a particular element is in an array you can use the .indexOf method 
    // for string. If the element is not present you will get a return of -1

// Exercise
    /*
    We are going to complete a function that takes in two parameters (array, element), and returns the index
    of the array where the element can be found. Your function should create an index variable and assign it
    to a call of the indexOf() method on the array, and passing element as an argument, and return the index 
    variable. Below are examples of the code running, assuming that you will have completed the described
    function: applyIndeOfToArray.
    */

function applyIndexOfToArray(array, element){
    // create an index variable
    var index;
    // assign it to the index inside of array where element can be found
    var index = array.indexOf(element);
    // return the index variable
    return index;
}

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);

// --------------------------------------------------------------------------------------------
