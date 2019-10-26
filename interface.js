$(document).ready(function() {
  var game = new BowlingGame();
  updateScore();

  function updateScore() {
    $('#score').text(game.cumulativeScore);
  };

  function updateFrame(frameNumber, frameScore) {
    $('#frame'+frameNumber).text(frameScore);
  };

  $('#bowl-0').click(function() {
    game.bowl(0);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-1').click(function() {
    game.bowl(1);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-2').click(function() {
    game.bowl(2);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-3').click(function() {
    game.bowl(3);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-4').click(function() {
    game.bowl(4);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-5').click(function() {
    game.bowl(5);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-6').click(function() {
    game.bowl(6);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-7').click(function() {
    game.bowl(7);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-8').click(function() {
    game.bowl(8);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-9').click(function() {
    game.bowl(9);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

  $('#bowl-10').click(function() {
    game.bowl(10);
    updateScore();
    updateFrame(game.previous2Frame, game.allFramesScore[game.previous2Frame]);
  });

});
