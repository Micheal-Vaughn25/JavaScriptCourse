// --------------------------------------------------------------------------------------------

// Array Methods 9

    // Exercise 1 - filterOddLengthWords
    /*
    Write a function called "filterOddLengthWords".
    Given an array of strings, "filterOddLengthWords" returns an array containing
    only the elements of the given array whose lengths are odd numbers.
    */

    function filterOddLengthWords(words){
        // var create variable to hold oddLengthWords array
        var oddLengthWords = []
        // iterate over the array
        for(var i = 0; i < words.length; i++){
            // if words[i] is odd, write to oddLengthsWords array
            if(words[i].length % 2 >= 1){
                oddLengthWords.push(words[i]);
            }
        }
        // return oddLengthWords array
        return oddLengthWords
    }

    var output = filterOddLengthWords(['there', 'its', 'is', 'now']);
    console.log(output); // --> ['there', 'now']


    // Exercise 2 - filterEvenLengthWords
    /*
    Write a function called "filterEvenLengthWords".
    Given an arra of strings, "filterEvenLengthWords" returns an array containing
    only the elements of the given array whose lengt is an even number.
    */

    function filterEvenLengthWords(words){
        // create a variable for evenLengthWords array
        var evenLengthWords = [];
        // iterate over the array
        for(var i = 0; i < words.length; i++){
            // if words[i] is even, write to the evenLengthWords array
            if(words[i].length % 2 === 0){
                evenLengthWords.push(words[i]);
            }
        }
        return evenLengthWords;
    }

    var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
    console.log(output); // --> ['word', 'word']

    // Exercise 3 - getLengthOfLongestElement
    /*
    Write a function called "getLengthOfLongestElement".
    Given an array, "GetLengthOfLongestElement" returns the length of the longest
    string in the given array.
    Notes:
    It should return 0 if the array is empty.
    */

    function getLengthOfLongestElement(arr){
        // creat variable for longestString
        var longestString = 0
        // iterate over array to find the length of words
        for (var i = 0; i < arr.length; i++){
            // if arr is empty return 0
            if(arr === 0){
                longestString = 0;
                // else count the length of each word
            } else if (arr[i].length > longestString){
                longestString = arr[i].length;
            }
        }
        return longestString;
    }

    var output = getLengthOfLongestElement(['one', 'two', 'three']);
    console.log(output); // --> 5
// --------------------------------------------------------------------------------------------

// Array Methods 10

    // Exericse 1 - squareElements
    /*
    Write a function called "squareElements". Given an array of numbers,
    "squareElements" should return a new array where each element is the square
    of the element of the given array.
    */

   function squareElements(arr){
    // create var for new squaredNumbers array
    var squaredNumbers = [];
    // iterate over the array
    for(var i = 0; i < arr.length; i++){
        squaredNumbers.push((arr[i] ** 2));
    }
    return squaredNumbers
    }

    var output = squareElements([1, 2, 3]);
    console.log(output); // --> [1, 4, 9] 

    // Exercise 2 - filterOddElements
    /*
    Write a function called "filterOddElements".
    Given an array of numbers, "filterOddElements" returns an array containing only
    the odd numbers of the given array.
    */

    function filterOddElements(arr){
        // create var to hold oddElements array
        var oddElements = []
        // iterate over the array
        for(var i = 0; i < arr.length; i++){
            if(arr[i] % 2 >= 1){
                oddElements.push(arr[i])
            }
        }
        return oddElements;

    }

    var output = filterOddElements([1, 2, 3, 4, 5]);
    console.log(output); // --> [1, 3, 5]

    // Exercise 3 - computeProductOfAllElements
    /*
    Write a function called "computeProductOfAllElements".
    Given an array of numbers, "computeProductOfAllElements" returns the
    products of all the elements in the given array.
    Notes:
    If given array is empty, it should return 0.
    */

    function computeProductOfAllElements(arr){
        // create variable to hold productResult
        var productResult = 1
        // if array is empty, return 0
        if(arr.length === 0){
            productResult = 0
        }
        // iterate over the array
        for(i = 0; i < arr.length; i++){
            productResult *= arr[i]
            }
        return productResult;
    }

    var output = computeProductOfAllElements([2, 5, 6]);
    console.log(output); // --> 60
