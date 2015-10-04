var game = new Game();
$(function() {
  for (var i=1; i < 11; i++) {
    $('#fallenPins').append('<div id="pins' + i + '">' + i + '</div>')
  }
  $('tr:first-child').children().addClass('firstRow')
  $('tr:last-child').children().addClass('secondRow')
  $('tr:last-child').children().append('<div id="first"></div><div id="second"></div><div id="third"></div>')
  $('.secondRow:last-child #second').append('<div id="tenth2"></div><div id="tenth3"></div>')
  // $('#pins1').on('click', function() {
  //   $('.secondRow:nth-child(1) #first').text(1);
  // });

})
