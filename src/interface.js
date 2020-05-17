$(document).ready(function() {
  var scoreBoard = new ScoreBoard();
  updateScoreBoard();

  console.log("active");


  $('#0').on('click', function() {
    console.log("button 0");
    scoreBoard.addScore(0);
    updateScoreBoard();
  })

  $('#1').on('click', function() {
    console.log("button 1");
    scoreBoard.addScore(1);
    updateScoreBoard();
  })

  $('#2').on('click', function() {
    console.log("button 2");
    scoreBoard.addScore(2);
    updateScoreBoard();
  })

  $('#3').on('click', function() {
    console.log("button 3");
    scoreBoard.addScore(3);
    updateScoreBoard();
  })

  $('#4').on('click', function() {
    console.log("button 4");
    scoreBoard.addScore(4);
    updateScoreBoard();
  })

  $('#5').on('click', function() {
    console.log("button 5");
    scoreBoard.addScore(5);
    updateScoreBoard();
  })

  $('#6').on('click', function() {
    console.log("button 6");
    scoreBoard.addScore(6);
    updateScoreBoard();
  })

  $('#7').on('click', function() {
    console.log("button 7");
    scoreBoard.addScore(7);
    updateScoreBoard();
  })

  $('#8').on('click', function() {
    console.log("button 8");
    scoreBoard.addScore(8);
    updateScoreBoard();
  })

  $('#9').on('click', function() {
    console.log("button 9");
    scoreBoard.addScore(9);
    updateScoreBoard();
  })

  $('#10').on('click', function() {
    console.log("button 10");
    scoreBoard.addScore(10);
    updateScoreBoard();
  })

  function updateScoreBoard() {
    for (var i = 0; i < 10; i++) {
      var frame = scoreBoard.frames[i]
      $('#frame-' + i + '-first-roll').text(frame.first);
      if(!frame.hasStrike()) $('#frame-' + i + '-second-roll').text(frame.second);
      $('#frame-' + i + '-score').text(frame.displayScore());
    };
    updateButtons()
  };

  function updateButtons() {
    var currentFrame = scoreBoard.currentFrame

    if (currentFrame.isLastFrame() && currentFrame.hasSpare()) {
      _enableButtons()
      return;
    }

    if (currentFrame.first != null && !currentFrame.hasStrike()) {
      var difference = (10 - currentFrame.first) + 1
      _disableButtons(difference)
    } else {
      _enableButtons();
    }
  }

  function _enableButtons() {
    for (var i = 0; i <= 10; i++) $('#' + i).prop('disabled', false);
  }

  function _disableButtons(difference) {
    for (var i = difference; i <= 10; i++) $('#' + i).prop('disabled', true);
  }

});
