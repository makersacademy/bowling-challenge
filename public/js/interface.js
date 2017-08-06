$(document).ready(function(){
  var bowlingScorecard = new BowlingScorecard();
  var i = 0;
  var string = "";
  updateDisplay();

  function updateDisplay() {
    updateFrameDisplay();
    for(i = 1; i <= 10; i++) {
      updateFrameDisplay(i);
    }
    $('.current-score').text(bowlingScorecard.score());
 }

 function stringify(score) {
   return (score) ? (score + " - ") : "- ";
 }

 function updateFrameDisplay(number) {
   string = "Frame " + stringify(number);
   if (bowlingScorecard.getFrame(number)) {
     string += "Roll 1: " + stringify(bowlingScorecard.getFrame(number).score1);
     string += "Roll 2: " + stringify(bowlingScorecard.getFrame(number).score2);
     if (bowlingScorecard.isLastFrame() && bowlingScorecard.currentFrame().score() >= 10) {
       string += "Bonus Roll: " + stringify(bowlingScorecard.getFrame(number).score3);
     }
     if (bowlingScorecard.getFrame(number).isSpare()) {
       string += "Spare! -";
     }
     else if (bowlingScorecard.getFrame(number).isStrike()) {
       string += "Strike! -";
     }
     string += " Score: " + stringify(bowlingScorecard.getFrame(number).score());
   }
   $('.frame' + number).text(string);
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
   location.reload();
 });

});
