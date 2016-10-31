$(document).ready(function() {
  var game = new Game();

  update();

  function update() {
    updateFrames();
    updateTotalScore();
  }

  function updateFrames(){
    for(var i=0; i<game.frames().length; i++) {
      $(`#frame${i} .roll1`).text(game.frames()[i].roll1());
      $(`#frame${i} .roll2`).text(game.frames()[i].roll2());
      $(`#frame${i} .frame_total`).text(game.frames()[i].total());
    }
  }

  function updateTotalScore(){
    $('#game_total').text(game.score());
  }

  $('#roll').click(function(){
    var roll = 4;
    game.roll(roll);
    update();
  });

})
