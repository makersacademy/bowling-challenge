/*jshint esversion: 6 */

$(document).ready(function() {
  var game;
  createGame();

  function createGame() {
    clearFrames();
    $('#roll').attr('disabled', false);
    $('#replay').attr('hidden', true);
    game = new Game();
    update();
  }

  function update() {
    updateFrames();
    updateTotalScore();
  }

  function clearFrames(){
    for(var i=0; i<10; i++) {
      $(`#frame${i} .roll1`).text('_');
      $(`#frame${i} .roll2`).text('_');
      if(i===9) {
        $(`#frame${i} .roll3`).text('_');
      }
      $(`#frame${i} .frame_total`).text('_');
    }
  }

  function updateFrames(){
    for(var i=0; i<game.frames().length; i++) {
      var frame = game.frames()[i];
      $(`#frame${i} .roll1`).text(frame.roll1() === 10 ? 'X' : frame.roll1());
      $(`#frame${i} .roll2`).text(frame.roll2());

      if(i===9) {
        $(`#frame${i} .roll2`).text(frame.roll2() === 10 ? 'X' : frame.roll2());
        $(`#frame${i} .roll3`).text(frame.roll3() === 10 ? 'X' : frame.roll3());
      }

      $(`#frame${i} .frame_total`).text(frame.total());

      if(game.isComplete()) {
        $('#roll').attr('disabled', true);
        $('#replay').attr('hidden', false);
      }
    }
  }

  function updateTotalScore(){
    $('#game_total').text(game.score());
  }

  $('#roll').click(function(){
    game.autoRoll();
    update();
  });

  $('#replay').click(function(){
    createGame();
  })
})
