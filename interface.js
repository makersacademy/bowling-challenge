$(document).ready(function() {
  var game = new Game();
  var frame0 = new Frame();
  var frame1 = new Frame();
  var frame2 = new Frame();
  var frame3 = new Frame();
  var frame4 = new Frame();
  var frame5 = new Frame();
  var frame6 = new Frame();
  var frame7 = new Frame();
  var frame8 = new Frame();
  var frame9 = new Frame();

  function updateScore() {
    $('#final_score').text(game.calculateGameScore());
    console.log("total score: " + game.calculateGameScore())
  }

  // updateScore();

  // for (var i = 0; i < 10; i++) {
  //   $('#button' + i).on('click', function() {
  //
  //     alert("hello")
  //   })
  // }
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
    updateScore();
  })
  $('#button2').on('click', function() {
    frame2.roll(parseInt($('#1roll2').val()), parseInt($('#2roll2').val()))
    game.getFrame(frame2);
    $('#score2').text(frame2.calculatePins());
    updateScore();
  })
  $('#button3').on('click', function() {
    frame3.roll(parseInt($('#1roll3').val()), parseInt($('#2roll3').val()))
    game.getFrame(frame3);
    $('#score3').text(frame3.calculatePins());
    updateScore();
  })
  $('#button4').on('click', function() {
    frame4.roll(parseInt($('#1roll4').val()), parseInt($('#2roll4').val()))
    game.getFrame(frame4);
    $('#score4').text(frame4.calculatePins());
    updateScore();
  })
  $('#button5').on('click', function() {
    frame5.roll(parseInt($('#1roll5').val()), parseInt($('#2roll5').val()))
    game.getFrame(frame5);
    $('#score5').text(frame5.calculatePins());
    updateScore();
  })
  $('#button6').on('click', function() {
    frame6.roll(parseInt($('#1roll6').val()), parseInt($('#2roll6').val()))
    game.getFrame(frame6);
    $('#score6').text(frame6.calculatePins());
    updateScore();
  })
  $('#button7').on('click', function() {
    frame7.roll(parseInt($('#1roll7').val()), parseInt($('#2roll7').val()))
    game.getFrame(frame7);
    $('#score7').text(frame7.calculatePins());
    updateScore();
  })
  $('#button8').on('click', function() {
    frame8.roll(parseInt($('#1roll8').val()), parseInt($('#2roll8').val()))
    game.getFrame(frame8);
    $('#score8').text(frame8.calculatePins());
    updateScore();
  })
  $('#button9').on('click', function() {
    frame9.roll(parseInt($('#1roll9').val()), parseInt($('#2roll9').val()))
    game.getFrame(frame9);
    $('#score9').text(frame9.calculatePins());
    updateScore();
  })
})
