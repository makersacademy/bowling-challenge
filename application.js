var game = new Game();
function gameSetting() {
  $('#fallenPins').show();
  $('#leftPins').addClass('invisible')
}

function getScores(nth, rolls) {
  return game.frames[nth-1][rolls-1];
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

      // console.log(parseInt(e.target.textContent));

      console.log(game.frames);

      if (game.isStrike(frameNumber)) {
        $('#fallenPins').show();
        $('#leftPins div').hide();
        $('#frame' + frameNumber.toString() + ' .second').text('X');
        console.log(frameNumber + 'strike')
        if (game.frames[frameNumber-2] != undefined && game.frames[frameNumber-2][0] === 10) {
            console.log(frameNumber + 'what?')
            $('#frame' + (frameNumber -2).toString() + ' .third').text(game.addScores(frameNumber - 2))
        } else if (game.frames[frameNumber-2] != undefined && game.frames[frameNumber-2][0] + game.frames[frameNumber-2][1] === 10) {
          $('#frame' + (frameNumber -1).toString() + ' .third').text(game.addScores(frameNumber - 1))
        }  else {
          console.log('hello world')
        }
        frameNumber++
      } else {
        $('#fallenPins').hide();
        $('#leftPins div').show();
        $('#leftPins div').removeClass('invisible');
        $('#leftPins div').addClass('visible');
        $('#frame' + frameNumber.toString() + ' .first').text(scores1);

        if (game.frames[frameNumber-2] != undefined) {
          if (game.frames[frameNumber-2][0] === 10) {
            console.log(frameNumber + 'strike')
            $('#frame' + (frameNumber -2).toString() + ' .third').text(game.addScores(frameNumber - 2))
          } else if (game.frames[frameNumber-2][0] + game.frames[frameNumber-2][1] === 10) {

            $('#frame' + (frameNumber -1).toString() + ' .third').text(game.addScores(frameNumber - 1))
          }
        }
      }
    });

    $('#leftPins div').on('click', function(e) {
      var scores2 = parseInt(e.target.textContent);
      // console.log(parseInt(e.target.textContent));
      $('#fallenPins').show();
      $('#leftPins div').hide();
      game.setScores(frameNumber, 2, scores2);
      console.log(game.frames);
      game.total = 0;
      var frameSelector = '#frame' + frameNumber.toString() + ' .second'
      var num = $('#frame' + frameNumber.toString() + ' .first').text();


      // if (parseInt($('#frame' + frameNumber.toString() + ' .first').text()) + scores2 === 10) {

      if (game.isSpare(frameNumber)) {
        $(frameSelector).text('/')
        if (game.frames[frameNumber-2] != undefined && game.frames[frameNumber-2][0] + game.frames[frameNumber-2][1] === 10) {
            console.log('hi')
          $('#frame' + (frameNumber -1).toString() + ' .third').text(game.addScores(frameNumber - 1))
        }
      } else {
        console.log(frameNumber);
        $(frameSelector).text(scores2)
        $('#frame' + frameNumber.toString() + ' .third').text(game.addScores(frameNumber))
        if (game.frames[frameNumber-2] != undefined) {
          if (game.frames[frameNumber-2][0] === 10) {
          game.total = 0;
          $('#frame' + (frameNumber-1).toString() + ' .third').text(game.addScores(frameNumber-1))
        }

        } else {

        }


      }


      frameNumber++;


    });



    // game.total = 0;
    // $('#frame11 .third').text(game.addScores(12))
    //





});
