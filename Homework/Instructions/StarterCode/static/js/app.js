// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//get a reference to the table body
var tbody = d3.select("tbody");
// get the data from data.js
//console.log(data);
//Loop Through `data` and console.log each data object
//data.forEach(function(reporing){
//console.log(reporing);
//Use d3 to append one table row `tr` for each data object
//var row = tbody.append("tr");
//Use `Object.entries` to console.log each data value
//Object.entries(reporing).forEach(function([key,value]){
//console.log(key,value);
// Append a cell to the row for each value
// in the data object
//var cell = tbody.append("td");
//Use d3 to update each cell's text with
// // weather report values (Date,City,State,Country,Shape,Duration,Comments)
//cell.text("value");
//});
//});
//using Arrow Function
function loadData(){
tableData.forEach((watchingReport) => {
    var row = tbody.append("tr");
    Object.entries(watchingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
//call the function to load the data
loadData()
  
// Getting a reference to the button on the page with the id property 
//set to `filter-btn`
var filterButton = d3.select("#filter-btn");
// Getting a reference to the button on the page with the id property 
//set to `reset-btn`
var resetButton = d3.select("#reset-btn");


// create a function for filtering the data with the given input
function filterData(){
// stops page from refreshing
d3.event.preventDefault();
// Then, select the unordered list element by class name
var list = d3.select(".summary"); 
// remove any children from the list to
list.html("");
//user input as variable
// Get a reference to the input element on the page with the id property
var inputElement = d3.select("#datetime");
// Extract the given input for Date
var inputDate = inputElement.property("value");
// Filter Data
//var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);
//loopthrough each datetime
//filteredData.forEach((dateTime) => {
    //var row = tbody.append("tr");
    //Object.entries(dateTime).forEach(([key, value]) => {
      //var cell = row.append("td");
      //cell.text(value);
      //});
    //});
    var inputElement = d3.select("#city");
    var inputCity = inputElement.property("value");
    // Filter Data
    //var filteredData = tableData.filter(tableData => tableData.city === inputCity);
    //loopthrough each datetime
//filteredData.forEach((city) => {
    //var row = tbody.append("tr");
        //Object.entries(city).forEach(([key, value]) => {
          //var cell = row.append("td");
          //cell.text(value);
        //});   
    //});
    var inputElement = d3.select("#state");
    var inputState = inputElement.property("value");

    var inputElement = d3.select("#country");
    var inputCountry = inputElement.property("value");
    // Filter Data
    //var filteredData = tableData.filter(tableData => tableData.city === inputState);
    //loopthrough each datetime
//filteredData.forEach((state) => {
    //var row = tbody.append("tr");
        //Object.entries(state).forEach(([key, value]) => {
          //var cell = row.append("td");
          //cell.text(value);
        //});   
    //}); 
    // Get a reference to the input element on the page with the id property 
    var inputElement = d3.select("#shape");
    // Extract the given input for the fields on the web page
    var inputShape = inputElement.property("value");
    // Filter Data
    //var filteredData = tableData.filter(tableData => tableData.city === inputShape);
    //loopthrough each datetime
//filteredData.forEach((shape) => {
    //var row = tbody.append("tr");
        //Object.entries(shape).forEach(([key, value]) => {
          //var cell = row.append("td");
          //cell.text(value);
        //});   
    //}); 
//});
var filteredData = tableData.filter(function(watching){
  return ((watching.datetime === inputDate || inputDate == "") &&
          (watching.city === inputCity || inputCity == "") &&
          (watching.state === inputState || inputState == "") &&
          (watching.country === inputCountry || inputCountry == "")&&
          (watching.shape === inputShape || inputShape == "")
          );
});
//print the filtered data in the console
console.log(filteredData);
// Empty the table to append with the filtered data 
tbody.text("")
//update the table with the filter data
filteredData.forEach(selection => {
  var row =tbody.append("tr")
  Object.entries(selection).forEach(([key,value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});
};
// Add event handler for the click button to filter the table with the given input
filterButton.on("click",filterData);
// create a function for resetting the table 
function resetData(){
tbody.text("")
loadData()
};
// Add event handler for the reset button to reset the table to original data 
resetButton.on("click",resetData);