// --------------------------------------------------------------------------------------------

// Array Methods 11

    // Exercise 1 - filterEvenElements
    /*
    Write a function called "filterEvenElements"
    Given an array of numbers, "filterEvenElements" returns an array containing only
    the even numbers of the given array.
    */

    function filterEvenElements(arr){
        // create array for evenNumbers array
        var evenNumbers = []
        // iterate over array
        for(var i = 0; i < arr.length; i++){
            // if the element is even, push to evenNumbers array
            if(arr[i] % 2 === 0){
                evenNumbers.push(arr[i]);
            }
        }
        return evenNumbers;
    }

    var output = filterEvenElements([2, 3, 4, 5, 6]);
    console.log(output); // --> [2, 4, 6]

    // Exercise 2 - getLengthOfShortestElement
    /*
    Write a function called "getLengthOfShortestElement".
    Given an array, "getLengthOfShortestElement" returns the length of the shortest
    string in the given array.
    Notes:
    It should return 0 if the array is empty.
    */

    function getLengthOfShortestElement(arr){
        // Edge case if array is empty
        if(arr.length === 0){
            return 0
        }
        // create variable for shortestString array
        var shortestString = 0
        // iterate over array
        for(var i = 0; i < arr.length; i++){
            // if string is shortest push to shortestString
            if(shortestString.length < arr[i].length){
                shortestString.push(arr[i].length);
            }
        }
        return shortestString.length;
    }

    var output = getLengthOfShortestElement(['one', 'two', 'three']);
    console.log(output); // --> 3

    // Exercise 3 - getLongestElement
    /*
    Write a function called "getLongestElement".
    Given an array, "getLongestElement" returns the longest string in the given
    array.
    Notes: If there are ties, it returns the first element to appear.
    If the array is empty, it should return an empty string.
    */

    function getLongestElement(arr){
        // edge case if array is empty
        if(arr.length === 0){
            return '';
        }
        // create variable for longestString array
        var longestString = arr[0];
        // iterate over the array
        for(var i = 0; i < arr.length; i++){
            // if string is larger than longestString variable, push
            // string to longestString variable
            if(arr[i].length > longestString.length)
            longestString = (arr[i]);
        }
        return longestString;
    }

    var output = getLongestElement(['one', 'two', 'three']);
    console.log(output); // --> 'three'
// --------------------------------------------------------------------------------------------

// Array Methods 12

    // Exercise 1 - findSmallestElement
    /*
    Write a function called "findSmallestElement".
    Given an array of numbers, "findSmallestElement" returns the smallest number
    within the given array.
    Notes:
    If the given array is empty, it should return 0.
    */

    function findSmallestElement(arr){
        // create edge case if array is empty
        if(arr.length === 0){
            return 0;
        }
        // create variable for smallestElement
        var smallestElement = arr[0]
        // iterate over the array
        for(var i = 1; i < arr.length; i++){
            // if arr[i] is less than smallestElement, write arr[i] to smallestElement
            if(arr[i] < smallestElement){
                smallestElement = arr[i];
            }
        }
        return smallestElement;
    }

    var output = findSmallestElement([4, 1, 9, 10]);
    console.log(output); // --> 1

    // Exercise 2 - findShortestElement
    /*
    Write a function called "findShortestElement".
    Given an array, "findShortestElement" returns the shortest string within the given
    array.
    Notes:
    If there are ties, it should return the first element to appear.
    If the given array is empty, it should return an empty string.
    */

    function findShortestElement(arr){
        // edge case if array is empty
        if(arr.length === 0){
            return ''
        }
        // create variable for shortestElement
        var shortestElement = arr[0]
        // iterate over the array
        for(var i = 1; i < arr.length; i++){
            // if shortestElement.length is shorter than arr[i].length, write value to shortestElement
            if(arr[i].length < shortestElement.length){
                shortestElement = arr[i];
            }
        }
        return shortestElement;
    }

    var output = findShortestElement(['a', 'two', 'three']);
    console.log(output); // --> 'a'
