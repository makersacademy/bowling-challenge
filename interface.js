$(document).ready(function() {

  var frame1 = new Frame
  var frame2 = new Frame
  var frame3 = new Frame
  var frame4 = new Frame
  var frame5 = new Frame
  var frame6 = new Frame
  var frame7 = new Frame
  var frame8 = new Frame
  var frame9 = new Frame
  var frame10 = new Frame
  var frame11 = new Frame
  var frame12 = new Frame

  var frames = [frame1, frame2, frame3, frame4, frame5, frame6,
    frame7, frame8, frame9, frame10, frame11, frame12]

  var score1 = new Score(frame1,frame2,frame3)
  var score2 = new Score(frame2,frame3,frame4)
  var score3 = new Score(frame3,frame4,frame5)
  var score4 = new Score(frame4,frame5,frame6)
  var score5 = new Score(frame5,frame6,frame7)
  var score6 = new Score(frame6,frame7,frame8)
  var score7 = new Score(frame7,frame8,frame9)
  var score8 = new Score(frame8,frame9,frame10)
  var score9 = new Score(frame9,frame10,frame11)
  var score10 = new Score(frame10,frame11,frame12)

  var scorecard = new Scorecard([score1, score2, score3, score4, score5,
     score6, score7, score8, score9, score10])

  $('#bonus1').attr('class', 'hidden')
  $('#bonus2').attr('class', 'hidden')

  askForRoll('#roll1frame1', 0)

  $('#roll1frame1').submit(function() {
    roll1(1)
  })
  $('#roll2frame1').submit(function() {
    roll2(1)
  })

  $('#roll1frame2').submit(function() {
    roll1(2)
  })
  $('#roll2frame2').submit(function() {
    roll2(2)
  })

  $('#roll1frame3').submit(function() {
    roll1(3)
  })
  $('#roll2frame3').submit(function() {
    roll2(3)
  })

  $('#roll1frame4').submit(function() {
    roll1(4)
  })
  $('#roll2frame4').submit(function() {
    roll2(4)
  })

  $('#roll1frame5').submit(function() {
    roll1(5)
  })
  $('#roll2frame5').submit(function() {
    roll2(5)
  })

  $('#roll1frame6').submit(function() {
    roll1(6)
  })
  $('#roll2frame6').submit(function() {
    roll2(6)
  })

  $('#roll1frame7').submit(function() {
    roll1(7)
  })
  $('#roll2frame7').submit(function() {
    roll2(7)
  })

  $('#roll1frame8').submit(function() {
    roll1(8)
  })
  $('#roll2frame8').submit(function() {
    roll2(8)
  })

  $('#roll1frame9').submit(function() {
    roll1(9)
  })
  $('#roll2frame9').submit(function() {
    roll2(9)
  })

  $('#roll1frame10').submit(function() {
    roll1(10)
    if (frame10.roll1result() === 10) {
      makevisible('#bonus1')
    }
  })
  $('#roll2frame10').submit(function() {
    roll2(10)
    if (isNaN(scorecard.score(10))) {
      makevisible('#bonus1')
    }
  })

  $('#roll1frame11').submit(function() {
    roll1(11)
    if (frame11.roll1result() === 10) {
      makevisible('#bonus2')
    } else {
      makevisible('#roll2frame11cell')
    }
  })
  $('#roll2frame11').submit(function() {
    var roll = $('#roll').val();
    frame11.roll2(roll);
    $('#roll2frame11cell').html(roll);
    updateScores()
  })

  $('#roll1frame12').submit(function() {
    var roll = $('#roll').val();
    frame12.roll1(roll);
    $('#roll1frame12cell').html(roll);
    updateScores()
  })

  function roll1(frame) {
    var roll = $('#roll').val();
    frames[frame - 1].roll1(roll);
    $(`#roll1frame${frame}cell`).html(roll);
    updateScores()
    if (roll == 10) {
      strike(frame)
    } else {
      askForRoll(`#roll2frame${frame}`, roll)
    }
  }

  function roll2(frame) {
    var roll = $('#roll').val();
    frames[frame - 1].roll2(roll);
    $(`#roll2frame${frame}cell`).html(roll);
    updateScores()
    askForRoll(`#roll1frame${frame + 1}`, 0)
  }

  function strike(frameNum) {
    askForRoll(`#roll1frame${frameNum + 1}`, 0)
  }

  function updateScores() {
    for (var i = 1; i < 11; i ++) {
      if(isNaN(scorecard.score(i))) {
      }else{
        $(`#scoreframe${i}`).html(scorecard.score(i));
      }
    }
  }

  function askForRoll(id, number) {
    var selectList = "<select id='roll'>";
    for (var x = 0; x < (11 - number); x++) {
       selectList += `<option value='${x}'>` + x + "</option>";
    }
    selectList += "</select><input id='select' type='submit' value='enter'></input>";
    $(`${id}`).html(selectList);
  }

  function makevisible(id) {
      $(`${id}`).attr('class', 'visible');
  }

});
