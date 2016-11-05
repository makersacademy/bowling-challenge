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
      roll1 = game.frames()[i].roll1();
      roll2 = game.frames()[i].roll2();
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
    var roll;

    var chance_of_strike = Math.random() > 0.7;

    if(chance_of_strike) {
      roll = 10;
    } else if(game.currentFrame() === undefined || game.currentFrame().roll1() === 0) {
      roll = Math.floor(Math.random()*10+1);
    } else {
      roll = Math.floor(Math.random()*(11-game.currentFrame().roll1()));
    }
    game.roll(roll);
    update();
  });

  $('#replay').click(function(){
    createGame();
  })
})
