// --------------------------------------------------------------------------------------------

// Objects 2

    // Exercise 1 - addFullNameProperty
    /*
    Write a function called "addFullNameProperty".
    Given an object that has a "firstName" property and a "lastName" property,
    "addFullNameProperty" sets a "fullName" property on the input object, whose
    value is a string with the first name and last name separated by a space.
    */

   function addFullNameProperty(obj) {
    // declare first name value
    var firstName = obj.firstName
    // declare second name value
    var lastName = obj.lastName
    // combine the first and last name values
    var completeName = firstName + " " + lastame
    // create a property in the object whose value is the first and last name
    obj['fullName'] = completeName;
    
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

    // Exercise 2 - addObjectProperty
    /*
    Write a function called "addObjectProperty".

    Given two objects and a key. "addObjectProperty" sets a new property on the
    1st object at the given key. The value of the new property is the entire 2nd
    object.
    */

    function addObjectProperty(obj1, key, obj2){
        var firstObject = obj1[key]
        var firstObject = obj2;
    }

    var person1 = {
        name: 'Joe Blow',
        role: 'schlub'
    };
    var person2 = {
        name: 'Mr. Burns',
        role: 'supervisor'
    };
    addObjectProperty(person1, 'manager', person2);
    console.log(person1.manager); // --> {name: 'Mr. Burns', role: 'supervisor'}

    // Exercise 3 - isPersonOldEnoughToDrinkAndDrive
    /*
    Write a function called "isPersonOldEnoughToDrinkAndDrive".

    Given a "person" object, that contains an "age" property,
    "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old
    enough to legally drink and drive in the United States.

    Notes:
    * The legal drinking age in the United states is 21.
    * The Legal diving age in the United States is 16.
    *  It is ALWAYS illegal to drink and drive in the United States.
    */
   
    function isPersonOldEnoughToDrinkAndDrive(person){
        return false
    }

    var obj = {
        age: 45
    };
    var output = isPersonOldEnoughToDrinkAndDrive(obj);
    console.log(output); // --> false)
// --------------------------------------------------------------------------------------------


// Objects 3

    // Exercise 1 - isPersonOldEnoughToDrive
    /*
    Write a function called "isPersonOldEnoughToDrive".

    Given a "person" object, that contains an "age" property,
    "isPersonOldEnoughToDrive" returns whether the given person is old enough to
    drive.

    Notes:
    The leal driving age in the United States is 16.
    */

    function isPersonOldEnoughToDrive(person) {
    if(person.age >= 16){
        return true;
    } else {
        return false;
    }
    }

    var obj = {
        age: 16
    };
    var output = isPersonOldEnoughToDrive(obj);
    console.log(output); // --> true

    // Exercise 2 - isPersonOldEnoughToVote
    /*
    Write a function called "isPersonOldEnoughToVote".

    Given a "person" object, that contains an "age" property,
    "isPersonOldEnoughToVote" returns whether the given person is old enough to
    vote.
    Notes:
    The Legal voting age in the United States is 18.
    */

    function isPersonOldEnoughToVote(person){
    if(person.age >= 18){
        return true;
    } else {
        return false;
    }
    }

    var obj = {
        age: 19
    };
    var output = isPersonOldEnoughToVote(obj);
    console.log(output); // --> true

    // Exercise 3 - addArrayProperty
    /*
    Write a function called "addArrayProperty".

    Given an object, a key, and an array, "addArrayProperty" sets a new property on
    the object at the given key, with its value set to the given array.
    */

    function addArrayProperty(obj, key, arr) {
    obj[key] = arr;
    }

    var myObj = {}
    var myArray = [1, 3];
    addArrayProperty(myObj, 'myProperty', myArray);
    console.log(myObj.myProperty); // --> [1,3]
// --------------------------------------------------------------------------------------------


// Array Methods

    // Exercise 1 - getNthElement
    /*
    Write a function called "getNthElement".
    Given an array and an integer, "getNthElement" returns the element at the given
    integer, within the given array.

    Notes:
    If the array has a lenght of 0, it should return 'undefined'.
    */

    function getNthElement(array, n){
    var numberX = array[n];
    return numberX;
    }

    var output = getNthElement([1, 3, 5], 1);
    console.log(output); // --> 3

    // Exercise 2 - getFirstElement
    /* 
    Write a function called "getFirstElement".
    Given an array, "getFirstElement" returns the first element of the given array.
    Notes:
    If the given array has a length of 0, it should return undefined.
    */

    function getFirstElement(array){
    var firstNumber = array[0];
    return firstNumber;
    }

    var output = getFirstElement([1, 2, 3, 4, 5]);
    console.log(output); // --> 1

    // Exercise 3 - getLastElement
    /*
    Write a function called "getLastElement".
    Given an array, "getLastElement" returns the last element of the given array.
    Notes:
    If the given array has a length of 0, it should return 'undefined'.
    */

    function getLastElement(array){
        var lastNumber = array.length - 1
        var lastCharacter = array[lastNumber];
        return lastCharacter;
    }

    var output = getLastElement([1, 2, 3, 4]);
    console.log(output); // --> 4
// --------------------------------------------------------------------------------------------


// Array Methods 2

    // Exercise 1 - addToFront
    /*
    Write a function called "addToFront".
    Given an array and an element, "addToFront" adds the given element to the
    front of the given array, and returns the given array.
    
    Notes:
    It should be the SAME array, not a new array.
    In order to do this you should be familiar with the 'unshift' method
    */

    function addToFront(arr, element){
    arr.unshift(element);
    return arr
    }

    var output = addToFront([1, 2], 3);
    console.log(output); // --> [3, 1, 2]

    // Exercise 2 - addToBack
    /*
    Write a function called "addToBack".
    Given an array and an element, "addToBack" returns the given array with the
    given element added to the end.

    Notes:
    It should be the SAME array, not a new array.
    In order to do this you should be familiar with the 'push' method.
    */

    function addToBack(arr, element){
        arr.push(element);
        return arr;
    }

    var output = addToBack([1,2], 3);
    console.log(output); // --> [1, 2, 3]
// --------------------------------------------------------------------------------------------


// Math 2

    // Exercise 1 - computeAreaOfARectangle
    /*
    Write a function called "computeAreaOfARectangle".
    Given the length and width of a rectangle, "computeAreaOfARectangle" returns
    its area.
    */

    // Area of a rectangle equals Width times Length

    function computeAreaOfARectangle(length, width) {
        var rectangleArea = (width * length);
        return rectangleArea;
    }

    var output = computeAreaOfARectangle(4, 8);
    console.log(output); // --> 32


    // Exercise 2 - computePerimeterOfARectangle
    /*
    Write a function called "computePerimeterOfARectangle".
    Given a length and a width describing a rectangle,
    "computePerimeterOfArectangle" returns its perimeter.
    */

    // Formula for Perimeter of Rectangle P = 2(l + w)
    function computePerimeterOfARectangle(length, width) {
        var rectanglePerimeter = 2 * (length + width);
        return rectanglePerimeter;
    }

    var output = computePerimeterOfARectangle(5, 2);
    console.log(output); // --> 14


    // Exercise 3 - computePerimeterOfATriangle
    /*
    Write a function called "computePerimeterOfATriangle".
    Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its
    perimeter.
    */
    // Formula for Perimeter of a Triangle P = (A + B + C)
    function computePerimeterOfATriangle(side1, side2, side3){
        var perimeterTriangle = (side1 + side2 + side3);
        return perimeterTriangle;
    }

    var output = computePerimeterOfATriangle(6, 7, 10);
    console.log(output); // --> 23
// --------------------------------------------------------------------------------------------


// Math 3 

    // Exercise 1 - computeTripledAreaOfARectangle
    /* 
    Write a function called "computeTripledAreaOfARectangle".

    Given a length and width of a rectangle, "computeTripledAreaOfARectangle"
    returns the rectangle's area, multiplied by 3.
    */
    // Formula for Area of a triangle  A = WL
    function computeTripledAreaOfARectangle(length, width){
        var areaRectangle = (length * width);
        var tripledValue = (areaRectangle * 3);
        return tripledValue;
    }

    var output = computeTripledAreaOfARectangle(2, 4);
    console.log(output); // --> 24

    // Exercise 2 - computePerimeterOfACircle
    /*
    Write a function called "computePerimeterOfACircle".
    Given the radius of a circl, "computePerimeterOfACircle" returns its perimeter.

    Notes:
    Math.PI can be used for pi.
    */
    
    // Formula for perimeter of a circle C = 2piR
    function computePerimeterOfACircle(radius){
        var perimeterCircle = (2 * Math.PI * radius);
        return perimeterCircle;
    }

    var output = computePerimeterOfACircle(4);
    console.log(output); // --> 25.132741228718345


    // Exercise 3 - computeAreaOfACircle
    /*
    Write a function called "computeAreaOfACircle".
    Given the radius of a circle, "computeAreaOfACircle" returns its area.
    
    Notes:
    Math.PI can be used for pi.
    */

    // Formula for area of a cricle A = piR^2
    function computeAreaOfACircle(radius){
        var areaCircle = (Math.PI * radius ** 2);
        return areaCircle;
    }

    var output = computeAreaOfACircle(4);
    console.log(output); // --> 50.26548245743669
// --------------------------------------------------------------------------------------------


// Math 4

    // Exercise 1 - computePower
    /*
    Write a function called "computePower".
    Given a number and an exponent, "computePower" returns the given number,
    raised to the given exponent.
    */

    function computePower(num, exponent){
        var poweredNumber = num ** exponent;
        return poweredNumber;
    }

    var output = computePower(2, 3);
    console.log(output); // --> 8

    // Exercise 2 - computeSquareRoot
    /*
    Write a function called "computeSquareRoot". Given a number,
    "computeSquareRoot" returns its square root.
    */

    function computeSquareRoot(num){
        var squareRoot = Math.sqrt(num);
        return squareRoot;
    }

    var output = computeSquareRoot(9);
    console.log(output); // --> 3


    // Exercise 2 - doubleSquareRootOf
    /*
    Write a function called "doubleSquareRootOf". Given a number,
    "doubleSquareRootOf" returns double its square root.
    */

    function doubleSquareRootOf(num){
        var squareRoot = Math.sqrt(num);
        var doubledNum = (squareRoot * 2);
        return doubledNum;
    }

    var output = doubleSquareRootOf(121);
    console.log(output); // --> 22
// --------------------------------------------------------------------------------------------


// String Methods 3

    // Exercise 1 - getLengthOfThreeWords
    /*
    Write a function called "getLengthOfThreeWords".
    Given 3 words, "getLengthOfThreeWords" returns the sume of their lengths.
    */

    function getLengthOfThreeWords(word1, word2, word3){
        var wordOne = word1.length;
        var wordTwo = word2.length;
        var wordThree = word3.length;
        var sumOfWords = (wordOne + wordTwo + wordThree);
        return sumOfWords;
    }

    var output = getLengthOfThreeWords('some', 'other', 'words');
    console.log(output); // --> 14
// --------------------------------------------------------------------------------------------


// Array Methods 3

    // Exercise 1 - joinArrays
    /*
    Write a function called "joinArrays".
    Given two arrays, "joinArrays" returns an array with the elements of "arr1" in
    order, followed by the elements in "arr2".
    You should be familiar with the "concat" method for this problem.
    */

    function joinArrays(arr1, arr2) {
        var join = arr1.concat(arr2)
        return join;
    }

    var output = joinArrays ([1, 2], [3, 4]);
    console.log(output); // --> [1, 2, 3, 4]

    // Exercise 2 - getElementsAfter
    /*
    Write a function called "getElementsAfter".
    Given an array and an index, "getElementsAfter" returns a new array with all the
    elements after (but not including) the given index.

    Notes:
    In order to do this you should be familiar with the 'slice' method.
    */

    function getElementsAfter(array, n){
        var cutElement = array.splice(n + 1);
        return cutElement;
    }

    var output = getElementsAfter (['a', 'b', 'c', 'd', 'e'], 2);
    console.log(output); // --> ['d', 'e']

    // Exercise 3 - getElementsUpTo
    /*
    Write a function called "getElementsUpTo".
    Given an array and a index, "getElementsUpTo", returns an array with all the
    elements up until, but not including, the elements at the given index.
    Notes:
    In order to do this you should be familiar with the 'slice' method.
    */

    function getElementsUpTo(array, n){
        var cutElement = array.splice(0,n);
        return cutElement;
    }
    
    var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
    console.log(output); // --> ['a', 'b', 'c']
// --------------------------------------------------------------------------------------------


// Array Methods 4

    // Exercise 1 - getAllElementsButFirst
    /*
    Write a function called "getAllElementsButFirst".
    Given an array, "getAllElementsButFirst" returns an array with all the elements
    but the first.
    */

    function getAllElementsButFirst(array){
        var cutElement = array.splice(1)
    }

    var input = [1, 2, 3, 4];
    var output = getAllElementsButFirst(input);
    console.log(output); // --> [2, 3, 4]

    // Exercise 2 - getAllElementsButLast
    /*
    Write a function called "getAllElementsButLast".
    Given an array, "getAllElementsButLast" returns an array with all the elements
    but the last.
    */

    function getAllElementsButLast(array){
        var arrayLength = (array.length - 1);
        var cutElement = array.splice(0, arrayLength);
        return cutElement;
    }

    var input = [1, 2, 3, 4];
    var output = getAllElementsButLast(input);
    console.log(output); // --> [1, 2, 3]

    // Exercise 3 - removeFromFront
    /*
    Write a function called "removeFromFront".
    Given an array, "removeFromFront" returns the given array with its first element
    removed.
    Notes:
    You should be familiar with the method 'shift'.
    */

    function removeFromFront(arr){
        // remove the first element from the array
        var removeElement = arr.shift(0)
        // return the array with missing first element
        return arr
    }

    var output = removeFromFront([1, 2, 3]);
    console.log(output); // --> [2, 3]
// --------------------------------------------------------------------------------------------

// Array Methods 6

    // Exercise 1 - removeFromBack
    /*
    Write a function called "removeFromtBack".
    Given an array, "removeFromBack" returns the given array with its last element
    removed.
    Notes:
    You should be familiar with the method 'pop'.
    */

    function removeFromBack(arr){
        // remove the last element from the array
        var removeElement = arr.pop();
        // return the array with the missing last element
        return arr;
    }

    var output = removeFromBack([1, 2, 3]);
    console.log(output); // --> [1, 2]
// --------------------------------------------------------------------------------------------

// Array Methods 5

    // Exercise 1 - removeFromBackOfNew
    /*
    Write a function called "removeFromBackOfNew".
    Given an array, "removeFromBackOfNew" returns a new array containing all but
    the last element of the given array.
    Notes: 
    You should be familiar with the 'slice' method.
    */

    function removeFromBackOfNew(arr){
        // get the length of the array and subtract one to get the last index
        var lengthArray = arr.length - 1
        // use slice to copy the array, minus the last element
        var newArray = arr.slice(0,lengthArray);
        return newArray
    }

    var arr = [1, 2, 3];
    var output = removeFromBackOfNew(arr);
    console.log(output); // --> [1, 2]
    console.log(arr); // --> [1, 2, 3]

    // Exercise 2 - removeFromFrontOfNew
    /*
    Write a function called "removeFromFrontOfNew".
    Given an array, "removeFromFrontOfNew" returns a new array containing all but
    the first element of the given array.
    Notes:
    You should be familiar with the 'slice' method.
    */

    function removeFromFrontOfNew(arr){
        var newArray = arr.slice(1);
        return newArray;
    }

    var arr = [1, 2, 3];
    var output = removeFromFrontOfNew(arr);
    console.log(output); // --> [2, 3]
    console.log(arr); // --> [1, 2, 3]

    // Exercise 3 - countCharacter
    /*
    Write a function called "countCharacter".
    Given a string input and a character, "countCharacter" returns the number of
    occurrences of a given character in the given string.
    */

    function countCharacter(str, char){
        var count = 0;
        for(var i = 0; i < str.length; i++){
            if(str[i] === char){
                count++
            }
        }
        return count
    }

    var output = countCharacter('I am a hacker', 'a');
    console.log(output); // --> 3
// --------------------------------------------------------------------------------------------

