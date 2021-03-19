/*
1.
Leave the group Zoom Meeting and join the single zoom
*/

/*
2. tell us about yourself.
*/

/*
3. explain how this function work
*/
function addNumbers(num1, num2){
    var result = 0;
    result = num1 + num2
    return result;
}


/*
4.
*/

/*
5.
*/

/*
6.
*/

/*
7.
*/

/*
8.
*/


/*
9.
Given an array with objects find the coldest and
hottest temperature and return the city name for coldest/hottest.

*/

var listOfCities = [
    {city: 'New York' 'Temp in C': 17},
    {city: 'Dallas' 'Temp in C': 37},
    {city: 'San Francisco' 'Temp in C': 20},
    {city: 'Washington D.C' 'Temp in C': 7},
    {city: 'Miami' 'Temp in C': 30},
    {city: 'Portland' 'Temp in C': 10}
]

{hottestCity: Dallas
coldestCity: Washington D.C.}


// Solution

// Given an array with objects find the coldest and
// hottest temperature and return the city name for coldest/hottest.

function cityTemp (array){
    //make a variable to hold results
    var result = {}; 
    // set a base value in the coldestCity
    var coldestCity = array[0]['Temp in C'];
    // set a base value in the hottestCity
    var hottestCity = array[0]['Temp in C']
      // set a base value in the coldestCity
    var coldestCityName = array[0]['city'];
    // set a base value in the hottestCity
    var hottestCityName = array[0]['city']
    // console.log(hottestCityName)
    // iterate over the array
    for(var i = 0; i < array.length; i++){
      // if the temperate is lower than my coldestCity variable, overwrite
      if(array[i]['Temp in C'] < coldestCity){
        coldestCity = array[i]['Temp in C']
        coldestCityName = array[i]['city']
        // console.log(coldestCity)
      }
      if(array[i]['Temp in C'] > hottestCity){
        hottestCity = array[i]['Temp in C'];
        hottestCityName = array[i]['city']
        // console.log(hottestCity);
      }
    }
    // write coldest and hottest cities to result variable
     return result = {'coldestCity': coldestCityName, 'hottestCity': hottestCityName};
    
   
  }
  
  
  // Find the average temperature of all the cities listed

  function AverageTemp(arrayOfCities){
    
  }
  
  
  
  var listOfCities = [
      {city: 'New York', 'Temp in C': 17},
      {city: 'Dallas', 'Temp in C': 37},
      {city: 'San Francisco', 'Temp in C': 20},
      {city: 'Washington D.C', 'Temp in C': 7},
      {city: 'Miami', 'Temp in C': 30},
      {city: 'Portland', 'Temp in C': 10}
  ]
  
  cityTemp(listOfCities)
  console.log(listOfCities[0]['Temp in C'])
  console.log(listOfCities[0]['city'])
  
  // Expected Answer
  // hottestCity: Dallas
  // coldestCity: Washington D.C.