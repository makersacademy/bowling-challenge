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
        var [row, framenum, roll1, roll2, roll3, frameTotal] = insert_row(new_body)

        framenum.innerHTML = counter + 1
        add_roll_1(roll1, frame.scores[0])
        add_roll_2(roll2, frame.scores[1], frame.scores[0])
        add_total(frameTotal, cumulatives[counter])
      }
      counter++
    })
  }

  function populate_with_new_rows_over_9(new_body, frames, cumulatives) {
    if (frames[10] != undefined) {
      var [row, framenum, roll1, roll2, roll3, frameTotal] = insert_row(new_body)

      framenum.innerHTML = 10
      finalscores = array_final_scores(frames[9], frames[10], frames[11])
      add_roll_1(roll1, finalscores[0])
      if (finalscores.length > 1) {
        add_roll_3(roll2, finalscores[1], finalscores[0])
      }
      if (finalscores.length > 2) {
        add_roll_3(roll3, finalscores[2], finalscores[1])
      }
      add_total(frameTotal, cumulatives[9])
    }
  }

  function insert_row(new_body) {
    row = new_body.appendChild(document.createElement('tr'))
    framenum = row.appendChild(document.createElement('th'))
    roll1 = row.appendChild(document.createElement('td'))
    roll2 = row.appendChild(document.createElement('td'))
    roll3 = row.appendChild(document.createElement('td'))
    frameTotal = row.appendChild(document.createElement('td'))
    return [row, framenum, roll1, roll2, roll3, frameTotal]
  }

  function add_roll_1(element, roll1) {
    if (roll1 === 10) {
      element.innerHTML = 'X'
    } else {
      element.innerHTML = roll1
    }
  }

  function add_roll_2(element, roll2, roll1 ) {
    if (roll1 === 10) {
      element.innerHTML = ""
    } else {
      if (roll1 + roll2 === 10) {
        element.innerHTML = '/'
      } else {
        element.innerHTML = roll2
      }
    }
  }

  function add_roll_3(element, rolly, rollx) {
    if (rolly === null) {
      element.innerHTML = ''
    } else if (rollx + rolly === 10) {
      element.innerHTML = '/'
    } else if (rolly === 10 ){
      element.innerHTML = 'X'
    } else {
      element.innerHTML = rolly
    }
  }

  function add_total(element, cumulative) {
    if (cumulative === undefined) {
      element.innerHTML = ""
    } else {
      element.innerHTML = cumulative
    }
  }

  function array_final_scores(frame9, frame10, frame11) {
    finalscores = []
    finalscores.push(frame9.scores[0])
    if (frame9.scores[1] != null ) {
      finalscores.push(frame9.scores[1])
    }
    if (frame10 != undefined) {
      finalscores.push(frame10.scores[0])
      if (frame10.scores[1] != null ) {
        finalscores.push(frame10.scores[1])
      }
      if (frame11 != undefined) {
        finalscores.push(frame11.scores[0])
      }
    }
    return finalscores;
  }
})
