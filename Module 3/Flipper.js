/*
Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn
*/


function flipPairs(string){
    // variable for result
    var result = ''
    // variable for the leng of the string
    var lengthOfString = string.length
    // console.log(lengthOfString)
    // iterate over the string
    for(var i = 0; i < string.length; i++){
      if(i % 2 === 0){
        result += (string[i + 1])
      } else if(i % 2 >= 1){
        result += (string[i - 1])
      }
      // console.log(result)
    }
      return result;
  }
  