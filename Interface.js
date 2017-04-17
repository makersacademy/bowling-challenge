'use script';

$(document).ready(function() {
  var bowling = new Bowling();
  var rollIndex = 1;
  var frameIndex = 0;
  var scoreFrames = [];

  function updateVisuals() {
    updateScoreBoard();
  }

  function updateScoreBoard() {
    if (frameIndex > 8){
      tenthframe();
    } else {
      if (lastRoll() === 10 && (rollIndex % 2 !== 0)){
        strike();
      } else if (rollIndex % 2 === 0 && isASpare()){
        spare();
      } else if (rollIndex % 2 === 0){
        normalFrame();
      } else {
        normalScore();
      }
    }
    for (var i = 0; i < frameIndex; i++){
      $('#scoreIndex-' + i).text(scoreFrames[i]);
    }
  }

  function tenthframe() {
    if (rollIndex===19){
      roll19 = lastRoll();
      if (roll19 === 10){
        $('#rollIndex-19').text('X');
      } else {
        $('#rollIndex-19').text(roll19);
      }
      rollIndex += 1;
    } else if (rollIndex===20){
      roll20 = lastRoll();
      if (roll19 === 10) {
        $('#rollIndex-20').text(roll20);
      } else if (roll19 + roll20 === 10){
        $('#rollIndex-20').text('/');
      } else {
        $('#rollIndex-20').text(roll20);
        $('#rollIndex-21').text('-');
        scoreFrames[frameIndex]=(bowling.getCurrentScore());
        frameIndex += 1;
      }
      rollIndex += 1;
    } else if (rollIndex===21){
      roll21 = lastRoll();
      if (roll19 === 10 || (roll19 + roll20 === 10)){
        $('#rollIndex-21').text(roll21);
        scoreFrames[frameIndex]=(bowling.getCurrentScore());
        frameIndex += 1;
      } else {
        $('#rollIndex-21').text('-');
      }
    }
  }

  function strike() {
    $('#rollIndex-' + rollIndex).text(' ');
    $('#rollIndex-' + (rollIndex+1)).text('X');
    scoreFrames[frameIndex]=(bowling.getCurrentScore());
    rollIndex += 2;
    frameIndex += 1;
  }

  function spare() {
    $('#rollIndex-' + rollIndex).text('/')
    scoreFrames[frameIndex]=(bowling.getCurrentScore());
    rollIndex += 1;
    frameIndex += 1;
  }

  function normalFrame() {
    $('#rollIndex-' + rollIndex).text(lastRoll());
    scoreFrames[frameIndex]=(bowling.getCurrentScore());
    rollIndex += 1;
    frameIndex += 1;
  }

  function normalScore() {
    $('#rollIndex-' + rollIndex).text(lastRoll());
    rollIndex += 1;
  }

  function lastRoll() {
    return bowling.rollHistory[bowling.rollHistory.length-1];
  }

  function nextLastRoll() {
    return bowling.rollHistory[bowling.rollHistory.length-2];
  }

  function isASpare(){
    if ((lastRoll() + nextLastRoll()) === 10){
      return true;
    } else {
      return false;
    }
  }

  $('#roll-0').click(function(){
    bowling.roll(0);
    updateVisuals();
  });

  $('#roll-1').click(function(){
    bowling.roll(1);
    updateVisuals();
  });

  $('#roll-2').click(function(){
    bowling.roll(2);
    updateVisuals();
  });

  $('#roll-3').click(function(){
    bowling.roll(3);
    updateVisuals();
  });

  $('#roll-4').click(function(){
    bowling.roll(4);
    updateVisuals();
  });

  $('#roll-5').click(function(){
    bowling.roll(5);
    updateVisuals();
  });

  $('#roll-6').click(function(){
    bowling.roll(6);
    updateVisuals();
  });

  $('#roll-7').click(function(){
    bowling.roll(7);
    updateVisuals();
  });

  $('#roll-8').click(function(){
    bowling.roll(8);
    updateVisuals();
  });

  $('#roll-9').click(function(){
    bowling.roll(9);
    updateVisuals();
  });

  $('#roll-10').click(function(){
    bowling.roll(10);
    updateVisuals();
  });
});
