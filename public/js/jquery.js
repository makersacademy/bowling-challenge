/* eslint-disable no-console */
/* eslint-disable no-undef */

$(document).ready(() => {
  let scoreCard = new ScoreCard();

  const playNextRoll = (score) => {
    if (!scoreCard.frame.getRollOne()) {
      scoreCard.setRollOne(score);
    } else if (!scoreCard.frame.getRollTwo()) {
      scoreCard.setRollTwo(score);
    } else if (!scoreCard.frame.getRollThree()) {
      scoreCard.setRollThree(score);
    }
  
    resetPlayerOneDisplay();
  }

  const addRolls = (objFrame, newFrame) => {
    if (objFrame.rollOne) { newFrame.setRollOne(objFrame.rollOne); }
    if (objFrame.rollTwo) { newFrame.setRollTwo(objFrame.rollTwo); }
    if (objFrame.rollThree) { newFrame.setRollThree(objFrame.rollThree); }
  };
  
  const createFrame = (frameData, i, newCard) => {
    const currentFrameNum = i + 1;
    const newFrame = currentFrameNum === 10 ? new FinalFrame() : new Frame();
    const newBonus = new Bonus();
  
    addRolls(frameData, newFrame);
    newFrame.bonus = newBonus;
    newBonus.points = frameData.bonus.points;
    newFrame.bonusTurnsLeft = frameData.bonusTurnsLeft;
    newCard.allFrames.push(newFrame);
  };
  
  const recreatedScoreCardFrom = (obj) => {
    const newScoreCard = new ScoreCard();
    obj.allFrames.forEach((frame, i) => { createFrame(frame, i, newScoreCard); });
    newScoreCard.currentFrame = obj.currentFrame;
  
    const lastTurn = newScoreCard.allFrames[newScoreCard.allFrames.length - 1];
    newScoreCard.frame = newScoreCard.allFrames.length === 10 
    || (lastTurn.rollOne < 10 && !lastTurn.rollTwo) ?
    lastTurn : new Frame();
  
    addRolls(obj.frame, newScoreCard.frame);
    return newScoreCard;
  };
  
  const scoreAtFrame = (number) => {
    let selectedFrames = scoreCard.allFrames.slice(0, number);
    selectedFrames = selectedFrames.map((frame) => frame.getScore());
    return selectedFrames.reduce((a, b) => a + b);
  };
  
  const strikeSVG = { background: 'url(../images/strike.svg) no-repeat center center', 'background-size': 'cover' };
  const spareSVG = { background: 'url(../images/spare.svg) no-repeat center center', 'background-size': 'cover' };
  
  function spareOnOneAndTwo(num) {
    return scoreCard.allFrames[num].getRollOne() + scoreCard.allFrames[num].getRollTwo() === 10;
  };
  
  function spareOnTwoAndThree(num) {
    return scoreCard.allFrames[num].getRollTwo() + scoreCard.allFrames[num].getRollThree() === 10;
  };
  
  const resetRollOne = (i) => {
    if (scoreCard.allFrames[i].getRollOne() === 10) {
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-1`).css(strikeSVG);
    } else {
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-1`).text(scoreCard.allFrames[i].getRollOne());
    }
  };
  
  const resetRollTwo = (i) => {
    if (spareOnOneAndTwo(i)) {
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).css(spareSVG);
    } else if (scoreCard.allFrames[i].getRollTwo() === 10) {
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).css(strikeSVG);
    } else {
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).text(scoreCard.allFrames[i].getRollTwo());
    }
  };
  
  const resetRollThree = (i) => {
    if (i + 1 === 10) {
      if (spareOnTwoAndThree(i)) {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).css(spareSVG);
      } else if (scoreCard.allFrames[i].getRollThree() === 10) {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).css(strikeSVG);
      } else {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).text(scoreCard.allFrames[i].getRollThree());
      }
    }
  };
  
  const resetPlayerOneDisplay = () => {
    for (let i = 0; i < scoreCard.allFrames.length; i += 1) {
      resetRollOne(i);
      resetRollTwo(i);
      resetRollThree(i);
      $(`#player-1-frame-${i + 1} .frame-total`).text(scoreAtFrame(i + 1));
    }
  
    $('#player-1-game-total').text(scoreCard.getTotalScore());
  };
  
  $.get('/scores/new', (data) => {
    const scoreCardData = JSON.parse(data);
    scoreCard = scoreCardData === null ? new ScoreCard() : recreatedScoreCardFrom(scoreCardData);
    resetPlayerOneDisplay();
  });

  scoreCard.addName('Player');

  $('#player-name').text(scoreCard.getName());

  $('#enter-scores').submit((e) => {
    e.preventDefault();
    const score = Number($('#new-score').val());
    playNextRoll(score);

    $.post('scores/new', { current_scorecard: JSON.stringify(scoreCard) }, (result) => {
      console.log(result);
    });

    $('#new-score').val('');
  });
});
