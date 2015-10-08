$(document).ready(function() {
game = new Game(Frame, LastFrame);

  $('#game_score').text(game.gameScore);


  $('.pin').click(function() {
    var pins = parseInt($.trim($(this).text()));
    game.bowl(pins);
    for(i = 0; i <= game.currentFrame; i++) {
      $('#score_box_' + i + '_1').text(game.frames[i].firstRoll);
      if(game.frames[i].strike){
        $('#score_box_' + i + '_1').text("X");
        $('#score_box_' + i + '_2').hide();
      }
      $('#score_box_' + i + '_2').text(game.frames[i].secondRoll);
      if(game.frames[i].spare){
        $('#score_box_' + i + '_2').text("/");
      }
      $('#frame_score_' + i).text(game.frameScores[i]);
    };
    if(game.currentFrame == 9) {
      for(i = 0; i <= game.currentFrame; i++) {
        $('#score_box_9_' + (i + 1)).text(game.frames[9].frameScore[i]);
        if(game.frames[9].frameScore[i] == 10){
          $('#score_box_9_' + (i + 1)).text("X");
        } else if(game.frames[9].frameScore[0] + game.frames[9].frameScore[1] == 10){
          $('#score_box_9_2').text("/");
        };
      };
    };
    game.calculateScore();
    if(game.isGameOver()) {
      $('#score_box').hide(500);
      $('#score_text').text("Final score:");
    };
    $('#game_score').text(game.gameScore);
  });

  // $('#pin_btn').click(function() {
  //   var pins = parseInt($('#pin_count').val());
  //   game.bowl(pins);
  //   for(i = 0; i <= game.currentFrame; i++) {
  //     $('#score_box_' + i + '_1').text(game.frames[i].firstRoll);
  //     if(game.frames[i].strike){
  //       $('#score_box_' + i + '_1').text("X");
  //       $('#score_box_' + i + '_2').hide();
  //     }
  //     $('#score_box_' + i + '_2').text(game.frames[i].secondRoll);
  //     if(game.frames[i].spare){
  //       $('#score_box_' + i + '_2').text("/");
  //     }
  //     $('#frame_score_' + i).text(game.frameScores[i]);
  //   };
  //   if(game.currentFrame == 9) {
  //     for(i = 0; i <= game.currentFrame; i++) {
  //       $('#score_box_9_' + (i + 1)).text(game.frames[9].frameScore[i]);
  //       if(game.frames[9].frameScore[i] == 10){
  //         $('#score_box_9_' + (i + 1)).text("X");
  //       } else if(game.frames[9].frameScore[0] + game.frames[9].frameScore[1] == 10){
  //         $('#score_box_9_2').text("/");
  //       };
  //     };
  //   };
  //   game.calculateScore();
  //   if(game.isGameOver()) {
  //     $('#score_box').hide(500);
  //     $('#score_text').text("Final score:");
  //   };
  //   $('#game_score').text(game.gameScore);
  // });


});