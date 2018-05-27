$( document ).ready(function() {

scoring = new Scoring();
var turn = 1

$('#Turn').click(function() {
  var score1 = '&nbsp;'
  var score2 = ''
  var roll1 = $('.rollOne').val();
  var roll2 = $('.rollTwo').val();
  scoring.turn(Number(roll1),Number(roll2));
  if (scoring.bowl.isStrike() == true) {
    score2 = "X";
    _sparePrinter();
    _StikePrinter()
  }
  else if (scoring.bowl.isSpare() == true) {
    score1 = scoring.bowl.roll1;
    score2 = "/";
    _sparePrinter();
    _StikePrinter()
  }
  else {
    score1 = scoring.bowl.roll1;
    score2 = scoring.bowl.roll2;
    $('.' + turn + '>.score').html(scoring.scoreArray[turn - 1])
    _sparePrinter();
    _StikePrinter()
  }
  $('.' + turn + '>.shot').html(score1)
  $('.' + turn + '>.shot2').html(score2)
  turn ++

  $('.10>.totalscore').html(scoring.scoreArray.reduce(function(a, b) { return a + b; }, 0));
  scoring.reset();
});

function _sparePrinter() {
  if (scoring.rollArray.length == 1) {}
  else if (scoring.rollArray[turn-2].isSpare() == true) {
    $('.' + (turn - 1) + '>.score').html(scoring.scoreArray[turn - 2])
  }
}


function _StikePrinter() {
  if (scoring.rollArray.length == 1) {}
  else if (scoring.rollArray[turn-2].isStrike() == true && scoring.rollArray[turn - 1].isStrike() == false) {
    $('.' + (turn - 1) + '>.score').html(scoring.scoreArray[turn - 2])
  }
  else if (scoring.rollArray[turn-2].isStrike() == true || scoring.strikeCount == 0) {
    $('.' + (turn - 2) + '>.score').html(scoring.scoreArray[turn - 3])
    $('.' + (turn - 1) + '>.score').html(scoring.scoreArray[turn - 2])}
  else if (scoring.rollArray[turn-3].isStrike() == true) {
    $('.' + (turn - 2) + '>.score').html(scoring.scoreArray[turn - 3])
  }

}


})
