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
  });

  $( '.Pins' ).on('click', function() {
    updateScoreboard(parseInt($(this).val()));
    // updateRoll();
    game.turn();
    $( '.msg-rollNum' ).html("Roll " + game.roll);
  });

  function updateScoreboard(pins) {
    scoreboard.frames[game.frame].roll(game.roll, pins);
    scoreboard.update();
    if (game.roll == 1){
      (scoreboard.frames[game.frame].strike) ? score = 'X' : score = scoreboard.frames[game.frame].roll_1
      $( '.frame1' ).find('.Roll1').html(score);
    } else {
      (scoreboard.frames[game.frame].spare) ? score = '/' : score = scoreboard.frames[game.frame].roll_2
      $( '.frame1' ).find('.Roll2').html(score);
    };
    $( '.frame1' ).find('.Total').html(scoreboard.frames[game.frame].score());
  };

  // function updateRoll() {
  //   roll = roll % 2 + 1;
  // };
});
