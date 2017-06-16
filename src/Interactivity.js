$('document').ready(function() {

  $(document).on("click", "#submit-name", function() {
    if ($('#player-name').val() !== "") {
      $('#player-name-box').append($('#player-name').val());
      $('#name-input-form').hide();
      $('.score-buttons').show();
      $('#new-game').show();
    }
  });
    
  var Game = OnePlayerGameFile.OnePlayerGame;
  var game = new Game();
  $(document).on("click", "#new-game", function() {
    location.reload();
  });

  $(document).on("click", ".score-button", function() {
    var pinsKnockedOver = parseInt(this.id);
    game.roll(pinsKnockedOver);
    updateScorecard();
    reRenderButtons(pinsKnockedOver);
  });

  var updateScorecard = function() {
    //Unfortunately my domain model requires a long list somewhere to update everything, and I've decided to put it here.
    $('#box1').text(game.frame1.box1());
    $('#box2').text(game.frame1.box2());
    $('#box3').text(game.frame2.box1());
    $('#box4').text(game.frame2.box2());
    $('#box5').text(game.frame3.box1());
    $('#box6').text(game.frame3.box2());
    $('#box7').text(game.frame4.box1());
    $('#box8').text(game.frame4.box2());
    $('#box9').text(game.frame5.box1());
    $('#box10').text(game.frame5.box2());
    $('#box11').text(game.frame6.box1());
    $('#box12').text(game.frame6.box2());
    $('#box13').text(game.frame7.box1());
    $('#box14').text(game.frame7.box2());
    $('#box15').text(game.frame8.box1());
    $('#box16').text(game.frame8.box2());
    $('#box17').text(game.frame9.box1());
    $('#box18').text(game.frame9.box2());
    $('#box19').text(game.frame10.box1());
    $('#box20').text(game.frame10.frame10Box2());
    $('#box21').text(game.frame10.frame10Box3());
    $('#score1').text(game.frame1.totalScore());
    $('#score2').text(game.frame2.totalScore());
    $('#score3').text(game.frame3.totalScore());
    $('#score4').text(game.frame4.totalScore());
    $('#score5').text(game.frame5.totalScore());
    $('#score6').text(game.frame6.totalScore());
    $('#score7').text(game.frame7.totalScore());
    $('#score8').text(game.frame8.totalScore());
    $('#score9').text(game.frame9.totalScore());
    $('#score10').text(game.frame10.totalScore());
    $('#player_score_box').text(game.getScore());
    // Long list complete.
  };
  var resetButtons = function() {
    for (var value = 1; value <= 10; value++) {
      $('#' + value).show();
      if (value < 10) {
        $('#' + value).text(value);
      } else if (value === 10) {
        $('#' + value).text('X');
      }
    }
  };
  var hideInvalidScoreButtons = function(score) {
    var pinsLeft = 10 - score;
    for (var button = 1; button <= 10; button++) {
      if (button > pinsLeft) {
        $('#' + button).hide();
      } else if (button === pinsLeft) {
        $('#' + button).text('/');
      }
    }
  };
  
  var reRenderButtons = function(score) {
    if (game.latestActiveFrame.box1() === null) {
      resetButtons();
    } else if (game.latestActiveFrame.box2() === null && score < 10) {
      hideInvalidScoreButtons(score);
    }

    //Frame 10

    if (game.frame10.totalScore()) {
      $('.score-buttons').hide();
    } else if (game.frame10.totalScore() === 0) {
      $('.score-buttons').hide();
    } else if (game.frame10.frame10Box2() === 'X' && game.frame10._nextRoll === 3) {
      resetButtons();
    } else if (game.frame10.frame10Box2() === '/' && game.frame10._nextRoll === 3) {
      resetButtons();
    } else if (game.frame10._nextRoll === 3) {
      hideInvalidScoreButtons(game.frame10.box2());
    }

  };
});
