scoresheet = new Scoresheet;

window.onload = function WindowLoad(event) {
  buttons(0);
}

function press(pinsKnocked) {
  if(scoresheet.frames.length === 0 || scoresheet.currFrameOver()) {
    frame = new Frame;
    scoresheet.addFrame(frame);
    update(pinsKnocked, 1);
  } else {
    update(pinsKnocked, 2);
  }
  gameOver();
}

function update(pinsKnocked, rollNo) {
  frame.logRollResult(pinsKnocked);
  var currFrame = (scoresheet.frames.length - 1);
  if(rollNo === 1) {
    selectRollDisplayContent1(pinsKnocked, currFrame);
  }
  else {
    selectRollDisplayContent2(pinsKnocked, currFrame);
  }
  updateFrameScoreDisplay(currFrame);
  updateGameScoreDisplay(currFrame);
  updateButtons(pinsKnocked);
}

function updateButtons(pinsKnocked) {
  if(scoresheet.currFrameOver() || scoresheet.frames.length === scoresheet.framesLimit) {
    buttons(0);
  } else {
    buttons(pinsKnocked);
  }
}

function buttons(pinsKnocked) {
  var buttonStr = '';
  for(var i = 0; i < (11-pinsKnocked); i++) {
    buttonStr += '<button type="button" onclick="press(' + i + ')">' + i + '</button>';
  }
  document.getElementById('buttons').innerHTML = buttonStr;
}

function strike(pinsKnocked) {
  return (pinsKnocked === frame.pins);
}

function spare(currFrame) {
  return (scoresheet.frames[currFrame].rolls[0] + scoresheet.frames[currFrame].rolls[1] === 10);
}

function selectRollDisplayContent1(pinsKnocked, currFrame) {
  if(strike(pinsKnocked) && scoresheet.frames.length < scoresheet.framesLimit) {
    updateRollDislay(3, currFrame, 'X');
  } else if (strike(pinsKnocked) && scoresheet.frames.length === scoresheet.framesLimit) {
    updateRollDislay(2, currFrame, 'X');
  } else {
    updateRollDislay(2, currFrame, pinsKnocked);
  }
}

function selectRollDisplayContent2(pinsKnocked, currFrame) {
  if(strike(pinsKnocked)) {
    displayContent = 'X';
  }
  else if(spare(currFrame) && scoresheet.frames[currFrame].rolls.length < 3) {
    displayContent = '/';
  }
  else {
    displayContent = pinsKnocked;
  }

  if(scoresheet.frames[currFrame].rolls.length < 3) {
    updateRollDislay(3, currFrame, displayContent);
  } else {
    updateRollDislay(4, currFrame, displayContent);
  }
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

function gameOver() {
  if(scoresheet.gameOver()) {
    document.getElementById('gameOver').innerHTML = 'GAME OVER!';
    buttons(11);
  }
}
