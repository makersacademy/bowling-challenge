var game = new Game();
function gameSetting() {
  $('#fallenPins').show();
  $('#leftPins').addClass('invisible')
}
function endGame() {
  $('#fallenPins').hide();
  $('#leftPins').hide();
}
$(function() {
  function finish() {
    var tenthFrame = game.frames[9]
    var eleventhFrame = game.frames[10]
    if (frameNumber > 10) {
      if (tenthFrame[0] + tenthFrame[1] < 10) {
        console.log('less than 10')
        endGame();
      } else if (game.frames[9][0] === 10) {
        console.log('strike')
        if (eleventhFrame[0] === 10) {
          $('#fallenPins div').click(function() {
            endGame();
          })
        } else {
          $('#leftPins div').click(function() {
            endGame();
          })
        }


      } else {
        if (frameNumber > 10) {
          console.log('spare')
          $('#fallenPins div').click(function() {
            endGame();
          })
        }
      }
    }
  }

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
  $('#frame10 .second').html('<div id="tenth1"></div><div id="tenth2"></div>')
  gameSetting();
  var frameNumber = frameNumber || 1;
    $('#fallenPins div').on('click', function(e) {
      var scores1 = parseInt(e.target.textContent);
      game.setScores(frameNumber, 1, scores1);
      game.total = 0;
      var firstBox = '#frame' + frameNumber.toString() + ' .first'
      var secondBox = '#frame' + frameNumber.toString() + ' .second'
      var prevThirdBox = '#frame' + (frameNumber -1).toString() + ' .third'
      var prevThirdBox2 = '#frame' + (frameNumber -2).toString() + ' .third'

      if (game.isStrike(frameNumber)) {
        $('#fallenPins').show();
        $('#leftPins div').hide();
        $(secondBox).text('X');

        if (game.isStrike(frameNumber-1)) {
          $(prevThirdBox2).text(game.addScores(frameNumber - 2))
        } else if (game.isSpare(frameNumber -1)) {
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
          $(prevThirdBox2).text(game.addScores(frameNumber - 2))
        } else if (game.isSpare(frameNumber-1)) {
          $(prevThirdBox).text(game.addScores(frameNumber - 1))
        }
      }
      finish();
    });

    $('#leftPins div').on('click', function(e) {
      var scores2 = parseInt(e.target.textContent);
      $('#fallenPins').show();
      $('#leftPins div').hide();
      game.setScores(frameNumber, 2, scores2);
      game.total = 0;
      var secondBox = '#frame' + frameNumber.toString() + ' .second'
      var currentThirdBox = '#frame' + frameNumber.toString() + ' .third'
      var prevThirdBox = '#frame' + (frameNumber -1).toString() + ' .third'

      if (game.isSpare(frameNumber)) {
        $(secondBox).text('/')
        if (game.isSpare(frameNumber-1)) {
          $(prevThirdBox).text(game.addScores(frameNumber - 1))
        }
      } else {
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
