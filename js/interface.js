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

  var getRoll = function() {
    $('td').on('click', function() {
      alert(this.id)
    });
  };

  getRoll();

  $('#firstRoll1').submit(function(event) {
    event.preventDefault();
    var score = Number($("#1roll1").val());
    frame1.firstRoll(score);
    console.log(frame1)
    $('#firstRoll1').text(frame1.rollOne);
    if (frame1._isStrike()) {
      scorer.addFrame(frame1);
      $('#secondRoll1').text("-");
    };
  });
  $('#secondRoll1').submit(function(event) {
    event.preventDefault();
    var score = Number($("#1roll2").val());
    frame1.secondRoll(score);
    console.log(frame1)
    $('#secondRoll1').text(frame1.rollTwo);
    scorer.addFrame(frame1);
  });


});
