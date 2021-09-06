const game = new Game(new ScoreCard);

function capitalise(str) { return str.charAt(0).toUpperCase() + str.slice(1) }

function createButton(num) {
  rollButton = document.createElement('button');
  rollButton.setAttribute('class', 'rollButton');
  rollButton.innerHTML = `${num}`;
  rollButton.addEventListener('click', () => {
    game.roll(num);
    updateInfo();
  })

  return rollButton;
}

function generateButtons() {
  if (!game.over()) {
    document.querySelectorAll('.rollButton').forEach((b) => {
      document.querySelector('#buttons').removeChild(b)
    })

    for (let i = 0; i <= game.pinsRemaining; i++) {
      rollButton = createButton(i);

      document.querySelector('#buttons').appendChild(rollButton);
    }
  }
}

function showFrame() {
  document.querySelector('#frame')
  .innerHTML = `Frame ${game.currentFrame}`;
}

function showScore() {
  document.querySelector('#score').innerHTML = `Score: ${game.score()}`;
}

function showTurn() {
  document.querySelector('#turn').innerHTML = `Enter ${game.turn} roll:`;
}

function showGameOver() {
  document.querySelector('body').removeChild(score);
  document.querySelector('body').removeChild(rollContainer);

  document.querySelector('#game-over')
  .innerHTML = `Game over! Final score ${game.score()}`;
}

function updateInfo() {
  if (game.over()) {
    showGameOver()
  } else {
    showScore();
    showFrame();
    showTurn();
    generateButtons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  gameOver = document.createElement("div");
  gameOver.setAttribute('id', 'game-over');
  document.querySelector('body').appendChild(gameOver);

  score = document.createElement("div");
  score.setAttribute('id', 'score');
  document.querySelector('body').appendChild(score);

  rollContainer = document.createElement("div");
  rollContainer.setAttribute("id", "rollContainer");
  document.querySelector('body').appendChild(rollContainer);

  frame = document.createElement("div");
  frame.setAttribute('id', 'frame');
  document.querySelector('#rollContainer').appendChild(frame);

  turn = document.createElement("div");
  turn.setAttribute('id', 'turn');
  document.querySelector('#rollContainer').appendChild(turn);

  buttons = document.createElement("div");
  buttons.setAttribute('id', 'buttons');
  document.querySelector('#rollContainer').appendChild(buttons);

  updateInfo();
});