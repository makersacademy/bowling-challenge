document.addEventListener('DOMContentLoaded', () => {
  const scorecard = new Scorecard();

  const pins = document.getElementsByClassName('pins');

  const updateRolls = (num) => {
    if (
      scorecard.frames[scorecard.currentFrame].showFrameRolls().length === 1
    ) {
      document
        .getElementsByClassName('frame')
        [scorecard.currentFrame].querySelector('.first-bowl').innerText = num;
    }
    if (
      scorecard.frames[scorecard.currentFrame].showFrameRolls().length === 2
    ) {
      document
        .getElementsByClassName('frame')
        [scorecard.currentFrame].querySelector('.second-bowl').innerText = num;
    }
    if (
      scorecard.frames[scorecard.currentFrame].showFrameRolls().length === 3
    ) {
      document
        .getElementsByClassName('frame')
        [scorecard.currentFrame].querySelector('.bonus-bowl').innerText = num;
    }
  };

  document.getElementById('reset-button').addEventListener('click', () => {
    scorecard.resetGame();
    window.location.reload();
  });
  // reset.addEventListener('click', () => {
  //   console.log('Ciao');
  //   // window.location.reload();
  //   // scorecard.resetGame();
  // });

  const updateFrameScore = () => {
    for (let i = 0; i < scorecard.frames.length; i++) {
      document
        .getElementsByClassName('frame')
        [i].querySelector('.bottom').innerText =
        scorecard.frames[i].calculateTotal();
    }
  };

  const updateScorecardTotal = () => {
    for (let i = 0; i < scorecard.frames.length; i++) {
      document.getElementById('game-total').innerText =
        scorecard.calculateScorecardTotal();
    }
  };

  for (let i = 0; i < 12; i++) {
    pins[i].addEventListener('click', () => {
      scorecard.addPins(parseInt(pins[i].value));
      updateRolls(pins[i].value);
      updateFrameScore();
      updateScorecardTotal();
    });
  }
});
