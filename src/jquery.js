$(document).ready(function() {
  var bowling = new Bowling();

  $(".bowl").click(function(){
    $(".result").html("");
    bowling.bowl();
    $(".frame" + bowling.currentFrame + ".round" + bowling.round).html(bowling.score);
    $(".totalScore").html(bowling.viewTotalScore());
    if ((bowling.allFrames[bowling.currentFrame][0] + bowling.allFrames[bowling.currentFrame][1]) === 10) {
      $(".result").html("Spare!!");
    }
    if (bowling.allFrames[bowling.currentFrame].includes(10)) {
      $(".result").html("Strike!!");
    }
    if (bowling.isGameFinished()){
      bowling = new Bowling();
      $("td").html("");
    }
  });

});
