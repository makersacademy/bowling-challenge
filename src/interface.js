var bowling;

$("#start-game").click(() => {
  startGame();
});

function startGame() {
  initiateScorecard();
  initiateGame();
}

function initiateScorecard() {
  $(".game-over").remove();
  $(".bowling-img").slideUp(); 
  $(".roll").slideDown();
  $(".scorecard").removeClass("hide");
  $(".scorecard-body").empty();
}

function initiateGame() {
  bowling = new Bowling();
  refresh();
}

function refresh() {
  setRollArea(bowling.currentFrame.pinsLeft);
  $(".scorecard-body").empty();
  let accumScore = 0;
  for (i = 0; i < bowling.frames.length; i++) {
    let frame = bowling.frames[i];
    accumScore += frame.score;
    $(".scorecard-body").append(`
    <div class="scorecard-item" id="frame-${i+1}">
      <div class="frame-no" id="frame-no-${i+1}">${i+1}</div>
      <div class="roll-1" id="roll-${i+1}-1">${frame.rolls[0] === undefined ? "" : frame.rolls[0]}</div>
      <div class="roll-2" id="roll-${i+1}-2">${frame.rolls[1] === undefined ? "" : frame.rolls[1]}</div>
      <div class="roll-3" ${i===9 ? "class='disable'" : ""} id="roll-${i+1}-3">${frame.rolls[2] === undefined ? "" : frame.rolls[2]}</div>
      <div class="frame-score" id="${i+1}-score">${frame.score === 0 ? "" : accumScore}</div>
      <div class="frame-result" id="${i+1}-result">${frame.result}</div>
    </div>
  `);
  }
}

function setRollArea(pinsLeft) {
  $(".pins-img").remove();
  addPinsImages(pinsLeft);
  $(".roll-choice").remove();
  addRollButtons(pinsLeft);
}

function addRollButtons(pinsLeft) {
  for ( i = 0; i <= pinsLeft; i++ ) {
    $(".roll").append(`<button class="roll-choice" id="${i}">${i}</button>`);
  }
  addButtonListener();
}

function addPinsImages(pinsLeft) {
  $(".roll").prepend(`
  <div class="pins-img">
  </div>
  `);
  for ( i = 0; i < pinsLeft; i++ ) {
    $(".pins-img").append('<img class="pin-img" src="images/bowling-pin.png">');
  }
}

function addButtonListener() {
  $(".roll-choice").click((e) => {
    if (bowling.gameStatus) {
      nextRoll(parseInt(e.target.id));
    }
  });
}

function nextRoll(pins) {
  bowling.roll(pins);
  refresh();
  if(!bowling.gameStatus) {
    endGame();
  }
}

function endGame() {
  $(".roll").slideUp();
  $(".pins-img").remove();
  setTimeout(() => {
    if (bowling.totalScore===300) {showKingpin();}
    popGameOverMsg();
  }, 300);
}

function popGameOverMsg() {
  $(".roll").before(`
    <div class="game-over">
      <h1 class="anim">GAME OVER</h1>
      <h4>Total Score: ${bowling.totalScore}</h4>
    </div>
  `);
}

function showKingpin() {
  $(".kingpin").removeClass("hide");
  setTimeout(() => {
    $(".kingpin").addClass("hide");
  }, 7000)
}
