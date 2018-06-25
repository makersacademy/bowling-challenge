$(document).ready(function(){
  var scoreboard = new Scoreboard();
  var currentRoll = 1;

  $(".scoreButton").click(function(){
    var buttonValue = $(this).val();
    var currentFrame = Math.round(currentRoll / 2);

    if (currentRoll % 2 === 0){
      scoreboard.recordSecondRoll(parseFloat(buttonValue));
    } else {
      scoreboard.recordFirstRoll(parseFloat(buttonValue));
    }

    if (scoreboard.firstRoll + scoreboard.secondRoll === 10 && currentRoll === 2){
      scoreboard.recordFrameResults();
      scoreboard.totalScore();
      scoreboard.recordFirstRoll(0);
      $("#roll-" + currentRoll).text("/");
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (scoreboard.firstRoll + scoreboard.secondRoll === 10 && currentRoll % 2 === 0){
      scoreboard.gameTotal = 0;
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.totalScore();
      scoreboard.recordFirstRoll(0);
      $("#roll-" + currentRoll).text("/");
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);
      scoreboard.secondRoll = 0;

    } else if (currentRoll === 2 ){
      scoreboard.recordFrameResults();
      scoreboard.totalScore();
      $("#roll-" + currentRoll).text(buttonValue);
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 4){
      scoreboard.gameTotal = 0;
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.totalScore();
      $("#roll-" + currentRoll).text(buttonValue);
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 20 && scoreboard.secondRoll === 10){
      scoreboard.gameTotal = 0;
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#roll-" + currentRoll).text("X");
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 20 && (scoreboard.firstRoll + scoreboard.secondRoll === 10)){
      scoreboard.gameTotal = 0;
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#roll-" + currentRoll).text("/");
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 20 && (scoreboard.firstRoll + scoreboard.secondRoll != 10)){
      scoreboard.gameTotal = 0;
      // scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#roll-" + currentRoll).text(buttonValue);
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 21 && scoreboard.firstRoll === 10){
      $("#roll-B").text("X");
      scoreboard.recordFrameResults();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll === 21 && scoreboard.firstRoll !== 10){
      $("#roll-B").text(buttonValue);
      scoreboard.recordFrameResults();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (currentRoll % 2 === 0){
      scoreboard.gameTotal = 0;
      scoreboard.recordFrameResults();
      scoreboard.sumPreviousFrame();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#roll-" + currentRoll).text(buttonValue);
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (scoreboard.firstRoll === 10 && currentRoll === 1 ){
      currentRoll++;
      $("#roll-" + currentRoll).text("X");
      scoreboard.recordSecondRoll(0);
      scoreboard.recordFrameResults();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (scoreboard.firstRoll === 10 && currentRoll === 3){
      currentRoll++;
      $("#roll-" + currentRoll).text("X");
      scoreboard.recordSecondRoll(0);
      scoreboard.recordFrameResults();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if(scoreboard.firstRoll === 10 && currentRoll === 19){
      $("#roll-" + currentRoll).text("X");
      scoreboard.recordFrameResults();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else if (scoreboard.firstRoll === 10){
      currentRoll++;
      $("#roll-" + currentRoll).text("X");
      scoreboard.recordSecondRoll(0);
      scoreboard.recordFrameResults();
      scoreboard.addSparePoints();
      scoreboard.addStrikePoints();
      scoreboard.addDoubleStrikePoints();
      scoreboard.totalScore();
      $("#framescore-" + currentFrame).text(scoreboard.gameTotal);

    } else {
      $("#roll-" + currentRoll).text(buttonValue);
    }
    currentRoll++;
  });

  $(".scoreButton").click(function(){
    var buttonValue = $(this).val();

    if (currentRoll == 20 && scoreboard.firstRoll != 10) //for when the first roll of the last frame isn't 10
      for(var i=0; i<buttonValue; i++){
      $("#" + (10-i)).hide();

    } else if (currentRoll === 20){ //for when you get a strike in the first roll of the last frame
        $(".scoreButton").show();

    } else if (currentRoll === 21 && scoreboard.secondRoll === 10){
        console.log("this is right!!")
        $(".scoreButton").show();

    // } else if (currentRoll === 21 && scoreboard.firstRoll != 10) {
    //   $(".scoreButton").hide();

    } else if (currentRoll === 21 && scoreboard.firstRoll === 10){ // X 9
      console.log("what now?")
      for(var i=0; i<buttonValue; i++){
        $("#" + (10-i)).hide();
      }

    } else if (currentRoll === 21 && (scoreboard.firstRoll + scoreboard.secondRoll === 10)){
      console.log("am i here?")
      $(".scoreButton").show();

    // } else if (currentRoll === 21 && (scoreboard.firstRoll + scoreboard.secondRoll < 10)){
    //   console.log(scoreboard.firstRoll, scoreboard.secondRoll)
    //   console.log("YES YES YES")
    //   $(".scoreButton").hide();

    } else if (currentRoll === 22){
      $(".scoreButton").hide();

    } else if (currentRoll % 2 === 0) {
      for(var i=0; i<buttonValue; i++){
        $("#" + (10-i)).hide();
      }

    } else {
      $(".scoreButton").show();
    }
  });
});
