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
  });

  $('.1_bowl').click(function() {
    player.roll(1);
    $('.messages').text('You rolled 1')
    $('.table').find('div:empty:first').append(1);
  });

  $('.2_bowl').click(function() {
    player.roll(2);
    $('.messages').text('You rolled 2')
    $('.table').find('div:empty:first').append(2);

  });

  $('.3_bowl').click(function() {
    player.roll(3);
    $('.messages').text('You rolled 3')
    $('.table').find('div:empty:first').append(3);
  });

  $('.4_bowl').click(function() {
    player.roll(4);
    $('.messages').text('You rolled 4')
    $('.table').find('div:empty:first').append(4);
  });

  $('.5_bowl').click(function() {
    player.roll(5);
    $('.messages').text('You rolled 5')
    $('.table').find('div:empty:first').append(5);
  });

  $('.6_bowl').click(function() {
    player.roll(6);
    $('.messages').text('You rolled 6')
    $('.table').find('div:empty:first').append(6);
  });

  $('.7_bowl').click(function() {
    player.roll(7);
    $('.messages').text('You rolled 7')
    $('.table').find('div:empty:first').append(7);

  });

  $('.8_bowl').click(function() {
    player.roll(8);
    $('.messages').text('You rolled 8')
    $('.table').find('div:empty:first').append(8);
  });

  $('.9_bowl').click(function() {
    player.roll(9);
    $('.messages').text('You rolled 9')
    $('.table').find('div:empty:first').append(9);
  });

  $('.10_bowl').click(function() {
    player.roll(10);
    $('.messages').text('You rolled 10')
    $('.table').find('div:empty:first').append(10);
    $('.table').find('div:empty:first').append("X");
  });



  // $('#add_user_button').click(function() {
  //   $('.form2').attr('class', 'visible_form')
  // });
  //
  // $('#log_in_button').click(function() {
  //   $('.form3').attr('class', 'visible_form')
  // });

});
