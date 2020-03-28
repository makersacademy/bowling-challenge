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
    scoreboard.playerName = $( '.playerNameForm' ).val();
    $( '.playerName' ).html(scoreboard.playerName);
    $( '.btn-startGame' ).hide();
    $( '.playing').show();
  });

});
