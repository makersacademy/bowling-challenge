$(document).ready(function(){
  var bowling = new BowlingGame;

  $('.pin').on('click',function(data){
    var throwToInteger = Number(data.currentTarget.innerHTML)
    $('#frame' + bowling.currentFrame + 'throw' + bowling.currentThrow).text(throwToInteger)
    strikeChangeToX(throwToInteger);
    spareChangeToSlash(throwToInteger);
    bowling.throw(throwToInteger);
    hideImpossibleThrows();
    $('#currentFrame').text("Frame Number:" + bowling.currentFrame);
    $('#currentThrow').text("Throw number:" + bowling.currentThrow);
    bowling.calculateScore();
  });

  strikeChangeToX = function(strike) {
    if (strike == 10) {
      $('#frame' + bowling.currentFrame + 'throw2').text('X')
      $('#frame' + bowling.currentFrame + 'throw1').text('_')
    }
  }

  spareChangeToSlash = function(thisThrow) {
    if (bowling.currentThrow == 2) {
      var throws = bowling.allThrows.length
      if (Number(bowling.allThrows[throws-1]) + Number(thisThrow) == 10) {
        $('#frame' + bowling.currentFrame + 'throw2').text('/')
      }
    }
  }

  hideImpossibleThrows = function() {
    var throws = bowling.allThrows.length
    console.log(Number(bowling.allThrows[throws-1]));
    if (bowling.currentThrow == 2) {
      for (var i = (10 - Number(bowling.allThrows[throws-1])+1) ; i < 11; i++) {
        $("#" + i + "pin").hide()
      }
    } else {
      for (var i = 0; i < 11; i++) {
        $("#" + i + "pin").show()
      }
    }
  }
});
