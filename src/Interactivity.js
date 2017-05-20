$('document').ready(function() {

  $(document).on("click", "#submit-name", function() {
    if ($('#player-name').val() !== "") {
      var player_name = $('#player-name').val();
      $('#player-name-box').append(player_name);
      $('#name-input-form').hide();
      $('.score-buttons').show();
      $('#new-game').show();
    }
  });
    
  var Frame = FrameFile.Frame;
  var Game = OnePlayerGameFile.OnePlayerGame;
  var game = new Game();
  $(document).on("click", "#new-game", function() {
    location.reload();
  });

  $(document).on("click", "#0", function() {
    game.roll(0);
    updateScorecard(0);
  });

  $(document).on("click", "#1", function() {
    game.roll(1);
    updateScorecard(1);
  });

  $(document).on("click", "#2", function() {
    game.roll(2);
    updateScorecard(2);
  });

  $(document).on("click", "#3", function() {
    game.roll(3);
    updateScorecard(3);
  });

  $(document).on("click", "#4", function() {
    game.roll(4);
    updateScorecard(4);
  });

  $(document).on("click", "#5", function() {
    game.roll(5);
    updateScorecard(5);
  });

  $(document).on("click", "#6", function() {
    game.roll(6);
    updateScorecard(6);
  });

  $(document).on("click", "#7", function() {
    game.roll(7);
    updateScorecard(7);
  });

  $(document).on("click", "#8", function() {
    game.roll(8);
    updateScorecard(8);
  });

  $(document).on("click", "#9", function() {
    game.roll(9);
    updateScorecard(9);
  });

  $(document).on("click", "#10", function() {
    game.roll(10);
    updateScorecard(10);
  });

  var updateScorecard = function(score) {
    $('#box-1').text(game.frame1.box1());
    $('#box-2').text(game.frame1.box2());
    $('#box-3').text(game.frame2.box1());
    $('#box-4').text(game.frame2.box2());
    $('#box-5').text(game.frame3.box1());
    $('#box-6').text(game.frame3.box2());
    $('#box-7').text(game.frame4.box1());
    $('#box-8').text(game.frame4.box2());
    $('#box-9').text(game.frame5.box1());
    $('#box-10').text(game.frame5.box2());
    $('#box-11').text(game.frame6.box1());
    $('#box-12').text(game.frame6.box2());
    $('#box-13').text(game.frame7.box1());
    $('#box-14').text(game.frame7.box2());
    $('#box-15').text(game.frame8.box1());
    $('#box-16').text(game.frame8.box2());
    $('#box-17').text(game.frame9.box1());
    $('#box-18').text(game.frame9.box2());
    $('#box-19').text(game.frame10.box1());
    $('#box-20').text(game.frame10.frame10Box2());
    $('#box-21').text(game.frame10.frame10Box3());
    $('#score-1').text(game.frame1.totalScore());
    $('#score-2').text(game.frame2.totalScore());
    $('#score-3').text(game.frame3.totalScore());
    $('#score-4').text(game.frame4.totalScore());
    $('#score-5').text(game.frame5.totalScore());
    $('#score-6').text(game.frame6.totalScore());
    $('#score-7').text(game.frame7.totalScore());
    $('#score-8').text(game.frame8.totalScore());
    $('#score-9').text(game.frame9.totalScore());
    $('#score-10').text(game.frame10.totalScore());
    $('#player-score-box').text(game.getScore());
    if (game.frame10.totalScore()) {
      $('.score-buttons').hide();
    } else if (game.frame10.totalScore() === 0) {
      $('.score-buttons').hide();
    } else if (game.frame10.frame10Box2() && game.frame10.isActive() || game.latestActiveFrame.box1() === null) {
      for (var h = 1; h <= 10; h++) {
        $('#' + h).show();
        if (h < 10) {
          $('#' + h).text(h);
        } else if (h === 10) {
          $('#' + h).text('X');
        }
      }
    } else if (game.latestActiveFrame.box2() === null && score < 10) {
      var pinsLeft = 10 - score;
      for (var i = 1; i <= 10; i++) {
        if (i > pinsLeft) {
          $('#' + i).hide();
        } else if (i === pinsLeft) {
          $('#' + i).text('/');
        }
      }
    }
    console.log(game.frame10.totalScore());
    console.log(game.frame10.isActive());

  };
});
