$( document ).ready( function() {
  var game = new Game();
  updateScorecard(game.frames, game.cumulatives)

  $( "#submit" ).on('keyup', function() {
      if (event.keyCode === 13) {
          $("#submit").click();
      }
  });

  $( "#submit" ).on('click', function() {
    rollString = document.getElementById("roll_score").value;
    if (rollString === 'X') {
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
    populate_with_new_rows_to_9(new_tbody, frames, cumulatives);
    populate_with_new_rows_over_9(new_tbody, frames, cumulatives);

    table.replaceChild(new_tbody, old_tbody)
  }

  function populate_with_new_rows_to_9(new_body, frames, cumulatives) {
    counter = 0
    frames.forEach( function(frame) {
      if (counter < 9) {
        row = new_body.appendChild(document.createElement('tr'))
        framenum = row.appendChild(document.createElement('th'))
        roll1 = row.appendChild(document.createElement('td'))
        roll2 = row.appendChild(document.createElement('td'))
        roll3 = row.appendChild(document.createElement('td'))
        frameTotal = row.appendChild(document.createElement('td'))

        framenum.innerHTML = counter + 1

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
      }
      counter++
    })
  }

  function populate_with_new_rows_over_9(new_body, frames, cumulatives) {
    if (frames[10] != undefined) {
      row = new_body.appendChild(document.createElement('tr'))
      framenum = row.appendChild(document.createElement('th'))
      roll1 = row.appendChild(document.createElement('td'))
      roll2 = row.appendChild(document.createElement('td'))
      roll3 = row.appendChild(document.createElement('td'))
      frameTotal = row.appendChild(document.createElement('td'))

      framenum.innerHTML = 10

      finalscores = []

      finalscores.push(frames[9].scores[0])
      if (frames[9].scores[1] != null ) {
        finalscores.push(frames[9].scores[1])
      }

      if (frames[10] != undefined) {
        finalscores.push(frames[10].scores[0])
        if (frames[10].scores[1] != null ) {
          finalscores.push(frames[10].scores[1])
        }
        if (frames[11] != undefined) {
          finalscores.push(frames[11].scores[0])
        }
      }

      roll1score = finalscores[0]
      if (roll1score === 10) {
        roll1.innerHTML = 'X'
      } else {
        roll1.innerHTML = roll1score
      }

      if (finalscores.length > 1) {
        roll2score = finalscores[1]
        if (roll2score === 10) {
          roll2.innerHTML = 'X'
        } else {
          roll2.innerHTML = roll2score
        }
      }

      if (finalscores.length > 2) {
        roll3score = finalscores[2]
        if (roll3score === 10) {
          roll3.innerHTML = 'X'
        } else {
          roll3.innerHTML = roll3score
        }
      }

      cumulative = cumulatives[9]
      if (cumulative === undefined) {
        frameTotal.innerHTML = ""
      } else {
        frameTotal.innerHTML = cumulative
      }

    }
  }
})
