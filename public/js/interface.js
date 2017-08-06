$(document).ready(function(){
  var bowlingScorecard = new BowlingScorecard();
  var i = 0;
  updateDisplay();

  function updateDisplay() {
    updateFrameDisplay();
    for(i = 1; i <= 10; i++) {
      updateFrameDisplay(i);
    }
    $('.current-score').text(bowlingScorecard.score());
 }

 function updateFrameDisplay(number) {
   $('.frame' + number).text("Frame" + number + ": " + bowlingScorecard.getFrameScore(number));

 }

 $(".score").on('click', function() {
   if (bowlingScorecard.isGameComplete()) {
     alert("Game is complete, click on Reset to play again");
     return;
   }
   var score = this.innerHTML;
   $('.display').text("You knocked down " + score + " pins this bowl.");
   bowlingScorecard.addScore(parseInt(score));
   if (score < 10 && bowlingScorecard.currentFrame().isFirstBowl() === false && bowlingScorecard.currentFrame().isComplete() === false) {
      for (i = 11 - score; i<= 10; i++) {
        $(".score" + i).addClass("disabled invisible");
      }
   }
   else {
     for (i = 0; i<= 10; i++) {
       $(".score" + i).removeClass("disabled invisible");
     }
   }
   if (bowlingScorecard.isGameComplete()) {
     for (i = 0; i<= 10; i++) {
       $(".score" + i).addClass("disabled invisible");
     }
   }
   updateDisplay();
 });

 $(".reset").on('click', function() {
   bowlingScorecard.reset();
   updateDisplay();
 });

});
