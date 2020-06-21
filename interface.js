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

  var selectList = "<select id='roll'>";
  for (var x = 0; x < 11; x++) {
     selectList += `<option value='${x}'>` + x + "</option>";
  }
  selectList += "</select><input id='select' type='submit' value='enter'></input>";

  $('#bonus1').attr('class', 'hidden')
  $('#bonus2').attr('class', 'hidden')

  askForRoll('#roll1frame1')

  $('#roll1frame1').submit(function() {
    var roll = $('#roll').val();
    frame1.roll1(roll);
    $('#roll1frame1cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(1)
    } else {
      askForRoll('#roll2frame1')
    }
  })
  $('#roll2frame1').submit(function() {
    var roll = $('#roll').val();
    frame1.roll2(roll);
    $('#roll2frame1cell').html(roll);
    askForRoll('#roll1frame2')
    updateScores()
  })

  $('#roll1frame2').submit(function() {
    var roll = $('#roll').val();
    frame2.roll1(roll);
    $('#roll1frame2cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(2)
    } else {
      askForRoll('#roll2frame2')
    }
  })
  $('#roll2frame2').submit(function() {
    var roll = $('#roll').val();
    frame2.roll2(roll);
    $('#roll2frame2cell').html(roll);
    updateScores()
    askForRoll('#roll1frame3')
  })

  $('#roll1frame3').submit(function() {
    var roll = $('#roll').val();
    frame3.roll1(roll);
    $('#roll1frame3cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(3)
    } else {
      askForRoll('#roll2frame3')
    }
  })
  $('#roll2frame3').submit(function() {
    var roll = $('#roll').val();
    frame3.roll2(roll);
    $('#roll2frame3cell').html(roll);
    updateScores()
    askForRoll('#roll1frame4')
  })

  $('#roll1frame4').submit(function() {
    var roll = $('#roll').val();
    frame4.roll1(roll);
    $('#roll1frame4cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(4)
    } else {
      askForRoll('#roll2frame4')
    }
  })
  $('#roll2frame4').submit(function() {
    var roll = $('#roll').val();
    frame4.roll2(roll);
    $('#roll2frame4cell').html(roll);
    updateScores()
    askForRoll('#roll1frame5')
  })

  $('#roll1frame5').submit(function() {
    var roll = $('#roll').val();
    frame5.roll1(roll);
    $('#roll1frame5cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(5)
    } else {
      askForRoll('#roll2frame5')
    }
  })
  $('#roll2frame5').submit(function() {
    var roll = $('#roll').val();
    frame5.roll2(roll);
    $('#roll2frame5cell').html(roll);
    updateScores()
    askForRoll('#roll1frame6')
  })

  $('#roll1frame6').submit(function() {
    var roll = $('#roll').val();
    frame6.roll1(roll);
    $('#roll1frame6cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(6)
    } else {
      askForRoll('#roll2frame6')
    }
  })
  $('#roll2frame6').submit(function() {
    var roll = $('#roll').val();
    frame6.roll2(roll);
    $('#roll2frame6cell').html(roll);
    updateScores()
    askForRoll('#roll1frame7')
  })

  $('#roll1frame7').submit(function() {
    var roll = $('#roll').val();
    frame7.roll1(roll);
    $('#roll1frame7cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(7)
    } else {
      askForRoll('#roll2frame7')
    }
  })
  $('#roll2frame7').submit(function() {
    var roll = $('#roll').val();
    frame7.roll2(roll);
    $('#roll2frame7cell').html(roll);
    updateScores()
    askForRoll('#roll1frame8')
  })

  $('#roll1frame8').submit(function() {
    var roll = $('#roll').val();
    frame8.roll1(roll);
    $('#roll1frame8cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(8)
    } else {
      askForRoll('#roll2frame8')
    }
  })
  $('#roll2frame8').submit(function() {
    var roll = $('#roll').val();
    frame8.roll2(roll);
    $('#roll2frame8cell').html(roll);
    updateScores()
    askForRoll('#roll1frame9')
  })

  $('#roll1frame9').submit(function() {
    var roll = $('#roll').val();
    frame9.roll1(roll);
    $('#roll1frame9cell').html(roll);
    updateScores()
    if (roll == 10) {
      strike(9)
    } else {
      askForRoll('#roll2frame9')
    }
  })
  $('#roll2frame9').submit(function() {
    var roll = $('#roll').val();
    frame9.roll2(roll);
    $('#roll2frame9cell').html(roll);
    updateScores()
    askForRoll('#roll1frame10')
  })

  $('#roll1frame10').submit(function() {
    var roll = $('#roll').val();
    frame10.roll1(roll);
    $('#roll1frame10cell').html(roll);
    updateScores()
    if (roll == 10) {
      makevisible('#bonus1')
      strike(10)
    } else {
      askForRoll('#roll2frame10')
    }
  })
  $('#roll2frame10').submit(function() {
    var roll = $('#roll').val();
    frame10.roll2(roll);
    $('#roll2frame10cell').html(roll);
    updateScores()
    makevisible('#bonus1')
    askForRoll('#roll1frame11')
  })

  $('#roll1frame11').submit(function() {
    var roll = $('#roll').val();
    frame11.roll1(roll);
    $('#roll1frame11cell').html(roll);
    updateScores()
    if (roll == 10) {
      makevisible('#bonus2')
      strike(11)
    } else {
      askForRoll('#roll2frame11')
    }
  })
  $('#roll2frame11').submit(function() {
    var roll = $('#roll').val();
    frame11.roll2(roll);
    $('#roll2frame11cell').html(roll);
    updateScores()
    makevisible('#bonus2')
    askForRoll('#roll1frame12')
  })

  $('#roll1frame12').submit(function() {
    var roll = $('#roll').val();
    frame12.roll1(roll);
    $('#roll1frame12cell').html(roll);
    updateScores()
  })

  function strike(frameNum) {
    askForRoll(`#roll1frame${frameNum + 1}`)
  }

  function updateScores() {
    for (var i = 1; i < 11; i ++) {
      if(isNaN(scorecard.score(i))) {
      }else{
        $(`#scoreframe${i}`).html(scorecard.score(i));
      }
    }
  }

  $('#my-container').html(selectList);

  function askForRoll(id) {
    $(`${id}`).html(selectList);
  }

  function makevisible(id) {
      $(`${id}`).attr('class', 'visible');
  }

});
