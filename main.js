// Get user's location via Geolocation API, or return error
const userLocation = (function() {

});

// Get data from the data.json file, then either populate the page or display an error
$.getJSON("data.json")
.done(pageLoad) // Call pageLoad() to populate the page
.fail((jqXHR,text,error) => {
  console.log("Error retrieving JSON: ",text,error);
  alert("Error loading page.");
});

// Calls the appropriate functions to load the page based on data from $.getJSON
function pageLoad(data) {
  const sData = sortData(data);
  sData.forEach((obj) => {
    populateGraph(obj);
    addPin(obj);
  })
};

// Sorts list by distance to user; called by pageLoad()
function sortData(data) {
// iterate arr, call calcDistance -> add distance key/value to each obj
// let arr2 = [];
// iterate arr, pop min distance to arr2; return
return data;
};

// Calculates distance by car from user's location to given long/lat; called by sortData()
function calcDistance(long,lat) {

};

const table = document.getElementById("data-table"); // reference for the data table

// Populates the graph; called by pageLoad()
function populateGraph(obj) {
  const row = table.insertRow(-1);
  row.insertCell(0).innerHTML = obj.name;
  row.insertCell(1).innerHTML = obj.description;
  row.insertCell(2).innerHTML = mapButton(obj.location); // Button linked to GMaps location
  row.insertCell(3).innerHTML = routeButton(obj); // Button linked to route directions
};

// Creates a button linked to GMaps for given long/lat coords; called by populateGraph()
function mapButton([long,lat]) {
  return `<button onClick="javascript:window.open('https://www.google.com/maps?q=`+long+`,`+lat+`', '_blank');">Map</button>`
};

// Creates a button linked to GMaps route from user location, named by distance; called by populateGraph()
function routeButton(obj) {

};

// Adds a pin to the GMap for given long/lat coords and a hover-tooltip, clicking navigates to entry in table
// Called by pageLoad()
function addPin(obj) {

};