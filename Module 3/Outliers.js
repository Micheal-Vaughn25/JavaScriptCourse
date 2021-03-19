/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
The return value should be 1-indexed, not 0-indexed.
Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

/*



/*
Steps to solve problem
-----------------------
input - string of numbers
output - one number
declare oddNumber
declare evenNumber
declare indexPlusOne
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
  
  
  function detectOutlierValue(numbers){
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
  
  