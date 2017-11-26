$(document).ready(function() {

  bowling = new Bowling();

  $('#throwBall').click(function() {
    if ( bowling.turn <= 19) {
      bowling.throw_record(10);
      writePtAndScore();
      bowling.increaseActualFrame();
      bowling.increaseTurn();
    } else if (bowling.turn === 20) {
      bowling.throw_record(9);
      bowling.IsGutter();
      writePtAndScore();
      $("#bowlingPicture").attr("src","https://preview.ibb.co/cFUBSm/Screen_Shot_2017_11_25_at_17_33_56.png");
      $('#finalScore').html(bowling.points.reduce((a, b) => a + b));
      $('#startNewGame').prop( "hidden", null );
    }
  });

  function writePtAndScore() {
    $('#pt'+bowling.turn).html(bowling.lastScore);
    $('#score').html(bowling.points.reduce((a, b) => a + b));
  }


  $('#startNewGame').click(function() {
    resetTable();
    bowling.resetPoint_Lscore_turn();
    $('#finalScore').html('');
    $("#bowlingPicture").attr("src","https://image.ibb.co/b9pZf6/Bowling_Start.png");
  });

  function resetTable() {
    $('#pt1').html('');
    $('#pt2').html('');
    $('#pt3').html('');
    $('#pt4').html('');
    $('#pt5').html('');
    $('#pt6').html('');
    $('#pt7').html('');
    $('#pt8').html('');
    $('#pt9').html('');
    $('#pt10').html('');
    $('#pt11').html('');
    $('#pt12').html('');
    $('#pt13').html('');
    $('#pt14').html('');
    $('#pt15').html('');
    $('#pt16').html('');
    $('#pt17').html('');
    $('#pt18').html('');
    $('#pt19').html('');
    $('#pt20').html('');
    $('#score').html('');
  }
});
