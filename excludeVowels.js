// Time limit 45 minutes
// Write a function removeVowels that takes a string and returns a string with all the vowels (a, e, i, o, u) removed.

function removeVowels(str) {
    // variable to hold the result
    var result =  "";
    // 
    // iterate over the string
    for(var i = 0; i < str.length; i++){
      // if the letter at index  does not equal a vowel
      if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u' && str[i] !== 'A' && str[i] !== 'E' && str[i] !== 'I' && str[i] !== 'O' && str[i] !== 'U') {
        // add letter at index to result variable
        console.log(str[i])
        result += str[i]
      }
    }
    // return result variable
    return result;
  }
  
  console.log(removeVowels("Coding"));  //"Cdng"
  console.log(removeVowels("August 31")); //"gst 31"
  console.log(removeVowels("Today is the day!")); //"Tdy s th dy!"