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
debugger;
var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
debugger;
assertEqual(actualFlatList, expectedFlatList, 'inventory rendered');


//---------------------------------------------------------------------------------------------
// Part B
//---------------------------------------------------------------------------------------------
// Part C
//---------------------------------------------------------------------------------------------
// Part D
//---------------------------------------------------------------------------------------------
