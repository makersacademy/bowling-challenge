var scorecard = new Scorecard();

function loadTable() {
  loadTotal()
  loadFrames()
}

function loadTotal() {
  document.getElementById("total").innerHTML = scorecard.totalScore
}

function loadFrames() {
  for (var i = 0; i < scorecard.frames.length; i++) {
    loadFrameTotal(i)
    if (i === 9) {
      loadFrameTen()
    } else {
      loadBallOne(i)
      loadBallTwo(i)
    }
  }
}

function loadFrameTen(i) {
  frame = scorecard.frames[9]
  if (frame.rollOne === 10) {
    document.getElementById("f9b1").innerHTML = 'X'
    if (frame.bonus != null) {
      if (frame.bonus === 10) {
        document.getElementById("f9b2").innerHTML = 'X'
      } else {
        document.getElementById("f9b2").innerHTML = frame.bonus
      }
    }
    if (frame.bonusTwo != null) {
      if (frame.bonusTwo === 10) {
        document.getElementById("f9b3").innerHTML = 'X'
      } else {
        if (frame.bonus + frame.bonusTwo === 10) {
          document.getElementById("f9b3").innerHTML = '/'
        } else {
        document.getElementById("f9b3").innerHTML = frame.bonusTwo
        }
      }
    }
  } else {
    document.getElementById("f9b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null)
      if (frame.rollOne + frame.rollTwo === 10) {
        document.getElementById("f9b2").innerHTML = '/'
        if (frame.bonus != null) {
          if (frame.bonus === 10) {
            document.getElementById("f9b3").innerHTML = 'X'
          } else {
            document.getElementById("f9b3").innerHTML = frame.bonus
          }
        }
      } else {
      document.getElementById("f9b2").innerHTML = frame.rollTwo
    }
  }
}

function loadFrameTotal(i) {
  document.getElementById("total"+i).innerHTML = scorecard.frames[i].frameScore()
}

function loadBallOne(i) {
  frame = scorecard.frames[i]
  if (frame.rollOne === 10) { document.getElementById("f"+i+"b2").innerHTML = 'X' }
  else { document.getElementById("f"+i+"b1").innerHTML = frame.rollOne }
}

function loadBallTwo(i) {
  frame = scorecard.frames[i]
  if (frame.rollTwo != null) {
    if (frame.rollOne + frame.rollTwo === 10) { document.getElementById("f"+i+"b2").innerHTML = '/' }
    else { document.getElementById("f"+i+"b2").innerHTML = frame.rollTwo }
  }
}


  document.getElementById("0").addEventListener('click', function() {
    scorecard.rollBall(0)
    loadTable()
  });

  document.getElementById("1").addEventListener('click', function() {
    scorecard.rollBall(1)
    loadTable()
  });

  document.getElementById("2").addEventListener('click', function() {
    scorecard.rollBall(2)
    loadTable()
  });

  document.getElementById("3").addEventListener('click', function() {
    scorecard.rollBall(3)
    loadTable()
  });

  document.getElementById("4").addEventListener('click', function() {
    scorecard.rollBall(4)
    loadTable()
  });

  document.getElementById("5").addEventListener('click', function() {
    scorecard.rollBall(5)
    loadTable()
  });

  document.getElementById("6").addEventListener('click', function() {
    scorecard.rollBall(6)
    loadTable()
  });

  document.getElementById("7").addEventListener('click', function() {
    scorecard.rollBall(7)
    loadTable()
  });

  document.getElementById("8").addEventListener('click', function() {
    scorecard.rollBall(8)
    loadTable()
  });

  document.getElementById("9").addEventListener('click', function() {
    scorecard.rollBall(9)
    loadTable()
  });

  document.getElementById("10").addEventListener('click', function() {
    scorecard.rollBall(10)
    loadTable()
  });
