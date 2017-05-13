$(document).ready(function() {
  var frame = 1;
  var ball = 1;
  var total = 0;
  var points = 0;
  var game = {frame1:[]};

  // Randomise default throwAngle i.e. can't set slider to '10' once and keep 
  // clicking to add 10 every time!
  var randomAngle = function() {
    var angle = Math.floor(Math.random() * 21) - 10;
    $("#throwAngle").val(angle);
  };

  randomAngle();

  $("#bowl").click(function() {
    if(frame <= 10) {
      // Calculate number of pins down
      var pinsDown =  10 - Math.abs($("#throwAngle").val());

      //Calculate correct value for 2nd bowl
      if(ball === 1) {
        game.points = pinsDown;
      } else {
        console.log(pinsDown + "last roll " + points);
        game.points = (points + pinsDown > 10) ? (10 - points) : pinsDown;
      }

      // Insert result into table
      $("#frame" + frame + " #ball"+ ball).text(points);
      total += points;
      $("#total").text(total);
      $("#frame" + frame + " #ball3").text(total);

      // Add bonus if strike ELSE if spare
      var previousBall1 = parseInt($("#frame" + (frame - 1) + " #ball1").text());
      var previousBall2 = parseInt($("#frame" + (frame - 1) + " #ball2").text());

      if(previousBall1 == 10) {
        total += points;
        if(ball === 1) {
          $("#frame" + (frame - 1) + " #ball3").text(total - points);
          var previousPoints = points;
        } else {
          $("#frame" + (frame - 1) + " #ball3").text(total - points - previousPoints);
        }
        $("#frame" + frame + " #ball3").text(total);
        } else if ((previousBall1 + previousBall2 === 10) && ball === 1) {
          total += points;
          $("#frame" + (frame - 1) + " #ball3").text(total - points);
        }


      // Prepare for next entry
      if((ball === 2) || (ball === 1 && pinsDown === 10)) {
        frame++;
        ball = 1;
      } else {
        ball++;
      }

      randomAngle();
    }
  });
});