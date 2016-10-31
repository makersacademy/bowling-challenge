/*jshint esversion: 6 */

$(document).ready(function() {

  $.getScript("src/Game.js", function(){
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
      var roll;
      if (game.currentFrame() == null) {
        roll = Math.floor(Math.random()*10);
      } else if(game.currentFrame().roll1()) {
        roll = Math.floor(Math.random()*(10-game.currentFrame().roll1()))
      } else {
        roll = Math.floor(Math.random()*10);
      }
      game.roll(roll);
      update();
    });
  });

})
