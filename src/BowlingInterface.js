$(function() {

  var contest = new BowlingContest();

  var displayGame = function() {
    var playerContainerHTML = '';
    for (var i = 0; i < contest.numberOfPlayers(); i ++) {
      var playerRow = '';
      playerRow += '<article class="player-row" id="player-row-' + i + '">';
      playerRow += '<p class="player-name">' + contest.playerArray()[i].name + '</p>';
      
      playerRow += '</article>'
      playerContainerHTML += playerRow;
    }
    $("#game-container").html(playerContainerHTML);
  };

  $(".inputform").on('submit', function(form) {
    form.preventDefault();
    var name = $("#new-player-name").val();
    var player = new Player(name);
    player.game = new Game();
    contest.addPlayer(player);
    displayGame();
  });


});