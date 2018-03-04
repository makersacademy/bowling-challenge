$( document ).ready(function() {

  var player = new Player;
  var game = new Game;

  $('.new_game').click(function() {
    player.newGame(game);
    $('.messages').text('A new game has started!')
  });

  $('.0_bowl').click(function() {
    player.roll(0);
    $('.messages').text('You rolled 0')
    $('.table').find('div:empty:first').append(0);
    $('.score').text(player.displayBasicScore());
  });

  $('.1_bowl').click(function() {
    player.roll(1);
    $('.messages').text('You rolled 1')
    $('.table').find('div:empty:first').append(1);
    $('.score').text(player.displayBasicScore());
  });

  $('.2_bowl').click(function() {
    player.roll(2);
    $('.messages').text('You rolled 2')
    $('.table').find('div:empty:first').append(2);
    $('.score').text(player.displayBasicScore());
  });

  $('.3_bowl').click(function() {
    player.roll(3);
    $('.messages').text('You rolled 3')
    $('.table').find('div:empty:first').append(3);
    $('.score').text(player.displayBasicScore());
  });

  $('.4_bowl').click(function() {
    player.roll(4);
    $('.messages').text('You rolled 4')
    $('.table').find('div:empty:first').append(4);
    $('.score').text(player.displayBasicScore());
  });

  $('.5_bowl').click(function() {
    player.roll(5);
    $('.messages').text('You rolled 5')
    $('.table').find('div:empty:first').append(5);
    $('.score').text(player.displayBasicScore());
  });

  $('.6_bowl').click(function() {
    player.roll(6);
    $('.messages').text('You rolled 6')
    $('.table').find('div:empty:first').append(6);
    $('.score').text(player.displayBasicScore());
  });

  $('.7_bowl').click(function() {
    player.roll(7);
    $('.messages').text('You rolled 7')
    $('.table').find('div:empty:first').append(7);
    $('.score').text(player.displayBasicScore());
  });

  $('.8_bowl').click(function() {
    player.roll(8);
    $('.messages').text('You rolled 8')
    $('.table').find('div:empty:first').append(8);
    $('.score').text(player.displayBasicScore());
  });

  $('.9_bowl').click(function() {
    player.roll(9);
    $('.messages').text('You rolled 9')
    $('.table').find('div:empty:first').append(9);
    $('.score').text(player.displayBasicScore());
  });

  $('.10_bowl').click(function() {
    player.roll(10);
    $('.messages').text('You rolled 10')
    $('.table').find('div:empty:first').append(10);
    if (player.currentGame._numberOfPairs() < 19) {
      $('.table').find('div:empty:first').append("X");
    }
    $('.score').text(player.displayBasicScore());
  });

  // if !(game.isInProgress)
  // $('.final_score2').text(player.score);

  $('.count_final_score').click(function() {
    player.countScore()
    $('.final_score').text(player.score);
  });


  // $('#add_user_button').click(function() {
  //   $('.form2').attr('class', 'visible_form')
  // });
  //
  // $('#log_in_button').click(function() {
  //   $('.form3').attr('class', 'visible_form')
  // });

});
