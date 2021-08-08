document.addEventListener('DOMContentLoaded', (event) => { 
  const game = new Game();
  const form = document.getElementById('rollForm');
  let scoreTable = document.getElementById('scoreTables');

  form.addEventListener( 'submit', (event) => {
    event.preventDefault();
    game.startGame();
    game.firstRoll(document.getElementById("rollOne").value);
    game.secondRoll(document.getElementById("rollTwo").value);
    game.endFrame();
    updateScore();
  });
  

  updateScore = () => {
    console.log(game)
    for (i= 0; i < scoreTable.rows[1].cells.length; i++) {
      console.log(game.scoresArray[i].value)
      scoreTable.rows[1].cells[i].innerHTML = game.scoresArray[i].value;
    }
  }
});
