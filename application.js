var game = new Game();
function gameSetting() {
  $('#fallenPins').show();
  $('#leftPins').addClass('invisible')
}
function bowling() {

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

  // $('tr:last-child').children().append('<div class="first"></div><div class="second"></div><div class="third"></div>')
  // $('.secondRow:nth-child(10) .second').append('<div id="tenth2"></div><div id="tenth3"></div>')
  gameSetting();
  var frameNumber = frameNumber || 1;
    console.log(frameNumber);
    $('#fallenPins div').on('click', function(e) {
      var scores1 = parseInt(e.target.textContent);
      // console.log(parseInt(e.target.textContent));
      game.setScores(frameNumber, 1, scores1);
      console.log('first' + game.frames);
      $('#fallenPins').hide();
      $('#leftPins div').show();
      $('#leftPins div').removeClass('invisible');
      $('#leftPins div').addClass('visible');
    });

    $('#leftPins div').on('click', function(e) {
      var scores2 = parseInt(e.target.textContent);
      // console.log(parseInt(e.target.textContent));
      $('#fallenPins').show();
      $('#leftPins div').hide();
      game.setScores(frameNumber, 2, scores2);
      console.log('second' + game.frames);
      frameNumber++
    });










});
