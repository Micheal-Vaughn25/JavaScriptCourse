// What are Conditionals?
    // IF and ELSE are conditional statements. These are used to tell a program to do or not do something
    // based on a condition.
    // Using pseudocode is useful when learning conditionals.

// --------------------------------------------------------------------------------------------

// IF Statements
    // IF statements are conditionals used to tell a program to do something if the condition 
    // is true

    /*
    Example of IF statement
    if (/*some expression which evaluates to true or false*/) {

        /*some action to be taken in the event
        that the expression above evaluates to true*/

    }
    */

// Exercise 1 - IF statement with undefined
    /*
    We are going to complete a function that takes in one parameter, determines if that parameter
    is defined, and returns a specific string if it is. Your function should use an IF statement
    to determine if the input parameter is defined, and if it is, should return the string
    'Input is defined'. Below are examples of the code running, assuming that you will have
    completed the described function: isItUndefined.
    */

function isItUndefined(param){
     // if param is defined (or not undefined){
     if(param !== undefined)
         //return 'Input is defined'
         return 'Input is defined'
     }
}
    
var result1 = isItUndefined('anything');
console.log('should lo "Input is defined":', result1);

var result2 = isItUndefined();
console.log('should log undefined, because function returned nothing:', result2);

// Exercise 2 - IF statement with numbers
    /*
    We are going to complete a function that takes in two parameters, both numbers representing totals
    for apples and oranges, determines if there are fewer apples than oranages, and if so, returns a
    specific string. Your function should use an IF statement to determine if there are fewer apples
    than oranges, and if there are, should return the string 'There are fewer apples than oranges'.
    Below are examples of the code running, assuming that you will have completed the described
    function: fewerApples.
    */

function fewerApples(apples, oranges){
    // if there are fewer apples than oranges
    if(apples < oranges){  
        //return 'There are fewer apples than oranges'
    return 'There are fewer apples than oranges'
    }
}

var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranages":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);

// Exercise 3 - IF statement with a string
    /*
    We are going to complete a function that takes in one parameter, a string representing a
    password, determines if the string is both longer than 4, and less than 15, characters long,
     and if it returns a specific string. Your function should use an IF statement to determine
     if the input string is both long enough, and not too long, and if it is, should return the
     string 'Password length is valid'. Below are examples of the code running, assuming that you
     will have completed the described function: validLengthPassword.
     */

function validLengthPassword(password){
    // if password length is greater than 4 and less than 15
    if(password.length > 4 && password.length < 15){
        // return 'Password length is valid'
        return 'Password length is valid'
    }
}

var result1 = validLengthPassword('passwordyfurdy');
console.log('should log "Password length is valid":', result1);

var result2 = validLengthPassword('pass');
console.log('Should log undefined, because function returned nothing:', result2);

var result3 = validLengthPassword('this is clearly too long of a password');
console.log('Should log undefined, because function returned nothing:', result3);

// Exercise 4 - IF Statement with an array
    /*
    We are going to complete a function that takes in two parameters, an array of agents in the field, and
    an agent to serach for is present within the array, and if it is, returns a specific string. Your function
    should use an if statement to determine if the agent to search for is present within the list of agents, and
    if it is, should return the string '{agentToSearchFor} is present within Agent list', where {agentToSearchFor}
    has the value of the argument the function is called on. Below are examples of the code running, assuming
    that you will have completed the described function: findAgent.
    */

function findAgent(agentList, agentToSearchFor) {
  // if agentToSearchFor is present within agentList
  if(agentList.indexOf(agentToSearchFor) > -1){
    // return '{agentToSearchFor} is present within Agent list'
    return (agentToSearchFor + ' ' + 'is present within Agent list')
  }
}

var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(['red', 'blue', 'green'], 'orange');
console.log('Should log undefined, because function returned nothing:', result3);

// Exercise 5 - IF Statement with an object
    /*
    We are going to complete a function that takes in two parameters, an object containing the report 
    totals for various teams, and a string name of a team, and determines if the given team has surpassed
    their goal of 5 reports, and if they have, returns a specific string. Your function should use an IF 
    statement to determine if the team in question has surpassed their goal of 5 reports, and if they have,
    should return the string '{teamName} has surpassed goal with {number_of_reports_for_team} reports', where
    {teamName} has the value of the second argument the function is called on, and {number_of_reports_for_team}
    is the number of reports in the inputted object argument for {teamName}. Below are examples of the code running,
    assuming that you will have completed the described function: generateReportSummary.
    */

