document.addEventListener("DOMContentLoaded", () => {
  if (typeof game === 'undefined') {
    game = new Game();
  }
  document.querySelector('#total-score').innerText = `${game.score}`;
  document.querySelector('#f1r1').innerText = `${game.frames[0].frameScore}`;
});

document.querySelector('#one').addEventListener('click', () => {
  game.roll(document.getElementById('one').value);
  document.querySelector('#f1r1').innerText = `${game.frames[0].frameScore}`;
})