$(document).ready(() => {
  const scoreCard = new ScoreCard();

  scoreCard.addName('Player');

  $('#player-name').text(scoreCard.getName());

  const scoreAtFrame = (number) => {
    let selectedFrames = scoreCard.allFrames.slice(0, number);
    selectedFrames = selectedFrames.map((frame) => frame.getScore());
    return selectedFrames.reduce((a, b) => a + b);
  };

  const strikeSVG = { background: 'url(../images/strike.svg) no-repeat center center', 'background-size': 'cover' };
  const spareSVG = { background: 'url(../images/spare.svg) no-repeat center center', 'background-size': 'cover' };

  function spareOnOneAndTwo(num) {
    return scoreCard.allFrames[num].getRollOne() + scoreCard.allFrames[num].getRollTwo() === 10;
  }

  function spareOnTwoAndThree(num) {
    return scoreCard.allFrames[num].getRollTwo() + scoreCard.allFrames[num].getRollThree() === 10;
  }

  const resetPlayerOneDisplay = () => {
    for (let i = 0; i < scoreCard.allFrames.length; i += 1) {
      if (scoreCard.allFrames[i].getRollOne() === 10) {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-1`).css(strikeSVG);
      } else {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-1`).text(scoreCard.allFrames[i].getRollOne());
      }

      if (spareOnOneAndTwo(i)) {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).css(spareSVG);
      } else if (scoreCard.allFrames[i].getRollTwo() === 10) {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).css(strikeSVG);
      } else {
        $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).text(scoreCard.allFrames[i].getRollTwo());
      }

      if (i + 1 === 10) {
        if (spareOnTwoAndThree(i)) {
          $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).css(spareSVG);
        } else if (scoreCard.allFrames[i].getRollThree() === 10) {
          $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).css(strikeSVG);
        } else {
          $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).text(scoreCard.allFrames[i].getRollThree());
        }
      }

      $(`#player-1-frame-${i + 1} .frame-total`).text(scoreAtFrame(i + 1));
    }
    $('#player-1-game-total').text(scoreCard.getTotalScore());
  };

  for (let i = 0; i < 10; i += 1) {
    scoreCard.setRollOne(10);
  }
  scoreCard.setRollTwo(9);
  scoreCard.setRollThree(10);
  resetPlayerOneDisplay();
});
