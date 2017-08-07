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
    for(i = 1; i <= 10; i++) {
      updateFrameDisplay(i);
    }
    updateScore();
 }

 function updateScore() {
   string = "Frame " + bowlingScorecard.currentFrameNumber();
   if (bowlingScorecard.isLastFrame() && bowlingScorecard.currentFrame().score() >= 10) {
     string += ", Bonus Roll";
   }
   else {
     string += ", Roll " + (bowlingScorecard.currentFrame().isFirstBowl() ? 1 : 2);
   }
   string += ", Total Score: " + bowlingScorecard.score();
   $('.current-score').text(string);
 }

 function updateFrameDisplay(number) {
   string = "| Frame " + number + " | ";
   var frame = bowlingScorecard.getFrame(number);
   if (frame) {
      string += "Roll 1: " + (frame.isStrike() ? "Strike!" : (frame.score1 ? frame.score1 : 0));
      string += " | Roll 2: " + (frame.score2 ? (frame.score2 === 10 ? "Strike! " : ((frame.score2 + frame.score2 === 10) ? "Spare! " : frame.score2)) : 0);
      if (bowlingScorecard.isLastFrame() && number === 10) {
        string += " | Bonus Roll: " + (frame.score3 ? (frame.score3 === 10 ? "Strike! " : frame.score3) : 0);
      }
      else string += " | Roll 2: " + (frame.isSpare() ? "Spare!" : (frame.score2 ? frame.score2 : 0));
      string += " | Score: " + frame.score() + " |";
   }
   $('.frame' + number).text(string);
 }

 $(".score").on('click', function() {
   var score = this.innerHTML;
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
