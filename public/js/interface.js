
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

});