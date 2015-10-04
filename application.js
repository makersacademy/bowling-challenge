$(function() {
  for (var i=1; i < 11; i++) {
    $('#fallenPins').append('<div>' + i + '</div>')
  }
  $('tr:first-child').children().addClass('firstRow')
  $('tr:last-child').children().addClass('secondRow')
  $('tr:last-child').children().append('<div id="first"></div><div id="second"></div><div id="third"></div>')
  $('.secondRow:last-child #second').append('<div id="tenth2"></div><div id="tenth3"></div>')
})
