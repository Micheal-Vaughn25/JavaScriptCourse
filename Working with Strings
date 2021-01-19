//A Quick Refresher
    //A JavaScript string stores a series of characters, like "Excelsior!"
    //A string can be any text inside of double or single quotes: 'SpongeBob' or "SpongeBob"
    //It is possible to access an entire string, or an individual character within it
    //To that end, the characters in a string are "indexed", and the indexes start at 0
    //Creating a String
    //Let us consider the case of wanting to create a string
    //In order to create a string, we assign a variable to a series of characters wrapped with 
    //single of double quotes
//--------------------------------------------------------------------------------------------

//Create a String
    //To create a string we assign a variable a series of characters wrapped with single or double
    //quotes

//Exercise
    //We are going to complete a function that takes no parameters, and returns a newly 
    //created string. Your function should create a variable and assign it to a new string,
    //then return that variable. Below is an example of the code running, assuming that
    //you will have completed the described function: createString.

function createString() {
  // create a result variable,
  var result;
  // assign it to a new string
  var result = "String of Text";
  // return the result variable
  return result;
}

var resultString = createString();
console.log('should be a string type:', typeof resultString);
//--------------------------------------------------------------------------------------------

//Accessing a Character in a String
    //String are zero-indexed. We can access a given character within a string, but these
    //characters begin at 0

//Exercise
    //We are going to complete a function that takes two parameters, a string and a numberical
    //index, and returns the character in the string located at the numerical index. Your function
    //should create a variable and assign it to an expression which accesses the character
    //located at the numberical index, then return that variable. Below is an example of the code
    //running, assuming that you will have completed the described function: accessACharacter.

function accessACharacter(string, index) {
  // create a result variable,
  // assign it to an expression that accesses the character within string at the index
  var result = string[index];
  // return the result variable
  return result;
}

var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":', resultCharacter);
//--------------------------------------------------------------------------------------------

//Reassigning a String
    //Strings are immutable (we cannot change them once they are created)
    //We can reassign one variable from one string to another by leaving keyword 'var' off

//Exercise
    //We are going to complete a function that takes one string parameter, and reassigns the
    //input parameter to be "reassigned", then returns that input. Your function should not
    //create any new variables and should reassign the input to the string "reassigned", then
    //return the input paramenter. Below are examples of the code running, assuming that you 
    //will have completed the described function: reassignAString.

function reassignAString(string) {
    // reassign input string to described string
    input = "reassigned";
    //return the input string
    return input
}

var resultString1 = reassignAString('Computer Science');
console.log('should be "reassigned":', resultString1)

var resultString2 = reassignAString('Software Engineering');
console.log('should also be "reassigned":', resultString2);
//--------------------------------------------------------------------------------------------

//Add together or concatenate two or more Strings
    //If you want to concatenate two or more strings you can use the + operator

//Exercise 1
    //We are going to complete a function that takes in two parameters, both will be strings,
    //and returns the two concatenated. Your function should create a new variable, assign
    //it to an expression which will add together or concatenate the input strings, then
    //return that variable. Below is an example of the code running, assuming that you will
    //have completed the described function: addTogetherTwoStrings.

function addTogetherTwoStrings(string1, string2){
    // create a result variable
    var result;
    // assign it to an expression which adds together string1 and string2
    result = (string1 + string2);
    // return the result variable
    return result;
}

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);

//Exercise 2
    //We are going to complete a function that takes in two parameters, both will be strings,
    //representing a first name and a last name, and returns a full name string. Your function
    //should create a new variable, assign it to an expression which will add together or
    //concatenate the first and last name strings, with a space in between, then return the 
    //that variable. Below is an example of the code running, assuming that you will have 
    //completed the described function: createFullName.

function createFullName(firstName, lastName){
    // create a fullName variable
    var fullName
    // assign it to an expression adding first and last name with a space in between
    fullName = firstName + lastName
    // return the fullName variable
    return fullName
}

var resultFullName1 = createFullName("Duevyn", "Cooke");
console.log("should log Duevyn Cooke:", resultFullName1);

var resultFullName2 = createFullName("Ada", "Lovelace");
console.log("should log Ada Lovelace:", resultFullName2);
//--------------------------------------------------------------------------------------------

//String Interpolation
    //If you want to build a message around the values of a variable you can use the + operator

//Exercise
    //We are going to complete a function that takes in two parameters, both will be strings
    //(activity, dayOfTheWeek), and returns a message based on the inputs. Your function should
    //create a new variable, assign it to an expression which will interpolate the parameters
    //into a message (described below), then return that variable. Below are examples of the
    //code running, assuming that you will have completed the described function: 
    //interpolateAString.

function interpolateAString(activity, dayOfTheWeek) {
    // create a result variable
    var result
    // assign it to an expression which interpolates the input parameters into the described message
    result = "We will go " + activity + " on" + dayOfTheWeek + ".";
    // return the result variable
    return result
}

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing','Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);
//--------------------------------------------------------------------------------------------

