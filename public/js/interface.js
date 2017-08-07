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
   string = "Frame " + bowlingScorecard.frameNumber();
   if (bowlingScorecard.isLastFrame() && bowlingScorecard.frame().score() >= 10) {
     string += ", Bonus Roll";
   }
   else {
     string += ", Roll " + (bowlingScorecard.frame().isFirstBowl() ? 1 : 2);
   }
   string += ", Total Score: " + bowlingScorecard.score();
   $('.current-score').text(string);
 }

 function updateFramesDisplay() {
   string = "";
   for(i = bowlingScorecard.frameNumber(); i > 0; i--) {
     string += "<li class='list-group-item'>| Frame " + i + " | ";
     var frame = bowlingScorecard.getFrame(i);
     if (frame) {
        string += "Roll 1: " + (frame.isStrike() ? "Strike!" : (frame.score1 ? frame.score1 : 0));
        if (bowlingScorecard.isLastFrame() && i === 10) {
          string += " | Roll 2: " + (frame.isSpare() ? "Spare!" : (frame.score2 ? (frame.score2 === 10 ? "Strike! " : frame.score2) : 0));
          string += " | Bonus Roll: " + (frame.bonus ? (frame.bonus === 10 ? "Strike! " : frame.bonus) : 0);
        }
        else string += " | Roll 2: " + (frame.isSpare() ? "Spare!" : (frame.score2 ? frame.score2 : 0));
        string += " | Score: " + frame.score() + " |";
     }
     string += "</li>";
   }
   $('.frames').html(string);
 }

 $(".score").on('click', function() {
   var score = this.innerHTML;
   bowlingScorecard.addScore(parseInt(score));
   if (bowlingScorecard.frame().isSecondBowl()) {
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
