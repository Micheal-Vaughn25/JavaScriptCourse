/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, 
containing the names of people who like an item. It must return the display text 
as shown in the examples:

Steps to solve problem
-----------------------
Given an array of names
Determine how many names in array
  If up to 3 names are given, display all names
    If more than 4 names are given, display the first two names and a number 
    showing the number of remaining names inputted
return an output '"NAME" likes this'
*/


function likes(names) {
    // determine how many names are in the array
   var numberOfNames = names.length;
   if(numberOfNames === 0){
     return 'no one likes this'
   }
   if(numberOfNames === 1){
     return names[0] + " likes this"
   }
   if(numberOfNames === 2){
     return names[0] + " and " + names[1] + " like this"
   }
   if(numberOfNames === 3){
     return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
   }
   if(numberOfNames > 3){
     return names[0] + ', ' + names[1] + ' and ' + (numberOfNames - 2) + ' others like this'
   }
 }
 
 likes(['Peter'])
 describe('example tests', function() {
   it('should return correct text', function() {
     Test.assertEquals(likes([]), 'no one likes this');
     Test.assertEquals(likes(['Peter']), 'Peter likes this');
     Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
     Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
     Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//---------------------------------------------------------------------------------------------------
/*
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.
The binary number returned should be a string.

Steps to solve problem
-----------------------
declare a sum value
add the two paramters together
convert result into binary
return binary result
*/

function addBinary(a,b){
    var sum = (a + b);
    return sum.toString(2)
}
//---------------------------------------------------------------------------------------------------

/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Steps to solve problem
-----------------------
declare a lowBaseComparison (I will use numbers[0])
declare a highBaseComparison (I will use numbers[0])
iterate over the string of numbers
    if numbers[i] is less than lowBaseComparison
        write numbers[i] to lowBaseComparison
    if numbers[i] is greater than highBaseComparison
        write numbers[i] to highBaseComparison
return highBaseComparison and lowBaseComparison
*/

function highAndLow(numbers){
    var numArray = numbers.split(' ')
    var lowBaseComparison = numArray[0]
    var highBaseComparison = numArray[0]
    for(var i = 0; i < numArray.length; i++){
      if(numArray[i] < lowBaseComparison){
        lowBaseComparison = numArray[i]
      }
      if(Math.abs(numArray[i]) > highBaseComparison){
        highBaseComparison = numArray[i]
      }
    }
      return (highBaseComparison + ' ' + lowBaseComparison);
  }
// ---------------------------------------------------------------------------------
/*
Implement the function unique_in_order which takes as argument a sequence and returns
a list of items without any elements with teh same value next to each other and 
preserving the original order of elements.

Steps to solve problem
----------------------
input is a string
output is an array
declare inOrder array
Iterate over the string
  if string is currently not in array
    add string value to array
return inOrder array
*/

var uniqueInOrder = function(iterable){
  var inOrderResult = [];
  for(var i = 0; i < iterable.length; i++){
    var lastIndexOfArray = inOrderResult.length - 1
    if((inOrderResult[lastIndexOfArray] !== iterable[i]) && (inOrderResult[lastIndexOfArray] !== iterable[i])){
      inOrderResult.push(iterable[i]);
      // console.log(inOrderResult);
    }
  }
  return inOrderResult;
}

uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
// -------------------------------------------------------------------------------------------

/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find 
out which one of the given numbers differs from the others. Bob observed that one 
number usually differs from the others in evenness. Help Bob — to check his answers, 
he needs a program that among the given numbers finds one that is different in evenness, 
and return a position of this number.

Keep in mind that your task is to help Bob solve a real IQ test, which means indexes 
of the elements start from 1 (not 0)

Steps to solve problem
-----------------------
input - string of numbers
output - one number
declare oddNumber
declare evenNumber
iterate over the string of numbers
compare if there are more even or odd numbers
  if there are more even numbers, return the index (+1) of the odd number
else if there are more odd numbers, return the index (+1) of the even number
*/



function oddOrEven(numbers){
  var oddNumber = 0;
  var evenNumber = 0;
  for(var j = 0; j < numbers.length; j++){
    if(numbers[j] % 2 === 0){
      evenNumber += 1
    } else if (numbers[j] % 2 >= 1){
      oddNumber += 1
    }
  }
  if(oddNumber > evenNumber){
    return 'Odd'
  } else {
    return 'Even'
  }
}


function iqTest(numbers){
  numbers = numbers.split(' ')
  for(var i = 0; i < numbers.length; i++){
  if(oddOrEven(numbers) === 'Even'){
    if(numbers[i] % 2 >= 1){
      return i + 1
    }
  } else if(oddOrEven(numbers) === 'Odd'){
    if(numbers[i] % 2 === 0){
      return (i + 1);
    }
  }
  }
}

console.log(oddOrEven ("2 4 7 8 10"))
Test.assertEquals(iqTest("2 4 7 8 10"),3);
Test.assertEquals(iqTest("1 2 2"), 1);
//-----------------------------------------------------------------------------------------

/*
Complete the solution so that it splits the string into pairs of two
characters. If the string contains an odd number of characters then
it should replace the missing second character of the final pair with
an underscore(_).

Example:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']


Steps to solve problem
---------------------------
input - string
output - an array of two character strings
declare result array
iterate over the string
  split the text up in chunks of two characters
    if the string is an odd number of characters, return an underscore with the last character
return the result array

Notes - 
I ran into problems when trying to add the _ to the end of the string. I received feedback and adjusted code as needed


*/

function solution(str){
  var result = [];
  var finalChar = (str.length)
  console.log(finalChar)
  if(finalChar % 2 >= 1){
    str = (str + '_')
  }
  console.log(str)
  for(var i = 0; i < str.length; i++){
    if(i === 0){
      result.push(str[i] + str[i+1])
    } else if(i % 2 === 0){
      result.push(str[i] + str[i+1])
    } 
  }
  return result;
}




const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

// -----------------------------------------------------------------------------------------------------
