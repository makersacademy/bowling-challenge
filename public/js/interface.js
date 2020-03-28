$( document ).ready(function() {

  let scoreboard = new ScoreBoard;

  $( '.scoreboard').hide();
  $( '.btn-startGame' ).hide();
  $( '.playing').hide();

  $( '.btn-newGame' ).on('click', function() {
    $( '.scoreboard').show();
    $( '.btn-startGame' ).show();
    $( '.playing').hide();
    scoreboard.newBoard();
    $( '.playerName' ).html("<input type='text' class='playerNameForm' placeholder='Enter name'>")
  });

  $( '.btn-startGame' ).on('click', function() {
    $( '.btn-startGame' ).hide();
    $( '.playing').show();

    scoreboard.playerName = $( '.playerNameForm' ).val();
    $( '.playerName' ).html(scoreboard.playerName);
    $( '.msg-playersTurn' ).html("It's " + scoreboard.playerName + "'s turn!")
  });

  $( '.0Pin' ).on('click', function() {
    updateScoreboard(parseInt($( '.0Pin' ).val()));
  });
  $( '.1Pin' ).on('click', function() {
    updateScoreboard(parseInt($( '.1Pin' ).val()));
  });
  $( '.2Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.2Pins' ).val()));
  });
  $( '.3Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.3Pins' ).val()));
  });
  $( '.4Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.4Pins' ).val()));
  });
  $( '.5Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.5Pins' ).val()));
  });
  $( '.6Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.6Pins' ).val()));
  });
  $( '.7Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.7Pins' ).val()));
  });
  $( '.8Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.8Pins' ).val()));
  });
  $( '.9Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.9Pins' ).val()));
  });
  $( '.10Pins' ).on('click', function() {
    updateScoreboard(parseInt($( '.10Pins' ).val()));
  });

  function updateScoreboard(pins) {
    scoreboard.frames[0].roll(1, pins);
    scoreboard.update();
    $( '.frame1Roll1' ).html(scoreboard.frames[0].roll_1);
    $( '.frame1Total' ).html(scoreboard.frames[0].score());
  };

});
