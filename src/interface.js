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
      $(`#frame${i} .frame_total`).text('_');
    }
  }

  function updateFrames(){
    for(var i=0; i<game.frames().length; i++) {
      var roll1 = game.frames()[i].roll1();
      var roll2 = game.frames()[i].roll2();
      $(`#frame${i} .roll1`).text(roll1 === 10 ? 'X' : roll1);
      $(`#frame${i} .roll2`).text(roll2);
      $(`#frame${i} .frame_total`).text(game.frames()[i].total());
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
