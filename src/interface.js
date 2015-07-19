var b = new Bowling();
$( document ).ready(function() {

  var showRollScores = function() {
    $("#rolls").html(b.rollArray);
  };

  $("#0").click(function() {
   b.roll(0);
   showRollScores();
  });

  $("#1").click(function() {
   b.roll(1);
   showRollScores();
  });

  $("#2").click(function() {
   b.roll(2);
   showRollScores();
  });

  $("#3").click(function() {
   b.roll(3);
   showRollScores();
  });

  $("#4").click(function() {
   b.roll(4);
   showRollScores();
  });

  $("#5").click(function() {
   b.roll(5);
   showRollScores();
  });

  $("#6").click(function() {
   b.roll(6);
   showRollScores();
  });

  $("#7").click(function() {
   b.roll(7);
   showRollScores();
  });

  $("#8").click(function() {
   b.roll(8);
   showRollScores();
  });

  $("#9").click(function() {
   b.roll(9);
   showRollScores();
  });

  $("#10").click(function() {
   b.roll(10);
   showRollScores();
  });

});
