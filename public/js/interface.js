$(document).ready(function(){
  var bowlingScorecard = new BowlingScorecard();
  var i = 0;
  var string = "";
  $('.display').text('Click on the number of pins you knocked down.');
  updateDisplay();

  function updateDisplay() {
    if (bowlingScorecard.isGameComplete()) {
      $('.display').text('Game over! Click on reset to play again.');
    }
    updateFramesDisplay();
    updateScore();
 }

 function updateScore() {
   string = "Frame " + bowlingScorecard.frameNumber;
   if (bowlingScorecard.frameNumber === 10 && bowlingScorecard.frame().totalScore >= 10) {
     string += ", Bonus Roll";
   }
   else {
     string += ", Roll " + (bowlingScorecard.frame().isFirstBowl ? 1 : 2);
   }
   string += ", Total Score: " + bowlingScorecard.score();
   $('.current-score').text(string);
 }

 function updateFramesDisplay() {
   display = new Display();
   var table = display.framesToHTMLTable(bowlingScorecard._frames);
   $('.frames').html(table);
 }

 $(".score").on('click', function() {
   var score = parseInt(this.innerHTML) ? parseInt(this.innerHTML) : 0;
   bowlingScorecard.addScore(score);
   if (score > 0 && !bowlingScorecard.frame().isFirstBowl) {
      for (i = 11 - score; i<= 10; i++) {
        $(".score" + i).addClass("disabled invisible");
      }
   }
   else {
     for (i = 0; i<= 10; i++) {
       $(".score" + i).removeClass("disabled invisible");
     }
   }
   if (bowlingScorecard.isBonusRoll()) {
     for (i = 0; i<= 10; i++) {
       $(".score" + i).removeClass("disabled invisible");
     }
   }
   if (bowlingScorecard.isGameComplete()) {
     for (i = 0; i<= 10; i++) {
       $(".score" + i).hide();
     }
   }
   updateDisplay();
 });

 $(".reset").on('click', function() {
   location.reload();
 });

});
