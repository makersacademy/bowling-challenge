$( document ).ready(function() {

scoring = new Scoring();
var turn = 1

$('#Turn').click(function() {
  var score1 = '&nbsp;'
  var score2 = ''
  scoring.turn(10,0);
  if (scoring.bowl.isStrike) {
    score2 = "X";
  }
  else if (scoring.bowl.isSpare) {
    score1 = scoring.bowl.roll1;
    score2 = "/";
  }
  else {
    score1 = scoring.bowl.roll1;
    score2 = scoring.bowl.roll2;
  }
  $('.' + turn + '>.shot').html(score1)
  $('.' + turn + '>.shot2').html(score2)
  turn ++
});

scoring.scoreArray

})
