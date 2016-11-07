$(document).ready(function() {
  var bowling = new Bowling();

$("#gameStatus").text(bowling.getGameStatus());
updateStuff();

$("#bowl").click(function() {
  if (bowling.numOfFrameThrows === 1) {
    bowling.firstThrow();
    bowling.scoreFrame();
    $("#pinsStatus1").text(bowling.message)
    updateStuff();


  }else if (bowling.numOfFrameThrows === 2) {
    bowling.secondThrow();
    bowling.scoreFrame();
    $("#pinsStatus2").text(bowling.message)
    updateStuff();
  }
});

function updateStuff() {
  $("#frameNum").text("Frame number:" + bowling.frameNum)
  $("#throwNum").text("Throw number:" + bowling.numOfFrameThrows)
  $("#currentGameScore").text("Score for this game so far:" + bowling.currentGameScore)
  updateFooter();
};

function updateFooter() {
  $("#frameOne").text("Frame one score: Throw one; " + bowling.scoreIndex[0] + " Throw Two; " + bowling.scoreIndex[1] + " Total; " + bowling.currentGameScore)
  $("#frameTwo").text("Frame two score: Throw one; " + bowling.scoreIndex[2] + " Throw Two; " + bowling.scoreIndex[3] + " Total; " + bowling.currentGameScore)
  $("#frameThree").text("Frame three score: Throw one; " + bowling.scoreIndex[4] + " Throw Two; " + bowling.scoreIndex[5] + " Total; " + bowling.currentGameScore)
  $("#frameFour").text("Frame four score: Throw one; " + bowling.scoreIndex[6] + " Throw Two; " + bowling.scoreIndex[7] + " Total; " + bowling.currentGameScore)
  $("#frameFive").text("Frame five score: Throw one; " + bowling.scoreIndex[8] + " Throw Two; " + bowling.scoreIndex[9] + " Total; " + bowling.currentGameScore)
  $("#frameSix").text("Frame six score: Throw one; " + bowling.scoreIndex[10] + " Throw Two; " + bowling.scoreIndex[11] + " Total; " + bowling.currentGameScore)
  $("#frameSeven").text("Frame seven score: Throw one; " + bowling.scoreIndex[12] + " Throw Two; " + bowling.scoreIndex[13] + " Total; " + bowling.currentGameScore)
  $("#frameEight").text("Frame eight score: Throw one; " + bowling.scoreIndex[14] + " Throw Two; " + bowling.scoreIndex[15] + " Total; " + bowling.currentGameScore)
  $("#frameNine").text("Frame nine score: Throw one; " + bowling.scoreIndex[16] + " Throw Two; " + bowling.scoreIndex[17] + " Total; " + bowling.currentGameScore)
  $("#frameTen").text("Frame ten score: Throw one; " + bowling.scoreIndex[18] + " Throw Two; " + bowling.scoreIndex[19] + " Total; " + bowling.currentGameScore)
 };

});

//<link rel="stylesheet" href="lib/jasmine-2.5.2/jasmine.css">
