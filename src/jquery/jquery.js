$( document ).ready(function() {
  // $( "a" ).click(function( event ) {
  //     event.preventDefault();
  //     $(this).hide('slow');
  var thermo = new Thermostat();
  function updateTemp() {
    $('#temperature').attr('class',thermo.displayColour());
    $('#temp_display').attr('class',thermo.displayColour());
    $('#temperature').text(thermo.checkTemperature());
  };

  updateTemp();  $('#temperature-up').click(function(){
      thermo.upButton();
      updateTemp();
     });

  $('#temperature-down').click(function(){
      thermo.downButton();
      updateTemp();
     });

  $('#temperature-reset').click(function(){
      thermo.resetTemperature();
      updateTemp();
     });

  $('#switch-PSM').click(function(){
      thermo.switchPowerSavingMode();
      if(thermo.isPowerSavingOn()){
        $('.PSS').text(' On');
      } else {
        $('.PSS').text(' Off');
      };
      updateTemp();
     });

  var setMax = function(){
    thermo.toMaxTemp();
    updateTemp();
    };

  var setMin = function(){
    thermo.toMinTemp();
    updateTemp();
  };

  var timeout_id = 0,
    hold_time = 1500;

  $('#temperature-up').mousedown(function() {
      timeout_id = setTimeout(setMax, hold_time);
  }).bind('mouseup mouseleave', function() {
      clearTimeout(timeout_id);
  });

  $('#temperature-down').mousedown(function() {
      timeout_id = setTimeout(setMin, hold_time);
  }).bind('mouseup mouseleave', function() {
      clearTimeout(timeout_id);
  });

  // $('#ajax-weather').click(function(){
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     if (xhttp.readyState == 4 && xhttp.status == 200) {
  //       $('#ajax-result').text(xhttp.responseText);
  //     }
  //   };
  //   xhttp.open('GET','api.openweathermap.org/data/2.5/weather?q=London,uk', true);
  //   xhttp.send();
  // });

  displayWeather('London');
  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=c198c61276e6ad16021db62ed347d506';
    var units = '&units=metric';
    var code = ''
    $.get(url + token + units,function(data){
    $('#ajax-result').text(data.main.temp);
    console.log(data.weather[0].id);
    code = Math.floor((data.weather[0].id)/100);
    // code = data.weather[0].id - 800;
    console.log(code);
    $('#weather-icon').empty();
    $('#weather-icon').prepend("<img id='weather-icon' src='./lib/" + code +".png'>");
  });
    $('.city-name').text(city);
};

  $('#ajax-weather').click(function(){
      var city = $('#city').val();
      displayWeather(city);
    });





  // $('#temperature-up').click(function() {
  //     timeoutId = setTimeout(setMax, 1000);
  // }).bind('mouseup mouseleave', function() {
  //     clearTimeout(timeoutId);
  //
  // });







});
