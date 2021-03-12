// Time limit 45 minutes
// Write a function rockPaperScissorsPrompt that no input, but uses the prompt function to ask for a string, chooses randomly another string ('paper', 'rock', or 'scissors') and returns the result as a string of the outcome following the rules of Rock-Paper-Scissors https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors

function rockPaperScissorsPrompt(){
    // prompt user for input
    var input = prompt('Please enter Rock, Paper, or Scissors')
    // variable holding all the possible choices
    var array = ['Rock', 'Paper', 'Scissors']
    var random = randomChoice(array)
    if (input === 'Rock'){
      // if random input is rock return "TIE"
      if(input === 'Rock' && random === 'Rock'){
        return "TIE - Opponent chose Rock as well."
      } else {
        // if random input is scissors return "WIN - Rock beats Scissors"
        if(input === 'Rock' && random === 'Scissors'){
          return "WIN - Opponent chose Scissors, Rock beats Scissors!"
        } else {
          // if random input is paper return "LOSS - Paper beats Rock"
          if(input === 'Rock' && random === 'Paper'){
            return "LOSS - Opponent chose Paper. Paper beats Rock!"
          }
        }
      }  
    } else if(input === 'Paper'){
      // if random input is rock return "WIN - Paper beats Rock"
      if(input === 'Paper' && random === 'Rock'){
        return "WIN - Opponent chose Rock. Paper beats Rock!"
      } else {
        // if random input is scissors return "LOSS - Scissors beats Paper"
        if(input === 'Paper' && random === 'Scissors'){
          return "LOSS - Opponent chose Scissors. Scissors beats Paper!"
        } else {
          // if random input is paper return "TIE"
          if(input === 'Paper' && random === 'Paper'){
            return "TIE - Opponent chose paper as well."
          }
        }
      } 
    } else if(input === 'Scissors'){
      // if random input is rock return "LOSS - Rock beats Scissors"
      if(input === 'Scissors' && random === 'Rock'){
        return "LOSS - Opponent chose Rock. Rock beats Scissors!"
      } else {
        // if random input is scissors return "TIE"
        if(input === 'Scissors' && random === 'Scissors'){
          return 'TIE - Opponent chose Scissors as well.'
        } else {
          // if random input is paper return "WIN - Scissors beats Paper"
          if(input === 'Scissors' && random === 'Paper'){
            return 'WIN - Opponent chose Paper. Scissors beats Paper!'
          }
        }
      }
    } else if (input !== 'Scissors' || 'Paper' || 'Rock'){
      return 'Invalid input. Please enter Rock, Paper, or Scissors'
    }
  }
  
  function randomChoice(array){
    var array = ['Rock', 'Paper', 'Scissors']
    return array[Math.floor(Math.random()*array.length)];
    }
  
  rockPaperScissorsPrompt()
  
  
  
  