// --------------------------------------------------------------------------------------------

// Array Methods 13

    // Exercise 1 - getLargestElement
    /*
    Write a function called "getLargestElement".
    Given an array, "getLargestElement" returns the largest number in the given
    array.
    Notes:
    It should return 0 if the array is empty.
    */

    function getLargestElement(arr){
        // edge case if the array is 0
        if(arr.length === 0){
            return 0;
        }
        // declare variable for largestElement array. Start with index 0 as starting point
        var largestElement = arr[0];
        // iterate over the array
        for(var i = 1; i < arr.length; i++){
            // if arr[i] is larger than largestElement, write value to largestElement
            if(arr[i] > largestElement){
                largestElement = arr[i];
            }
        }
        return largestElement
    }

    var output = getLargestElement([5, 2, 8, 3]);
    console.log(output); // --> 8;

    // Exercise 2 - computeSumeOfAllElements
    /*
    Write a function called "computeSumOfAllElements".
    Given an array of numbers, "computeSumOfAllElements" returns the sum of all
    the elements in the given array.
    */

    function computeSumOfAllElements(arr){
        // create variable for sumElements
        var sumElements = 0;
        // iterate over the array of numbers
        for(var i = 0; i < arr.length; i++){
            // Combine the sum of each value to sumElements array (use +=)
            sumElements += arr[i]
            }
        return sumElements;
        }
    
    var output = computeSumOfAllElements([1, 2 ,3])
    console.log(output); // --> 6
// --------------------------------------------------------------------------------------------

// Objects 7

    // Exercise 1 - getElementsThatEqual10AtProperty
    /*
    Write a function called "getElementsThatEqual10AtProperty".
    Given an object and a key, "getElementsThatEqual10AtProperty" returns an
    array containing all the elements of the array located at the given key that are
    equal to ten.
    Notes:
    If the array is empty, it should return an empty array.
    If the array contains no elements that are equal to 10, it should return an
    empty array.
    If the property of the given key is not an array, it should return an empty 
    array.
    If there is no property at the key, it should return an empty array.
    */

    function getElementsThatEqual10AtProperty(obj, key){
        // create variable to hold results
        var result = []
        // if array is undefined
        if(obj[key] === undefined){
            return [];
        }
        // if object at key is not array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // if object at key is empoty
        if(obj[key].length === 0){
            return [];
        }

        // iterate over object
        for(var i = 0; i < obj[key].length; i++){ 
            if(obj[key][i] === 10){
                result.push(obj[key][i]);
            }
        }
        return result;
    }

    var obj = {
        key: [1000, 10, 50, 10]
    };
    var output = getElementsThatEqual10AtProperty(obj, 'key');
    console.log(output); // --> [10, 10]

    // Exercise 2 - getElementsLessThan100AProperty
    /*
    Write a function called "getElementsLessThan100AtProperty".
    Given an object and a key, "getElementsLessThan100AtProperty" returns an
    array containing all the elements of the array located at the given key that are
    less than 100.
    Notes:
    If the array is empty, it should return an empty array.
    If the array contains no elements less than 100, it should return an empty
    array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no propetty at the key, it should return an empty array.
    */

    function getElementsLessThan100AtProperty(obj, key){
        // create a variable to hold result array
        var result = []
        // create edge case for empty array
        if(obj[key].length === 0){
            return [];
        }
        // create edge case for no elements less than 100
        if(obj[key] >= 100){
            return [];
        }
        // create edge case if key is not an array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // create edge case if key does not exist
        if(obj[key] === undefined){
            return [];
        }
        // iterate over object
        for(var i = 0; i < obj[key].length; i++){
            // if element of key array is less than 100, push to result array
            if(obj[key][i] < 100){
                result.push(obj[key][i]);
            }
        }
        return result;
    }

    var obj = {
        key: [1000, 20, 50, 500]
    };
    var output = getElementsLessThan100AtProperty(obj, 'key');
    console.log(output); // --> [20, 50]
