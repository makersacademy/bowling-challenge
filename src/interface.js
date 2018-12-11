$(document).ready(function () {

  var game = new Game();

  for (let i = 0; i < 11; i += 1) {
    $('#score' + i).click(function () {
      game.knockDown(i);
      markInput();
      frScore();
      accumScore();
      hideButton();
    })
  };

  function markInput(){
    var cur_frame = game.cur_frame;
    var cur_roll = game.cur_roll;
    $('#frame' + cur_frame + "_r" + cur_roll).text(game.pinsDown);
  }

  function frScore(){
    for (let i = 1; i < 11; i++) {
      $('#frameScore' + i).text(game.frameScore(i));
    }
  }

  function accumScore(){
    for (let i = 1; i < 11; i++) {
      $('#totalScore' + i).text(game.accumScore(i));
    }
  }




})