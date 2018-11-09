$(document).ready(function() {
  var game = new Game();

scorebuttons_div
var i;
$('#scorebuttons_div').append("<button class='scorebuttons' id='0' value='0'>0</button>")
for (i = 1; i < 11; i++) {

  $('#scorebuttons_div').append("<button class='scorebuttons' id='"+i+"' value='"+i+"'>"+i+"</button>")
  $('#heading-row').append('<th colspan="6" width="10%">'+i+'</th>');
  $('#score-row').append('<td colspan="3"></td><td colspan="3" width="10%" id="score_'+i+'"></td>');
  $('#marker-row').append('<td colspan="6" width="10%" id="marker_'+i+'"></td>');
}
  // updateTemperature();

  function showScore(pin) {
    $('#score_'+game.currentframenumber+'').text(game.currentframe.rolls);
    $('#marker_'+game.currentframenumber+'').text(game.currentframe.getPinsScore());
    $('#current-score').text(game.calculateGameTotalScore());


  }

  $('.scorebuttons').on('click', function() {
    // console.log("fdasfasd")

    val = parseInt($(this).attr("value"))
    console.log(val)
    game.enterRoll(val);
    $('#frame-number').text(game.currentframenumber);
    // $('#score_'+game.currentframenumber+'').append(1);
    showScore()
    // game.enterRoll(1);
  });
  //
  // $('#0').on('click', function() {
  //   console.log(0);
  //   game.enterRoll(0);
  //   $('#frame-number').text(game.currentframenumber);
  //   // $('#score_'+game.currentframenumber+'').append(1);
  //   showScore(0)
  // });
  //
  // $('#1').on('click', function() {
  //   console.log(1);
  //   game.enterRoll(1);
  //   $('#frame-number').text(game.currentframenumber);
  //   // $('#score_'+game.currentframenumber+'').append(1);
  //   showScore(1)
  // });
  // $('#2').on('click', function() {
  //   console.log(2);
  //   game.enterRoll(2);
  //   $('#frame-number').text(game.currentframenumber);
  //   showScore(2)
  // });
  // $('#3').on('click', function() {
  //   console.log(3);
  //   game.enterRoll(3);
  //   showScore(3)
  // });
  // $('#4').on('click', function() {
  //   console.log(4);
  //   game.enterRoll(4);
  //   showScore(4)
  //   $('#frame-number').text(game.currentframenumber);
  // });
  // $('#5').on('click', function() {
  //   console.log(5);
  //   game.enterRoll(5);
  //   showScore(5)
  //   $('#frame-number').text(game.currentframenumber);
  // });
  // $('#6').on('click', function() {
  //   console.log(6);
  //   game.enterRoll(6);
  //   showScore(6)
  //   $('#frame-number').text(game.currentframenumber);
  // });
  // $('#7').on('click', function() {
  //   console.log(7);
  //   game.enterRoll(7);
  //   showScore(7)
  //   $('#frame-number').text(game.currentframenumber);
  // });
  // $('#8').on('click', function() {
  //   console.log(8);
  //   game.enterRoll(8);
  //   showScore(8)
  //   $('#frame-number').text(game.currentframenumber);
  // });
  // $('#9').on('click', function() {
  //   console.log(9);
  //   game.enterRoll(9);
  //   showScore(9)
  //   $('#frame-number').text(game.currentframenumber);
  // });
  // $('#10').on('click', function() {
  //   console.log(10);
  //   game.enterRoll(10);
  //   showScore(10)
  //   $('#frame-number').text(game.currentframenumber);
  // });

  $('.scorebuttons').on('click', function() {
    console.log("ss");
    // game.enterRoll(1);
  });


  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
    updateTempOnServer();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
    updateTempOnServer();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
    updateTempOnServer();
  });

  $('#powersavingmode-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersavingmode-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateTempOnServer () {
    $.ajax({
      url: 'http://localhost:3111/temp-set',
      type: 'post',
      data: { temp: thermostat.temperature }
      });
  }

  function getTempFromServer () {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3111/temperature',
      success: function (result) {
      thermostat.temperature = result
      $('#temperature').text(result);
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.energyUsage());
      }
    });
  }

  displayWeather('London');

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature () {
    getTempFromServer()
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
