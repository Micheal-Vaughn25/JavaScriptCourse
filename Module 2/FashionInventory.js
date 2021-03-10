// Part A

    /*
    You have a fashion catalog, an inventory of items from various high-fashion designers.
    Each designer has a lineup of shoes. Each shoe has a name and a price.

    It looks like this:
    */

    var currentInventory  = [
        {
            name: 'Brunello Cucinelli',
            shoes: [
                {name: 'tasselled black low-top lace-up', price: 1000},
                {name: 'tasselled green low-top lace-up', price: 1100},
                {name: 'plain beige suede moccasin', price: 950},
                {name: 'plain olive suede moccasin', price: 1050}
            ]
        },
        {
            name: 'Gucci',
            shoes: [
                {name: 'red leather laced sneakers', price: 800},
                {name: 'black leather laced sneakers', price: 900}
            ]
        }
    ];

    /*
    Write a function that will take in this currentInventory array as its argument.
    Your function should access all the shoes across each designer and return
    them out in a flat list: {designer name} - {shoe name} - {price}{designer Name} - 
    {shoe name} - {price}

    // . . . console output:
    Brunello Cucinelli, tasselled black low-top lace-up, 1000
    Brunello Cucinelli, tasselled green low-top lace-up, 1100
    // and so on . . .

    Here is an example of a flat list in code:
    */
   var flatList = "First line\nSecond Line\nThird Line";
   console.log(flatList);

   /*
   Observe that a "flat list" refers to a string where each new line is eparated by
   the newline symbol. Also note that the "flat list" does not end with a newline
   symbol. There are, like all of the challenges in this course, tests attached to
   these exercises. However, in order to get the most effective practice, please
   continue to write your own unit tests.
   */

   function renderInventory(inventory){
        var flatList = "";
        for(var i = 0; i < inventory.length; i++){
            var designerObject = inventory[i];
            var shoes = designerObject.shoes
            // for each shoe in the designerOBject
            for(var j = 0; j < shoes.length; j++){
                var currentShoe = shoes[j];
                flatList += designerObject.name + ', ' + currentShoe.name + ', ' + currentShoe.price + '\n'

            }   
        }
        return flatList;
   }

   // ASSERTION FUNCTION
   function assertEqual(actual, expected, testName){
       if(actual === expected){
           return 'PASS'
       } else {
           return 'FAILED [' + testName + ']'
       }
   }
   
   var currentInventory  = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
        ]
    }
];

var actualFlatList = renderInventory(currentInventory);
var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
assertEqual(actualFlatList, expectedFlatList, 'inventory rendered');


//---------------------------------------------------------------------------------------------
// Part B

    /*
    Your function should return the average cost of all shoes per designer in this format:
    */

    function calculateAveragePricePerDesigner(inventory){
        // create result object
        var result = {
            designers: []
        };

        // iterate over the inventory
        for(var i = 0; i < inventory.length; i++){
            // create averagePricePerDesigner object
            var averagePricePerDesigner = {};
            // create an object for designerObject
            var designerObject = inventory[i];
            // create an array for shoes
            var shoes = designerObject.shoes;
            // assign a name property for currentDesigner
            averagePricePerDesigner.name = designerObject.name;
            // assign an averagePrice property
            averagePricePerDesigner.averagePrice = getAveragePrice(shoes);
            // push averagePriceForDesigner object into result.designers
            result.designers.push(averagePricePerDesigner);    
        }

        // return result object
        return result;
    }

    function getAveragePrice(arrayOfShoeObject){
        // calculate and return average price of shoe objects
        // create a sum variable
        var sum = 0;
        // iterate over the array of shoe objects
        for(var j = 0; j < arrayOfShoeObject.length; j++){
            var currentShoe = arrayOfShoeObject[j];
            // add the price of the current shoe object to the sum
            sum += currentShoe.price;
        }
        // return sum variable divided by the number of shoes (shoes.length)
        return sum / arrayOfShoesObject.length;
    }

    var expected = {
        'designers': [
            {
                'name': 'Brunello Cucinelli',
                'averagePrice': 1025
            },
            {
                'name': 'Gucci',
                'averagePrice': 850
            }
        ]
    };

    var actualOutput = calculateAveragePricePerDesigner(currentInventory)

    var currentInventory = [
        {
          name: 'Brunello Cucinelli',
          shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
          ]
        },
        {
          name: 'Gucci',
          shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
          ]
        }
      ];

      function assertObjectsEqual(actual, expected, testName){
        // use JSON.stringify() on both objects
        actual = JSON.stringify(actual)
        expected = JSON.stringify(expected)
        if(actual === expected){
            console.log('passed');
        } else {
            console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
        }

      }

    assertObjectsEqual(actualOutput, expected, 'average price of shoes')

    
