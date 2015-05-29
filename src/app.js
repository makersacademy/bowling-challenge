var thermos = new Thermostat();

// window.onload = function WindowLoad(event){
// updatePage()
// };

window.onload=function () {
  updatePage()
};

function updatePage(){
 document.getElementById('temp').innerHTML = thermos.temperature;
};


increaseTemp = function() {
  thermos.up();
  updatePage()
};

decreaseTemp = function(){
  thermos.down();
  updatePage()
};
// Separating the page (HTML) - using just the function call (decreaseTemp) from thermos and the backend method call this.down. also stops messing about with Backend.

resetTemp = function() {
  thermos.reset();
  updatePage()
};

powerSaveOn = function() {
  thermos.powersave('on');
  thermos.reset();
  updatePage()
};

powerSaveOff = function() {
  thermos.powersave('off');
  thermos.reset();
  updatePage()
};

destination = function(){
  $.get( "http://api.openweathermap.org/data/2.5/weather?q=", function( data ) {
   document.getElementById('api-request').innerHTML = data.weather[0].description;
  // alert( "Today's weather." );
});
};

var holiday = function function_name (api-request + destination) {
  // body...
}

//THIS IS THE API  - BUT NEED TO TELL IT TO STOP AND DO SOMETHING
$.get( "http://api.openweathermap.org/data/2.5/weather?q=London,uk", function( data ) {
   document.getElementById('api-request').innerHTML = data.weather[0].description;
  // alert( "Today's weather." );
});


