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
  document.querySelectorAll('.rollButton').forEach((b) => {
    document.querySelector('#buttons').removeChild(b)
  })

  for (let i = 0; i <= game.pinsRemaining; i++) {
    rollButton = createButton(i);

    document.querySelector('#buttons').appendChild(rollButton);
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

function updateInfo() {
  showScore();
  showFrame();
  showTurn();
  generateButtons();
}

document.addEventListener("DOMContentLoaded", () => {
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