// --------------------------------------------------------------------------------------------

// Advanced 4

    // Exercise 1 - countAllCharacters
    /*
    Write a function called "countAllCharacters".
    Given a string, "countAllCharacters" returns an object where each key is a
    character in the given string. The value of each key should be how many times
    each character appeared in the given string.
    Notes:
    If given an emptry string, countAllCharacters should return an empty object.
    */

    function countAllCharacters(str){
        // edge case, if empty string return empty object
        if(str === ''){
            return {};
        }
        // create a variable for new countObject
        var countObject = {};
        // create a variable to split string
        var splitString = str.split('');
        // iterate over string
        for(var i = 0; i < splitString.length; i++){
            // Create variable for currentLetter
            var currentLetter = splitString[i]
            // If currentLetter is undefined in the countObject variable, increase to 1
            if(countObject[currentLetter] === undefined){
                countObject[currentLetter] = 1
                // Else, if currentLetter is currently 1, increment value by 1
            }  else {
                countObject[currentLetter]++;
            }
        }
        return countObject;
    }
    var output = countAllCharacters('banana');
    console.log(output); // --> {b: 1, a: 3, n: 2}
// --------------------------------------------------------------------------------------------

// Objects 8

    // Exercise 1 - getElementsGreaterThan10AtProperty
    /*
    Write a function called "getElementsGreaterThan10AtProperty".
    Given an object and a key, "getElementsGreaterThan10AtProperty" returns an
    array containing the elements within the array, located at the given key, that are
    greater than 10.
    Notes:
    If the array is empty, it should return an empty array.
    If the array contains no elements greater than 10, it should return an empty
    array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no property at the key, it should return an empty array.
    */

    function getElementsGreaterThan10AtProperty(obj, key){
        // Edge cases, if array is empty
        if(obj[key] === ''){
            return [];
        }
        // Edge cases, if array contains no elements greater than 10
        if(obj[key] < 10){
            return [];
        }
        // Edge cases, if property at given key is not an array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // Edge Cases, if there is no property at the key
        if (obj[key] === undefined){
            return [];
        }
        // create empty array for greaterElements
        var greaterElements = [];
        // iterate over the object
        for(var i = 0; i < obj[key].length; i++){
            // if obj[key][i] is greater than 10, push to greaterElements array
            if(obj[key][i] > 10){
                greaterElements.push(obj[key][i]);
            }
        }
        return greaterElements;
    }

    var obj = {
        key: [1, 20, 30]
    };
    var output = getElementsGreaterThan10AtProperty(obj, 'key');
    console.log(output); // --> [20, 30]

    // Exercise 2 - getFirstElementOfProperty
    /*
    Write a function called "getFirstElementOfProperty".
    Given an object and a key, "getFirstElementOfProperty" returns the first element
    of the array located at the given key.
    Notes:
    If the array is empty, it should return undefined.
    If the property at the given key is not an array, it should return undefined.
    If there is no property at the key, it should return undefined.
    */

    function getFirstElementOfProperty(obj, key){
        // Edge Cases, if array is empty
        if(obj[key] === ''){
            return undefined;
        }
        // Edge cases, if the key is not an array
        if(Array.isArray(obj[key]) === false){
            return undefined;
        }
        // Edge cases, if there is no property at key
        if(obj[key] === undefined){
            return undefined;
        }
        // create result variable
        var result = 0
        result = obj[key][0];
        return result;
    }
    
    var obj = {
        key: [1, 2, 4]
    };
    var output = getFirstElementOfProperty(obj, 'key');
    console.log(output); // --> 1

    // Exercise 3 - getNthElementOfProperty
    /*
    Write a function called "getNthElementOfProperty".
    Given an object and a key, "getNthElementOfProperty" returns the nth element
    of an array located at the given key.
    Notes:
    If the array is empty, it should return undefined.
    If n is out of range, it should return undefined.
    If the property at the given key is not an array, it should return undefined.
    If there is no property at the key, it should return undefined.
    */

    function getNthElementOfProperty(obj, key, n){
        // Edge cases, if array is empty
        // Edge cases, if key is not an array
        if(Array.isArray(obj[key]) === false){
            return undefined;
        }
        // Edge cases, if there is no property at the key
        if(obj[key] === undefined){
            return undefined;
        }
        // create variable for result
        var result =
        result = obj[key][n];
        return result;
    }

    var obj = {
        key: [1, 2, 6]
    };
    var output = getNthElementOfProperty(obj, 'key', 1);
    console.log(output); // --> 2

    // Exercise 4 - getLastElementOfProperty
    /*
    Write a function called "getLastElementOfProperty".
    Given an object and a key, "getLastElementOfProperty" returns the last element
    of an array located at the given key.
    Notes:
    If the array is empty, it should return undefined.
    If the property at the given key is not an array, it should return undefined.
    If there is no property at the key, it should return undefined.
    */

    function getLastElementOfProperty(obj, key){
        // Edge cases, if array is empty
        if(obj[key] === undefined){
            return undefined;
        }
        // Edge cases, if key is not an array
        if(Array.isArray(obj[key]) === false){
            return undefined;
        }
        // create result variable
        var result
        // find the last possible index of array, create variable lastIndex
        var lastIndex = obj[key].length - 1
        result = obj[key][lastIndex]
        return result;
    }

    var obj = {
        key: [1, 2, 5]
    };
    var output = getLastElementOfProperty(obj, 'key');
    console.log(output); // --> 5

