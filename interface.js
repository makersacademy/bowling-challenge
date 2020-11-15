$( document ).ready(function() {
  thermostat = new Thermostat()
  updateTemperature()

  $('#up').click(function( event ) {
    thermostat.increase()
    updateTemperature()
  })

  $('#down').click(function( event ) {
    thermostat.decrease()
    updateTemperature()
  })

  $('#reset').click(function( event ) {
    thermostat.reset()
    updateTemperature()
  })

  $('#powersave-on').click(function( event ) {
    thermostat.changePowerSavingModeToOn()
  })

  $('#powersave-off').click(function( event ) {
    thermostat.changePowerSavingModeToOff()
  })





function getWeather(location,callback) { 
  // console.log("About to define the API URL");
  var weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&units=metric`; 
  // console.log(location);
  // console.log("about to do the AJAX call");
  $.ajax({ 
    dataType: "jsonp",
    url: weather, 
    success: callback 
  }); 
  // console.log("all done with AJAX call");
}

// console.log("abou to call getweather");





 function getData () {
   return $('#myTextField').val();
 }

 $( "form" ).on( "submit",  function(){
   event.preventDefault()
   getWeather(getData(),function (data) { 
     // console.log("about to fill out HTML");
     // console.log($('#location'))
     $('#location').text(data.name)
     console.log(data.name);
       $('#location-temperature').text(data.main.temp)
       $('#location-weather').text(data.weather[0].description)
     // console.log(data)     // console.log(data.list[0].weather[0].description);     // console.log(data.list[0].weather[0].main);
    });
 })



});







let updateTemperature = function() {
  $('#current-temperature').text(thermostat.getCurrentTemperature())
  $('#current-temperature').attr('class', thermostat.usage().toLowerCase())
}
