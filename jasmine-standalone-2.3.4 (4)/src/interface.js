$( document ).ready(function() {

  const player = new Player;
  let game;

  for (i = 1; i < 10; i++) {
    $('.table').append(
      '<div class="three"><div class="one_header">' + i + '. round</div><div class="frames"><div class="one_frame"></div><div class="one_frame"></div></div></div>'
    )
  }

  for (i = 0; i < 11; i++) {
    $('.buttons').append(
      '<button type="button" class="bowl" id="b' + i + '">' + i + '</button>'
    )
  }

  $('.table').append(
    '<div class="three"><div class="one_header ten_header">10. round</div><div class="frames"><div class="one_frame"/><div class="one_frame"/><div class="one_frame"/></div></div>'
  )

  function roll(number) {
    player.roll(number);
    $('.messages').text('You rolled ' + number)
    $('.table').find('div:empty:first').append(number);
    if (player.currentGame._valueOfPair(player.currentGame._numberOfPairs()-1) === undefined ) {
      $('.table').find('div:empty:first').append("X");
    }
    $('.score').text(player.displayBasicScore());
    showHideButtons();
  }

  function showHideButtons() {
    let subtractor = player.currentGame._valueOfPair(player.currentGame._numberOfPairs()-1)
    if (player.currentGame.frames.length % 2 === 0 || subtractor === 10) {
      $('.bowl').show();
    } else {
      let minnumber = 10-subtractor
      for (i = 10; i > minnumber; i--) {
        $('#b' + i).hide();
      }
    }
  }

  $('.new_game').click(function() {
    $( ".score" ).empty();
    $( ".final_score" ).empty();
    $( ".one_frame" ).empty(); // all off the one_frame kind.
    game = new Game;
    player.newGame(game);
    $('.messages').text('A new game has started!')
  });

  $('.bowl').click(function(e) {
    roll(parseInt(e.target.textContent));
  });

  $('.count_final_score').click(function() {
    player.countScore()
    $('.final_score').text(player.score);
  });

});
