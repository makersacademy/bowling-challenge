$(document).ready(function() {

  var result = 0;
  var pinsDown = Math.floor((Math.random() * 10) + 1);
  var game = new Game();

  $('#points').text(result);

  $('#score-tally').text(result);

  $('#game-start').click(function() {
    firstTurn = game.roll(pinsDown);
    $('#points').text(firstTurn);
    $('#score-tally').text(game.score(firstTurn));
  });

  $('take-turn').click(function() {
    turn = game.roll(pinsDown);
    game.score(turn);
    $('#points').text(result);
  });


});

function hideStartButton(button) {
    //set input text value to be the current label text
    var currentLabelText = button.find("Game start").text();
    button.find("input[type=text]").val(currentLabelText);

    // hide things
    button.find("Game start").hide();

    //show things
    button.find("Take turn").show();
}
