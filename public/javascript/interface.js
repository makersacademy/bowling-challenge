$(document).ready(function(){
  var scoreboard = new Scoreboard();
  var currentRoll = 1;

  $(".scoreButton").click(function(){
    var buttonValue = $(this).val();
    var currentFrame = currentRoll / 2;

    if (currentRoll === 2 ){
      scoreboard.recordSecondRoll(parseFloat(buttonValue));
      scoreboard.recordFrameResults();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 4){
      scoreboard.gameTotal = 0;
      scoreboard.recordSecondRoll(parseFloat(buttonValue));
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll % 2 === 0){
      scoreboard.gameTotal = 0;
      scoreboard.recordSecondRoll(parseFloat(buttonValue));
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else {
      scoreboard.recordFirstRoll(parseFloat(buttonValue));
    }
  });

  $(".scoreButton").click(function(){
    var buttonValue = $(this).val();
    var currentFrame = currentRoll / 2;

    if (buttonValue === "10"){
      currentRoll++;
      $("#roll-" + currentRoll).text("X");
      scoreboard.recordSecondRoll(0);
      scoreboard.recordFrameResults();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);
      currentRoll++;
    } else if (scoreboard.firstRoll + scoreboard.secondRoll === 10){
      $("#roll-" + currentRoll).text("/");
      currentRoll++;
      scoreboard.secondRoll = 0;
    } else {
        $("#roll-" + currentRoll).text(buttonValue);
      currentRoll++;
    }
    console.log(scoreboard.resultsArray);
  });






  $(".scoreButton").click(function(){
    var buttonValue = $(this).val();

    if (currentRoll % 2 === 0) {
      for(var i=0; i<buttonValue; i++){
        $("#" + (10-i)).hide();
      }
    } else {
      $(".scoreButton").show();
    }
  });
});