// --------------------------------------------------------------------------------------------

// Array Methods 8

    // Exercise 1 - removeElement
    /*
    Write a fuction called "removeElement".
    Given an array of elements, and a "discarder" parameter, "removeElement"
    returns an array containing the items in the given array that do not match the
    "discarder" parameter.
    Notes:
    If all the elements match, it should return an empty array.
    If an empty array is passed in, it should return an empty array.
    */

    function removeElement(array, discarder){
        // Edge Case, If all elements match it should return an empty array.
        if(array === discarder){
            return [];
        }
        // Edge case, If array is empty, return empty array
        if(array === ''){
            return [];
        }
        // iterate over the array
        for(var i = 0; i < array.length; i++){
            // if element equal discarder variable, remove from array.
            if(array[i] === discarder){
                array.splice([i], 1);
                i--;
            }
        }
        return array;
    }

    var output = removeElement ([1, 2, 3, 2, 1], 2);
    console.log(output); // --> [1, 3, 1]

    // Exercise 2 - keep
    /*
    Write a function called "keep".
    Given an array and a keeper element, "keep" returns an array containing the
    items that match the given keeper element.
    Notes:
    If no elements match, "keep" should return an empty array.
    */

    function keep(array, keeper){
        // Edge Case, if no elements match "keep" return empty array
        if(array === keeper){
            return [];
        }
        // iterate over the array
        for(var i = 0; i < array.length; i++){
        // if elements in array match "keeper" leave them in the array. 
            if(array[i] !== keeper){
                array.splice(i, 1)
                i--
            }
        }
        return array;
    }

    var output = keep([1, 2, 3, 2, 1], 2)
    console.log(output); // --> [2, 2]

    // Exercise 3 - computeAverageOfNumbers
    /*
    Write a function called "computeAverageOfNumbers".
    Given an array of numbers, "computeAverageOfNumbers" returns their
    average.
    Notes:
    If given an empty array, it should return 0.
    */

    function computeAverageOfNumbers(nums){
        // edge case, if array is empty
        if(nums.length === 0){
            return 0;
        }
        // create a variable for sum
        var sumOfNums = 0
        // iterate over the array
        for(var i = 0; i < nums.length; i++){
            // add each number and divide by total numbers
            
            // create a variable for index of numbers
            // create a result variable to display the average
            
            var indexOfNums = nums.length
            sumOfNums += nums[i]
            var result = sumOfNums / indexOfNums
        }
        return result;
    }

    var input = [1, 2, 3, 4, 5];
    var output = computeAverageOfNumbers(input);
    console.log(output); // --> 3
