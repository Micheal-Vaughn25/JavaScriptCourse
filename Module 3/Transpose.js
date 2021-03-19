/*
You will be given an array that contains two strings. Your job is to create
a function that will take those two strings and transpose them, so that the 
strings go from top to bottom instead of left to right.
e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d

Steps to Solve
--------------
Input - array of two strings
Output - string
The array is composed of two words
I need to split up the letters in each word
Iterate over the letters
add a line break after each letter
and return the string transposed
*/

function transpose(array){
    var slicedArrayOne = array[0].split('')
    var slicedArrayTwo = array[1].split('') 
    var lengthToRun = slicedArrayOne.length
    var valueOneLonger = (slicedArrayOne.length > slicedArrayTwo.length)
    if(valueOneLonger === false){
      lengthToRun = slicedArrayTwo.length
    }
    var blankString = '';
    for(var i  = 0; i < lengthToRun; i++){
      if(slicedArrayOne[i] === undefined){
        blankString += (' ' + ' ' + slicedArrayTwo[i] + '\n');
      } else if (slicedArrayTwo[i] === undefined) {
      blankString += (slicedArrayOne[i]  + ' ' + ' ' + '\n');
      } else {
        blankString += (slicedArrayOne[i] + ' ' + slicedArrayTwo[i] + '\n');
      }
    }
    return blankString;
  }