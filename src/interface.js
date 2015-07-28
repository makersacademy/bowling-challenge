var scoreCard = new ScoreCard();
$( document ).ready(function() {

  var showRollScores = function() {
    $("#rolls").html(scoreCard.rollArray);
    $("#frameScores").html(scoreCard.frameScores);
    $("#totalScore").html(scoreCard.scoreTotal);

  };

  $("#0").click(function() {
   scoreCard.roll(0);
   showRollScores();
  });

  $("#1").click(function() {
   scoreCard.roll(1);
   showRollScores();
  });

  $("#2").click(function() {
   scoreCard.roll(2);
   showRollScores();
  });

  $("#3").click(function() {
   scoreCard.roll(3);
   showRollScores();
  });

  $("#4").click(function() {
   scoreCard.roll(4);
   showRollScores();
  });

  $("#5").click(function() {
   scoreCard.roll(5);
   showRollScores();
  });

  $("#6").click(function() {
   scoreCard.roll(6);
   showRollScores();
  });

  $("#7").click(function() {
   scoreCard.roll(7);
   showRollScores();
  });

  $("#8").click(function() {
   scoreCard.roll(8);
   showRollScores();
  });

  $("#9").click(function() {
   scoreCard.roll(9);
   showRollScores();
  });

  $("#10").click(function() {
   scoreCard.roll(10);
   showRollScores();
  });

});
