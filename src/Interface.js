'use-strict';

$(document).ready(function() {

  var myGame = new Game();
  $( "#score" ).text(myGame.showScore());

  var updateScore = function() {
    $( "#score" ).text(myGame.showScore());
  };

  var getCurrentRound = function () {
    return myGame._rounds[myGame._rounds.length-1]
  }

  var resetGame = function () {
    myGame = new Game();
    $('#gameTableBody').empty();
    updateScore();
  };

  var updateTableFirstRoll = function() {
    $('#gameTableBody').append(
      $('<tr>'),
        $('<td>').text(myGame.showRounds().length),
        $('<td>').text(getCurrentRound().showNumRolls()),
        $('<td>').text(getCurrentRound().firstRollPinsHit()),
        $('<td>').text("")
  )};

  var updateTableSecondRoll = function() {
    $('#gameTableBody').append(
      $('<tr>'),
        $('<td>').text(""),
        $('<td>').text(getCurrentRound().showNumRolls()),
        $('<td>').text(getCurrentRound().secondRollPinsHit()),
        $('<td>').text(myGame.showScore())
  )};

  $( "#rollBtn" ).click(function() {
    console.log(myGame);
    (myGame._rounds.length === 11) ? resetGame() : myGame.play();
    var isFirstRoll = getCurrentRound().showNumRolls() === 1;
    isFirstRoll ? updateTableFirstRoll() : updateTableSecondRoll();
    updateScore();
  });

  $( "#resetBtn" ).click(function() {
    resetGame();
  });

});