function generateReportSummary(reportTotals, teamName) {
  // if teamName's report total is greater than 5
  var teamTotal = reportTotals[teamName];
  if(teamTotal > 5){
    // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
    return (teamName + ' ' + 'has surpassed goal with' + ' ' + reportTotals' + ' ' 'reports');
  }
}

var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);
// --------------------------------------------------------------------------------------------

// IF ELSE Statements
    // A conditional that allows your program to do something, if some condition is true, and do
    // something else, if that same condition is false

    /*
    Example Code
    if (/*some expression which evaluates to true or false*/) {

     /*some action to be taken in the event
        that the expression above evaluates to true*/

    } else {

    /*some action to be taken in the event
    that the expression above evaluates to false*/

    }
    */

// Exercise 1 - IF ELSE statement with truthy/falsy
    /*
    We are going to complete a function that takes in one parameter, determines if that parameter
    is truthy or falsy, and returns a specific string for each case. Your function should use an
    IF ELSE statement to determine if the input parameter is truthy, and if it si, should return
    the string 'Input is truthy', or, if the input parameter is falsy, should return the string
    'Input is falsy'. Below are examples of the code running, assuming that you will have 
    completed the described function: isItTruthy.
    */

function isItTruthy(param){
    // if param is truthy
    if(param){
        // return 'Input is truthy'
        return 'Input is truthy'
    // otherwise
    } else {
        //return 'Input is falsy'
        return 'Input is falsy'
    }
}

var result1 = isItTruthy('anything');
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);

// Exercise 2 - IF ELSE statement with numbers
    /*
    We are going to complete a function that takes in two parameters, both numbers representing totals
    for dogs and cats, determines if dogs are more than 8 and cats are fewer than 9, and returns a
    specific string for each case. Your function should use an IF ELSE statement to determine if there
    are both more than 8 dogs and fewer than 9 cats, and if there are, should return the string 'number
    of cats and dogs is acceptable'. Below are examples of the code running, assuming that you will have
    completed the described function: balancePets.
    */

function balancePets(dogs, cats){
    // if there are more than 8 dogs and fewer than 9 cats
    if(dogs > 8 && cats < 9){
        // return 'number of cats and dogs is acceptable'
        return 'number of cats and dogs is acceptable'
    // otherwise
    } else {
        // return 'number of cats or dogs is not acceptable'
        return 'number of cats or dogs is not acceptable'
    }        
}

var result1 = balancePets(9,8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(7,12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7,7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(5,14);
console.log('should log "number of cats or dogs is not acceptable":', result4);

// Exercise 3 - IF ELSE statement with a string
    /*
    We are going to complete a function that takes in one parameter, a string representing a password, determines
    whether the password is longer than 8 characters, and returns a specific string for each case. Your function
    should use an IF ELSE statement to determine if the input string is long enough, and if it is, should return
    the string 'Please enter a password of at least 9 characters'. Below are examples of the code running, assuming
    that you will have completed the described function: passwordLongEnough.
    */

function passwordLongEnough(password){
    //if password length is greater than 8
    var length = password.length
    if(legnth > 8){
        //return 'Password is long enough'
        return 'Password is long enough'
    // otherwise
    }else {
        // return 'Please enter a password of at least 9 characters'
        return 'Please enter a password of at least 9 characters'
    }
}

var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);

var result2 = passwordLongEnough('wordpass');
console.log('Should log "Please enter a password of at least 9 characters":', result2);

// Exercise 4 - IF ELSE statement with an array
    /*
    We are going to complete a function that takes in two parameters, an array of ingredients for a recipe,
    and an ingredient to serach for within that array, determines whether the ingredient to search for is
    present within the array, and returns a specific string for each case. Your function should use an 
    IF ELSE statement to determine if the ingredient to search for is present within the list of ingredients,
    and if it is, should return the string '{ingredientToSearchFor} is on the list', and if not, should return
    the string '{ingredientToSearchFor} is not on the list', where {ingredientToSearchFor} has the value of the
    argument the function is called on. Below are examples of the code running, assuming that you will have
    completed the described function: findIngredient.
    */

function findIngredient(ingredientList, ingredientToSearchFor){
    // if ingredientToSearchFor is present within ingredientList
    if (ingredientList.indexOf(ingredientToSearchFor) > -1){
        // return '{ingredientToSearchFor} is on the list'
        return ingredientToSearchFor + " " + 'is on the list'
    // otherwise
    } else {
        // return '{ingredientToSearchFor} is not on the list'
        return ingredientToSearchFor + " " + 'is not on the list'
    }
}

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);

