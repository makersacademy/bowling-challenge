var game = new Game();
function gameSetting() {
  $('#fallenPins').show();
  $('#leftPins').addClass('invisible')
}
function isPrevStrike(nth) {
  if (game.frames[nth-2] != undefined) {
    game.isStrike(nth-1);
  }
}
$(function() {

  for (var i=1; i<11; i++) {
    $('#fallenPins').append('<div id="pins' + i + '">' + i + '</div>')
  }
  for (var i=1; i<11; i++) {
    $('#leftPins').append('<div id="leftPins' + i + '">' + i + '</div>')
  }

  for (var i=1; i<12; i++) {
    $('#firstRow').append('<div>' + i + '</div>')
    $('#secondRow').append('<div class="scores" id="frame' + i +
      '"><div class="first"></div><div class="second"></div><div class="third"></div></div>')
  }

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
    });
});
