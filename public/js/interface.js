$( document ).ready(function() {

  // will probably make a game object that stores these values
  let game;
  let scoreboard;
  let score;

  $( '.scoreboard').hide();
  $( '.btn-startGame' ).hide();
  $( '.playing').hide();

  $( '.btn-newGame' ).on('click', function() {
    game = new Game;
    scoreboard = new ScoreBoard;
    scoreboard.newBoard();
    $( '.scoreboard').show();
    $( '.btn-startGame' ).show();
    $( '.playing').hide();
    $( '.playerName' ).html("<input type='text' class='playerNameForm' placeholder='Enter name'>")
  });

  $( '.btn-startGame' ).on('click', function() {
    $( '.btn-startGame' ).hide();
    $( '.playing').show();
    // this needs to loop through html form
    game.updatePlayersList($( '.playerNameForm' ).val());
    $( '.playerName' ).html(game.players[0]);
    game.updateCurrentPlayer();
    $( '.msg-playersTurn' ).html("It's " + game.currentPlayer + "'s turn!")
    $( '.msg-rollNum' ).html("Roll " + game.roll);
    updatePinButtons();
  });

  $( '.pinButtons' ).on('click', '.Pins', function() {
    updateScoreboard(parseInt($(this).val()));
    // debugger;
    if (!game.inPlay) {
      $( '.msg-playersTurn' ).hide();
      $( '.msg-rollNum' ).hide();
      $( '.pinButtons' ).hide();
      $( '.msg-gameOver' ).html("Game Over!")
    }
    game.turn();
    updatePinButtons();
    $( '.msg-rollNum' ).html(messageRollNumber());
  });

  function updatePinButtons() {
    pinsLeft = 10 - scoreboard.frames[game.frame -1].roll_1;
    $( '.pinButtons' ).empty();
    for (i = 0; i <= pinsLeft; i++) {
      $( '.pinButtons' ).append("<button class='Pins' value=" + i + " >" + ((i == 0) ? 'Gutter' : i) + "</button>")
    };
  }

  function updateScoreboard(pins) {
    scoreboard.frames[game.frame-1].roll(game.roll, pins);
    scoreboard.update();
    if (game.frame <= 10) {
      updateFrames1to10Scoreboard();
    } else {
      updateBonusRollscoreboard();
    };
    for (i = 1; i <= Math.min(game.frame,10) ; i++) {
      $( '.frame' + i ).find('.Total').html(scoreboard.score[i-1]);
    };
  };

  function updateFrames1to10Scoreboard(pins) {
    if (game.roll == 1){
      if (scoreboard.frames[game.frame-1].strike) {
        score = 'X'
        if (game.frame < 10) { $( '.frame' + game.frame ).find('.Roll2').html('-'); }
        game.turn();
      } else { score = scoreboard.frames[game.frame-1].roll_1 };
      $( '.frame' + game.frame ).find('.Roll1').html(score);
    } else {
      (scoreboard.frames[game.frame-1].spare) ? score = '/' : score = scoreboard.frames[game.frame-1].roll_2
      $( '.frame' + game.frame ).find('.Roll2').html(score);
      // debugger;
      if (game.frame == 10 && !scoreboard.frames[game.frame-1].spare) { game.inPlay = false };
    };
  };

  function updateBonusRollscoreboard() {
    (scoreboard.frames[game.frame-1].roll_1 == 10) ? score = 'X' : score = scoreboard.frames[game.frame-1].roll_1;
    if (game.frame == 11) {
      if (scoreboard.frames[9].spare) {
        // debugger;
        $( '.frame10' ).find('.Roll3').html(score);
        game.inPlay = false;
      };
      if (scoreboard.frames[9].strike) {
        $( '.frame10' ).find('.Roll2').html(score);
        game.turn();
      };
    };
    if (game.frame == 12) {
      // debugger;
      $( '.frame10' ).find('.Roll3').html(score);
      game.inPlay = false;
    };
  };

  function messageRollNumber() {
    if (game.frame <= 10) {
     return "Roll " + game.roll
   };
    if (game.frame == 11 && scoreboard.frames[9].spare) {
      return "Roll 3"
    };
    if (game.frame == 11 && scoreboard.frames[9].strike) {
      return "Roll 2"
    };
    if (game.frame == 12) {
      return "Roll 3"
    };
  }
});
