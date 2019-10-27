$(document).ready(function() {
  var game = new BowlingGame();
  updateScore();
  updateFrame();

  function updateScore() {
    $('#score').text(game.cumulativeScore);
  };

  function updateFrame() {
    var i = 0
    for (i = 0; i < 11; i++) {
      $('#frame' + i).text(game.allFramesScore[i])
    };
  };

  function updateFrameRolls() {
    var i = 0
    for (i = 0; i < 11; i++) {
      $('#frame' + i + 'rolls').text(game.allFrames[i])
    };
  };

  $('#bowl-0').click(function() {
    game.bowl(0);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-1').click(function() {
    game.bowl(1);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-2').click(function() {
    game.bowl(2);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-3').click(function() {
    game.bowl(3);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-4').click(function() {
    game.bowl(4);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-5').click(function() {
    game.bowl(5);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-6').click(function() {
    game.bowl(6);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-7').click(function() {
    game.bowl(7);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-8').click(function() {
    game.bowl(8);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-9').click(function() {
    game.bowl(9);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

  $('#bowl-10').click(function() {
    game.bowl(10);
    updateScore();
    updateFrame();
    updateFrameRolls();
  });

});
