function showScore(game, element) {
  document.querySelector('#score').innerHTML = `Score: ${game.score()}`;
}

function showFrame(game, element) {
  document.querySelector('#frame').innerHTML = `Frame: ${game.currentFrame}`;
}

function showTurn(game, element) {
  document.querySelector('#turn').innerHTML = `${game.turn} roll`;
}

function generateButtons(game) {
  document.querySelectorAll('.rollButton').forEach((b) => {
    document.querySelector('body').removeChild(b)
  })

  for (let i = 0; i <= game.pinsRemaining; i++) {
    rollButton = document.createElement('button');
    rollButton.setAttribute('class', 'rollButton');
    rollButton.innerHTML = `${i}`;
    rollButton.addEventListener('click', () => {
      game.roll(i);
      updateInfo(game);
    })

    document.querySelector('body').appendChild(rollButton);
  }
}

function updateInfo(game) {
  showFrame(game);
  showTurn(game);
  showScore(game);
  generateButtons(game);
}

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(new ScoreCard);

  frame = document.createElement("h1");
  frame.setAttribute('id', 'frame');
  document.querySelector('body').appendChild(frame);

  turn = document.createElement("h1");
  turn.setAttribute('id', 'turn');
  document.querySelector('body').appendChild(turn);

  score = document.createElement("h1");
  score.setAttribute('id', 'score');
  document.querySelector('body').appendChild(score);

  updateInfo(game);
});