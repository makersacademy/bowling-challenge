$(document).ready(function () {

  var game = new Game();

  for (let i = 0; i < 11; i += 1) {
    $('#score' + i).click(function () {
      game.knockDown(i);
      $('.test_1').text(game.cur_frame);
      $('.test_2').text(game.cur_roll);
      markInput();
    })
  };

  function markInput(){
    var cur_frame = game.cur_frame;
    var cur_roll = game.cur_roll;
    $('#frame' + cur_frame + "_r" + cur_roll).text(game.pinsDown);
  }

  // function eachScore(){
  //   var cur_frame = game.cur_frame;
  //   $('#frameScore' + cur_frame).text(game.frameScore(cur_frame));
  // }



})