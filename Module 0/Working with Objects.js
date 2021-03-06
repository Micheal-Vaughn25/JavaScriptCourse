// Working with Objects
    /* 
    An object is a collection of properties. A property is an association between a name (key)
    and a value (some data type)
// --------------------------------------------------------------------------------------------

// Create an Object
    // To create an object we can assign a variable to a set of curly braces, which may or may
    // not contain properties (an association between a key and a value), each of which are
    // separated by commas

// Exercise
    /*
    We are going to complete a function that takes no parameters, and returns a newly created 
    object. Your function should create a variable and assign it to a new object, then return
    that variable. Below is an example of the code running, assuming that you will have completed
    the described function: createObject.
    */

function createObject(){
    // create a result variable
    var result;
    // assign it to a new object
    var result = {Name: 'Mike', Job: 'Coding'};
    // return the result variable
    return result;
}

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));
// --------------------------------------------------------------------------------------------

// Accessing a Property in an Object
    // If you want to access the value of a specific property from within an object you can use
    // the objects name at a specific key

//Exercise 
    /*
    We are going to complete a function that takes two parameters, an object and a string key, and 
    returns the value for a property in the object located at the string key. Your function should
    create a variable and assign it to an expression which accesses the value of the property located
    at the string key, then return that variable. Below is an example of the code running, assuming
    that you will have completed the described function: accessAProperty
    */

function accessAProperty(object, key){
    // create a result variable
    var result;
    // assign it to an expression that accesses the property in the object located at the key
    var result = (object[key]);
    // return the result variable
    return result;
}

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);
// --------------------------------------------------------------------------------------------

// Reassigning a Property's Value in an Object
    // Objects are mutable. This means that we can change them once they are created by using
    // the = operator.

// Exercise
    /*
    We are going to complete a function that takes three parameters, an object, a string key,
    and a newValue, and returns the object after performing a reassignment. Your function should
    reassign the property's value within the object, located at the string key, to the newValue
    parameter, and should then return the newly changed object. Below is an example of the code
    running, assuming that you will have completed the described function: reassignAProperty.
    */

function reassignAProperty(object, key, newValue){
    // reassign the property's value in the object, located at the key, to the newValue parameter
    object[key] = newValue;
    // return the input object
    return object;
}

var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);
// --------------------------------------------------------------------------------------------

// Removing a Property from an Object
    // If you need to remove a property from an existing object the delete operator can be used

// Exercise
    /*
    We are going to complete a function that takes in two parameters, an object and an key, removes
    the property located at the input key from the object, and returns the object. Your function
    should use the delete operator to remove the property at the given key from the input ojbect,
    then return the object. Below are examples of the code running, assuming that you will have 
    completed the described function: removeAProperty.
    */

function removeAProperty(object, key){
    // remove the property at the given key from the object
    delete object[key];
    // return the object
    return object;
}

var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2); 
// --------------------------------------------------------------------------------------------

// Checking if a Property is present in an Object
    // You can used undefined as a check. A value of a property that is not present within an
    // object is always undefined. We can access an object at the property's key and check this against
    // undefined. !== undefined will if you if a value is not equal to undefined

// Exercise
    /*
    We are going to complete a function that takes in two parameters an object and a key, and returns
    whether the object has a property at the given key. Your function should create an isPresent variable
    and assign it to a comparison between the object's value at the given key and undefined, and return
    the isPresent variable. Below are examples of the code running, assuming that you will have completed
    the described function: isPropertyPresent.
    */

function isPropertyPresent(object, key) {
  // create an isPresent variable
  var isPresent
  // assign it to a comparison between object's value at key and undefined
  var isPresent= object[key] !== undefined
  // return the isPresent variable
  return isPresent
}

var object1 = {
  a: 1,
  b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);
// --------------------------------------------------------------------------------------------

// Determining if a value is an Object
    // We can determine if a value is an object by using the typeof operator in conjunction with
    // Array.isArray() method. We can use "===" to verify an object and !Array.isArray to verify
    // the object is not an array.

// Exercise
    /*
    We are going to complete a function that takes in one parameter, possibly an object, and returns
    whether the input in an object or not. Your function should create several variables (isObject,
    isNotAnArray, and isObjectAndNotAnArray). Assign isObject to an application of the typeof operator
    to the input. Assign isNotAnArray to call to the Array.isArray() method with the ! operator applied
    as well. Assign isObjectAndNotAnArray to the two previous variables combined with the && operator,
    and return the isObjectAndNotAnArray variable. Below are examples of the code running, assuming
    that you will have completed the described function: isAnObject.
    */

function isAnObject(input){
    // create an isObject variable
    var isObject;
    // assign it to whether the input is an object type
    var isObject = typeof input === "object";
    // create an isNotAnArray variable
    var isNotAnArray;
    // assign it to whether the input is not an array
    var isNotAnArray = !Array.isArray(input);
    // create an isObjectAndNotAnArray variable
    var isObjectAndNotAnArray;
    // assign it to a combination of isObject AND isNotAnArray
    var isObjectAndNotAnArray = isObject && isNotAnArray;
    // return the isObjectAndNotAnArray variable
    return isObjectAndNotAnArray;
}

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);
// --------------------------------------------------------------------------------------------

// Generaing an array of all keys in an Object
    // If you want to generate an array of all the keys in an object you can use the Object.keys() method

// Exercise
    /*
    We are going to completea function that takes in one parameter, an object. Your function should create a keys
    variable, and assign it to an expression which generates an array of all the keys in said object by calling
    Object.keys(), then return that keys variable. Below is an example of the code running, assuming that you will
    have completed the described function: getAllKeys.
    */

function getAllKeys(obj){
    // create a keys variable
    var keys;
    // assign it to an expression which will generate an array of all of the keys in obj
    var keys = Object.keys(obj);
    // return to the keys variable
    return keys;
}

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);
// --------------------------------------------------------------------------------------------

// Generating an array of all values in an Object
    // If you want to generate an array of all the values in an object use the Object.values() method

// Exercise
    /*
    We are going to complete a function that takes in one parameter, an object. Your function should create a
    values variable, and assign it to an expression which generates an array of all o the values in said object
    by calling Object.values(), then return that values variable. Below is an example of the code running, assuming
    that you will have completed the described function: getAllValues.
    */

function getAllValues(obj){
    // create a values variable
    var values;
    // assign it to an expression which will generate an array of all of the values in obj
    var values = Object.values(obj);
    // return to the values variable
    return values;
}

var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues);
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
