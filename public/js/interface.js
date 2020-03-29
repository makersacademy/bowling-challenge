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
    if (game.roll == 1){
      if (scoreboard.frames[game.frame].strike) {
        score = 'X'
        $( '.frame' + game.frame ).find('.Roll2').html('-');
        game.turn();
      } else { score = scoreboard.frames[game.frame].roll_1 };
      $( '.frame' + game.frame ).find('.Roll1').html(score);
    } else {
      (scoreboard.frames[game.frame].spare) ? score = '/' : score = scoreboard.frames[game.frame].roll_2
      $( '.frame' + game.frame ).find('.Roll2').html(score);
    };
    for (i = 1; i <= game.frame ; i++) {
      $( '.frame' + i ).find('.Total').html(scoreboard.score[i]);
    };
  };

  // function updateRoll() {
  //   roll = roll % 2 + 1;
  // };
});
