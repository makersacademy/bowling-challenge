document.addEventListener('DOMContentLoaded', () => {
  const STRIKE = 10;
  const STRIKE_SYMBOL = 'X';
  const SPARE_SYMBOL = '/';
  let isParty = true;
  let game = new Game(Frame);

  let setTotal = () => {
    document.getElementById('currentScore').innerHTML = game.score();
  };

  let individualScores = () => {
    let collumnID = 1;
    let scores = game.runningScores();
    scores.forEach((score) => {
      document.getElementById(`scoreFrame${collumnID}`).innerHTML = `${score}`;
      collumnID += 1;
    });
  };

  let colourGen = () => {
      let a = Math.random() * 255;
      let b = Math.random() * 255;
      let c = Math.random() * 255;
   return "rgb(" + a + ", " + b + ", " + c + ")"
}

function colours() {
  document.getElementById('scorecardLabels').style.backgroundColor = colourGen();
  document.getElementById('scoreCardScores').style.backgroundColor = colourGen();
  document.getElementById('frameResults').style.backgroundColor = colourGen();
  document.body.style.backgroundColor = colourGen();
  document.body.style.color = colourGen();
}

  // this logic should be in model not in the formatting page...

  let strikeConverter = rolls => rolls.map(roll => (roll === STRIKE ? STRIKE_SYMBOL : roll));

  let spareConverter = (rolls) => {
    if (rolls[0] + rolls[1] === STRIKE) { rolls[1] = SPARE_SYMBOL; }
    if (rolls[1] + rolls[2] === STRIKE) { rolls[2] = SPARE_SYMBOL; }
    return rolls;
  };

  let rollPrinter = game => game.map((frame) => {
    let view = strikeConverter(frame);
    view = spareConverter(view);
    return view.join('');
  });

  // this logic is to be refactored out

  let showRolls = () => {
    let collumnID = 1;
    const frames = rollPrinter(game.view());
    frames.forEach((frame) => {
      document.getElementById(`views${collumnID}`).innerHTML = `${frame}`;
      collumnID += 1;
    });
  };

  let roll = (value) => { game.play(value); setTotal(); individualScores(); showRolls(); colours();};

  let rollButton = (pins) => {
    const btn = document.createElement('button');
    btn.id = pins;
    btn.onclick = () => { roll(pins); };
    btn.innerHTML = pins;
    return btn;
  };

  let showScoreButtons = (max = STRIKE) => {
    for (let i = 0; i <= max; i += 1) {
      const btn = rollButton(i);
      document.getElementById('changeScores').appendChild(btn);
    }
  };


  let createFieldWithID = (id) => {
    const field = document.createElement('td');
    field.id = id;
    return field;
  };

  let createScoreCard = () => {
    for (let i = 1; i <= STRIKE; i += 1) {
      let title = document.createElement('td');
      title.innerHTML = `Frame ${i} `;
      let scoreBox = createFieldWithID(`scoreFrame${i}`);
      let frameRolls = createFieldWithID(`views${i}`);
      document.getElementById('scorecardLabels').appendChild(title);
      document.getElementById('scoreCardScores').appendChild(scoreBox);
      document.getElementById('frameResults').appendChild(frameRolls);
    }
  };

  colours();
  setTotal();
  showScoreButtons();
  createScoreCard();
  individualScores();
  showRolls();
});
