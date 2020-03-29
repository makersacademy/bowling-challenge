$( document ).ready(function() {

  // will probably make a game object that stores these values
  let game;
  let scoreboard;
  let score;
  // let frame = 1;
  // let roll = 1;

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
    // $( '.pinButtons' ).append("button")
  });

  $( '.pinButtons' ).on('click', '.Pins', function() {
    updateScoreboard(parseInt($(this).val()));
    // updateRoll();
    game.turn();
    updatePinButtons();
    $( '.msg-rollNum' ).html("Roll " + game.roll);
  });

  function updatePinButtons() {
    pinsLeft = 10 - scoreboard.frames[game.frame].roll_1;
    $( '.pinButtons' ).empty();
    for (i = 0; i <= pinsLeft; i++) {
      $( '.pinButtons' ).append("<button class='Pins' value=" + i + " >" + ((i == 0) ? 'Gutter' : i) + "</button>")
    };
  }

  function updateScoreboard(pins) {
    scoreboard.frames[game.frame].roll(game.roll, pins);
    scoreboard.update();
    if (game.frame <= 10) {
      updateFrames1to10Scoreboard();
    } else {
      updateBonusRollscoreboard();
    };
    for (i = 1; i <= game.frame ; i++) {
      $( '.frame' + i ).find('.Total').html(scoreboard.score[i]);
    };
  };

  function updateFrames1to10Scoreboard(pins) {
    if (game.roll == 1){
      if (scoreboard.frames[game.frame].strike) {
        score = 'X'
        if (game.frame < 10) { $( '.frame' + game.frame ).find('.Roll2').html('-'); }
        game.turn();
      } else { score = scoreboard.frames[game.frame].roll_1 };
      $( '.frame' + game.frame ).find('.Roll1').html(score);
    } else {
      (scoreboard.frames[game.frame].spare) ? score = '/' : score = scoreboard.frames[game.frame].roll_2
      $( '.frame' + game.frame ).find('.Roll2').html(score);
    };
  };

  function updateBonusRollscoreboard() {
    // debugger;
    (scoreboard.frames[game.frame].roll_1 == 10) ? score = 'X' : score = scoreboard.frames[game.frame].roll_1;
    if (game.frame == 11) {
      if (scoreboard.frames[10].spare) {
        $( '.frame10' ).find('.Roll3').html(score);
      };
      if (scoreboard.frames[10].strike) {
        $( '.frame10' ).find('.Roll2').html(score);
        game.turn();
      };
    };
    if (game.frame == 12) {
      $( '.frame10' ).find('.Roll3').html(score);
    };
      // if frame 10 is spare: roll_1 added to Roll3 in scoreboard and game over
      // if frame 10 is strike:
      // roll_1 not strike : update roll_1 in Roll2 in scoreboard and roll_2 to Roll3 in scoreboard and game over
      // roll_1 == strike : update roll_1 in Roll2 in scoreboard and move to frame 12
  };


    // game.frame == 12
      // if frame 10 == strike && frame 11 == strike: update roll_1 in Roll3 in scoreboard and game over

});

// roll_1 not strike && roll_2 not spare : update normally and game over
// roll_1 not strike && roll_2 == spare : update normally and move to frame 11
// roll_1 == strike : update and move to frame 11
