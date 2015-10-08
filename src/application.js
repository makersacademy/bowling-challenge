$(document).ready(function() {
game = new Game(Frame, LastFrame);

  $('#game_score').text(game.gameScore);
  $('#new_game').hide();

  $(".pin").hover(
    function () {
      var number = parseInt($.trim($(this).text()));
      $("#pin_outline_" + number).css({"border-color": "#c80002"});
      $("#pin_stripe_1_" + number).css({"border-color": "#c80002"});
      $("#pin_stripe_2_" + number).css({"border-color": "#c80002"});
      $("#pin_number_" + number).css({"color": "#c80002"});
    },
    function () {
      var number = parseInt($.trim($(this).text()));
      $("#pin_outline_" + number).css({"border-color": "black"});
      $("#pin_stripe_1_" + number).css({"border-color": "black"});
      $("#pin_stripe_2_" + number).css({"border-color": "black"});
      $("#pin_number_" + number).css({"color": "black"});
    }
  );

  $('.pin').click(function() {
    $('#score_text').text("Score: ")
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
      $('#pin_selection_message').fadeOut("slow");
      $('#pin_box').fadeOut("slow");
      $('#score_text').text("Final score:");
      $('#new_game').fadeIn("slow");
    };
    $('#game_score').text(game.gameScore);
  });


});