// JQuery
$(document).ready(function() {
  var score = new Score();
  var game = new Game();

  updateScore();
  updateFrame();

  // $('#button-score').on('click', function() {
  //   game.getScore();
  //   updateScore();
  // });

  // $('#bowl-pins').submit(function(event) {
  //   event.preventDefault();
  //   var pins = $('#pins').val();
  //
  //   if (pins === 1) {
  //     pins = 1;
  //   } else if (pins === 2) {
  //     pins = 2;
  //   } else if (pins === 3) {
  //     pins = 3;
  //   } else if (pins === 4) {
  //     pins = 4;
  //   } else if (pins === 5) {
  //     pins = 5;
  //   } else if (pins === 6) {
  //     pins = 6;
  //   } else if (pins === 7) {
  //     pins = 7;
  //   } else if (pins === 8) {
  //     pins = 8;
  //   } else if (pins === 9) {
  //     pins = 9;
  //   } else if (pins === 10) {
  //     pins = 10;
  //   };
  //
  //   game.roll(pins);
  //   updateScore();
  // });


  $('#bowl-pins').change(function() {
    var pins = $('#bowl-pins').val();
      $('#pins').text(pins);
      game.roll(pins);
      updateScore();
      updateFrame();
  });

  $('#roll-button').on('click', function() {
    game.roll(1);
    updateScore();
    updateFrame();
  });

  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function updateFrame() {
    $('#frame').text(game.getFrames());
  };

});
