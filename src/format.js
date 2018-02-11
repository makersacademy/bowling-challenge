document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(Frame);

  const setScore = () => {
    document.getElementById('currentScore').innerHTML = game.score();
  };

  const showScores = () => {
    let scores = '';
    game.runningScores().forEach((score) => {
      scores += `${score} `;
    });
    document.getElementById('eachScore').innerHTML = scores;
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


  setScore();
  createButtons();
  showScores();
});
