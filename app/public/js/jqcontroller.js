var bowling_game = new Bowling_score();

$(document).ready(function() {

  $("#roundstats").text( "Frame: " + bowling_game.frame + "   Roll: " + bowling_game.current_roll);
  $("#round-score").text( "Overall Score: " + bowling_game.score);
  update_buttons();
  score_table();
  //event.data.value = 'undefined'


  function update_buttons() {
    for ( i = 0; i < bowling_game.pins_available + 1; i++ ) {
      $("#create_buttons").append("<button id='process_roll' class='btn btn-lg btn-default'>"+ i +"</button>  " );
      $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
        bowling_game.process_roll(event.data.value);
        reset_window();
      });
    }
  }

  function score_table() {
    $("#score_container").append("<div class='container'>");
    $("#score_container").append("<div class='row' id='frames'>");
    $("#frames").append("<div class='col-md-2'>FRAME:</div>");
    display_frames();
    $("#score_container").append("</div><div class='row' id='frames-rolls'>");
    $("#frames-rolls").append("<div class='col-md-2'>ROLLS:</div>");
    display_rolls();
    $("#score_container").append("</div><div class='row' id='frames-result'>");
    $("#frames-result").append("<div class='col-md-2'>SCORE:</div>");
    display_frame_score();
    $("#score_container").append("</div></div>");
  }

  function display_frames() {
    for ( i = 0; i < bowling_game.DEFAULT_FRAMES; i++ ) {
        frame = i + 1
        $("#frames").append("<div class='col-md-1'>" + frame + "</div>")
    }
  }

  function display_rolls() {
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        display = check_bonus_display();
        $("#frames-rolls").append("<div class='col-md-1'>" + display + "</div>")
    }
  }

  function display_frame_score() {
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        $("#frames-result").append("<div class='col-md-1'>" + bowling_game.game_results[i].round_score + "</div>")
    }
  }

  function check_bonus_display() {
    if (bowling_game.game_results[i].bonus === 'strike') {
      return 'X'
    } else if (bowling_game.game_results[i].bonus === 'spare') {
      return '/'
    } else {
    return bowling_game.game_results[i].roll_results[0] + '  ' + bowling_game.game_results[i].roll_results[1]
    }
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
