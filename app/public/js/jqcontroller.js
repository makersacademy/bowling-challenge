var bowling_game = new Bowling_score();

$(document).ready(function() {

  for ( i = 0; i < bowling_game.pins_available+1; i++ ) {
    $("#create_buttons").append("<button id='roll_buttons' class='btn btn-lg btn-default'>"+ i +"</button>  " );
    $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
      console.log("i3 = " + i);
      console.log('evd is ' + event.data.value);
      bowling_game.process_roll(event.data.value)
      console.log('evd after is ' + event.data.value);
      event.data.value = 'undefined'
      console.log('evd is post clear ' + event.data.value);
      clear();
      update_buttons();
      update_score();
    });
  }

  $("#roundstats").text( "Frame: " + bowling_game.frame + " -  Roll: " + bowling_game.current_roll);
  $("#score").text( "MIN temp: " + bowling_game.MIN );

  function update_buttons() {
    console.log('second wind ' + bowling_game.pins_available)
    for ( i = 0; i < bowling_game.pins_available + 1; i++ ) {
      console.log("second i = " + i)
      $("#create_buttons").append("<button id='process_roll' class='btn btn-lg btn-default' href='#'>"+ i +"</button>  " );
      console.log("second i2 = " + i)
      $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
        console.log("second i3 = " + i);
        console.log(event.data.value);
        console.log($( this ).index());
        bowling_game.process_roll(event.data.value);
        update_buttons();
        update_score();
      });
    }
  }

  function clear() {
      $('#create_buttons').remove();
  }

  function update_score() {
    $("#roundstats").text( "Frame: " + bowling_game.frame + "; Roll: " + bowling_game.current_roll);
  }

});
