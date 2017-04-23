$(document).ready(function BowlingGame() {
  let game = new Game();
  var bowlNum = 0;
  var frameIndex = 0;

  function isEven(num) {
    return num % 2 === 0;
  }

  function updateScore() {
    $('#gameScore').text(game.getCurrentScore());
  }

  function updateFrame() {
    $('#frameNumber').text(game.getFrameNumber());
  }

  function updateBowlScore() {
    if (isEven(bowlNum)) {
      frameIndex = 1;
    } else {
      frameIndex = 0;
    }
    $('#bowlIndex-' + bowlNum).text(game.currentFrame.bowled[frameIndex]);
  }

  function updateFrameScore() {
    $('#scoreIndex-' + game.getFrameNumber()).text(game.currentFrame.frameScore());
    // bowlNum / 2
  }

function updateBoard() {
  updateBowlScore();
  updateFrameScore();
  updateScore();
  updateFrame();
}

  $('#btn0').on('click', function () {
    game.bowl(0);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn1').on('click', function () {
    game.bowl(1);
    bowlNum += 1;
    updateBoard();
    // $('#btn10').hide();
  });

  $('#btn2').on('click', function () {
    game.bowl(2);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn3').on('click', function () {
    game.bowl(3);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn4').on('click', function () {
    game.bowl(4);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn5').on('click', function () {
    game.bowl(5);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn6').on('click', function () {
    game.bowl(6);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn7').on('click', function () {
    game.bowl(7);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn8').on('click', function () {
    game.bowl(8);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn9').on('click', function () {
    game.bowl(9);
    bowlNum += 1;
    updateBoard();
  });

  $('#btn10').on('click', function () {
    game.bowl(10);
    bowlNum += 1;
    updateBoard();
    bowlNum += 1;
  });

  $('#resetGame').on('click', function () {
    game.resetGame();
    $('.bowlValues td').empty();
    $('.scoreValues td').empty();
    updateScore();
    updateFrame();
    bowlNum = 0;
    frameIndex = 0;
  });
});
