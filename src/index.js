document.addEventListener("DOMContentLoaded", () => {

  const score = new ScoreCalculator();

  document.getElementById('currentRound').innerText = score.round
  document.getElementById('currentFrame').innerText = score.frame

  document.getElementById('submit').addEventListener('click', () => {
    let scoreToAdd = document.getElementById('scoreToAdd')
    score.add(scoreToAdd.value)
    scoreToAdd.value = ''
    document.getElementById('currentScore').innerText = score.frames
  })


});