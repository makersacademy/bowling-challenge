$(document).ready(function(){
  var bowling = new BowlingGame;
  var frame = new Frames;
  $('#play-again').hide();

  $('#play-again').on('click',function(data){
    bowling = new BowlingGame;
    $('#play-again').hide();
    for (var i = 0; i < 11; i++) {
      $("#" + i + "pin").show()
      $('#currentFrame').text("Frame Number:" + bowling.currentFrame);
      $('#currentThrow').text("Throw number:" + bowling.currentThrow);
      $('.frame').text('-');
      $('.unusedframe').text('-');
    }
  })

  $('.pin').on('click',function(data){
    var throwToInteger = Number(data.currentTarget.innerHTML)
    if (bowling.currentThrow == 1) {
      frame = new Frames(bowling.currentFrame)
      frame.firstThrow = throwToInteger
    } else {
      frame.secondThrow = throwToInteger
    }
    $('#frame' + bowling.currentFrame + 'throw' + bowling.currentThrow).text(throwToInteger)
    strikeChangeToX(throwToInteger);
    spareChangeToSlash(throwToInteger);
    bowling.throw(frame);
    hideImpossibleThrows();
    $('#currentFrame').text("Frame Number:" + bowling.currentFrame);
    $('#currentThrow').text("Throw number:" + bowling.currentThrow);
    $('#currentThrow').text("Throw number:" + bowling.currentThrow);
    // $('#score' + bowling.currentFrame).text(bowling.allThrows[bowling.currentThrow-1].score())
    // console.log(bowling.allThrows[bowling.currentFrame-1]);
    // $('#score' + (bowling.currentFrame-1)).text(bowling.allThrows[bowling.currentFrame-1].score())
    for (var i = 0; i < bowling.allThrows.length; i++) {
      console.log([bowling.allThrows[i].firstThrow,bowling.allThrows[i].secondThrow])
    }
    bowling.calculateScore();
    if (bowling.currentFrame > 10) gameOver();
  });

  strikeChangeToX = function(strike) {
    if (strike == 10 && bowling.currentThrow == 1) {
      $('#frame' + bowling.currentFrame + 'throw1').text('X')
      $('#frame' + bowling.currentFrame + 'throw2').text('-')
      $('#frame' + bowling.currentFrame + 'throw2').css('color','white')
    }
  }

  spareChangeToSlash = function(thisThrow) {
    if (bowling.currentThrow == 2) {
      var throws = bowling.allThrows.length
      if (bowling.allThrows[throws-1].firstThrow + thisThrow == 10 && bowling.allThrows[throws-1].firstThrow !== 10) {
        $('#frame' + bowling.currentFrame + 'throw2').text('/')
      }
    }
  }

  hideImpossibleThrows = function() {
    var throws = bowling.allThrows.length
    if (bowling.currentThrow == 2) {
      for (var i = (10 - (bowling.allThrows[throws-1].firstThrow)+1) ; i < 11; i++) {
        $("#" + i + "pin").hide()
      }
    } else {
      for (var i = 0; i < 11; i++) {
        $("#" + i + "pin").show()
      }
    }
  }

  gameOver = function() {
    $('#play-again').show();
    for (var i = 0; i < 11; i++) {
      $("#" + i + "pin").hide()
      $('#currentFrame').text("game over");
      $('#currentThrow').text("game over");
    }
  }
});
