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
            var inputIsNegative = false;
            // check if num is negative
            if (num < 0){
                // get rid of negative sign
                num = Math.abs(num);
                inputIsNegative = true;
            }
            

            // save negative for later
           // create a total variable
           var total = 0
           // make input number into a string
           var numString = num.toString();
           var firstValue = Number(numString[0])

           // iterate over the string
           for (var i = 0; i < numString.length; i++){
               total += Number(numString[i])
           }
           if(inputIsNegative){
               total = total - (2 * firstValue);
               return total;
           } else {
               return total;
           }
        }
        var output = sumDigits(1148);
        console.log(output); // --> 14
        var output = sumDigits(-316);
        console.log(output); // --> 4
// --------------------------------------------------------------------------------------------

// Objects 13

        // Exercise 1 - getSumOfAllElementsAtProperty
        /*
        Write a function called "getSumOfAllElementsAtProperty"
        Given an object and a key,
        "getSumOfAllElementsAtProperty" returns the sume of all
        the elements in the array located at the given key.
        Notes:
        If the array is empty, it should return 0.
        If the property at the given key is not an array, it
        should return 0.
        If there is no property at the key, it should return 0.
        */

        function getSumOfAllElementsAtProperty(obj, key){
            // edge case - array is empty
            if(obj[key] === undefined){
                return 0;
            }
            // edge case - if array is not an array
            if(Array.isArray(obj[key]) === false){
                return 0;
            }
            // edge case - if there is no property at key
            if(obj[key].length === 0){
                return 0;
            }
            var sumElements = 0
            for(var i = 0; i < obj[key].length; i++){
                sumElements += obj[key][i];
            }
            return sumElements;

        }

        var obj = {
            key: [4, 1, 8]
        };
        var output = getSumOfAllElementsAtProperty(obj, 'key');
        console.log(output); // --> 13
// --------------------------------------------------------------------------------------------

// Array Methods 15

        // Exercise 1 - findShortestWordAmongMixedElements
        /*
        Write a function called "findShortestWordAmongMixedElements".
        Given an array, "findShortestWordAmongMixedElements" returns the shortest
        string within the given array.
        Notes:
        If there are ties, it should return the first element to appear in the given array.
        Expect the given array to have values other than strings.
        If the given array is empty, it should return an empty string.
        If the given array contains no strings, it should return an empty string.
        */

        function findShortestWordAmongMixedElements(arr){
            // create var for stringValues
            var stringValues = [];
            // check if each value is a string
            for(var i = 0; i < arr.length; i++){
                if(typeof arr[i] === 'string'){
                    stringValues.push(arr[i])
                }
            }
            if(stringValues.length === 0) {
                return '';
            }
            var shortestValue = stringValues[0];
            for (var i = 1; i < stringValues.length; i++){
                if(stringValues[i].length < shortestValue.length){
                    shortestValue = stringValues[i]
                }
            }
            return shortestValue;
        }
  

        var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
        console.log(output); // --> 'two'

        // Exercise 2 - findSmallestNumberAmongMixedElements
        /*
        Write a function called "findSmallestNumberAmongMixedElements".
        Given an array of mixed elements, "findSmallestNumberAmongMixedElements"
        returns the smallest number within the given array.
        Notes:
        If the given array is empty, it should return 0.
        If the array contains no numbers, it should return 0.
        */

        function findSmallestNumberAmongMixedElements(arr){
            // create a variable for numberElements
            var numberElements = [];
            // check if each value is a number
            for(var i = 0; i < arr.length; i++){
                // if arr value is equal to number, push to numberElements variable
                if(typeof arr[i] === 'number'){
                    numberElements.push(arr[i]);
                }
            }
            // edge case - there are no numbers
            if (numberElements.length === 0){
                return 0;
            }
            // create variable to hold smallestNumber
            var smallestNumber = numberElements[0];
            // iterate over the array
            for(var i = 1; i < numberElements.length; i++){
                // if numberElements[i] is smaller than smallestNumber, push to array
                if(numberElements[i] < smallestNumber){
                    smallestNumber = numberElements[i]
                }
            }
            return smallestNumber;
        }
        var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
        console.log(output); // --> 4
