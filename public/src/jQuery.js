$(document).ready(function() {

  bowling = new Bowling();

  $('#throwBall').click(function() {
    if ( bowling.points.length < 9) {
      bowling.throw(5) //throw e record can be in another function, saving 1 line
      bowling.record()
      $('#pt'+bowling.turn).html(bowling.lastScore);            //pt e score can be in another function saving another line
      $('#score').html(bowling.points.reduce((a, b) => a + b)); //reduce method with javascript
    } else if (bowling.points.length === 9) {
      bowling.throw(5) //throw e record can be in another function, saving 1 line
      bowling.record()
      $('#pt'+bowling.turn).html(bowling.lastScore);            //pt e score can be in another function saving another line
      $('#score').html(bowling.points.reduce((a, b) => a + b)); //reduce
      $("#bowlingPicture").attr("src","https://preview.ibb.co/cFUBSm/Screen_Shot_2017_11_25_at_17_33_56.png");
      $('#finalScore').html(bowling.points.reduce((a, b) => a + b));
      $('#startNewGame').prop( "hidden", null );
    }
  });

  $('#throwBall6').click(function() {
    bowling.throw(6)
    bowling.record()
    $('#pt'+bowling.turn).html(bowling.lastScore);
    $('#score').html(bowling.points.reduce((a, b) => a + b));
  });


  $('#startNewGame').click(function() {
    resetTable();
    bowling.resetPoint_Lscore_turn();
    $('#finalScore').html('');
    $("#bowlingPicture").attr("src","https://image.ibb.co/b9pZf6/Bowling_Start.png");
  })

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
    $('#score').html('');
  }


});
