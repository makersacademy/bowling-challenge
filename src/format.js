document.addEventListener('DOMContentLoaded', () => {
  const STRIKE = 10;
  const STRIKE_SYMBOL = 'X';
  const SPARE_SYMBOL = '/';
  const isParty = true;
  const game = new Game(Frame, new FinalFrame());

  const setTotal = () => {
    document.getElementById('currentScore').innerHTML = game.score();
  };

  const individualScores = () => {
    let collumnID = 1;
    const scores = game.runningScores();
    scores.forEach((score) => {
      document.getElementById(`scoreFrame${collumnID}`).innerHTML = `${score}`;
      collumnID += 1;
    });
  };

  //   let colourGen = () => {
  //       let a = Math.random() * 255;
  //       let b = Math.random() * 255;
  //       let c = Math.random() * 255;
  //    return "rgb(" + a + ", " + b + ", " + c + ")"
  // }
  //
  // function colours() {
  //   document.getElementById('scorecardLabels').style.backgroundColor = colourGen();
  //   document.getElementById('scoreCardScores').style.backgroundColor = colourGen();
  //   document.getElementById('frameResults').style.backgroundColor = colourGen();
  //   document.body.style.backgroundColor = colourGen();
  //   document.body.style.text = colourGen();
  // }

  // this logic should be in model not in the formatting page...

  const strikeConverter = rolls => rolls.map(roll => (roll === STRIKE ? STRIKE_SYMBOL : roll));

  const spareConverter = (rolls) => {
    if (rolls[0] + rolls[1] === STRIKE) { rolls[1] = SPARE_SYMBOL; }
    if (rolls[1] + rolls[2] === STRIKE) { rolls[2] = SPARE_SYMBOL; }
    return rolls;
  };

  const rollPrinter = game => game.map((frame) => {
    let view = strikeConverter(frame);
    view = spareConverter(view);
    return view.join('');
  });

  // this logic is to be refactored out

  const showRolls = () => {
    let collumnID = 1;
    const frames = rollPrinter(game.view());
    frames.forEach((frame) => {
      document.getElementById(`views${collumnID}`).innerHTML = `${frame}`;
      collumnID += 1;
    });
  };

  const roll = (value) => { game.play(value); setTotal(); individualScores(); showRolls(); };

  const rollButton = (pins) => {
    const btn = document.createElement('button');
    btn.id = pins;
    btn.onclick = () => { roll(pins); };
    btn.innerHTML = pins;
    return btn;
  };

  const showScoreButtons = (max = STRIKE) => {
    for (let i = 0; i <= max; i += 1) {
      const btn = rollButton(i);
      document.getElementById('changeScores').appendChild(btn);
    }
  };


  const createFieldWithID = (id) => {
    const field = document.createElement('td');
    field.id = id;
    return field;
  };

  const createScoreCard = () => {
    for (let i = 1; i <= STRIKE; i += 1) {
      const title = document.createElement('td');
      title.innerHTML = `Frame ${i} `;
      const scoreBox = createFieldWithID(`scoreFrame${i}`);
      const frameRolls = createFieldWithID(`views${i}`);
      document.getElementById('scorecardLabels').appendChild(title);
      document.getElementById('scoreCardScores').appendChild(scoreBox);
      document.getElementById('frameResults').appendChild(frameRolls);
    }
  };

  setTotal();
  showScoreButtons();
  createScoreCard();
  individualScores();
  showRolls();
});
