scoresheet = new Scoresheet;

window.onload = function WindowLoad(event) {
  buttons(0);
}

function press(n) {
  if(scoresheet.frames.length === 0 || scoresheet.currFrameOver()) {
    frame = new Frame;
    scoresheet.addFrame(frame);
    frame.logRollResult(n);
    var currFrame = (scoresheet.frames.length - 1);
    var rowRoll1 = document.getElementsByTagName('tr')[2];
    rowRoll1.getElementsByTagName('td')[currFrame+1].innerHTML = n;
    updateFrameScoreDisplay(currFrame);
    updateGameScoreDisplay(currFrame);
    updateButtons(n);
  } else {
    frame.logRollResult(n);
    var currFrame = (scoresheet.frames.length - 1);
    if(scoresheet.frames[currFrame].rolls.length < 3) {
      var rowRoll2 = document.getElementsByTagName('tr')[3];
      rowRoll2.getElementsByTagName('td')[currFrame+1].innerHTML = n;
    } else {
      var rowRoll3 = document.getElementsByTagName('tr')[4];
      rowRoll3.getElementsByTagName('td')[currFrame+1].innerHTML = n;
    }
    updateFrameScoreDisplay(currFrame);
    updateGameScoreDisplay(currFrame);
    updateButtons(n);
  }

  if(scoresheet.gameOver()) {
    document.getElementById('gameOver').innerHTML = 'GAME OVER!';
  }
}

function updateButtons(n) {
  if(scoresheet.currFrameOver() || scoresheet.frames.length === scoresheet.framesLimit) {
    buttons(0);
  } else {
    buttons(n);
  }
}

function buttons(n) {
  var buttonStr = '';
  for(var i = 0; i < (11-n); i++) {
    buttonStr += '<button type="button" onclick="press(' + i + ')">' + i + '</button>';
  }
  document.getElementById('buttons').innerHTML = buttonStr;
}

function updateFrameScoreDisplay(currFrame) {
  for(var i = 0; i < (currFrame+1); i++) {
    var rowFrameTotal = document.getElementsByTagName('tr')[5];
    rowFrameTotal.getElementsByTagName('td')[i+1].innerHTML = scoresheet.frameScoreDisplay(i);
  }
}

function updateGameScoreDisplay(currFrame) {
  var accumulator = 0;
  for(var i = 0; i < (currFrame+1); i++) {
    var rowGameTotal = document.getElementsByTagName('tr')[6];
    accumulator += scoresheet.frameScoreDisplay(i)
    if(scoresheet.frameScoreDisplay(i) != null) {
      rowGameTotal.getElementsByTagName('td')[i+1].innerHTML = accumulator;
    }
  }
}