//---------------------------------------------------------------------------------------------
// Part C

      /*
      Your task is to find all the shoes with "black" in the name. Your function
      Should filter these shoes, adn return them in a "flat list" similary to Part A:

      //... console output:
      Brunello Cucinelli, tasselled black low-top lace-up, 1000
      Gucci, black leather laced sneakers, 900
      */

    function listAllBlackShoes(inventory){
        // create variable to hold result
        var flatList = "";
        // iterate over the inventory
        for(var i = 0; i < inventory.length; i++){
        // create variable for designerName
        var designerName = inventory[i];
        // create variable for shoe
        var shoe = designerName.shoes;
        // create variable for the price
        var price = designerName.price;
        // iterate over shoes
            for(var j = 0; j < shoe.length; j++){
                var currentShoe = shoe[j]
                // if(currentShoe == 'black'){ incorrect
                if(shoeIsBlack(currentShoe)){
                    flatList += designerName.name + ', ' + currentShoe.name + ',' + currentShoe.price + '\n';
            }
        }
        }
        // return flatList
        return flatList;
    }

    function shoeIsBlack (shoeObject){
        // check if name has black
        if(shoeObject.name.indexOf('black') !== -1){
            return true;
        } else {
            return false;
        }
            // return true
        // else
            // return false
    }


    function assertEqual(actual, expected, testName){
        if(actual === expected){
            return 'PASS'
        } else {
            return 'FAILED [' + testName + ']'
        }
    }


    var currentInventory = [
        {
          name: 'Brunello Cucinelli',
          shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
          ]
        },
        {
          name: 'Gucci',
          shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
          ]
        }
      ];

      var expectedResult = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';
      var actualResult = listAllBlackShoes(currentInventory)
      assertEqual(actualResult, expectedResult, 'return black shoes only')
//---------------------------------------------------------------------------------------------
// Part D

      /*
      The task now is to find all the laced shoes, but we are going to render them in a
      shomewhat complex format. Your function should return shoe names that contain
      "lace" in them, and indicate which word contains "lace".
      */


function generateLaceDetails(inventory){
    // create an array for the result
    var resultArray = [];
    // iterate over inventory
    for (var i = 0; i < inventory.length; i++){
    // create variable for currentDesigner
    var currentDesigner = inventory[i]
    // create a variable for shoes
    var shoes = currentDesigner.shoes
    // iterate over the shoes
    for (var j = 0; j < shoes.length; i++){
        var currentShoe = shoes[j]
        if(shoeIncludesLace(currentShoe)){
            // create an object for current lace shoe
            var lacedShoe = {};
                // fill object with appropriate data
                var nameWordsArray = currentShoe.name.split( ' ')
                lacedShoe['nameWords'] = currentShoe.split(' ');
                lacedShoe['targetWordIndex'] = getLaceIndex(nameWordsArray);
                // add object to resultArray
                resultArray.push(lacedShoe)
        }
    }
    }

    // return the resultArray
    return resultArray;
}

function shoeIncludesLace(shoeArray){
    var shoeName = showArray.name;
    if(shoeName.indexOf('lace') !== -1){
        return true;
    } else {
        return false;
    }
}

function getLaceIndex(arrayOfWords){
    // iterate over the arrayOfWords
    for(var k = 0; k < arrayOfWords.length; k++){
        if(arrayOfWords[k].indexOf('lace')!== -1){
            return k;
        }
    }
    // return index where the word 'lace' is found
}


var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
var actualResult = generateLaceDetails(currentInventory)
var expectedResult = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "red",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    },
    {
      "nameWords": [
        "black",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    }
  ];

  function assertObjectsEqual(actual, expected, testName){
    // use JSON.stringify() on both objects
    actual = JSON.stringify(actual)
    expected = JSON.stringify(expected)
    if(actual === expected){
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
  }

  assertObjectsEqual(actualResult, expectedResult, 'shows shoes with lace')
//---------------------------------------------------------------------------------------------