//Get the length of the string
    //If you want to find the length of a string you can use .length property

//Exercise
    //We are going to complete a function that takes in one parameter, a string, and returns the
    //length of that string. Your function should create a variable and assign it to the length
    //of the input string using the .length property, and return that variable. Below are examples
    //of the code running, assuming that you will have completed the described function: getStringLength

function getStringLength(string){
    // create a length variable
    // assign it to the length of the string
    var length = string.length;
    // return the length variable
    return length;
}

var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9:', resultLength2);
//--------------------------------------------------------------------------------------------

//Get the last character of a string
    //If you want to get the last character of a string you can use the .length property.
    //Since you will not know the length of the string you will need to use -1 to find the 
    //index of the last number (remember index starts at 0 for strings)

//Exercise
    //We are going to complete a function that takes in one parameter, a string, and returns
    //the input string's last character. Your function should determine the length of the input
    //string minus 1, and assign it to a lastIndex variable. Your function should also create
    //a lastCharacter variable and assign it to an express which uses lastIndex to access
    //the last character in the string, and return the lastCharacter variable. Below are
    //examples of the code running, assuming that you will have completed the described
    //function: getLastCharacter.

function getLastCharacter(string){
    // create a lastIndex variable
    var lastIndex;
    //assign it to the last index of the string
    var lastIndex = string.length - 1;
    //create a lastCharacter Variable
    var lastCharacter;
    //assign it to the last character in the string (make use of lastIndex)
    var lastCharacter = string[lastIndex];
    //return the lastCharacter variable
    return lastCharacter;
}

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);

//Notes: When using Index make sure to use []
//--------------------------------------------------------------------------------------------

//Using the substring Method
    //If you want to grab a portion of a string you can use the .substring() method.

//Exercise
    //We are going to complete a function that takes in three parameters (string,start,end ->
    //where start and end are numerical indexes), and returns a portion of the string from before
    //start, up to, but not including, end. Your function should create a subString variable and
    //assign it to a call of the substring() method on the string, starting from before start, up to
    //,but not including, end, and return the subString variable. Below are examples of the code running,
    //assuming that you will have completed the described funtion: applySubString.

function applySubString(string, start, end){
    // create a subString variable
    var subString;
    // assign it to a portion of the string from before start, up to, but not including end
    var subString = string.substring(start,end);
    // return the subString variable
    return subString;
}
    var string1 = 'Queue';
    var resultSubString1 = applySubString(string1, 1, 4);
    console.log('should log "ueu":', resultSubString1);

    var string2 = 'Stack Trace';
    var resultSubString2 = applySubString(string2, 2, 10);
    console.log('should log "ack Trac":', resultSubString2);
//--------------------------------------------------------------------------------------------

//Using the indexOf Method
    //If you want to determine where in a string we can find a particular substring you can 
    //use .indexOf() method for string

//Exercise 
    //We are going to complete a function that takes in two parameters (string, subString),
    //and returns the index of the string where the subString can be found. Your function
    //should create an index variable and assign it to a call of the indexOf() method on
    //the string, and passing subString as an argument, and return the index variable.
    //Below are examples of the code running, assuming that you will have completed the
    //described function: applyIndexOf.

function applyIndexOf(string, subString){
    // create an index variable
    var index;
    // assign it to the index inside of string where subString can first be found
    var index = string.indexOf(subString);
    // return the index variable
    return index;
}

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);
//--------------------------------------------------------------------------------------------

//Using the toString Method
    //If you want to convert a value, other than a string, into a string use the .toString()
    //method

//Exercise
    //We are going to complete a function that takes in one parameter, and returns a string
    //version of that parameter. Your function should create a stringVersion variable and 
    //assign it to a call of the toString() method on the input parameter, and return the 
    //stringVersion variable. Below are examples of the code running, assuming that you will
    //have completed the described function: applyToString.

function applyToString(param){
    // create a stringVersion variable
    var stringVersion;
    // assign it to the string version of the input param
    var stringVersion = param.toString();
    // return the stringVersion variable
    return stringVersion;
}

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);
//--------------------------------------------------------------------------------------------

//Escape Characters
    //An escape character is a character which invokes an alternative interpretation of subsequent
    //characters in a character sequence

//Exercise
    //We are going to complete a function that takes in three string parameters (the first,
    //second, and third lines of a haiku), and returns a string that when logged to the console
    //outputs the haiku in traditional format - see example above. Your function should create
    //a haiku variable and assign it to an expression which will create one "printable onto three
    //lines" string out of the three input strings, and return the haiku variable. Below are
    //examples of the code running, assuming that you will have completed the described function:
    //generateHaiku.

function generateHaiku(firstLine, secondLine, thirdLine){
    // create a haiku variable
    var haiku;
    // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
    var haiku = firstLine + '\n' + secondLine + '\n' + thirdLine;
    // return the haiku variable
    return haiku;
}

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n',  resultHaiku2);
//--------------------------------------------------------------------------------------------

