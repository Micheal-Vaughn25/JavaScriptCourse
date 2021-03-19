/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

Steps to solve the problem
-----------------------------
input - array of numbers and one numbers
output - array of numbers
declare sum (this will be equal to the single number)
declare integerOne (set to array[0])
declare integerTwo (set to array[1])
declare lessThanSum array (leave empty)
iterate over the array
if arrayNumber is larger than sum, exclude. if arrayNumber is less than the sum add to lessThanSum array
iterate over lessThanSum
  add index number to index + 1
    if equal to sum
      return integer variables

*/

function findPairForSum(array, number){
    var lessThanSum = [];
    var answer = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] < number){
        lessThanSum.push(array[i])
      }
    }
    for(var j = 0; j < lessThanSum.length; j++){
      for(var k = 0; k < lessThanSum.length; k++){
        if(j !== k){
          if((lessThanSum[j] + lessThanSum[k]) === number){
            answer.push(lessThanSum[j], lessThanSum[k])
            return answer;
          }
        }
      }
    }
    
  }
  
  
  var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log(pair); // --> [4, 5]