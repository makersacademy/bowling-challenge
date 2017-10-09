$(document).ready(function() {
    var scoreCard = new ScoreCard();
    currentBowl();


  $('#roll_gutter').click(function () {
        scoreCard.roll(0);
        currentBowl();
  });

  $('#roll_1').click(function () {
        scoreCard.roll(1);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_2').click(function () {
        scoreCard.roll(2);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_3').click(function () {
        scoreCard.roll(3);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_4').click(function () {
        scoreCard.roll(4);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_5').click(function () {
        scoreCard.roll(5);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_6').click(function () {
        scoreCard.roll(6);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_7').click(function () {
        scoreCard.roll(7);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_8').click(function () {
        scoreCard.roll(8);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_9').click(function () {
        scoreCard.roll(9);
        $('#currentBowl').text(scoreCard.currentRoll);
        currentBowl();
  });

  $('#roll_strike').click(function () {
        scoreCard.roll(10);
        $('#currentBowl').text('Strike');
        currentBowl();
  });

  function currentBowl() {
        $('#currentBowl').text(scoreCard.currentRoll);
        console.log((scoreCard.score()));
  }

});
