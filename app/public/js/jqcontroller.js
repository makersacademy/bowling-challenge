var bowling_game = new Bowling_score();

$(document).ready(function() {

  $("#roundstats").text( "Frame: " + bowling_game.frame + "   Roll: " + bowling_game.current_roll);
  $("#round-score").text( "Round Score: " + bowling_game.score);
  update_buttons();
  score_table();
  //event.data.value = 'undefined'


  function update_buttons() {
    for ( i = 0; i < bowling_game.pins_available + 1; i++ ) {
      $("#create_buttons").append("<button id='process_roll' class='btn btn-lg btn-default' href='#'>"+ i +"</button>  " );
      $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
        bowling_game.process_roll(event.data.value);
        reset_window();
      });
    }
  }

  function score_table() {
    $("#score_container").append("<div class='container'>")
    $("#score_container").append("<div class='row' id='frames'>")
    for ( i = 0; i < bowling_game.DEFAULT_FRAMES; i++ ) {
        frame = i + 1
        $("#frames").append("<div class='span4'>" + frame + "</div>")
    }
    $("#score_container").append("</div>");
    $("#score_container").append("<div class='row' id='frames-results'>");
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        $("#frames-results").append("<div class='span2'>" + bowling_game.game_results[i].roll_results[0] + "  " + bowling_game.game_results[i].roll_results[1] + "</div>")
    }
    $("#score_container").append("</div>");
    $("#score_container").append("</div>");
  }

  function reset_window() {
    $('#create_buttons').empty();
    $('#score_container').empty();
    $("#roundstats").text( "Frame: " + bowling_game.frame + "   Roll: " + bowling_game.current_roll);
    $("#round-score").text( "Round Score: " + bowling_game.score);
    update_buttons();
    score_table();
  }

});