// --------------------------------------------------------------------------------------------

// Array Methods 16

        // Exercise 1 - getLongestWordOfMixedElements
        /*
        Write a function called "getLongestWordOfMixedElements".
        Given an array of mixed types, "getLongestWordOfMixedElements" returns the
        longest string in the given array.
        Notes:
        If the array is empty, it should return an empty string ("").
        If the array contains no strings; it should return an empty string.
        */

        function getLongestWordOfMixedElements(arr){
            if(arr.length === 0){
                return '';
            }
            // create variable for stringElements
            var stringElements = [];
            // check if each value is a string
            for(var i = 0; arr.length; i++){
                if(typeof arr[i] === 'string'){
                    stringElements.push(arr[i]);
                }
            }
            // edge case, if there are no string elements
            if(stringElements.length === 0){
                return '';
            }
            // create variable to hold the largestWord
            var largestWord = stringElements[0];
            // iterate over the array
            for (var i = 1; stringElements.length; i++){
                // if stringElements[i] is larger than largestWord, push to largestWord
                if(stringElements[i].length > largestWord.length){
                    largestWord = stringElements[i];
                }
            }
            return largestWord;

        }

        var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
        console.log(output); // --> 'word'

        // Exercise 2 - getLargestNumberAmongMixedElements
        /*
        Write a function called "getLargestNumberAmongMixedElements".
        Given any array, "getLargestNumberAmongMixedElements" returns the largest
        number in the given array.
        Notes:
        The array might contain values of a type other than numbers.
        If the array is empty, it should return 0.
        If the array contains no numbers, it should return 0.
        */

        function getLargestNumberAmongMixedElements(arr){
            if(arr.length === 0){
                return 0;
            }
            // create a variable for numberElements
            var numberElements = [];
            // check if each value is a number
            for(var i = 0; arr.length; i++){
                if(typeof arr[i] === 'number'){
                    numberElements.push(arr[i]);
                }
            }
            // edge case, if there are no number elements
            if(numberElements.length === 0){
                return 0;
            }
            // create variable for largestNumber
            var largestNumber = numberElements[0]
            // iterate over the array
            for(var i = 1;i < numberElements.length; i++){
                if(numberElements[i] > largestNumber){
                    largestNumber = numberElements[i]
                }
            }
            return largestNumber;

        }

        var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
        console.log(output); // --> 5
// --------------------------------------------------------------------------------------------

// Iteration 3

        // Exercise 1 - computeSummationToN
        /*
        Write a function called "computeSummationToN".
        Given a number, "computeSummationToN" returns the sum of sequential
        numbers leading up to the given number, beginning at 0.
        Notes:
        If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
        */
       
        function computeSummationToN(n) {
            // create a variable for sum
            var sum = 0
            for(var i = 1; i <= n; i++){
                sum += i
            }
            return sum;
        }
        var output = computeSummationToN(6);
        console.log(output); // --> 21
// --------------------------------------------------------------------------------------------

