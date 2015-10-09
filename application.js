var game = new Game();
var bowling = new Bowling();
$(function() {
  for (var i=1; i < 11; i++) {
    $('#fallenPins').append('<div id="pins' + i + '">' + i + '</div>')
  }
  $('tr:first-child').children().addClass('firstRow')
  $('tr:last-child').children().addClass('secondRow')
  $('tr:last-child').children().append('<div id="first"></div><div id="second"></div><div id="third"></div>')
  $('.secondRow:last-child #second').append('<div id="tenth2"></div><div id="tenth3"></div>')

  $('#fallenPins div').on('click', function(e) {
    parseInt(e.target.textContent);
    console.log(parseInt(e.target.textContent));
  });

// game.frames[nth-1][roll] = bowling.roll(fallenPins)




});
