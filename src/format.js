document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(Frame);

  const setScore = () => {
    document.getElementById('currentScore').innerHTML = game.score();
  };

  const showScores = () => {
    let collumn = 1;
    game.runningScores().forEach((score) => {
      document.getElementById(`scoreFrame${collumn}`).innerHTML = `${score}`;
      collumn += 1;
    });
  };

  const roll = (value) => { game.play(value); setScore(); showScores(); };

  const createButtons = () => {
    for (let i = 10; i >= 0; i -= 1) {
      const btn = document.createElement('button');
      btn.id = i;
      btn.onclick = () => { roll(i); };
      const t = document.createTextNode(i);
      btn.appendChild(t);
      document.getElementById('changeScores').appendChild(btn);
    }
  };


// wow look how long this method is...
  const createScoreCard = () => {
    for (let i = 1; i <= 10; i += 1) {
      const title = document.createElement('td');
      const frame = document.createTextNode(`frame ${i}`);
      const scoreBox = document.createElement('td');
      scoreBox.id = `scoreFrame${i}`;
      const filler = 'waiting for score';
      title.appendChild(frame);
      scoreBox.innerHTML = filler;
      document.getElementById('scorecardLabels').appendChild(title);
      document.getElementById('scoreCardScores').appendChild(scoreBox);
    }
  };


  setScore();
  createButtons();
  createScoreCard();
  showScores();
});
