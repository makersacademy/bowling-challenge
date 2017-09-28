$(document).ready(function(){
  var bowlingScorecard = new BowlingScorecard();
  var display = new Display();
  updateDisplay();

 function updateDisplay() {
    $('.display').text(display.gameInstructions(bowlingScorecard.isGameComplete()));
    $('.current-score').text(display.scoreInfo(bowlingScorecard));
    $('.frames').html(display.framesToHTMLTable(bowlingScorecard._frames));
 }

 $(".score").on('click', function() {
   bowlingScorecard.addScore(parseInt(this.innerHTML));
   for (var i = 0; i<= 10; i++) {
      if (i > bowlingScorecard.pinsAvailableToHit()) {
        $(".score" + i).prop("disabled", true).css('opacity',0.5);
      }
      else $(".score" + i).prop("disabled", false).css('opacity',1.0);
   }
   updateDisplay();
 });

 $(".reset").on('click', function() {
   location.reload();
 });

});
