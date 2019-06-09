$( document ).ready(function() {
  var game = new Game();
  var gameOver = false;

  function updateFrameScore(number) {
    $( '#score' + number.toString() ).text(game.scores[number])
  }

  function updateAll() {
    var i;
    for(i = 1; i <= game.frame; i++) {
      updateFrameScore(i);
    }
    $( '#total' ).text(game.total());
    console.log(game);
  }

  function rollNumber() {
    return (game.rolls.length + 1).toString();
    // return game.rolls.length === 0 ? '1' : '2';
  }

  function isSpare(number) {
    return (rollNumber() === '2') && (game.rolls[0] + number === 10)
  }

  function updateRollScore(number) {
    if (number === 10) { number = 'X'; }
    if (isSpare(number)) { number = '/'; }
    $( '#' + game.frame.toString() + '-' + rollNumber() ).text(number)
  }

  $( '#r0' ).click(function() {
    updateRollScore(0);
    game.roll(0);
    updateAll();
  });
  $( '#r1' ).click(function() {
    updateRollScore(1);
    game.roll(1);
    updateAll();
  });
  $( '#r2' ).click(function() {
    updateRollScore(2);
    game.roll(2);
    updateAll();
  });
  $( '#r3' ).click(function() {
    updateRollScore(3);
    game.roll(3);
    updateAll();
  });
  $( '#r4' ).click(function() {
    updateRollScore(4);
    game.roll(4);
    updateAll();
  });
  $( '#r5' ).click(function() {
    updateRollScore(5);
    game.roll(5);
    updateAll();
  });
  $( '#r6' ).click(function() {
    updateRollScore(6);
    game.roll(6);
    updateAll();
  });
  $( '#r7' ).click(function() {
    updateRollScore(7);
    game.roll(7);
    updateAll();
  });
  $( '#r8' ).click(function() {
    updateRollScore(8);
    game.roll(8);
    updateAll();
  });
  $( '#r9' ).click(function() {
    updateRollScore(9);
    game.roll(9);
    updateAll();
  });
  $( '#r10' ).click(function() {
    updateRollScore(10);
    game.roll(10);
    updateAll();
  });
});
