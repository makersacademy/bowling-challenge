$(document).ready(function() {
  var game = new Game();


  $('.btn0').click(function() {
    game.addBowl(0);
    updateFrames();
    updateScore();
  });

  $('.btn1').click(function() {
    game.addBowl(1);
    updateFrames();
    updateScore();
  });

  $('.btn2').click(function() {
    game.addBowl(2);
    updateFrames();
    updateScore();
  });

  $('.btn3').click(function() {
    game.addBowl(3);
    updateFrames();
    updateScore();
  });

  $('.btn4').click(function() {
    game.addBowl(4);
    updateFrames();
    updateScore();
  });

  $('.btn5').click(function() {
    game.addBowl(5);
    updateFrames();
    updateScore();
  });

  $('.btn6').click(function() {
    game.addBowl(6);
    updateFrames();
    updateScore()
  });

  $('.btn7').click(function() {
    game.addBowl(7);
    updateFrames();
    updateScore()
  });

  $('.btn8').click(function() {
    game.addBowl(8);
    updateFrames();
    updateScore()
  });

  $('.btn9').click(function() {
    game.addBowl(9);
    updateFrames();
    updateScore()
  });

  $('.btn10').click(function() {
    game.addBowl(10);
    updateFrames();
    updateScore()
  });

  function updateScore() {
    $("#total_score").text(game.calculateScore());
  };


  function updateFrames() {
    $("#frame1").text(game.frames[0]);
    $("#frame2").text(game.frames[1]);
    $("#frame3").text(game.frames[2]);
    $("#frame4").text(game.frames[3]);
    $("#frame5").text(game.frames[4]);
    $("#frame6").text(game.frames[5]);
    $("#frame7").text(game.frames[6]);
    $("#frame8").text(game.frames[7]);
    $("#frame9").text(game.frames[8]);
    $("#frame10").text(game.frames[9]);
  };

});
