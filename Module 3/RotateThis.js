/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '


input - two strings
output - true or false
Are the strings rotated
    Does this mean the letters of the two strings are the same, but in different order?
I know the strings will not be in the same order, so I will need to pay attention to individual characters
Since the order will not be the same, I think I need to split up the string into single characters
Once I have single characters I can began checking the characters between the two strings
    Example
    hello world
    orldhello w

    check the length?
    count each character? do these numbers add up?
    count spaces
    is capitalization important?
declare strArray1
declare strArray2
declare strArray1Length
declare strArray2Length
compare the length, if same continue
    else return 'length of strings do not match'
.split could be used to create arrays
Once arrays are created I can iterate
    count number of characters

    example 
    hello world
    h 1, e 1, l 3, o 2, _ 1, w 1, r 1, d 1

    elloworld h
    e 1, l 3, o 2, w 1, r 1, d 1, _ 1, h 1
compare the count between each word
    I may need to sort the letters to make the counting easier
return true/false

"my name is stephanie"
"tephaniemy name is s"
*/

function rotateWord(str1, str2){
    var doubledStr1 = str1.concat(str1)
    // console.log(doubledStr1)
    if(doubledStr1.indexOf(str2) !== -1){
      return true;
    } else {
      return false;
    }
  }