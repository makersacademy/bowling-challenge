$(document).ready(function() {

  bowling = new Bowling();

  $('#throwBall').click(function() {
    var score = $('#scoreChoosen').val();
    if ( bowling.points.length <= 19) {
      bowling.throw_record(parseInt(score));
      writePtAndScore();
      writeSpareBonus();
      bowling.increaseActualFrame();
    } else if (bowling.points.length === 20) {
      bowling.throw_record(parseInt(score));
      bowling.isGutter();
      writePtAndScore();
      writeSpareBonus();
      $("#bowlingPicture").attr("src","https://preview.ibb.co/cFUBSm/Screen_Shot_2017_11_25_at_17_33_56.png");
      $('#finalScore').html(bowling.points.reduce((a, b) => a + b) + bowling.pointsBonus.reduce((a, b) => a + b));
    }
  });

  function writePtAndScore() {
    $('#fr'+ (bowling.actualFrame) +(bowling.frames[bowling.actualFrame].framePoints.length) ).html(bowling.lastScore);
    $('#score').html(bowling.points.reduce((a, b) => a + b) + bowling.pointsBonus.reduce((a, b) => a + b));
  }

  function writeSpareBonus() {
    if (bowling._wasSpare() && bowling.frames[bowling.actualFrame].framePoints.length === 1) {
      $('#fr'+ (bowling.actualFrame - 1) + (bowling.frames[bowling.actualFrame].framePoints.length + 1)).html(bowling.frames[bowling.actualFrame - 1].framePoints[1] );
    }
  }
});
