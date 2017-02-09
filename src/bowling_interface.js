$(document).ready(function(){

  var thermostat = new Thermostat()

  var city = 'london'

  function updateTemperature(){
    $( "#temp" ).text(thermostat.temperature);
    $('#temp').attr('class', thermostat.usage());
    $( "#powersave" ).text(thermostat.powerSaveStatus());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })

  $('#current-city').change(function() {
  city = $('#current-city').val();
  console.log(city)
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

  updateTemperature()

  $( "#increase" ).click(function(){
    thermostat.increase();
    updateTemperature();
  });

  $( "#decrease" ).click(function(){
    thermostat.decrease();
    updateTemperature();
  });


  $( "#powerSaveOff_button" ).click(function(){
      thermostat.powerSaveOff();
      updateTemperature();
  });

  $( "#powerSaveOn_button" ).click(function(){
      thermostat.powerSaveOn();
      updateTemperature();
  });

  $( "#reset" ).click(function(){
      thermostat.reset();
      updateTemperature();
  });



});
