$(document).ready(function(){

  var scorecard = new Bowling();

  $('#begin').click(function() {
    $('.mainCard').fadeTo('slow', 2, function(){});
    $('#start').hide();
    updateScores();
  });

  $('.buttons').click(function() {
    var bowl = Number($(this).val())
    try {
      scorecard.bowl(bowl);
    } catch(err) {
      alert(err);
    };
    buttonManage();
    updateScores();
  });

  var buttonManage = function() {
    // Hacky fix for buttons disappearing on last round
    // Buttons disappear due to pinsLeft being 0, however
    // the frame function can't be updated without breaking 
    // everything.
    // The 'fix' allows illegal numbers to be entered however.
    if(scorecard.bowlingFrame >= 10) {
      for(var i = 1; i <= 10; i++) {
        $('.buttons[value = ' + i + ']').show();
      };
    } else {
      var left = scorecard.frames[scorecard.bowlingFrame].pinsLeft;
      for(var i = 10; i > left; i--) {
        $('.buttons[value = ' + i + ']').hide();
      };
      for(var i = 1; i <= left; i++) {
        $('.buttons[value = ' + i + ']').show();
      };
    };
  };

  var updateScores = function() {
    for (var i = 1; i <= 10; i++) {
      $('#frame' + String(i) + '_1').text(scorecard.frames[i].score);
    };
    $('#finalscore').text(scorecard.finalScore());
  };

});