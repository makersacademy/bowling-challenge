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


  $('#roll1frame1').submit(function(event) {
    console.log("yes")
    var roll = $('#roll').val();
    frame1.roll1(roll);
    $('#roll1frame1cell').html(roll);
    console.log(frame1.roll1result())
    updateScores()
  })
  $('#roll2frame1').submit(function(event) {
    console.log("yes")
    var roll = $('#roll').val();
    frame1.roll2(roll);
    $('#roll2frame1cell').html(roll);
    console.log(frame1.roll2result())
    updateScores()
  })

  $('#roll1frame2').submit(function(event) {
    console.log("yes")
    var roll = $('#roll').val();
    frame2.roll1(roll);
    $('#roll1frame2cell').html(roll);
    console.log(frame2.roll1result())
    updateScores()
  })
  $('#roll2frame2').submit(function(event) {
    console.log("yes")
    var roll = $('#roll').val();
    frame2.roll2(roll);
    $('#roll2frame2cell').html(roll);
    console.log(frame2.roll2result())
    updateScores()
  })

  function updateScores() {
    if(isNaN(score1.score())){
    }else{
      console.log(score1.score())
      console.log(scorecard.score(1))
	     $('#scoreframe1').html(scorecard.score(1));
    }
    if(isNaN(score2.score())){
    }else{
      console.log(score2.score())
      console.log(scorecard.score(2))
	     $('#scoreframe2').html(scorecard.score(2));
    }
  }

});
