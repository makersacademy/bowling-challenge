$(document).ready(function(){
  var thermo = new Thermostat();

  start();

  $('#upBtn').click(function(){
    var by = document.getElementById('inputSmall').value;
    thermo.up(by);
    document.getElementById('inputSmall').value = null;
    setDisplay();
  });

  $('#downBtn').click(function(){
    var by = document.getElementById('inputSmall').value;
    thermo.down(by);
    document.getElementById('inputSmall').value = null;
    setDisplay();
  });

  $('#resetBtn').click(function(){
    thermo.reset();
    document.getElementById('inputSmall').value = null;
    $('#customSwitch1').prop('checked', true);
    setDisplay();
  });

  $('#customSwitch1').click(function(){
    thermo.psmSwitch();
    setDisplay();
  });

  $('#current-city').change(function() {
    start();
  })

  function start(){
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=33c1172517d89daf58b94b69f8999de2&units=metric', function(data) {
      thermo._temperature = Math.round(data.main.temp *10)/10; // *10 inside round, then /10 out of it to ensure 1 decimal!
      $('#currentTemperature').text(thermo.getCurrentTemperature());
      $('#currentEnergyUsage').text(thermo.ceu());
      setColors();
    });
  }

  function setDisplay(){
    $('#currentTemperature').text(thermo.getCurrentTemperature());
    $('#currentEnergyUsage').text(thermo.ceu());
    setColors();
  }

  function setColors(){
    var ceu = thermo.ceu();
    if (ceu === 'low'){
      $('#currentEnergyUsage').css('background-color', 'green')
    }
    else if (ceu === 'medium'){
      $('#currentEnergyUsage').css('background-color', 'black')
    }
    else {
      $('#currentEnergyUsage').css('background-color', 'red')
    }
  }
});
