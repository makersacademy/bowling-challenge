// This file contains all the jQuery


//$( window ).load(function() {    // this also works
$(document).ready(function() {

// initialise
   webthermostat = new Thermostat();
   var colours = {
    10:"red",
    11:"blue",
    12:"yellow",
    13:"cyan",
    14:"magenta",
    15:"green",
    16:"chocolate",
    17:"red",
    18:"DarkBlue",
    19:"red",
    20:"red",
    21:"fuchsia",
    22:"red"
  }


  $("div").click(function() {
    alert("Hello, world!");
  });

//can I refactor three lines? - no
  $("input#up").click(function() {
    webthermostat.up();
    updatePage();
  });

  $("input#down").click(function() {
    webthermostat.down();
    updatePage();
  });

  $("input#reset").click(function() {
    webthermostat.reset();
    updatePage();
    getWeather();
    // $('#sentence').css("color","red");



  });

  $("input#powerSave").click(function() {
    webthermostat.powerSave = $("input#powerSave").attr('checked')
  });

  function updatePage(){
    $("#temp").text(webthermostat.temperature.toString());
    // $("#temp").html(webthermostat.temperature.toString()); // this also works

    $('#sentence').css("color",colours[webthermostat.temperature]);
  };

  function getWeather(){
    // var success = {}
    // $.get({
    //   "api.openweathermap.org/data/2.5/weather?q=London,uk",
    //   function(data) {
    //     alert("success");
    //   }
    // });

    // var sausage = $.get( "http://api.openweathermap.org/data/2.5/weather?q=London,uk", function( data ) {
    $.get( "http://api.openweathermap.org/data/2.5/weather?q=London,UK", function( data ) {
        handleWeather(data)
      });

//    can't do this because at this point in time the above asyncronous code will not have completed
//    alert (data.weather[0].description);

  }

  function handleWeather(weather) {
  //  alert(weather.weather[0].description)
    $("#weather").text(weather.weather[0].description);
  }

//initialise - set temp and powersave checkbox
  updatePage();
  $('#powerSave').prop("checked", webthermostat.powerSave);


});







