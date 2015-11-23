
$(document).ready(function() {
  var bowling = new Bowling(10);
  var games = bowling.numFrames;
  var count = 0;

 function updateScore() {
    $('#score_sheet').text(bowling.string);
  };

  function updateTotalScore() {
    $('#score').text(bowling.totalScore);
  };

  function updateFrame() {
    $('#frame').append(bowling.currentFrame);
  };

  function lastFrame() {
    if (count === games) {
      if (bowling.secondScore === 10) {
        $('#controls').replaceWith($('#last_go').show());
      } 
      else {
        finish();
      }
    }
  };

  function finish() {
    $('#controls').replaceWith($('#finish').show());
  };

  $( '#begin').click( function() {
     $("#start").replaceWith( $("#controls").show() );
  });

  function strikeLast() {
    if (count === games) {
      if (bowling.score === 10) {
        updateScore();
        updateTotalScore();
      }
    }
  };

  function strikeFirst() {
    if (bowling.score === 10) {
      bowling.randomScore();
      bowling.scoreString();
      bowling.addScore();
      bowling.bonusDue();
      bowling.prevScore();
      bowling.addTotal();
      bowling.newFrame();
      bowling.addRound();
      updateScore();
      updateTotalScore();
      $("#two").hide();
    }
  };

  $( '#one' ).click( function() {
    $("#two").show()
    count +=1;
    updateFrame();
    bowling.randomScore();
    bowling.scoreString();
    bowling.addRound();
    updateScore();
    strikeLast();
    strikeFirst();
  });

  $( '#two' ).click( function() {
    bowling.randomScore();
    bowling.scoreString();
    bowling.addScore();
    bowling.bonusDue();
    bowling.prevScore();
    bowling.addTotal();
    bowling.newFrame();
    bowling.addRound();
    updateScore();
    updateTotalScore();
    lastFrame();
  });

    $( '#last' ).click( function() {
    bowling.randomScore();
    bowling.scoreString();
    bowling.addScore();
    bowling.bonusDue();
    bowling.prevScore();
    bowling.addTotal();
    updateScore();
    updateTotalScore();
    finish();
  });

  // $.getJSON('http://api.wunderground.com/api/831aa92990911190/geolookup/q/autoip.json', function(data) {
  // country = data.location.country;
  // city = data.location.city;
  // url = 'http://api.wunderground.com/api/831aa92990911190/conditions/q/' + country + '/' + city + '.json';
  //   $.getJSON(url, function(data) {
  //     updateWeather(data.current_observation.temp_c,city);
  //   });
  // });



  // $('#power_saving_mode_on').css('background-color', 'green');
  // $('#power_saving_mode_off').css('background-color', 'white').fadeTo("slow", 0.15);



  // $( '#temperature_down' ).click( function() {
  //   thermostat.down();
  //   updateTemp();
  // });

  // $( '#power_saving_mode_on' ).click( function() {
  //   $(this).css('background-color', 'green').fadeTo("slow", 1);
  //   $('#power_saving_mode_off').css('background-color', 'white').fadeTo("slow", 0.15);
  //   thermostat.powerSavingModeOn();
  // });

  // $( '#power_saving_mode_off' ).click( function() {
  //   $(this).css('background-color', 'red').fadeTo("slow", 1);
  //   $('#power_saving_mode_on').css('background-color', 'white').fadeTo("slow", 0.15);
  //   thermostat.powerSavingModeOff();
  // });

  // $( '#reset' ).click( function() {
  //   thermostat.resetButton();
  //   updateTemp();
  // });


});