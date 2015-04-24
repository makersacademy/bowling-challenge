$(document).ready(function(){

  var scorecard = new Bowling();

  $('#begin').click(function() {
    $('.mainCard').fadeTo('slow', 2, function(){});
    $('#begin').hide();
    update();
  });

  // Reach into button and wipe what is in it.
  $('#submit').click(function() {
    scorecard.bowl(parseInt($('#scoring').val()));
    $('#scoring').val('');
    update();
  });

  // save for later
  // $( "input" )
  // .keyup(function() {
  //   var value = $( this ).val();
  //   $( "p" ).text( value );
  // })
  // .keyup();

  var update = function(){
    var allFrames = scorecard.allFramesScore();
    $('#frame1_1').text(scorecard.frames[1].score);
    $('#frame2_1').text(scorecard.frames[2].score);
    $('#frame3_1').text(scorecard.frames[3].score);
    $('#frame4_1').text(scorecard.frames[4].score);
    $('#frame5_1').text(scorecard.frames[5].score);
    $('#frame6_1').text(scorecard.frames[6].score);
    $('#frame7_1').text(scorecard.frames[7].score);
    $('#frame8_1').text(scorecard.frames[8].score);
    $('#frame9_1').text(scorecard.frames[9].score);
    $('#frame10_1').text(scorecard.frames[10].score);
    $('#finalscore').text(scorecard.finalScore());
  };

});