// Exercise 5 - IF ELSE statement with an object
    /*
    We are going to complete a function that takes in one parameter, an object containing the fruit totals
    for a project, and determines whether the listed total for banas is greater than 3 and the listed total
    for strawberries is greater than 10, and returns a specific string for each case. Your function should
    use an IF ELSE statement to determine if the totals of bananas and strawberries are sufficient, and if
    they are, should return the string 'We have enough fruit, with ' + {totalBananas} + 'bananas, and ' + 
    {totalStrawberries} +' strawberries', where {totalBananas} and {totalStrawberries} are the numbers of
    each fruit in the fruit totals object. If they are not, your function should return the string 'We do not 
    have enough of both fruits'. Below are examples of the code running, assuming that you will have completed
    the described function: measureRequireFruit.
    */

function measureRequiredFruit(fruitTotals){
    // if there are more than 3 bananas and more than 10 strawberries
        // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
    // otherwise
        // return 'We do not have enough of both fruits'

    var totalBananas = fruitTotals.bananas
    var totalStrawberries = fruitTotals.strawberries
    if(totalBananas > 3 && totalStrawberries > 10){
        return 'We have enough fruit, with' + " " + totalBananas + " " + 'bananas, and' + " " + totalStrawberries + " " + 'strawberries'
    }else {
        return 'We do not have enough of both fruits'
    }
}

var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);
// --------------------------------------------------------------------------------------------

// IF ELSE IF Statements
    /* 
    A conditional that allows your program to do something, if some condition(1) is true, and do
    something else, if that same condition(1) is false and another condition(2) is true, and lastly,
    to do a third action if both condition(1) and condition(2) are both false
    */

// Example code
    /*
    if (/*some expression which evaluates to true or false*/) {

    /*some action to be taken in the event
    that the expression above evaluates to true*/

    } else if (/*some other expression which evaluates to true or false*/) {

    /*some action to be taken in the event
    that the first expressions evaluates to false
    and the second expression above evaluates to true*/

    } else {

    /*some action to be taken in the event
    that the first expressions evaluates to false
    and the second expression above evaluates to false*/

    }
    */

// Exercise 1 - IF ELSE IF Statement
    /*
    We are going to complete a function that takes in one parameter, a string representing the choise
    of Player 1 in a game of rock/paper/scissors, and returns a specific string for four different 
    cases. Your function should use an IF ELSE IF statement to determine which choice the player 
    has made, then should return: 'Player 1 chose rock'; 'Player 1 chose paper'; 'Player 1 chose scissors';
    or, 'Player 1 has chosen poorly!', depending upon the value of the input parameter. Below are examples of
    the code running, assuming that you will have completed the described function: player1Choice.
    */

function player1Choice(choice){
    // if player1 chose rock
        // return "Player 1 chose rock"
    // otherwise if player1 chose paper
        // return "Player 1 chose paper"
    // otherwise if player1 chose scissors
        //return "Player 1 chose scissors"
    // otherwise
        // return "Player 1 has chosen poorly!"

if (choice === 'rock'){
    return "Player 1 chose rock"
}else if(choice === 'paper'){
    return "Player 1 chose paper"
}else if(choice === 'scissors'){
    return "Player 1 chose scissors"
} else{
    return "Player 1 has chosen poorly!"
}
}

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);