// Conditionals 8

        // Exercise 1 - convertScoreToGrade
        /*
        Write a function called "convertScoreToGrade".
        Given a score, "convertScoreToGrade" returns a string representing the letter
        grade corresponding to the given score.
        Notes:
        (100 - 90) --> 'A'
        (89 - 80) --> 'B'
        (79 - 70) --> 'C'
        (69 - 60) --> 'D'
        (59 - 0) --> 'F'
        If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
        */

        function convertScoreToGrade(score){
            // edge case, number is greater than 100 or less than 0
            if(score > 100 && score < 0){
                return 'INVALID SCORE';
            }
            if(score <= 100 && score >= 90){
                return 'A';
            } else if(score <= 89 && score >= 80){
                return 'B';
            } else if(score <= 79 && score >= 70){
                return 'C';
            } else if(score <= 69 && score >= 60){
                return 'D';
            } else if(score <= 59 && score >= 0){
                return 'F';
                }
            }
        var output = convertScoreToGrade(91);
        console.log(output); // --> 'A'

        // Exercise 2 - convertScoreToGradeWithPlus
        /*
        Write a function called "convertScoreToGradeWithPlusAndMinus".
        Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string
        representing the letter grade corresponding to the given score.
        Notes:
        (100 to 90) -> 'A'
        (89 to 80) -> 'B'
        (79 to 70) -> 'C'
        (69 to 60) -> 'D'
        (59 to 0) -> 'F'
        If the given score is greater than 100 or less than 0, it should return
        'INVALID SCORE'
        If the score is between the 0 and 2 (inclusive) of a given range, return the
        letter with a '-'
        If the score is between the 8 and 9(inclusive) of a given range, return the 
        letter with a '+'
        There is no F+ and there is no F-.
        */

        function convertScoreToGradeWithPlusAndMinus(score){
            if(score > 100 || score < 0){
                return 'INVALID SCORE';
            }
            if(score <= 100 && score >= 98){
                return 'A+';
            } else if(score <= 97 && score >= 93){
                    return 'A';
            } else if(score <= 92 && score >= 90){
                    return 'A-';
            } else if(score <= 89 && score >= 88){
                return 'B+';
            } else if(score <= 87 && score >= 83){
                return 'B';
            } else if(score <= 82 && score >= 80){
                return 'B-';
            } else if(score <= 79 && score >= 78){
                return 'C+';
            } else if(score <= 77 && score >= 73){
                return 'C';
            } else if(score <= 72 && score >= 70){
                return 'C-';
            } else if(score <= 69 && score >= 68){
                return 'D+';
            } else if(score <= 67 && score >= 63){
                return 'D';
            } else if(score <= 62 && score >= 60){
                return 'D-';
            } else if(score <= 59 && score >= 0){
                return 'F';
                }

        }

        var output = convertScoreToGradeWithPlusAndMinus(91);
        console.log(output); // --> 'A-'
// --------------------------------------------------------------------------------------------

// Iteration 4

    // Exercise 1 - computeFactorialOfN
    /*
    Write a function called "computeFactorialOfN".
    Given a natural number (a whole number greater than 0),
    "computeFactorialOfN" returns its factorial.
    */


function computeFactorialOfN(n){
// create a variable for result
var result = 1
// iterate over the array
for(var i = 1; i <= n; i++){
    result *= i
    }
    return result;
}
var output = computeFactorialOfN(3);
console.log(output); // --> 6
var output = computeFactorialOfN(4);
console.log(output); // --> 24


// Exercise 2 - repeatString
/*
Write a function called "repeatString".
Given a string and a number, "repeatString" returns the given string repeated
the given number of times.
*/

function repeatString(string,num){ 
    // create a variable for result
    var result = ''; 
    // iterate over the array
    for(var i = 1; i <= num; i++){
        result += string
    }
    return result;

}
var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
// --------------------------------------------------------------------------------------------

// Math 6

    // Exercise 1 - computeCompundInterest
    /*
    Write a function called "computeCompundInterest".
    Given a principal, an interest rate, a compounding frequency, and a time (in
    years), "computeCompundInterest" returns the amount of compound interest
    generated.
    */

    function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears){
        result = principal * (1 + (interestRate/compoundingFrequency)) ** (compoundingFrequency * timeInYears) - principal
        return result;
    }
    var output = computeCompoundInterest(1500, .043, 4, 6);
    console.log(output); // --> 438.8368221341061
// --------------------------------------------------------------------------------------------

// Advanced 6

    // Exercise 1 - modulo
    /*
    Write a function called "modulo".
    Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
    It should behave as described in the canonical documentation MDN for the 
    JavaScript remainder operator.
    Notes:
    Do NOT use the actual built-in modulo (aka "remainder") operator (%) in
    your implementation.
    0 % ANYNUMBER = 0
    ANYNUMBER % 0 = NaN
    If either operand is NaN, then the result is NaN.
    Modulo always returns the sign of the first number, even if the remainder is
    0.
    */

    function modulo(num1, num2){
        // edge cases
        if(num1 === 0){
            return 0;
        }
        if(num2 === 0){
            return NaN;
        }
        if(isNaN(num1) || isNaN(num2)){
            return NaN;
        }
        // create a resultIsPositive Flag
        var resultIsPositive = true;
        if(num1 < 0){
            resultIsPositive = false;
        }
        // verify variables are positive using absolute value
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);

        // find the remainder by subtracting num2 from num 1
        while(num1 >= num2){
            num1 -= num2
        }
        if (resultIsPositive){
            return num1;
        } else {
            return -num1;
        }

    }
    var output = modulo(25, 4);
    console.log(output); // --> 1

