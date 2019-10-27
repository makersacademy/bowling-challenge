$(document).ready(() => {

  let game = new Game;

  function updateCurrentPlay() {
    $('#current-frame').text(game.getCurrentFrame());
    $('#current-roll').text(game.getCurrentRoll());
  }

  // function appendResults() {
  //   let frame = game.getCurrentFrame();
  //   let roll = game.getCurrentRoll();
  //   let knocks = game.frames[`frame${frame}`][`roll${roll}`].knocks;
  //   let score = 'game.getTotalScore()';
  //   let row = `<div class="row" id="frame-${frame}-roll-${roll}">`;
  //   row += `<div class="col-2 px-3">${frame}</div>`;
  //   row += `<div class="col-2 px-3">${roll}</div>`;
  //   row += `<div class="col-2 px-3">${knocks}</div>`;
  //   row += `<div class="col-2 px-3" id="score">${score}</div>`;
  //   row += `<div class="col-4 px-3" id="notes"></div>`;
  //   row += `</div>`;
  //   $('#results').append(row);
  // }


  function updateResultDisplay() {

    let row = '';

    for (let frame = 1; frame <= game.getCurrentFrame(); frame++) {
      let resultFrame = game.frames[`frame${frame}`];
      for (let roll = 1; roll <= 2; roll++) {
        row += `<div class="row">`;
        row += `<div class="col-2 px-3">${frame}</div>`;
        row += `<div class="col-2 px-3">${roll}</div>`;
        row += `<div class="col-2 px-3">${resultFrame[`roll${roll}`].knocks}</div>`;
        row += `<div class="col-2 px-3" id="score">${resultFrame.totalScore}</div>`;
        row += `<div class="col-4 px-3" id="notes">${resultFrame.notes}</div>`;
        row += `</div>`;
      }
    }
    $('#results').html(row);
  }



  // On page load
  updateCurrentPlay();
  updateResultDisplay();

  // On 'submit' form
  $('#player-action').submit(function(event) {
    event.preventDefault();
    let knocks = $('#player-knocks').val();
    game.play(knocks); // Problem is we need to print row before game.play starts next move.
    updateResultDisplay();
    if (game.getCurrentFrame() === 10 && game.getCurrentRoll() === 2) {
      $('#player-action').text('');
      $('#current-stage').text('The game has ended!');
    }
    updateCurrentPlay();
    updateResultDisplay();
  });

  // edge case: when player enters a value that is not between 0 and 10


});