// --------------------------------------------------------------------------------------------

// Objects 9

    // Exercise 1 - getOddLengthWordsAtProperty
    /*
    Write a function called "getOddLengthWordsAtProperty".
    Given an object and a key, "getOddLengthWordsAtProperty" returns an array
    containing all the odd length word elements of the array located at the given
    key.
    Notes:
    If the array is empty, it should return an empty array.
    If it contains no odd length elements, it should return an empty array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no property at the given key, it should return an empty array.
    */

    function getOddLengthWordsAtProperty(obj, key){
        // Edge Case, if the array is empty 
        if(obj[key] === undefined){
            return [];
        }
        // Edge case, if the array is not an array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // create variable to hold array of oddWords
        var oddWords = []
        // iterate over the object
        for(var i = 0; i < obj[key].length; i++){
            // if obj[key].length is odd, push to oddWords array
            if(obj[key][i].length % 2 >= 1){
                oddWords.push(obj[key][i]);
            }
        }
        return oddWords;
    }

    var obj = {
        key: ['It', 'has', 'some', 'words']
    };
    var output = getOddLengthWordsAtProperty(obj, 'key');
    console.log(output); // --> ['has', 'words']

    // Exercise 2 - getAverageOfElementsAtProperty
    /*
    Write a function called "getAverageOfElementsAtProperty".
    Given an object and a key, "getAverageOfElementsAtProperty" returns the
    average of all the elements in the array located at the given key.
    Notes:
    If the array at the given key is empty, it should return 0.
    If the property at the given key is not an array, it should return 0.
    If there is no property at the given key, it should return 0.
    */


    function getAverageOfElementsAtProperty(obj, key){
        // Edge case, If key is empty
        if(obj[key] === undefined){
            return 0;
        }
        // Edge case, if the property is not an array
        if(Array.isArray(obj[key]) === false){
            return 0;
        }
        // Edge case if there is no property at key
        if(obj[key].length === 0){
            return 0;
        }
        // create variable to hold averageElement
        var sum = 0;
        // iterate over the object
        for(var i = 0; i < obj[key].length; i++){
            sum += obj[key][i];
            
        }
        return sum / obj[key].length;
    }

    var obj = {
        key: [1, 2, 3]
    };
    var output = getAverageOfElementsAtProperty(obj, 'key');
    console.log(output); // --> 2

    // Exercise 3 - getEvenLengthWordsAtProperty
    /*
    Writea fucntion called "getEvenLengthWordsAtProperty".
    Given an object and a key, "getEvenLengthWordsAtProperty" returns an array
    containing all the even length word elements of the array located at the given
    key.
    Notes:
    If the array is empty, it should return an empty array.
    If it contains no even length elements, it should return an empty array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no property at the key, it should return an empty array.
    */

    function getEvenLengthWordsAtProperty(obj, key){
        // Edge cases, array is empty
        if(obj[key] === undefined){
            return [];
        }
        // Edge cases, if the property is not an array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // Edge case, if there is no property at the array
        if(obj[key].length === 0){
            return [];
        }
        // create variable for evenWords array
        var evenWords = [];
        // iterate over the object
        for(var i = 0; i < obj[key].length; i++){
            // if propertys are even, push to evenWords array
            if(obj[key][i].length % 2 === 0){
                evenWords.push(obj[key][i]);
            }
        }
        return evenWords;
    }

    var obj = {
        key: ['a', 'long', 'game']
    };
    var output = getEvenLengthWordsAtProperty(obj, 'key');
    console.log(output); // --> ['long', 'game']
    
// --------------------------------------------------------------------------------------------

