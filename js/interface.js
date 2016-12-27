$( document ).ready(function(){
  var frame1 = new Frame();
  var frame2 = new Frame();
  var frame3 = new Frame();
  var frame4 = new Frame();
  var frame5 = new Frame();
  var frame6 = new Frame();
  var frame7 = new Frame();
  var frame8 = new Frame();
  var frame9 = new Frame();
  var frame10 = new Frame();
  var scorer = new bowlingScorer();

  var updateScore = function() {
    $('#firstRoll1').text(frame1.rollOne);
  }

  $('#firstRoll1').submit(function(event) {
    event.preventDefault();
    var score = $("#1roll1").val();
    console.log(score)
    frame1.firstRoll(score);
    updateScore();
  });
});
