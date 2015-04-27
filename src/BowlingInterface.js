$(function() {

  var contest = new BowlingContest();

  var displayGame = function() {
    if(contest.isOver()) {
      var winMessage = (contest.winner() != "Draw" ? '<h1>' + contest.winner().name + ' wins!</h1>' : '<h1>It\'s a draw!</h1>')
      $(".roll-buttons").hide();
      $("#game-container").html(winMessage + createPlayerHTML());
      console.log(winMessage + createPlayerHTML());
      $("#current-player").hide();
    } else {
      $("#new-player-name").val("");
      var currentPlayer = (contest.numberOfPlayers() > 0 ? contest.currentPlayer() : "");
      $("#current-player").text("Current player: " + currentPlayer.name);
      if (contest.isReady) {
        $(".add-player").hide();
        $("#btn-ready").hide();
        $(".roll-buttons").show();
        enableButtons();
        $("#current-player").show();
      } else {
        $(".add-player").show();
        $(".roll-buttons").hide();
        $("#current-player").hide();
        contest.numberOfPlayers() > 0 ? $("#btn-ready").show() : $("#btn-ready").hide();
      }
    }
    $("#game-container").html(createPlayerHTML());
  };

  $("#frm-add-player").on('submit', function(form) {
    form.preventDefault();
    var name = $("#new-player-name").val();
    var player = new Player(name);
    player.game = new Game();
    contest.addPlayer(player);
    displayGame();
  });

  $("#btn-ready").on('click', function(button) {
    button.preventDefault();
    contest.setToReady();
    displayGame();
  });

  $(".btn.roll").on('click', function(button) {
    button.preventDefault();
    var rollValue = parseInt(this.value);
    contest.currentPlayer().roll(rollValue);
    displayGame();
  });

  var enableButtons = function() {
    for (var i = 0; i < 11; i ++) {
      var button = $("#roll-" + i)
      button.removeAttr('disabled');
      if (parseInt(button.val()) > (contest.currentPlayer().game.currentFrame().maxScore - contest.currentPlayer().game.currentFrame().rollTotal())) {
        button.prop('disabled', 'true');
      }
    }
  };

  var createPlayerHTML = function() {
    var playerContainerHTML = '';
      for (var i = 0; i < contest.numberOfPlayers(); i ++) {
        var playerRow = '';
        playerRow += '<article class="player-row" id="player-row-' + (i + 1) + '">';
        playerRow += '<p class="player-name">' + contest.playerArray()[i].name + '</p>';
        playerRow += '<section class="score-container">'
        for (var j = 0; j < 10; j ++) {
          playerRow += '<detail class="frame">'
          for (var k = 0; k < contest.playerArray()[i].game.frames[j].totalRolls; k ++) {
            playerRow += '<div class="roll">'
            playerRow += contest.playerArray()[i].game.frames[j].rolls[k];
            playerRow += '</div>'
          }
          playerRow += '<detail class="frame-total">'
          playerRow += contest.playerArray()[i].game.frames[j].rollTotal();
          playerRow += '</detail>'
          playerRow += '</detail>'
        }
        playerRow += '<detail class="player-total" id="player-' + (i + 1) + '-running-total">'
        playerRow += contest.playerArray()[i].score();
        playerRow += '</detail>'
        playerRow += '</section>'
        playerRow += '</article>';
        playerContainerHTML += playerRow;
      }
    return playerContainerHTML;
  };

  displayGame();

});