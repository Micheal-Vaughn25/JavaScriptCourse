// Math 5

    // Exercise 1 - calculateBillTotal
    /*
    Write a function called "calculateBillTotal".
    Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the
    total amount due after tax and tip.
    Notes:
    Assume the sales tax is 9.5% and tip is 15%.
    Do NOT tip on the sales tax, only on the pre tip amount.
    */

    function calculateBillTotal(preTaxAndTipAmount){
        var tipTotal = preTaxAndTipAmount * .15
        var taxTotal = preTaxAndTipAmount * .095
        var completeTotal = tipTotal + taxTotal + preTaxAndTipAmount;
        return completeTotal;

    }

    var output = calculateBillTotal(20);
    console.log(output); // --> 24.9
// --------------------------------------------------------------------------------------------

// Iteration 2

    // Exercise 1 - getStringLength
    /*
    Write a function called "getStringLength".
    Given a string, "getStringLength" returns the length of the given string.
    Notes:
    Do NOT use any native 'length" methods.
    You might consider using 'substring' or 'slice' as alternatives
    */

    function getStringLength(string){
        // create counter variable
        var wordCount = 0
        //slice the string into single letters. Slice by each character
        while(string !== ''){
            // slice the string starting at the second letter
            string = string.slice(1);
            // increment the wordCount variable each time
            wordCount++;
        }
        return wordCount;
        }

    var output = getStringLength('hello');
    console.log(output); // --> 5

// --------------------------------------------------------------------------------------------

// Array Methods 14

        // Exercise 1 - joinArraysOfArrays
        /*
        Write a function called "joinArrayOfArrays".
        Given an array of arrays, "joinArrayOfArrays" returns a single array containing
        the elements of the nestd arrays.
        Notes:
        You should be familiar with the "concat" method for this problem.
        */

        function joinArrayOfArrays(arr){
            // create empty array variable
            var completeArray = [];
            // iterate over the array
            for(var i = 0; i < arr.length; i++){
            // for each array in arr, concat the strings together
                completeArray = completeArray.concat(arr[i])
            }
            return completeArray;
        }

        var output = joinArrayOfArrays ([1, 4], [true, false], ['x', 'y']);
        console.log(output); // --> [1, 4, true, false, 'x', 'y']
// --------------------------------------------------------------------------------------------

// Objects 12

        // Exercise 1 - getProductOfAllElementsAtProperty
        /*
        Write a function called "getProductOfAllElementsAtProperty".
        Given an object and a key, "getProductOfAllElementsAtProperty" returns the
        product of all the elements in the array located at the given key.
        Notes:
        If the array is empty, it should return 0.
        If the property at the given key is not an array, it should return 0
        If there is no property at the given key, it should return 0
        */

        function getProductOfAllElementsAtProperty(obj, key){
            // edge cases - if array is empty
            if(obj[key] === undefined){
                return 0;
            }
            // edge case - if not an array
            if(Array.isArray(obj[key]) === false){
                return 0;
            }
            // edge case - if there is no property at key
            if(obj[key].length === 0){
                return 0;
            }
            // result variable
            var result = 1
            // iterate over the array
            for(var i = 0; i < obj[key].length; i++){
                result *= obj[key][i] 
            }
            return result;
        }
        var obj = {
            key: [1, 2, 3, 4]
        };
        var output = getProductOfAllElementsAtProperty(obj, 'key');
        console.log(output); // --> 24

// --------------------------------------------------------------------------------------------

// Advanced 5

        // Exercise 1 - sumDigits
        /*
        Write a function called "sumDigits".
        Given a number, "sumDigits" returns the sum of all its digits.
        If the number is negative, the first digit should count as negative.
        Notes:
        In order to use some of the methods that wil lbe most helpful to you, you
        will most likely want to do some string to number conversion and vice
        versa.
        Be sure to familiarize yourself with the "toString" method, as well as the
        "Number" function
        */

        function sumDigits(num){
            // result variable
            var result
            // convert num to a string, This will let us split the string into an array
            var numString = toString(num)
            
        }
        var output = sumDigits(1148);
        console.log(output); // --> 14
        var output = sumDigits(-316);
        console.log(output); // --> 4
// --------------------------------------------------------------------------------------------

// Objects 13
// --------------------------------------------------------------------------------------------

// Array Methods 15
// --------------------------------------------------------------------------------------------

// Array Methods 16
// --------------------------------------------------------------------------------------------

// Iteration 3
// --------------------------------------------------------------------------------------------

// Conditionals 8
// --------------------------------------------------------------------------------------------

// Iteration 4
// --------------------------------------------------------------------------------------------

// Math 6
// --------------------------------------------------------------------------------------------

// Advanced 6
// --------------------------------------------------------------------------------------------

// Iteration 5
// --------------------------------------------------------------------------------------------'

// Advanced 7
// --------------------------------------------------------------------------------------------

// Advanced 8
// --------------------------------------------------------------------------------------------

// Iteration 6


