$(document).ready(function() {
  var game = new Game;

  $('#submit-roll').submit(function(event) {
    event.preventDefault();
    var pins = parseInt($('#pins-knocked-down').val(), 10);
    game.roll(pins);
    renderRoll(pins);
    renderScore();
    renderBonus();
    if(game.isInPlay === false) { renderFinalScore() };
  });

  function renderRoll(pins) {
    var currentFrame = game.currentFrame().rolls().length === 0 ? game.frames.length - 1 : game.frames.length;
    $(`#pins-${currentFrame}-${game.frames[currentFrame - 1].rolls().length}`).text(pins);
  };
  function renderScore() {
    var currentFrame = game.currentFrame().rolls().length === 0 ? game.frames.length - 1 : game.frames.length;
    if(game.frames[currentFrame - 1].isOver === true) {
      $(`#score-${currentFrame}-2`).text(game.totalScore());
    };
  };
  function renderBonus() {
    var currentFrame = game.currentFrame().rolls().length === 0 ? game.frames.length - 1 : game.frames.length;
    if(game.frames[currentFrame - 1].isOver === true) {
      $(`#bonus-${currentFrame}-2`).text(game.frames[currentFrame - 1].bonus());
    };
  };
  function renderFinalScore() {
    $('#final-score').text(`Final Score: ${game.totalScore()}`);
  };
});
