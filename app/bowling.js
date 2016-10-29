$(document).ready(function() {
  var frame = 1;
  var ball = 1;
  var total = 0;

  // Randomise throwAngle
  var randomAngle = function() {
    var angle = Math.floor(Math.random() * 21) - 10;
    $("#throwAngle").val(angle);
  };

  randomAngle();

  $("#bowl").click(function() {
    // Calculate number of pins down
    var pinsDown =  10 - Math.abs($("#throwAngle").val());
    // console.log(pinsDown);

    //Calculate correct value for 2nd bowl
    if(ball > 1) {
      console.log(pinsDown);
      previousBowl = parseInt($("#frame"+ frame +" #ball"+ (ball - 1)).text());
      pinsDown = (previousBowl + pinsDown > 10) ? (10 - previousBowl) : pinsDown;
    }

    // Insert result into table
    $("#frame"+ frame +" #ball"+ ball).text(pinsDown);
    total += pinsDown;
    $("#total").text(total);
    ball++;
    if(ball === 3) {
      frame++;
      ball = 1;
    }

    randomAngle();
  });
});