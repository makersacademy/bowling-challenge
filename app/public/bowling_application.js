 var bowling = new BowlingGame();

$(window).load(function(){
  $(".heading").fadeIn("slow", function() {
  });
  $("#roll_again").hide();
  $("#start_frame").hide();
});

$( "#start_game" ).click(function() {
  $( "#start_frame" ).fadeIn( "fast", function() {
  });
  $("#start_game").fadeOut("fast", function() {
  });
});

$("#start_frame").click(function() {
  $("#game").html(bowling.startFrame());
  checkStrike(firstRoll);
});

$("#roll_again").click(function(){
  $("#game").html(bowling.rollAgain(firstRoll));
  $("#roll_again").fadeOut("fast", function() {
    });
  $("#frame_scores").append(total + '\n');
  if (bowling.isEnded) {
    $("#running_total").html('Total score: ' + bowling.runningTotal);
  }
  else {
    $("#start_frame").fadeIn("fast", function() {
    });
  };
});

function checkStrike(first){
  if (first < 10) {
     $("#roll_again").fadeIn("fast", function() {
      });
      $("#start_frame").fadeOut("fast", function() {
      });
    } else {
      $("#frame_scores").append(first + '\n');
    };
};



