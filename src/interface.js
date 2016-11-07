$(document).ready(function() {
    var game = new Game();
    updateGameScore();

    function updateFrameScore() {

      switch(game.frameNumber) {

        case 1:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameOneRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameOneRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameOneScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 2:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameTwoRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameTwoRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameTwoScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 3:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameThreeRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameThreeRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameThreeScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 4:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameFourRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameFourRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameFourScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 5:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameFiveRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameFiveRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameFiveScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 6:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameSixRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameSixRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameSixScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 7:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameSevenRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameSevenRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameSevenScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 8:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameEightRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameEightRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameEightScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 9:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameNineRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameNineRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameNineScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;

        case 10:
          if(game.currentFrame.rollsCompleted === 1) {
            $('#frameTenRollOneScore').text(game.currentFrame.rollOneScore);
          }
          else {
            $('#frameTenRollTwoScore').text(game.completedFrames.slice(-1)[0].rollTwoScore);
            $('#frameTenScore').text(game.completedFrames.slice(-1)[0].score);
          }
          break;
      }
    }

    function updateGameScore() {
      $('#gameScore').text(game.score);
    }

    $('#0').click(function() {
      game.bowl(0);
      updateFrameScore();
      updateGameScore();
    })

    $('#1').click(function() {
      game.bowl(1);
      updateFrameScore();
      updateGameScore();
    })

    $('#2').click(function() {
      game.bowl(2);
      updateFrameScore();
      updateGameScore();
    })

    $('#3').click(function() {
      game.bowl(3);
      updateFrameScore();
      updateGameScore();
    })

    $('#4').click(function() {
      game.bowl(4);
      updateFrameScore();
      updateGameScore();
    })

    $('#5').click(function() {
      game.bowl(5);
      updateFrameScore();
      updateGameScore();
    })

    $('#6').click(function() {
      game.bowl(6);
      updateFrameScore();
      updateGameScore();
    })

    $('#7').click(function() {
      game.bowl(7);
      updateFrameScore();
      updateGameScore();
    })

    $('#8').click(function() {
      game.bowl(8);
      updateFrameScore();
      updateGameScore();
    })

    $('#9').click(function() {
      game.bowl(9);
      updateFrameScore();
      updateGameScore();
    })

    $('#10').click(function() {
      game.bowl(10);
      updateFrameScore();
      updateGameScore();
    })
})
