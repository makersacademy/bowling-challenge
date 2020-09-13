$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#0').click(function() {
    scorecard.play(0);
    updateScores();
  });

  $('#1').click(function() {
    scorecard.play(1);
    updateScores();
  });

  $('#2').click(function() {
    scorecard.play(2);
    updateScores();
  });

  $('#3').click(function() {
    scorecard.play(3);
    updateScores();
  });

  $('#4').click(function() {
    scorecard.play(4);
    updateScores();
  });

  $('#5').click(function() {
    scorecard.play(5);
    updateScores();
  });

  $('#6').click(function() {
    scorecard.play(6);
    updateScores();
  });

  $('#7').click(function() {
    scorecard.play(7);
    updateScores();
  });

  $('#8').click(function() {
    scorecard.play(8);
    updateScores();
  });

  $('#9').click(function() {
    scorecard.play(9);
    updateScores();
  });

  $('#10').click(function() {
    scorecard.play(10);
    updateScores();
  });


  $("#powersaving-on").click(function() {
    thermostat.switchPowerSavingOn();
    $('#power-saving-status').text('ON')
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSavingOff();
    $('#power-saving-status').text('OFF')
    thermostat.reset();
    updateTemperature();
  });


  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#typed-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url  = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#select-temperature').text(data.main.temp);
      $('#city-name').text(data.name);
    });
  }


  function updateScores() {
    $(`#${(scorecard.currentFrameIndex)+1}-1`).text(scorecard.currentFrame().firstBowl());
    if(scorecard.currentFrame().frame.length===2) {
      $(`#${(scorecard.currentFrameIndex)+1}-2`).text(scorecard.currentFrame().secondBowl());
    }
    if(scorecard.currentFrame().frame.length===3) {
      $(`#${(scorecard.currentFrameIndex)+1}-3`).text(scorecard.currentFrame().thirdBowl());
    }
    for(var i=0; i<=scorecard.currentFrameIndex; i++) {
      $(`#${i+1}-score`).text(scorecard.getRunningTotalUpTo(i));
    }
  }

  /*  $("1:1").text(scorecard.frames[0].firstBowl)
    $("1:2").text(scorecard.frames[0].secondBowl)
    $("2:1").text(scorecard.frames[1].firstBowl)
    $("2:2").text(scorecard.frames[1].secondBowl)
    $("3:1").text(scorecard.frames[2].firstBowl)
    $("3:2").text(scorecard.frames[2].secondBowl)
    $("4:1").text(scorecard.frames[3].firstBowl)
    $("4:2").text(scorecard.frames[3].secondBowl)
    $("5:1").text(scorecard.frames[4].firstBowl)
    $("5:2").text(scorecard.frames[4].secondBowl)
    $("6:1").text(scorecard.frames[5].firstBowl)
    $("6:2").text(scorecard.frames[5].secondBowl)
    $("7:1").text(scorecard.frames[6].firstBowl)
    $("7:2").text(scorecard.frames[6].secondBowl)
    $("8:1").text(scorecard.frames[7].firstBowl)
    $("8:2").text(scorecard.frames[7].secondBowl)
    $("9:1").text(scorecard.frames[8].firstBowl)
    $("9:2").text(scorecard.frames[8].secondBowl)
    $("10:1").text(scorecard.frames[9].firstBowl)
    $("10:2").text(scorecard.frames[9].secondBowl)
    $("10:3").text(scorecard.frames[9].thirdBowl)
  }*/

});
