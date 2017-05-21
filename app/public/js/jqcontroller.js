var bowling_game = new Bowling_score();

$(document).ready(function() {

  $("#roundstats").text( "Frame: " + bowling_game.frame + "   Roll: " + bowling_game.current_roll);
  $("#round-score").text( "Overall Score: " + bowling_game.score);
  update_buttons();
  score_table();
  //event.data.value = 'undefined'


  function update_buttons() {
    for ( i = 0; i < bowling_game.pins_available+1; i++ ) {
      $("#create_buttons").append("<button id='process_roll' class='btn btn-lg btn-default'>" + i + "</button>  " );
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
    current_frame_roll();
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
        display = process_roll_display();
        $("#frames-rolls").append("<div class='col-md-1'>" + display + "</div>")
    }
  }

  function current_frame_roll() {
    if ("undefined" !== typeof bowling_game.frame_roll_results[0]
    && "undefined" === typeof bowling_game.frame_roll_results[1]
    && bowling_game.frame !== 10) {
        roll = bowling_game.frame_roll_results[0]
        $("#frames-rolls").append("<div class='col-md-1'>" + roll + '|' + "</div>");
    }
  }

  function display_frame_score() {
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        display_score = hide_bonus_score_until_complete();
        $("#frames-result").append("<div class='col-md-1'>" + display_score + "</div>")
    }

  }

  function process_roll_display() {
    if (i === 9) {
      last_round_display();
    } else if (bowling_game.game_results[i].bonus === 'strike') {
      return 'X'
    } else if (bowling_game.game_results[i].bonus === 'spare') {
      return '/'
    } else {
    return bowling_game.game_results[i].roll_results[0] + '|' + bowling_game.game_results[i].roll_results[1]
    }
  }

  function last_round_display() {
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        display_score = hide_bonus_score_until_complete();
        $("#frames-result").append("<div class='col-md-1'>" + display_score + "</div>")
    }
  }

  function hide_bonus_score_until_complete() {
    if ("undefined" !== typeof bowling_game.game_results[i].bonus && bowling_game.game_results[i].round_score === 0) return '';
    return bowling_game.game_results[i].round_score
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
