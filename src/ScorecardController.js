$( document ).ready( function() {
  var game = new Game();
  updateScorecard(game.frames, game.cumulatives)

  $( "#submit" ).on('click', function() {
    rollString = document.getElementById("roll_score").value;
    if (rollString === 'X') {
      console.log('was X');
      rollString = '10'
    }
    rollNum = parseInt(rollString)
    game.add_score(rollNum);
    updateScorecard(game.frames, game.cumulatives)
    document.getElementById("roll_score").value = ""
  });

  function updateScorecard(frames, cumulatives) {
    var table = document.getElementById("myTable");
    old_tbody = table.tBodies[0];

    var new_tbody = document.createElement('tbody');
    populate_with_new_rows(new_tbody, frames, cumulatives);

    table.replaceChild(new_tbody, old_tbody)
  }

  function populate_with_new_rows(new_body, frames, cumulatives) {
    counter = 0
    frames.forEach( function(frame) {
      row = new_body.appendChild(document.createElement('tr'))
      framenum = row.appendChild(document.createElement('th'))
      roll1 = row.appendChild(document.createElement('td'))
      roll2 = row.appendChild(document.createElement('td'))
      frameTotal = row.appendChild(document.createElement('td'))

      if (counter != 10) {
        framenum.innerHTML = counter + 1
      }

      roll1score = frame.scores[0]
      if (roll1score === 10) {
        roll1.innerHTML = 'X'
      } else {
        roll1.innerHTML = roll1score
      }

      roll2score = frame.scores[1]
      if (roll1score === 10) {
        roll2.innerHTML = ""
      } else {
        if (roll1score + roll2score === 10) {
          roll2.innerHTML = '/'
        } else {
          roll2.innerHTML = roll2score
        }
      }

      cumulative = cumulatives[counter]
      if (cumulative === undefined) {
        frameTotal.innerHTML = ""
      } else {
        frameTotal.innerHTML = cumulative
      }
      counter++
    })
  }
})