// --------------------------------------------------------------------------------------------

// Iteration 5

    // Exercise 1 - multiply
    /*
    Write a function called "multiply".
    Given 2 numbers, "multiply" returns their product.
    Notes:
    It should not use the multiply operation - *.
    */

    function multiply(num1, num2){
        var resultIsPositive = true;
        if ((num1 > 0 && num2 < 0) || num2 > 0 && num1 < 0){
            resultIsPositive = false;
        }
        num1 = Math.abs(num1)
        num2 = Math.abs(num2)
        // create a var for the result
        var result = 0
        // iterate, using num1 as the base and num2 as the number of times to iterate
        for(var i = 1; i <= num2; i++){
            result += num1
        }
        if (resultIsPositive){
            return result;
        } else {
            return -result;
        }
    }

    var output = multiply(4, 7);
    console.log(output); // --> 28
// --------------------------------------------------------------------------------------------'

// Advanced 7

    // Exercise 1 - isOddWithoutModulo
    /*
    Write a function called "isOddWithoutModulo".
    Given a number, "isOddWithoutModulo" returns whether the passed in number
    is odd.
    Note:
    It does so without using the modulo operator
    It should work for negative numbers and zero.
    */

    function isOddWithoutModulo(num){
    if (num === 0){
        return false;
    }
    // verify variables are positive using absolute value
    num = Math.abs(num);   
    // determine if the number is even or odd
    while (num >= 2){
        num = num - 2;
    }
    if (num === 1){
        return true;
    } else {
        return false;
    }
}

    var output = isOddWithoutModulo(17);
    console.log(output); // --> true
// --------------------------------------------------------------------------------------------

// Advanced 8

    // Exercise 1 - isEvenWithoutModulo
    /*
    Write a function called "isEvenWithoutModulo"
    Given a number, "isEvenWithoutModulo" returns whether it is even.
    Notes:
    It Does so without using the modulo operator (%).
    It should work for negative numbers and zero.
    */

    
   function isEvenWithoutModulo(num){
    if (num === 0){
        return true;
    }
    // verify variables are positive using absolute value
    num = Math.abs(num);   
    // determine if the number is even or odd
    while (num >= 2){
        num = num - 2;
    }
    if (num === 1){
        return false;
    } else {
        return true;
    }
}

    var output = isEvenWithoutModulo(8);
    console.log(output); // --> true
// --------------------------------------------------------------------------------------------

// Iteration 6

    // Exercise 1 - multiplyBetween
    /*
    Write a function called "multiplyBetween".
    Given 2 integers, "multiplyBetween" returns the product between the two given
    integers, beginning at num1, and excluding num2.
    Notes:
    The Product between 1 and 4 is 1 * 2 * 3 = 6.
    If num2 is not greater than num1, it should return 0.
    */

   function multiplyBetween(num1, num2){
    // edge case, if num2 is not greater than num1
    if(num2 < num1){
        return 0;
    }
    // edge case, if num1 and num2 are equal
    if(num1 === num2){
        return 0;
    }
    // create a result variable
    var result = 1
    // iterate betwen num1 and num2
    for(var i = num1; i < num2; i++){
        result *= i
    }
    return result;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24

// Exercise 2 - computeSumBetween
/*
Write a function called "computeSumBetween".
Given 2 integers, "computeSumeBetween" returns the sum between the two
given integers, beginning at num1, and excluding num2.
Notes:
The sum between 1 and 4 is 1 + 2 + 3 = 6.
If num2 is not greater than num1, it should return 0.
*/

function computeSumBetween(num1, num2){
    // edge case - if num2 is greater than num 1
    if(num2 < num1){
        return 0;
    }
    // edge case - if num1 and num2 equal
    if(num1 === num2){
        return 0;
    }
    // create a result variable
    var result = 0;
    // iterate between num1 and num2
    for(var i = num1; i < num2; i++){
        result += i
    }
    return result;
}
var output = computeSumBetween(2, 5);
console.log(output); // --> 9


