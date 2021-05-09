document.addEventListener('DOMContentLoaded', function() {

  let scorecard = new Scorecard
  
  let updateScore = function() {
    document.querySelector('#current_score').innerText = scorecard.calculateScore()
  }

  function updateTable(score) {
    if(scorecard.frame === 12) {
      document.querySelector(`#frame_11_roll_2`).innerText = score
    } else {
      document.querySelector(`#frame_${scorecard.frame}_roll_${scorecard.roll}`).innerText = score
    }
  }
  
  updateScore()

  document.querySelector('#new_score_form').addEventListener('submit', (event) => {
    event.preventDefault()
    let score = document.querySelector('#new_score').value
    updateTable(score)
    scorecard.addScore(score)
    updateScore()
  })

  document.querySelector('#reset').addEventListener('submit', () => {
    // put in confirmation
  })

  //auto game over

  //flash error if frame > 10 score

})