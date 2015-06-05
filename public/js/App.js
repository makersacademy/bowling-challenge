$(document).ready(function() {
  scoresheet = new Scoresheet;
  $('#title').hide();
  $('#buttons').hide();
  $('#scoresheet').hide();
  buttons(0);
  $('#title').fadeIn(500, function() {
    $('#buttons').fadeIn(500, function() {
      $('#scoresheet').fadeIn(500);
    });
  });
});

function playAgain() {
  $('#gameOver').fadeOut(1000, function() {
    $('#scoresheet').fadeOut(1000, function() {
      scoresheet = new Scoresheet;
      $("#scoresheetTable td").html('');
      $('#buttons').hide( function() {
          buttons(0);
        $('#buttons').fadeIn(500, function () {
          $('#scoresheet').fadeIn(500);
        });
      });
    });
  });
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
  updateGameScoreDisplay(currFrame);
  updateButtons(pinsKnocked);
}

function updateButtons(pinsKnocked) {
  if(scoresheet.currFrameOver() || (scoresheet.frames.length === scoresheet.framesLimit && !(scoresheet.frames[scoresheet.framesLimit-1].rolls.length === 1 && scoresheet.frames[scoresheet.framesLimit-1].rolls[0] < 10))) {
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
  $('#buttons').html(buttonStr);
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
  $('#scoresheetTable tr:eq(1) td:eq(' + ((currFrame*2)+position) + ')').html(displayContent);
}

function updateGameScoreDisplay(currFrame) {
  var accumulator = 0;
  for(var i = 0; i < (currFrame+1); i++) {
    accumulator += scoresheet.frameScoreDisplay(i)
    if(scoresheet.frameScoreDisplay(i) != null) {
      $('#scoresheetTable tr:eq(2) td:eq(' + (i) + ')').html(accumulator);
    }
  }
}

function gameOver() {
  if(scoresheet.gameOver()) {
    $('.button').prop('onclick',null).off('click');
    $('.button').fadeOut(1000);
    $('#gameOver').hide().addClass('game_over').html('<h1>Game Over!</h1>').fadeIn(1000).fadeOut(1000, function () {
      $('#gameOver').html('<h1><a id="playAgain" href="#" onclick="playAgain();return false;">Play Again?</a></h1>').fadeIn(1000);
    });
  }
}