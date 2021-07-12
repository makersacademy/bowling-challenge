document.addEventListener("DOMContentLoaded", () => {
  const scorecard = new Scorecard();

  const updateScore = () => {
    document.querySelector('#score').innerText = scorecard.score;
  }

  updateScore();

  document.querySelector('#first-roll-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const roll = document.querySelector('#first-roll').value;
    const rollInt = parseInt(roll);
    scorecard.firstRoll(rollInt);
    updateScore();
  })

  document.querySelector('#second-roll-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const roll = document.querySelector('#second-roll').value;
    const rollInt = parseInt(roll);
    scorecard.secondRoll(rollInt);
    updateScore();
  })

})