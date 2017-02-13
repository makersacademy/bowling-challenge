$(document).ready(function(){

  var game = new Game()

  $( "#bowl" ).click(function(){
    game.bowl()
    $( "#pin_1" ).css( "background-color", 'black');
    updateScores()
  });

  function updateScores() {
    $( "#frame_1_roll_1" ).text(game.scorecard.scores()[0]);
    $( "#frame_1_roll_2" ).text(game.scorecard.scores()[1]);
    $( "#frame_2_roll_1" ).text(game.scorecard.scores()[2]);
    $( "#frame_2_roll_2" ).text(game.scorecard.scores()[3]);
    $( "#frame_3_roll_1" ).text(game.scorecard.scores()[4]);
    $( "#frame_3_roll_2" ).text(game.scorecard.scores()[5]);
    $( "#frame_4_roll_1" ).text(game.scorecard.scores()[6]);
    $( "#frame_4_roll_2" ).text(game.scorecard.scores()[7]);
    $( "#frame_5_roll_1" ).text(game.scorecard.scores()[8]);
    $( "#frame_5_roll_2" ).text(game.scorecard.scores()[9]);
    $( "#frame_6_roll_1" ).text(game.scorecard.scores()[10]);
    $( "#frame_6_roll_2" ).text(game.scorecard.scores()[11]);
    $( "#frame_7_roll_1" ).text(game.scorecard.scores()[12]);
    $( "#frame_7_roll_2" ).text(game.scorecard.scores()[13]);
    $( "#frame_8_roll_1" ).text(game.scorecard.scores()[14]);
    $( "#frame_8_roll_2" ).text(game.scorecard.scores()[15]);
    $( "#frame_9_roll_1" ).text(game.scorecard.scores()[16]);
    $( "#frame_9_roll_2" ).text(game.scorecard.scores()[17]);
    $( "#frame_10_roll_1" ).text(game.scorecard.scores()[18]);
    $( "#frame_10_roll_2" ).text(game.scorecard.scores()[19]);
    $( "#frame_10_roll_3" ).text(game.scorecard.scores()[20]);


  }

});
