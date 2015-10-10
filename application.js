var game = new Game();
function gameSetting() {
  $('#fallenPins').show();
  $('#leftPins').addClass('invisible')
}
function bowling() {

}

$(function() {
  var scores1, scores2;
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

  // $('tr:last-child').children().append('<div class="first"></div><div class="second"></div><div class="third"></div>')
  // $('.secondRow:nth-child(10) .second').append('<div id="tenth2"></div><div id="tenth3"></div>')
  gameSetting();
  var frameNumber = frameNumber || 1;
    console.log(frameNumber);
    $('#fallenPins div').on('click', function(e) {
      var scores1 = parseInt(e.target.textContent);
      // console.log(parseInt(e.target.textContent));
      game.setScores(frameNumber, 1, scores1);
      console.log(game.frames);

      if (scores1 === 10) {
        $('#fallenPins').show();
        $('#leftPins div').hide();

        $('#frame' + frameNumber.toString() + ' .second').text('X');
        frameNumber++
      } else {
        $('#fallenPins').hide();
        $('#leftPins div').show();
        $('#leftPins div').removeClass('invisible');
        $('#leftPins div').addClass('visible');
        $('#frame' + frameNumber.toString() + ' .first').text(scores1);
      }
    });

    $('#leftPins div').on('click', function(e) {
      var scores2 = parseInt(e.target.textContent);
      // console.log(parseInt(e.target.textContent));
      $('#fallenPins').show();
      $('#leftPins div').hide();
      game.setScores(frameNumber, 2, scores2);
      console.log(game.frames);
      var frameSelector = '#frame' + frameNumber.toString() + ' .second'
      var num = $('#frame' + frameNumber.toString() + ' .first').text();


      if (parseInt($('#frame' + frameNumber.toString() + ' .first').text()) + scores2 === 10) {
        $(frameSelector).text('/')
      } else {
        $(frameSelector).text(scores2)
      }

      $('#frame' + frameNumber.toString() + ' .third').text(game.countFrameScores(frameNumber))
      frameNumber++;
      game.total = 0;
      $('#frame11 .third').text(game.addScores(frameNumber));
    });










});
