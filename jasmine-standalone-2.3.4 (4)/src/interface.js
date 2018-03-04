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
    $('.table').find('div:empty:first').append("<div class='numeric'>" + number + "</div>");
    if (player.currentGame._valueOfPair(player.currentGame._numberOfPairs()-1) === undefined ) {
      $('.table').find('div:empty:first').append("<div class='numeric'>X</div>");
    }
    $('.score').text(player.displayBasicScore());
    showMessage(number)
    showHideButtons();
  }

  function showMessage(number) {
    if (player.currentGame._lastPairValue() === undefined ) {
      $('.messages').text('You rolled ' + number + '! It\'s a strike!');
    } else if (player.currentGame.frames.length > 1 && player.currentGame._lastPairValue() + player.currentGame._secondLastPairValue() === 10 ) {
      $('.messages').text('Congratulations! It\'s a spare!');
    } else {
      $('.messages').text('You rolled ' + number);
    }
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

  $('.about').click(function() {
    alert("This app allows you to calculate a score of a classic 10-pins bowling game based upon your input.\n\n   * Click --New game-- to start counting;\n   * Click --Count final score-- to get the final result.\n\nThe basic score (ie. the number of pins knocked down) will be refreshed automatically each time you enter the number.\n\nMind the fact that the final score (basic score + bonuses for strikes and spares) will be available once the game is finished.\n\n ************************\n\nCopyright\n   * The whole code was written by me.\n   * The illustration in the header was been released on a CC licence by Mohamed Hassan\n\n************************\n\nErrors\nIf you find any errors on this website, please do not hesitate to contact me on Github - contact details in the footer.")
  });

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
