document.addEventListener("DOMContentLoaded", function() {
  const updateScore = () => {
  document.querySelector('#score').innerText = bowling.score()
  }

  const bowling = new Bowling()
  updateScore()
  document.querySelector('#enter-rolls').addEventListener('submit', (event) => {
    event.preventDefault();
    const pins = document.querySelector('#pins').value;
    bowling.roll(pins)
    updateScore()
  })
})