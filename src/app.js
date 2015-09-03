$(document).ready(function(){
  var scoreCard
  $('section.ScoreCard').hide();
  $('section.Scoring').hide();
  $('section.ScoreDisplay').hide();

  $('button.NewGame').click(function() {
    if($('div.ending').is(':visible')) {
      $('div.ending').remove();
    }
    scoreCard = new ScoreCard();
    scoreCard.setUp();
    $('section.ScoreCard').fadeIn(500);
    $('section.Scoring').fadeIn(500);
    $('section.ScoreDisplay').fadeIn(500);
    clearDisplay();
    clearInvalidPins(0);
    updateScores();
  });

  $('button.scoring').click(function(event) {
    var et = event.target;
    var pinsDown = Number(et.id);
    scoreCard.takeTurn(pinsDown);
    displayPins();
    updateScores();
    clearInvalidPins(pinsDown);
    isEndGame();
  });

  function clearDisplay() {
    for(var i=1; i<=10; i++) {
      $('td[frame='+i+'][roll=1]').empty();
      $('td[frame='+i+'][roll=2]').empty();
      $('td[frame='+i+'][roll=3]').empty();
    }
  };

  function displayPins() {
    var frame = 1
    for (var val of scoreCard.framesMap.values()) {
      if(val.length === 1) { $('td[frame='+frame+'][roll=1]').html(val[0]);
      }
      if(val.length === 2) { $('td[frame='+frame+'][roll=1]').html(val[0]);
                            $('td[frame='+frame+'][roll=2]').html(val[1]);
      }
      if(val.length === 3) { $('td[frame='+frame+'][roll=1]').html(val[0]);
                            $('td[frame='+frame+'][roll=2]').html(val[1]);
                            $('td[frame='+frame+'][roll=3]').html(val[2]);
      }
      frame++
    }
  };

  function updateScores() {
    $('article.pins').html(scoreCard.pinsDown());
    $('article.bonus').html(scoreCard.currentBonus());
    $('article.total').html(scoreCard.currentScore());
  };

  function clearInvalidPins(pins) {
    if(scoreCard.rollsCount % 2 === 0) {
      $('button.scoring:hidden').fadeIn(500);
    }
    else {
      for(var i=10; i>=1; i--) {
        if(i+pins > 10) { $('button.scoring#'+i).fadeOut(200); }
      }
    }
  };

  function isEndGame() {
    var tenthFrame = scoreCard.framesMap.get(10)
    if(tenthFrame.length === 3 || (tenthFrame.length === 2 && (tenthFrame[0] + tenthFrame[1] < 10 && tenthFrame[0] < 10 ))) {
      if(scoreCard.currentScore() === 0){
        gutterGame();
      }
      else {
        endTheGame();
        updateScores();
      }
    }
  };

  function endTheGame() {
    $('section.ScoreCard').hide();
    $('section.Scoring').hide();
    $('body').append('<br><div class="ending">Game Over!</div>')
  };

  function gutterGame() {
    $('section.ScoreCard').hide();
    $('section.Scoring').hide();
    $('body').append('<br><div class="ending">You played a GUTTER GAME!</div>')
  };

});
