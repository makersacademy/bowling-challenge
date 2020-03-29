$( document ).ready(function() {

  // will probably make a game object that stores these values
  let scoreboard;
  let frame = 1;
  let roll = 1;

  $( '.scoreboard').hide();
  $( '.btn-startGame' ).hide();
  $( '.playing').hide();

  $( '.btn-newGame' ).on('click', function() {
    $( '.scoreboard').show();
    $( '.btn-startGame' ).show();
    $( '.playing').hide();

    scoreboard = new ScoreBoard;
    scoreboard.newBoard();

    $( '.playerName' ).html("<input type='text' class='playerNameForm' placeholder='Enter name'>")
  });

  $( '.btn-startGame' ).on('click', function() {
    $( '.btn-startGame' ).hide();
    $( '.playing').show();

    scoreboard.playerName = $( '.playerNameForm' ).val();
    $( '.playerName' ).html(scoreboard.playerName);
    $( '.msg-playersTurn' ).html("It's " + scoreboard.playerName + "'s turn!")
    $( '.msg-rollNum' ).html("Roll " + roll);
  });

  $( '.Pins' ).on('click', function() {
    updateScoreboard(parseInt($(this).val()));
    updateRoll();
    $( '.msg-rollNum' ).html("Roll " + roll);
  });

  function updateScoreboard(pins) {
    scoreboard.frames[0].roll(roll, pins);
    scoreboard.update();
    // if roll_1, check for strike, update with 'X' if strike
    // if roll_2 check for spare, update with '/' if spare
    if (roll == 1){
      $( '.frame1' ).find('.Roll1').html(scoreboard.frames[0].roll_1);
    } else {
    $( '.frame1' ).find('.Roll2').html(scoreboard.frames[0].roll_2);
    };

    $( '.frame1' ).find('.Total').html(scoreboard.frames[0].score());
  };

  function updateRoll() {
    roll = roll % 2 + 1;
  };
});
