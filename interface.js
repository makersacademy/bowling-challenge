$( document ).ready(function() {
  var game = new Game();

  window.onerror = function() { alert('Too many pins!') }

  function updateFrameScore(number) {
    $('#score' + number.toString()).text(game.scores[number])
  }

  function updateAll() {
    var i;
    for(i = 1; i <= game.frame; i++) {
      updateFrameScore(i);
    }
    $('#total').text(game.total());
  }

  function rollNumber() {
    return (game.rolls.length + 1).toString();
  }

  function isSpare(number) {
    return (rollNumber() === '2') && (game.rolls[0] + number === 10)
  }

  function updateRollScore(number) {
    var score = number;
    if (number === 10 && rollNumber() === '1') { score = 'X'; }
    if (isSpare(number)) { score = '/'; }
    $('#' + game.frame.toString() + '-' + rollNumber()).text(score)
  }

  for (let i = 0; i <= 10; i++) {
    $('#r' + i).click(function() {
      updateRollScore(i);
      game.roll(i);
      updateAll();
    });
  }
});
