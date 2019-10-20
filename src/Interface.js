$(document).ready(() => {

  let game = new Game;

  function updateCurrentStage() {
    $('#current-frame').text(game.getCurrentFrame());
    $('#current-roll').text(game.getCurrentRoll());
  }

  function appendResults(knocks) {
    let frame = game.getCurrentFrame();
    let roll = game.getCurrentRoll();
    let score = game.getScore();
    let row = `<div class="row" id="frame-${frame}-roll-${roll}">`;
    row += `<div class="col-2 px-3">${frame}</div>`;
    row += `<div class="col-2 px-3">${roll}</div>`;
    row += `<div class="col-2 px-3">${knocks}</div>`;
    row += `<div class="col-2 px-3" id="score">${score}</div>`;
    row += `<div class="col-4 px-3" id="notes"></div>`;
    row += `</div>`;
    $('#results').append(row);
  }

  // On page load
  updateCurrentStage();

  // On 'submit' form
  $('#player-action').submit(function(event) {
    event.preventDefault();
    let knocks = $('#player-knocks').val();
    game.play(knocks);
    appendResults(knocks);
    if (game.getCurrentFrame() === 10 && game.getCurrentRoll() === 2) {
      $('#player-action').text('');
      $('#current-stage').text('The game has ended!');
    } else {
      game.newRoll();
    }
    updateCurrentStage();
  });

});
