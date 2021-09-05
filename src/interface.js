document.addEventListener("DOMContentLoaded", () => {
  if (typeof game === 'undefined') {
    game = new Game();
  }
  document.querySelector('#total-score').innerText = `${game.score}`;
});

//roll actions
document.querySelector('#zero').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('zero').value));
})

document.querySelector('#one').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('one').value));
  document.querySelector('#f1r1').innerText = `${game.frames[0].frameScore}`;
  document.querySelector('#total-score').innerText = `${game.frameScores}`;
})

document.querySelector('#two').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('two').value));
})

document.querySelector('#three').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('three').value));
})

document.querySelector('#four').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('four').value));
})

document.querySelector('#five').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('five').value));
})

document.querySelector('#six').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('six').value));
})

document.querySelector('#seven').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('seven').value));
})

document.querySelector('#eight').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('eight').value));
})

document.querySelector('#nine').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('nine').value));
})

document.querySelector('#ten').addEventListener('click', () => {
  game.roll(parseFloat(document.getElementById('ten').value));
})