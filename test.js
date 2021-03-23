function averageTempByMonth(cityData){
    var result = [];
    var monthData = {Jan:{tempSum: 0, count: 0, average: 0 }};
    for(var i = 0; i < cityData.length; i++){
      
      var month = (cityData[i]['month'])
      if(monthData[month]){
        // month exists
        // add to tempSum and increase count
        var currentTempSum = monthData[month].tempSum;
        var currentCount = monthData[month].count;
        var newTemp = listOfCities[i]['Temp in C'];
        var newTempSum = (currentTempSum + newTemp);
        var newCount = (currentCount + 1);
        var average = (newTempSum / newCount);
        monthData[month].tempSum = newTempSum;
        monthData[month].count = newCount;
        monthData[month].average = average;
      } else {
        // month does not exist
        // add month to object
        monthData[month] = {tempSum: cityData[i]['Temp in C'], count: 1} 
      }
    }
    // create result array
    var monthCount = Object.keys(monthData).length // how many months are returned
    var monthReturned = Object.keys(monthData) // list of months in an  array ['jan', 'feb', 'mar', 'apr']
    // console.log(monthReturned)
    for(var j = 0; j < monthCount; j++){
        var currentMonth = (monthReturned[j]); // Jan
        // console.log(currentMonth)
        // console.log(monthData[currentMonth])
        // need to add list of months to result array
            // as we add each month, need to add the average temp
            // would like the output to look like {month: jan, averageTemp: 20}
        result.push({'Month': currentMonth, 'averageTemp': monthData[currentMonth]['average']}) 
        
    }
        console.log(result);
        return result;

}

  
  var listOfCities = [
        {city: 'New York', 'Temp in C': 17, 'month': 'Jan'},
        {city: 'Dallas', 'Temp in C': 37, 'month': 'Feb'},
        {city: 'San Francisco', 'Temp in C': 20, 'month': 'Sept'},
        {city: 'Washington D.C', 'Temp in C': 7, 'month': 'Aug'},
        {city: 'Miami', 'Temp in C': 30, 'month': 'Jan'},
        {city: 'New York', 'Temp in C': 19, 'month': 'Feb'},
        {city: 'Dallas', 'Temp in C': 6, 'month': 'Sept'},
        {city: 'San Francisco', 'Temp in C': 10, 'month': 'Feb'},
        {city: 'Washington D.C', 'Temp in C': 3, 'month': 'Aug'},
        {city: 'Miami', 'Temp in C': 14, 'month': 'Sept'}
    ];
    averageTempByMonth(listOfCities)
  /*
  // monthData[jan][count] = {
  // //   jan: {
  //       temp:40, 
  //       count: 2
  //       average: (temp / count)
  //       }
  //   feb: 30, count: 1
  //   feb: 32,
  //   mar: 32
  // }
  result =
  istOfCities = [
    {'month': 'Jan', averageTemp: 20},
    {'month': 'Feb', averageTemp: 201},  
    {'month': 'Mar', averageTemp: 220},
  ]
  
  
  */