// Exercise 2 - IF ELSE IF statement
    /*
    We are going to complete a function that takes in one parameter, a number called shirtWidth, and returns a specific
    string for four different cases. Your function should use an IF ELSE IF statement to determine which size t-shirt
    is appropriate based on the following conditions: if the shirtWidth is greater than or equal to 20, and less than 30,
    the function returns 'You should select a size S'; if the shirtWidth is greater than or equal to 30, and less than 40,
    the function returns 'You should select size M'; if the shirtWidth is greater than or equal to 40, and less than 50,
    the function returns 'You should seelct a different shirt'. Below are examples of the code running, assuming that you 
    will have completed the described function: selectShirtSize.
    */

function selectShirtSize(choice){
    // if shirt is greater than or equal 20 and less than 30
        // return 'You should select a size S'
    // otherwise if shirt is greater than or equal to 30 and less than 40
        // return 'You should select a size M'
    // otherwise if shirt is greater than or equal to 40 and less than 50
        // return 'You should select a size L'
    // otherwise
        // return 'You should select a different shirt'

if(choice >= 20 && choice < 30){
    return 'You should select a size S'
} else if(choice >= 30 && choice < 40){
    return 'You should select a size M'
} else if(choice >= 40 && choice < 50){
    return 'You should select a size L'
} else{
    return 'You should select a different shirt'
}
}

var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5);

// --------------------------------------------------------------------------------------------

// Exercise 3 - IF ELSE IF statements
    /*
    We are going to complete a fucntion that takes in three parameters, an object (recipeMinimums)
    containing require amounts for two ingredients (tomatoes, onions) in a recipe, and then two
    numbers representing the current stock of those ingredients (stockTomatoes, and stockOnions),
    and returns a specific string for four different cases. Your function should use an IF ELSE IF
    statement to determine the correct output. If both the stock of onions and tomatoes are less
    than the recipe minimums, your function should return 'We need more tomatoes and more onions'.
    If the stock of tomatoes is greater than or equal to the receipe minimum, but the stock of onions
    is less than the recipe minium, your function should return 'We have enough tomatoes, but need
    more onions'. If the stock of tomatoes is less than recipe minimum, but the stock of onions is
    greater than or equal to the recipe minimum, your function should return 'We have enough onions,
    but need more tomatoes'. Finally, if the stock of both ingredients is suffcient, your function
    should return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato,
    and {excessOnions} extra onion.', where {excessTomatoes} and {excessOnions} are the number of 
    tomatoes and onions in excess of the minimum of the code running, assuming that you will have 
    completed the described function: verifyStock.
    */

function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  // if stock of tomatoes and stock of onions are both less than minimum
    // return 'We need more tomatoes and more onions.'
  // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
    // return 'We have enough onions, but need more tomatoes.'
  // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
    // return 'We have enough tomatoes, but need more onions.'
  // otherwise
    // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'

var excessTomatoes = (stockTomatoes - recipeMinimums.tomatoes);
var excessOnions = (stockOnions - recipeMinimums.onions);

if(excessTomatoes < 0 && excessOnions < 0){
    return "We need more tomatoes and more onions."
} else if(excessTomatoes < 0 && excessOnions >= 0){
    return "We have enough onions, but need more tomatoes."
} else if(excessTomatoes >= 0 && excessOnions < 0){
    return "We have enough tomatoes, but need more onions."
} else{
    return "We have enough tomatoes and onions. There will be" + " " + excessTomatoes + " " + "extra tomato, and" + " " + excessOnions + " " + "extra onion."
}
}

var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We have enough onions, but need more tomatoes.":', result4);

var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
console.log('should log "We have enough tomatoes, but need more onions.":', result5);

//Exercise 4 - Convert Score to Grade
    /*
    Write a function called "convertScoreToGrade".
    Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.
    100-90 = A
    89-80 = B
    79-70 = C
    69-60 = D
    59 - 0 = F
    Scores greater than 100 or less than 0 should return 'INVALID SCORE'
    */

function convertScoreToGrade(score) {
if(score <= 100 && score >= 90){
    return 'A'
} else if(score <= 89 && score >= 80){
    return 'B'
} else if(score <= 79 && score >= 70){
    return 'C'
} else if(score <= 69 && score >= 60){
    return 'D'
} else if(score <= 59 && score >= 0){
    return 'F'
} else{
    return 'INVALID SCORE'
}
}
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
// --------------------------------------------------------------------------------------------
