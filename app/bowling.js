$(document).ready(function() {
  var frame = 1;
  var ball = 1;
  var total = 0;
  var points = 0;
  // Randomise throwAngle
  var randomAngle = function() {
    var angle = Math.floor(Math.random() * 21) - 10;
    $("#throwAngle").val(angle);
  };

  randomAngle();

  $("#bowl").click(function() {
    if(frame <= 10) {
      // Calculate number of pins down
      var pinsDown =  10 - Math.abs($("#throwAngle").val());
      // console.log(pinsDown);

      //Calculate correct value for 2nd bowl
      if(ball === 1) {
        points = pinsDown;
      } else {
        console.log(pinsDown + "last roll " + points);
        // previousBowl = parseInt($("#frame"+ frame +" #ball"+ (ball - 1)).text());
        points = (points + pinsDown > 10) ? (10 - points) : pinsDown;
      }

      // Insert result into table
      $("#frame" + frame + " #ball"+ ball).text(points);
      total += points;
      $("#total").text(total);
      $("#frame" + frame + " #ball3").text(total);

      // Add bonus if strike

      if($("#frame" + (frame - 1) + " #ball1").text() == 10) {
        total += points;
        if(ball === 2) {
          var previousPoints = parseInt($("#frame"+ frame +" #ball"+ (ball - 1)).text());
          $("#frame" + (frame - 1) + " #ball3").text(total - points - previousPoints);
        } else {
          $("#frame" + (frame - 1) + " #ball3").text(total - points);
        }
        $("#frame" + frame + " #ball3").text(total);
      }

      // Prepare for next entry
      ball++;
      if(ball === 3) {
        frame++;
        ball = 1;
      }

      randomAngle();
    }
  });
});