scoresheet = new Scoresheet;

$(document).ready(function() {
  $('#title').hide();
  $('#buttons').hide();
  $('#scoresheet').hide();
  buttons(0);
  $('#title').hide().fadeIn(500, function() {
    $('#buttons').fadeIn(500, function() {
      $('#scoresheet').hide().fadeIn(500);
    });
  });
});

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
    buttonStr += '<button type="button" class="button" onclick="press(' + i + ')">' + i + '</button>';
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
    updateRollDislay(1, currFrame, 'X');
  } else if (strike(pinsKnocked) && scoresheet.frames.length === scoresheet.framesLimit) {
    updateRollDislay(0, currFrame, 'X');
  } else {
    updateRollDislay(0, currFrame, pinsKnocked);
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
    updateRollDislay(1, currFrame, displayContent);
  } else {
    updateRollDislay(2, currFrame, displayContent);
  }
}

function updateRollDislay(position, currFrame, displayContent) {
  console.log(currFrame);
  console.log(position);
  var rowRollDisplay = document.getElementsByTagName('tr')[1];
  rowRollDisplay.getElementsByTagName('td')[(currFrame*2)+position].innerHTML = displayContent;
}

function updateGameScoreDisplay(currFrame) {
  var accumulator = 0;
  for(var i = 0; i < (currFrame+1); i++) {
    var rowGameTotal = document.getElementsByTagName('tr')[2];
    accumulator += scoresheet.frameScoreDisplay(i)
    if(scoresheet.frameScoreDisplay(i) != null) {
      rowGameTotal.getElementsByTagName('td')[i].innerHTML = accumulator;
    }
  }
}

function gameOver() {
  if(scoresheet.gameOver()) {
    $('.button').prop('onclick',null).off('click');
    $('#gameOver').hide().addClass('game_over').html('<h1>GAME OVER!</h1>').fadeIn(1000);
    $('.button').fadeOut(1000);
  }
}