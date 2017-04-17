var game = new Game();
var frameNumber, firstBox, secondBox, prevThirdBox, prevThirdBox2, scores1, scores2;

function displayStrike1() {
  if (frameNumber === 10)  {
    $(firstBox).text('X');
  } else if (frameNumber === 11) {
    if (game.isSpare(frameNumber-1) && game.frames[9][0] != 10) {
      $('#frame11').text('X');
    } else {
      $('#frame10 .second').text('X');
    }
  } else if (frameNumber === 12) {
    $('#frame11').text('X');
  } else {
      $(secondBox).text('X');
  }
}

function displayStrike2() {
  if (frameNumber === 11) {
    $('#frame11').text('X');
  }
}

function displayRollScores1() {
  if (frameNumber === 11) {
    $('#frame10 .second').text(scores1)
  } else if (frameNumber === 12) {
    $('#frame11').text(scores1)
  }
}

function displayRollScores2() {
  if (frameNumber === 11) {
    $('#frame11').text(scores1)
  }
}

function displayRollScores3() {
  if (frameNumber === 11) {
    $('#frame11').text(scores2);
  }
}

function displaySpare() {
  if (frameNumber === 11) {
    $('#frame11').text('/');
  } else {
    $(secondBox).text('/')
  }
}

function finish() {
  var tenthFrame = game.frames[9]
  var eleventhFrame = game.frames[10]
  if (frameNumber > 10) {
    if (game.isStrike(10)) {
      if (game.isStrike(11)) {
        $('#fallenPins div').click(function() {
          endGame();
        })
      } else {
        $('#leftPins div').click(function() {
          endGame();
        })
      }
    } else if (game.isSpare(10)) {
      $('#fallenPins div').click(function() {
        endGame();
      })
    } else {
      endGame();
    }
  }
}

function gameSetting() {
  $('#fallenPins').show();
  $('#leftPins').addClass('invisible')
}
function endGame() {
  $('#fallenPins').hide();
  $('#leftPins').hide();
}

$(function() {

  for (var i=0; i<11; i++) {
    $('#fallenPins').append('<div id="pins' + i + '">' + i + '</div>')
  }

  for (var i=0; i<11; i++) {
    $('#leftPins').append('<div id="leftPins' + i + '">' + i + '</div>')
  }

  for (var i=1; i<11; i++) {
    $('#firstRow').append('<div>' + i + '</div>')
    $('#secondRow').append('<div class="scores" id="frame' + i +
      '"><div class="first"></div><div class="second"></div><div class="third"></div></div>')
  }
  $('#frame10 .second').after('<div id="frame11"></div>')

  gameSetting();
  frameNumber = frameNumber || 1;
    $('#fallenPins div').on('click', function(e) {
      scores1 = parseInt(e.target.textContent);
      game.setScores(frameNumber, 1, scores1);
      game.total = 0;
      firstBox = '#frame' + frameNumber.toString() + ' .first'
      secondBox = '#frame' + frameNumber.toString() + ' .second'
      var prevThirdBox = '#frame' + (frameNumber -1).toString() + ' .third'
      var prevThirdBox2 = '#frame' + (frameNumber -2).toString() + ' .third'

      if (game.isStrike(frameNumber)) {
        $('#fallenPins').show();
        $('#leftPins div').hide();
        displayStrike1();

        if (game.isStrike(frameNumber-1)) {
          $(prevThirdBox2).text(game.addScores(frameNumber - 2))
        } else if (game.isSpare(frameNumber -1)) {
            displayStrike2();
            $(prevThirdBox).text(game.addScores(frameNumber - 1))
        }
        frameNumber++
      } else {
        $('#fallenPins').hide();
        $('#leftPins div').show();
        $('#leftPins div').removeClass('invisible');
        $('#leftPins div').addClass('visible');
        $(firstBox).text(scores1);

        if (game.isStrike(frameNumber-1)) {
          displayRollScores1();
          $(prevThirdBox2).text(game.addScores(frameNumber - 2))
        } else if (game.isSpare(frameNumber-1)) {
          displayRollScores2();
          $(prevThirdBox).text(game.addScores(frameNumber - 1))
        }
      }
      finish();
    });

    $('#leftPins div').on('click', function(e) {
      scores2 = parseInt(e.target.textContent);
      $('#fallenPins').show();
      $('#leftPins div').hide();
      game.setScores(frameNumber, 2, scores2);
      game.total = 0;
      secondBox = '#frame' + frameNumber.toString() + ' .second'
      var currentThirdBox = '#frame' + frameNumber.toString() + ' .third'
      var prevThirdBox = '#frame' + (frameNumber -1).toString() + ' .third'

      if (game.isSpare(frameNumber)) {
        displaySpare();
        if (game.isSpare(frameNumber-1)) {
          $(prevThirdBox).text(game.addScores(frameNumber - 1))
        }
      } else {
        displayRollScores3();
        $(secondBox).text(scores2)
        $(currentThirdBox).text(game.addScores(frameNumber))
        if (game.isStrike(frameNumber-1)) {
          game.total = 0;
          $(prevThirdBox).text(game.addScores(frameNumber-1))
        }
      }
      frameNumber++;
      finish();
    })
});
