$(document).ready(function() {
  var game = new Game();

  $('#bowl0').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(0);
    $(currentBowl).text('0');
  });

  $('#bowl1').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(1);
    $(currentBowl).text('1');
  });

  $('#bowl2').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(2);
    $(currentBowl).text('2');
  });

  $('#bowl3').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(3);
    $(currentBowl).text('3');
  });

  $('#bowl4').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(4);
    $(currentBowl).text('4');
  });

  $('#bowl5').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(5);
    $(currentBowl).text('5');
  });

  $('#bowl6').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(6);
    $(currentBowl).text('6');
  });

  $('#bowl7').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(7);
    $(currentBowl).text('7');
  });

  $('#bowl8').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(8);
    $(currentBowl).text('8');
  });

  $('#bowl9').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(9);
    $(currentBowl).text('9');
  });

  $('#bowl10').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(10);
    $(currentBowl).text('10');
  });

  $('#calculate-score').on('click', function() {
    game.calculateScore();
    $('#current-score>p').text(game.currentScore());
    console.log("Button working")
  })

});
