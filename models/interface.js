var scorecard = new Scorecard();

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("total").innerHTML = scorecard.totalScore
})

function loadTable() {
  document.getElementById("total").innerHTML = scorecard.totalScore
  for (var i = 0; i < scorecard.frames.length; i++) {
      frame = scorecard.frames[i]
      document.getElementById("marker" + i).innerHTML = scorecard.frames[i].frameScore()
      if (frame.rollOne === 10) { document.getElementById("f" + (i+1) + "b2").innerHTML = 'X' }
      else { document.getElementById("f" + (i+1) + "b1").innerHTML = frame.rollOne }
      if (frame.rollTwo != null) {
        if (frame.rollOne + frame.rollTwo === 10) { document.getElementById("f" + (i+1) + "b2").innerHTML = '/' }
        else { document.getElementById("f" + (i+1) + "b2").innerHTML = frame.rollTwo }
    }
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
