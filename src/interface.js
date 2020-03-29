$(document).ready(function() {

  var game = new Game;
  var currentScore = game.score;

  $('#bowl_1').click(function() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F1-R1').text(roll_1);
      $('#F1-R2').text('-');
      updateScore(10, 0);
      $('#F1-Score').text(currentScore);
    } else {
      $('#F1-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F1-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F1-Score').text(currentScore);
    };
  })

  $('#bowl_2').click(function() {
    var roll_1 = game.randomRoll_1();
    if(roll_1 === 10) {
      $('#F2-R1').text(roll_1);
      $('#F2-R2').text('-');
      updateScore(10, 0);
      $('#F2-Score').text(currentScore);
    } else if(roll_1 < 10) {
      $('#F2-R1').text(roll_1);
      var roll_2 = game.randomRoll_2();
      $('#F2-R2').text(roll_2);
      updateScore(roll_1, roll_2);
      $('#F2-Score').text(currentScore);
    }
  })

  function updateScore(roll_1, roll_2) {
    currentScore += (roll_1 + roll_2);
    return currentScore;
  }

})
