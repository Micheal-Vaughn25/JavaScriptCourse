// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
// Note that this is intentionally very similar to the previous problem.
// Please focus on getting a working solution with the tools you know well.
// Practice the interactive/collaborative interview style that's described in the documentation.
// Example:
// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'
// -> 'ohs axe trelpma'

// input is a string of text
// output is a string of as well
// output is going to be the original text, but every n amount of characters will be reversed
// assumption: the string will be divisible by n

function flipEveryNChars(string, num){
    // convert string into an array
    var arrayOfString = string.split('')
    var arrayChunk = [];
    var result = [];
    // console.log(arrayOfString)
    for(var i = 0; i < arrayOfString.length; i+= num ){
      // console.log(arrayOfString.slice(i,(i + num)))
      arrayChunk = arrayOfString.slice(i,(i + num))
      arrayChunk.reverse()
  
      result = result.concat(arrayChunk)// += arrayChunk;
      
      // console.log(result);
      
      // console.log(arrayChunk)
    }
  result = result.join('')
  return result;
  
  }
  
  var input = 'a short example';
  // console.log(input.length)
  var output = flipEveryNChars(input, 5);
  console.log(output); // --> ohs axe trelpma]
