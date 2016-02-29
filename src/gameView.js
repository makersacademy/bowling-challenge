$(document).ready(function() {

  var game;
  var rollCount;
  var prevpins;

  initializeGame();

  $('.button-roll').click(function() {
    var pins = parseInt($(this).attr('value'));
    try {
      game.addRoll(pins);
      updateRollDisplay(pins);
      updateTotalDisplay();
      isGameOver();
    } catch(err) {
      $('#errors').html(err).fadeIn('fast').fadeOut('slow');
    }
  });

  function updateTotalDisplay() {
    for(var i = 0; i <= game.totalScore.length; i++ ) {
      $('tr:eq(2) td:eq(' + i + ')').html(game.totalScore[i]);
    }
  }

  function updateRollDisplay(pins) {
    if(rollCount % 2 === 1 && pins + prevpins === 10) { pins = '/'; }
    if(pins === 10) { pins = 'X'; }
    if(pins === 'X' && game.totalScore.length < 10) { rollCount++; }
    $('tr:eq(1) td:eq(' + rollCount + ')').html(pins);
    rollCount++;
    prevpins = pins;
  }

  function isGameOver() {
    if($('tr:eq(2) td:eq(9)').html()) {
      $('#gameover').fadeIn('fast');
    }
  }

  $('#button-reset').click(function() {
    initializeGame();
  });

  function initializeGame() {
    game = new Game(Frame);
    rollCount = 0;
    $('td').html('');
    $('#gameover').hide();
  }

  $(document).keypress(function(event){
    if(event.keyCode === 48){ $('.button-roll[value="0"]').focus().click(); }
    if(event.keyCode === 49){ $('.button-roll[value="1"]').focus().click(); }
    if(event.keyCode === 50){ $('.button-roll[value="2"]').focus().click(); }
    if(event.keyCode === 51){ $('.button-roll[value="3"]').focus().click(); }
    if(event.keyCode === 52){ $('.button-roll[value="4"]').focus().click(); }
    if(event.keyCode === 53){ $('.button-roll[value="5"]').focus().click(); }
    if(event.keyCode === 54){ $('.button-roll[value="6"]').focus().click(); }
    if(event.keyCode === 55){ $('.button-roll[value="7"]').focus().click(); }
    if(event.keyCode === 56){ $('.button-roll[value="8"]').focus().click(); }
    if(event.keyCode === 57){ $('.button-roll[value="9"]').focus().click(); }
    if(event.keyCode === 120){ $('.button-roll[value="10"]').focus().click(); }
  });
});
