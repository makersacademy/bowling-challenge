$(document).ready(function() {
  var bowling = new Bowling();

  $('.total').text(bowling.total);

  $('.spare-bonus').text(bowling.spareBonus);

  $('.strike-bonus').text(bowling.totalStrikeBonus);

  $('#enter').click(function (){
    bowling.firstRoll(document.getElementById('userInput'));
  });

});




//think about making multiple $ for each thing and giving things
//different ids so they wont change eachtime
// think about instantiating bowling each roll so dont have to reset numbers
