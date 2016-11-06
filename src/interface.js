$(document).ready(function() {

  var result = 0;
  var game = new Game();
  var gameTracker = [];
  var count = 20;

  $('#points').text(result);
  $('#strike').hide();
  $('.score').hide();

  // take turn
  $('#take-turn').click(function() {
    newTurn();
    $('#turn-tally').text(count);
  });

  function newTurn() {
    $('#strike').hide();
    if (count === 0) {
      $('#take-turn').hide();
      $('#turn-tally').hide();
      $('.score').show();
      finalResult = game.score();
      $('#final-result').text(finalResult);
    }
    var pinsDown = Math.floor((Math.random() * 10) + 1);
    turn = game.roll(pinsDown);
    gameTracker.push(turn);
    count -= 1;
    if (turn === 10) {
      $('#strike').show();
      count -= 1;
    }
    $('#points').text(turn);
    $('#score-card').text(gameTracker);
  }



  function hideStartButton(button) {
      //set input text value to be the current label text
      var currentLabelText = button.find("Game start").text();
      button.find("input[type=text]").val(currentLabelText);

      // hide things
      button.find("Game start").hide();

      //show things
      button.find("Take turn").show();
  }

});