// Objects 10

    // Exercise 1 - getSquaredElementsAtProperty
    /*
    Write a function called "getSquaredElementsAtProperty".
    Given an object and a key, "getSquaredElementsAtProperty" returns an array
    containing all the squared elements of the array located at the given key.
    Notes:
    If the array is empty, it should return an empty array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no property at the key, it should return an empty array.
    */

    function getSquaredElementsAtProperty(obj, key){
        // Edge Cases If the array is empty
        if(obj[key] === undefined){
            return [];
        }
        // Edge cases, if the array is not an array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // Edge cases, if there is no property at the key
        if(obj[key].length === 0){
            return [];
        }
        // create squaredElement array
        var squaredElement = []
        // iterate over object
        for(var i = 0; i < obj[key].length; i++){
            // square each element in array
            squaredElement.push(obj[key][i] ** 2)
        }
        return squaredElement;
    }
    var obj = {
        key: [2, 1, 5]
    };
    var output = getSquaredElementsAtProperty(obj, 'key');
    console.log(output); // --> [4, 1, 25]

    // Exercse 2 - getOddElementsAtProperty
    /*
    Write a function called "getOddElementsAtProperty".
    Given an object and a key, "getOddElementsAtProperty" returns an array
    containing all the odd elements of the array located at the given key.
    Notes:
    If the array is empty, it should return an empty array.
    If it contains no odd elements, it should return an empty array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no property at the key, it should return an empty array.
    */

    function getOddElementsAtProperty(obj, key){
        // Edge case If array is empty
        if(obj[key] === undefined){
            return [];
        }
        // edge case if property is not an array
        if(Array.isArray(obj[key])=== false){
            return [];
        }
        // Edge case, if there is no property at key
        if(obj[key].length === 0){
            return [];
        }
        // create variable for oddElements
        var oddElements = [];
        // iterate over object
        for(var i = 0; i < obj[key].length; i++){
            // if element is odd, push to oddElements array
            if(obj[key][i] % 2 >= 1){
                oddElements.push(obj[key][i])
            }
        }
        return oddElements;
    }
    var obj = {
        key: [1, 2, 3, 4 ,5]
    };
    var output = getOddElementsAtProperty(obj, 'key');
    console.log(output); // --> [1, 3, 5]

    // Exercise 3 - getEvenElementsAtProperty
    /*
    Write a function called "getEvenElementsAtProperty".
    Given an object and a key, "getEvenElementsAtProperty" returns an array
    containing all the even elements of the array located at the given key.
    Notes:
    If the array is empty, it should return an empty array.
    If the array contains no even elements, it should return an empty array.
    If the property at the given key is not an array, it should return an empty
    array.
    If there is no property at the given key, it should return an empty array.
    */

    function getEvenElementsAtProperty(obj, key){
        // Edge case if array is empty
        if(obj[key] === undefined){
            return [];
        }
        // Edge Case if array is not an array
        if(Array.isArray(obj[key]) === false){
            return [];
        }
        // Edge case if there is no property at key
        if(obj[key].length === 0){
            return [];
        }
        // create evenElements array
        var evenElements = [];
        // iterate over object
        for(var i = 0; i < obj[key].length; i++) {
            // push even numbers to evenElements array
            if(obj[key][i] % 2 === 0){
                evenElements.push(obj[key][i])
            }
        }
        return evenElements;
    }
    var obj = {
        key: [1000, 11, 50, 17]
    };
    var output = getEvenElementsAtProperty(obj, 'key');
    console.log(output); // --> [1000, 50]
// --------------------------------------------------------------------------------------------

