$(document).ready(() => {
  const scoreCard = new ScoreCard();

  scoreCard.addName('Player');

  $('#player-name').text(scoreCard.getName());

  const scoreAtFrame = (number) => {
    let selectedFrames = scoreCard.allFrames.slice(0, number);
    selectedFrames = selectedFrames.map((frame) => { return frame.getScore(); });
    return selectedFrames.reduce((a, b) => a + b);
  };

  const resetPlayerOneDisplay = () => {
    for (let i = 0; i < scoreCard.allFrames.length; i += 1) {
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-1`).text(scoreCard.allFrames[i].getRollOne());
      $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-2`).text(scoreCard.allFrames[i].getRollTwo());
      if (i + 1 === 10) { $(`#player-1-frame-${i + 1} #frame-${i + 1}-roll-3`).text(scoreCard.allFrames[i].getRollThree()); }
      $(`#player-1-frame-${i + 1} .frame-total`).text(scoreAtFrame(i + 1));
    }
  };

  for (let i = 0; i < 10; i += 1) {
    scoreCard.setRollOne(9);
    scoreCard.setRollTwo(1);
  }
  scoreCard.setRollThree(9);
  resetPlayerOneDisplay();
});
