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
    if(n === frame.pins && scoresheet.frames.length < scoresheet.framesLimit) {
      updateRollDislay(3, currFrame, 'X');
    } else if (n === frame.pins && scoresheet.frames.length === scoresheet.framesLimit) {
      updateRollDislay(2, currFrame, 'X');
    } else {
      updateRollDislay(2, currFrame, n);
    }
    updateFrameScoreDisplay(currFrame);
    updateGameScoreDisplay(currFrame);
    updateButtons(n);
  } else {
    frame.logRollResult(n);
    var currFrame = (scoresheet.frames.length - 1);
    if(n === frame.pins) {displayContent = 'X';} else {displayContent = n;}
    if(scoresheet.frames[currFrame].rolls.length < 3) {
      updateRollDislay(3, currFrame, displayContent);
    } else {
      updateRollDislay(4, currFrame, displayContent);
    }
    updateFrameScoreDisplay(currFrame);
    updateGameScoreDisplay(currFrame);
    updateButtons(n);
  }

  if(scoresheet.gameOver()) {
    document.getElementById('gameOver').innerHTML = 'GAME OVER!';
    buttons(11);
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

function updateRollDislay(rowNo, currFrame, displayContent) {
  var rowRollDisplay = document.getElementsByTagName('tr')[rowNo];
  rowRollDisplay.getElementsByTagName('td')[currFrame+1].innerHTML = displayContent;
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