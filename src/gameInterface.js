document.addEventListener('DOMContentLoaded', function() {
  function updateScore() {
    document.querySelector('#score').innerText = game.score();
  }

  const game = new Bowling();
    updateScore();

  document.querySelector('#roll-ball').addEventListener('submit', (event) => {
    event.preventDefault();
    const rollValue = document.querySelector('#current-number').value;
    game.roll(rollValue);
    updateScore();
  });
});