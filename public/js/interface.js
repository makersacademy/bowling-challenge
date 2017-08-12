$(document).ready(function(){
  var bowlingScorecard = new BowlingScorecard();
  var display = new Display();
  updateDisplay();

  function updateDisplay() {
    $('.display').text(display.gameInstructions(bowlingScorecard));
    $('.current-score').text(display.scoreInfo(bowlingScorecard));
    $('.frames').html(display.framesToHTMLTable(bowlingScorecard._frames));
 }

 $(".score").on('click', function() {
   var i = 0;
   var score = parseInt(this.innerHTML) ? parseInt(this.innerHTML) : 0;
   console.log(score);
   bowlingScorecard.addScore(score);
   if (bowlingScorecard.isFirstBowl()) for (i = 0; i<= 10; i++) $(".score" + i).show();
   else for (i = 11 - score; i<= 10; i++) $(".score" + i).hide();
   if (bowlingScorecard.isBonusRoll()) for (i = 0; i<= 10; i++) $(".score" + i).show();
   if (bowlingScorecard.isGameComplete()) for (i = 0; i<= 10; i++) $(".score" + i).hide();
   updateDisplay();
 });

 $(".reset").on('click', function() {
   location.reload();
 });

});
