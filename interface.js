document.addEventListener('DOMContentLoaded', function() {

  let scorecard = new Scorecard
  
  let updateScore = function() {
    document.querySelector('#current_score').innerText = scorecard.calculateScore()
  }

  function updateTable(score, frame, roll) {
    scorecard.addScore(score)
    if(frame === 12) {
      document.querySelector(`#frame_11_roll_2`).innerText = score
    } else {
      document.querySelector(`#frame_${frame}_roll_${roll}`).innerText = score
    }
  }

  function endgame() {
    if(scorecard.isGameOver()) {
      document.querySelector(".game_over_box").style.display = 'block'
      document.getElementById("new_score_button").disabled = true
    }
  }
  
  updateScore()

  document.querySelector('#new_score_form').addEventListener('submit', (event) => {
    event.preventDefault()
    let score = document.querySelector('#new_score').value
    try {
    updateTable(score, scorecard.frame, scorecard.roll)
    updateScore() 
    }
    catch(err) {
      alert(err)
    }
    endgame()
  })

  document.querySelector('#reset').addEventListener('submit', () => {
  })

})