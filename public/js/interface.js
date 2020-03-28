$( document ).ready(function() {

  $( '.scoreboard').hide();

  $( '.btn-NewGame' ).on('click', function() {
    $( '.scoreboard').show();
    let scoreboard = new ScoreBoard;
    scoreboard.newBoard();
    $( '.playerName' ).append("<input type='text' name='name' placeholder='Enter name'>")
  });



});
