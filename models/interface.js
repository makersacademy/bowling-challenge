var scorecard = new Scorecard();

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("total").innerHTML = scorecard.totalScore
})

function loadTable() {
  document.getElementById("total").innerHTML = scorecard.totalScore
  if (scorecard.frames[0]) {
    frame = scorecard.frames[0]
    document.getElementById("marker0").innerHTML = frame.frameScore()
    document.getElementById("f1b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f1b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[1]) {
    frame = scorecard.frames[1]
    document.getElementById("marker1").innerHTML = scorecard.frames[1].frameScore()
    document.getElementById("f2b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f2b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[2]) {
    frame = scorecard.frames[2]
    document.getElementById("marker2").innerHTML = scorecard.frames[2].frameScore()
    document.getElementById("f3b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f3b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[3]) {
    frame = scorecard.frames[3]
    document.getElementById("marker3").innerHTML = scorecard.frames[3].frameScore()
    document.getElementById("f4b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f4b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[4]) {
    frame = scorecard.frames[4]
    document.getElementById("marker4").innerHTML = scorecard.frames[4].frameScore()
    document.getElementById("f5b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f5b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[5]) {
    frame = scorecard.frames[5]
    document.getElementById("marker5").innerHTML = scorecard.frames[5].frameScore()
    document.getElementById("f6b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f6b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[6]) {
    frame = scorecard.frames[6]
    document.getElementById("marker6").innerHTML = scorecard.frames[6].frameScore()
    document.getElementById("f7b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f7b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[7]) {
    frame = scorecard.frames[7]
    document.getElementById("marker7").innerHTML = scorecard.frames[7].frameScore()
    document.getElementById("f8b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f8b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[8]) {
    frame = scorecard.frames[8]
    document.getElementById("marker8").innerHTML = scorecard.frames[8].frameScore()
    document.getElementById("f9b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f9b2").innerHTML = frame.rollTwo }
  }
  if (scorecard.frames[9]) {
    frame = scorecard.frames[9]
    document.getElementById("marker9").innerHTML = scorecard.frames[9].frameScore()
    document.getElementById("f10b1").innerHTML = frame.rollOne
    if (frame.rollTwo != null) { document.getElementById("f10b2").innerHTML = frame.rollTwo }
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
