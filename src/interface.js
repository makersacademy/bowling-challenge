import Bowling from './bowling.js';

var bowling;

$('#start-game').click(() => {
	startGame();
});

function startGame() {
	initiateScorecard();
	initiateGame();
}

function initiateScorecard() {
	$('.game-over').remove();
	$('.bowling-img').slideUp();
	$('.roll').slideDown();
	$('.scorecard').removeClass('hide');
	$('.scorecard-body').empty();
}

function initiateGame() {
	bowling = new Bowling();
	refresh();
}

function refresh() {
	setRollArea(bowling.currentFrame.pinsLeft(bowling.isBonus));
	$('.scorecard-body').empty();
	let accumScore = 0;
	for (let i = 0; i < bowling.frames.length; i++) {
		const frame = bowling.frames[i];
		const frameId = i + 1;
		accumScore += frame.score;
		$('.scorecard-body').append(`
    <div class="scorecard-item" id="frame-${frameId}">
      <div class="frame-no" id="frame-no-${frameId}">${frameId}</div>
      <div class="roll-1" id="roll-${frameId}-1">${frame.rolls[0] === undefined ? '' : frame.rolls[0]}</div>
      <div class="roll-2" id="roll-${frameId}-2">${frame.rolls[1] === undefined ? '' : frame.rolls[1]}</div>
      <div class="roll-3" ${i === 9 ? "class='disable'" : ''} id="roll-${frameId}-3">${
			frame.rolls[2] === undefined ? '' : frame.rolls[2]
		}</div>
      <div class="frame-score" id="${frameId}-score">${frame.score === 0 ? '' : accumScore}</div>
      <div class="frame-result" id="${frameId}-result">${frame.result}</div>
    </div>
  `);
	}
}

function setRollArea(pinsLeft) {
	$('.pins-img').remove();
	addPinsImages(pinsLeft);
	$('.roll-choice').remove();
	addRollButtons(pinsLeft);
}

function addRollButtons(pinsLeft) {
	for (let i = 0; i <= pinsLeft; i++) {
		$('.roll').append(`<button class="roll-choice" id="${i}">${i}</button>`);
	}
	addButtonListener();
}

function addPinsImages(pinsLeft) {
	$('.roll').prepend(`
  <div class="pins-img">
  </div>
  `);
	for (let i = 0; i < pinsLeft; i++) {
		$('.pins-img').append('<img class="pin-img" src="images/bowling-pin.png">');
	}
}

function addButtonListener() {
	// console.log('add button listener')
	$('.roll-choice').click((e) => {
		if (!bowling.isGameOver) {
			nextRoll(parseInt(e.target.id));
		}
	});
}

function nextRoll(pins) {
	bowling.roll(pins);
	refresh();
	if (bowling.isGameOver) {
		endGame();
	}
}

function endGame() {
	$('.roll').slideUp();
	$('.pins-img').remove();
	setTimeout(() => {
		if (bowling.totalScore === 300) {
			showKingpin();
		}
		popGameOverMsg();
	}, 300);
}

function popGameOverMsg() {
	$('.roll').before(`
    <div class="game-over">
      <h1 class="anim">GAME OVER</h1>
      <h4>Total Score: ${bowling.totalScore}</h4>
    </div>
  `);
}

function showKingpin() {
	$('.kingpin').removeClass('hide');
	setTimeout(() => {
		$('.kingpin').addClass('hide');
	}, 7000);
}
