var bowling_game = new Bowling_score();

$(document).ready(function() {

  $("#roundstats").text( "Frame: " + bowling_game.frame + "   Roll: " + bowling_game.current_roll);
  $("#round-score").text( "Overall Score: " + bowling_game.score);
  update_buttons();
  score_table();
  var finish = false;

  function update_buttons() {
    for ( i = 0; i < bowling_game.pins_available+1; i++ ) {
      $("#create_buttons").append("<button id='process_roll' class='btn btn-md btn-default'>" + i + "</button> " );
      $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
        bowling_game.process_roll(event.data.value);
        reset_window();
      });
    }
  }

  function score_table() {
    $("#score_container").append("<div class='container'>");
    $("#score_container").append("<div class='row' id='frames'>");
    display_frames();
    $("#score_container").append("</div><div class='row' id='frames-rolls'>");
    display_rolls();
    $("#score_container").append("</div><div class='row' id='frames-result'>");
    display_frame_score();
    $("#score_container").append("</div></div>");
  }

  function display_frames() {
    $("#frames").append("<div class='col-md-2'>FRAME:</div>");
    for ( i = 0; i < bowling_game.DEFAULT_FRAMES; i++ ) {
        frame = i + 1
        $("#frames").append("<div class='col-md-1'>" + frame + "</div>")
    }
  }

  function display_rolls() {
    $("#frames-rolls").append("<div class='col-md-2'>ROLLS:</div>");
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        if (i < 9){
          display = process_roll_display();
        } else {
          display = last_round_display()
        }
        $("#frames-rolls").append("<div class='col-md-1'>" + display + "</div>")
    }
  }

  function display_frame_score() {
    $("#frames-result").append("<div class='col-md-2'>SCORE:</div>");
    show_current_roll();
    for ( i = 0; i < bowling_game.game_results.length; i++ ) {
        display_score = hide_bonus_score_until_complete();
        $("#frames-result").append("<div class='col-md-1'>" + display_score + "</div>")
    }
  }

  function show_current_roll() {
    if ("undefined" !== typeof bowling_game.frame_roll_results[0] && "undefined" === typeof bowling_game.frame_roll_results[1] && bowling_game.frame !== 10) {
        roll = bowling_game.frame_roll_results[0]
        $("#frames-rolls").append("<div class='col-md-1'>" + roll + '|' + "</div>");
    }
  }

  function process_roll_display() {
    if (bowling_game.game_results[i].bonus === 'strike') {
      return 'X'
    } else if (bowling_game.game_results[i].bonus === 'spare') {
      return '/'
    } else {
    return bowling_game.game_results[i].roll_results[0] + '|' + bowling_game.game_results[i].roll_results[1]
    }
  }

  function last_round_display() {
      var last_rolls = '';
      (bowling_game.game_results[9].roll_results[0] === 10) ? last_rolls += 'X|' : last_rolls += bowling_game.game_results[9].roll_results[0]+'|';
      if (bowling_game.game_results[9].roll_results[1] === 10) {
        last_rolls += 'X|'
      } else if (bowling_game.game_results[9].roll_results[0] + bowling_game.game_results[9].roll_results[1] === 10 ) {
        last_rolls += '/|'
      } else { last_rolls += bowling_game.game_results[9].roll_results[1] + '|'}
      if (bowling_game.game_results[9].roll_results.length === 3 && bowling_game.game_results[9].roll_results[2] === 10) {
        last_rolls += 'X'
      } else if (bowling_game.game_results[9].roll_results.length === 3){
        last_rolls += bowling_game.game_results[9].roll_results[2];
      }
      return last_rolls
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
