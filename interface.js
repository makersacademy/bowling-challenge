$(document).ready(function() {
  var game = new Game();
  var frame0 = new Frame(0);
  var frame1 = new Frame(1);
  var frame2 = new Frame(2);
  var frame3 = new Frame(3);
  var frame4 = new Frame(4);
  var frame5 = new Frame(5);
  var frame6 = new Frame(6);
  var frame7 = new Frame(7);
  var frame8 = new Frame(8);
  var frame9 = new Frame(9);

  function updateScore() {
    $('#final_score').text(game.calculateGameScore());
  }

  updateScore();

  $('#button0').on('click', function() {
    frame0.roll(parseInt($('#1roll0').val()), parseInt($('#2roll0').val()))
    game.getFrame(frame0);
    $('#score0').text(frame0.calculatePins());
    updateScore();
  })

  $('#button1').on('click', function() {
    frame1.roll(parseInt($('#1roll1').val()), parseInt($('#2roll1').val()))
    game.getFrame(frame1);
    $('#score1').text(frame1.calculatePins());
    $('#score0').text(game.calculateFrameScore(frame0));
    updateScore();
  })

  $('#button2').on('click', function() {
    frame2.roll(parseInt($('#1roll2').val()), parseInt($('#2roll2').val()))
    game.getFrame(frame2);
    $('#score2').text(frame2.calculatePins());
    $('#score1').text(game.calculateFrameScore(frame1));
    $('#score0').text(game.calculateFrameScore(frame0));
    updateScore();
  })

  $('#button3').on('click', function() {
    frame3.roll(parseInt($('#1roll3').val()), parseInt($('#2roll3').val()))
    game.getFrame(frame3);
    $('#score3').text(frame3.calculatePins());
    $('#score2').text(game.calculateFrameScore(frame2));
    $('#score1').text(game.calculateFrameScore(frame1));
    updateScore();
  })

  $('#button4').on('click', function() {
    frame4.roll(parseInt($('#1roll4').val()), parseInt($('#2roll4').val()))
    game.getFrame(frame4);
    $('#score4').text(frame4.calculatePins());
    $('#score3').text(game.calculateFrameScore(frame3));
    $('#score2').text(game.calculateFrameScore(frame2));
    updateScore();
  })

  $('#button5').on('click', function() {
    frame5.roll(parseInt($('#1roll5').val()), parseInt($('#2roll5').val()))
    game.getFrame(frame5);
    $('#score5').text(frame5.calculatePins());
    $('#score4').text(game.calculateFrameScore(frame4));
    $('#score3').text(game.calculateFrameScore(frame3));
    updateScore();
  })

  $('#button6').on('click', function() {
    frame6.roll(parseInt($('#1roll6').val()), parseInt($('#2roll6').val()))
    game.getFrame(frame6);
    $('#score6').text(frame6.calculatePins());
    $('#score5').text(game.calculateFrameScore(frame5));
    $('#score4').text(game.calculateFrameScore(frame4));
    updateScore();
  })

  $('#button7').on('click', function() {
    frame7.roll(parseInt($('#1roll7').val()), parseInt($('#2roll7').val()))
    game.getFrame(frame7);
    $('#score7').text(frame7.calculatePins());
    $('#score6').text(game.calculateFrameScore(frame6));
    $('#score5').text(game.calculateFrameScore(frame5));
    updateScore();
  })

  $('#button8').on('click', function() {
    frame8.roll(parseInt($('#1roll8').val()), parseInt($('#2roll8').val()))
    game.getFrame(frame8);
    $('#score8').text(frame8.calculatePins());
    $('#score7').text(game.calculateFrameScore(frame7));
    $('#score6').text(game.calculateFrameScore(frame6));
    updateScore();
  })

  $('#button9').on('click', function() {
    frame9.roll(parseInt($('#1roll9').val()), parseInt($('#2roll9').val()), parseInt($('#3roll9').val()) )
    game.getFrame(frame9);
    $('#score9').text(frame9.calculatePins());
    $('#score8').text(game.calculateFrameScore(frame8) + game.calculateBonusForLast());
    $('#score7').text(game.calculateFrameScore(frame7));
    $('#final_score').text(game.calculateGameScore() + game.calculateBonusForLast());
  })
})
