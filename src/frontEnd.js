var game = null;

$(document).ready(function() {
  $("#start-game").click(function() {
    event.preventDefault();
    if (game !== null) {
      alert("Game in progress. Click exit game to terminate.");
      return;
    }
    let $playerName = $("#player-name").val();
    $(".player-name").text($playerName);
    game = new Game($playerName, Frame);
    $("#player-name").val("");
  });

  $(".roll-button").click(function() {
    if (game === null) {
      alert("Please fill out your name and click start game");
    }
    let pinsKnocked = parseInt($(this).attr("name"));
    game.roll(pinsKnocked);
    let frameNumber = game.frameNumber;
    let thisFrame = game.frames[frameNumber - 1];
    let score = game.score;
    if(thisFrame.rolls.length === 1) {
      _firstRoll(thisFrame, frameNumber, pinsKnocked);
    }
    if(thisFrame.rolls.length === 2) {
      _secondRoll(thisFrame, frameNumber, pinsKnocked);
    }
    if (thisFrame.rolls.length === 3) {
      _thirdRoll(thisFrame, pinsKnocked);
    }
    if (thisFrame.isComplete()) {
      _completeFrame(frameNumber, score);
    }
  });

  $("#exit-game").click(function() {
    $(".player-name").text("");
    $(".roll").text("");
    $(".frame-score").text("");
    $(".total-score").text("");
    _displayAllButtons();
    game = null;
  });
});

function _firstRoll(frame, frameNumber, pinsKnocked) {
  let displayed = _scoreConverter(frame, pinsKnocked);
  $("#" + frameNumber + " > .first-roll").text(displayed);
  _hideIllegalButtons(frame);
}

function _secondRoll(frame, frameNumber, pinsKnocked) {
  let displayed = _scoreConverter(frame, pinsKnocked);
  $("#" + frameNumber + " > .second-roll").text(displayed);
  _displayAllButtons();
}

function _thirdRoll(frame, pinsKnocked) {
  let displayed = _scoreConverter(frame, pinsKnocked);
  $(".third-roll").text(displayed);
}

function _completeFrame(frameNumber, score) {
  $("#" + frameNumber + " > .frame-score").text(score);
  if (frameNumber === 10) {
    $(".total-score").text(score);
  }
}

function _scoreConverter(frame, pinsKnocked) {
  if (pinsKnocked === 10) {
    return "X";
  } else if (frame.rolls.length === 2 && frame.rolls[0] + frame.rolls[1] === 10) {
    return "/";
  } else if (pinsKnocked === 0) {
    return "-";
  } else {
    return pinsKnocked;
  }
}

function _hideIllegalButtons(frame) {
  if (frame.rolls[0] !== 10){
    let maxLegalRoll = 10 - frame.rolls[0];
    for (let i = 10; i > maxLegalRoll; i--) {
      $("button[name='" + i + "']").css("visibility", "hidden");
    }
  }
}

function _displayAllButtons() {
  $("button").css("visibility", "visible");
}