//Objects 11

    // Exercise 1 - getSmallestElementAProperty
    /*
    Write a function called "getSmallestElementAtProperty".
    Given an object and a key, "getSmallestElementAtProperty" returns the smallest
    element in the array located at the given key.
    Notes:
    If the array is empty, it should return undefined.
    If the property at the given key is not an array, it should return undefined.
    If there is no property at the key, it should return undefined.
    */

    function getSmallestElementAtProperty(obj, key){
        // edge cases if array is empty
        if(obj[key] === undefined){
            return undefined;
        }
        // edge case if the array is not an array
        if(Array.isArray(obj[key]) === false){
            return undefined;
        }
        // edge case if there is no property at key
        if(obj[key].length === 0){
            return undefined;
        }
        // create variable to hold smallestElement
        var smallestElement = obj[key][0]
        // iterate over the object
        for(var i = 1; i < obj[key].length; i++){
            // if the element is smallest, push to smallestElement array
            if(obj[key][i] < smallestElement){
                smallestElement = obj[key][i];
            }
        }
        return smallestElement;
    }

    var obj = {
        key: [2, 1, 5]
    };
    var output = getSmallestElementAtProperty(obj, 'key');
    console.log(output); // --> 1


    // Exercise 2 = getLargestElementAtProperty
    /*
    Write a function called "getLargestElementAtProperty".
    Given an object and a key, "getLargestElementAtProperty" returns the largest
    element in the array located at the given key.
    Notes:
    If the array is empty, it should return undefined.
    If the property at the given key is not an array, it should return undefined.
    If there is no property at the key, it should return undefined.
    */

    function getLargestElementAtProperty(obj, key){
        // Edge case - array is empty
        if(obj[key] === undefined){
            return undefined;
        }
        // Edge case - is not an array
        if(Array.isArray(obj[key]) === false){
            return undefined;
        }
        // edge case - no property at key
        if (obj[key].length === 0){
            return undefined;
        }
        // create variable to hold largestElement. Start with first element in array
        var largestElement = obj[key][0]
        // iterate over the array
        for(var i = 1; i < obj[key].length; i++){
            // if element is larger, updated largestElement variable
            if(obj[key][i] > largestElement){
                largestElement = obj[key][i];
            }
        }
        return largestElement;
    }
    var obj = {
        key: [1, 2 ,4]
    };

    var output = getLargestElementAtProperty(obj, 'key');
    console.log(output); // --> 4

    // Exercise 3 - getAllButLastElementOfProperty
    /*
    Write a function called "getAllButLastElementOfProperty".
    Given an object and a key, "getAllButLastElementOfProperty" returns an array
    containing all but the last element of the array located at the given key.
    Notes:
    If the array is empty, it should return an empty array.
    If the property at the given key is not an array, it return an empty array.
    If there is no property at the key, it should return an empty array.
    */

   function getAllButLastElementOfProperty(obj, key){
    // edge case - if array is empty
    if(obj[key] === undefined){
        return [];
    }
    // edge case - if element is not an array
    if(Array.isArray(obj[key]) === false){
        return [];
    }
    // edge case - if property is empty
    if(obj[key].length === 0){
        return [];
    }
    obj[key].pop()
    return obj[key];
    }
    var obj = {
    key: [1, 2, 3]
    };
    var output = getAllButLastElementOfProperty(obj, 'key');
    console.log(output); // --> [1,2]

    // Exercise 4 - getElementsOfArrayProperty
    /*
    Write a function called "getElementOfArrayProperty".
    Given an object, a key, and a numerical index, "getElementOfArrayProperty"
    returns the value of the element at the given index of the array located within
    the given object at the given key.
    Notes:
    If the array is empty, it should return undefined.
    If the given index is out of range of the array located at the given key, it
    should return undefined.
    If the property at the given key is not an array, it should return undefined.
    If there is no property at the key, it should return undefined.
    */

    function getElementOfArrayProperty(obj, key, index){
        // edge case - array is empty
        if(obj[key] === undefined){
            return undefined;
        }
        // edge case - not an array
        if(Array.isArray(obj[key]) === false){
            return undefined;
        }
        // edge case - no property at the key
        if(obj[key].length === 0){
            return undefined;
        }
        return obj[key][index];

    }
    var obj = {
        key: ['Jamil', 'Albrey']
    };
    var output = getElementOfArrayProperty(obj, 'key', 0);
    console.log(output); // --> 'Jamil'