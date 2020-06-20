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

  updateScores()

  $('#roll1frame1').submit(function() {
    var roll = $('#roll').val();
    frame1.roll1(roll);
    $('#roll1frame1cell').html(roll);
    updateScores()
  })
  $('#roll2frame1').submit(function() {
    var roll = $('#roll').val();
    frame1.roll2(roll);
    $('#roll2frame1cell').html(roll);
    updateScores()
  })

  $('#roll1frame2').submit(function() {
    var roll = $('#roll').val();
    frame2.roll1(roll);
    $('#roll1frame2cell').html(roll);
    updateScores()
  })
  $('#roll2frame2').submit(function() {
    var roll = $('#roll').val();
    frame2.roll2(roll);
    $('#roll2frame2cell').html(roll);
    updateScores()
  })

  $('#roll1frame3').submit(function() {
    var roll = $('#roll').val();
    frame3.roll1(roll);
    $('#roll1frame3cell').html(roll);
    updateScores()
  })
  $('#roll2frame3').submit(function() {
    var roll = $('#roll').val();
    frame3.roll2(roll);
    $('#roll2frame3cell').html(roll);
    updateScores()
  })

  $('#roll1frame4').submit(function() {
    var roll = $('#roll').val();
    frame4.roll1(roll);
    $('#roll1frame4cell').html(roll);
    updateScores()
  })
  $('#roll2frame4').submit(function() {
    var roll = $('#roll').val();
    frame4.roll2(roll);
    $('#roll2frame4cell').html(roll);
    updateScores()
  })

  $('#roll1frame5').submit(function() {
    var roll = $('#roll').val();
    frame5.roll1(roll);
    $('#roll1frame5cell').html(roll);
    updateScores()
  })
  $('#roll2frame5').submit(function() {
    var roll = $('#roll').val();
    frame5.roll2(roll);
    $('#roll2frame5cell').html(roll);
    updateScores()
  })

  $('#roll1frame6').submit(function() {
    var roll = $('#roll').val();
    frame6.roll1(roll);
    $('#roll1frame6cell').html(roll);
    updateScores()
  })
  $('#roll2frame6').submit(function() {
    var roll = $('#roll').val();
    frame6.roll2(roll);
    $('#roll2frame6cell').html(roll);
    updateScores()
  })

  $('#roll1frame7').submit(function() {
    var roll = $('#roll').val();
    frame7.roll1(roll);
    $('#roll1frame7cell').html(roll);
    updateScores()
  })
  $('#roll2frame7').submit(function() {
    var roll = $('#roll').val();
    frame7.roll2(roll);
    $('#roll2frame7cell').html(roll);
    updateScores()
  })

  $('#roll1frame8').submit(function() {
    var roll = $('#roll').val();
    frame8.roll1(roll);
    $('#roll1frame8cell').html(roll);
    updateScores()
  })
  $('#roll2frame8').submit(function() {
    var roll = $('#roll').val();
    frame8.roll2(roll);
    $('#roll2frame8cell').html(roll);
    updateScores()
  })

  $('#roll1frame9').submit(function() {
    var roll = $('#roll').val();
    frame9.roll1(roll);
    $('#roll1frame9cell').html(roll);
    updateScores()
  })
  $('#roll2frame9').submit(function() {
    var roll = $('#roll').val();
    frame9.roll2(roll);
    $('#roll2frame9cell').html(roll);
    updateScores()
  })

  $('#roll1frame10').submit(function() {
    var roll = $('#roll').val();
    frame10.roll1(roll);
    $('#roll1frame10cell').html(roll);
    updateScores()
  })
  $('#roll2frame10').submit(function() {
    var roll = $('#roll').val();
    frame10.roll2(roll);
    $('#roll2frame10cell').html(roll);
    updateScores()
  })

  $('#roll1frame11').submit(function() {
    var roll = $('#roll').val();
    frame11.roll1(roll);
    $('#roll1frame11cell').html(roll);
    updateScores()
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
  $('#roll2frame12').submit(function() {
    var roll = $('#roll').val();
    frame12.roll2(roll);
    $('#roll2frame12cell').html(roll);
    updateScores()
  })

  function updateScores() {
    for (var i = 0; i < 10; i ++) {
      if(isNaN(scorecard.score(i))) {
      }else{
        $(`#scoreframe${i}`).html(scorecard.score(i));
      }
    }
  }

});
