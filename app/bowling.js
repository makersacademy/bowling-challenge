$(document).ready(function() {
    var frame = 1;
    var ball = 1;
    var total = 0;
  $("#bowl").click(function() {
    // Calculate number of pins down
    // console.log(Math.abs($("#throwAngle").val()));
    var pinsDown =  10 - Math.abs($("#throwAngle").val());
    console.log(pinsDown);

    // Insert result into table
    $("#frame"+ frame +" #ball"+ ball).text(pinsDown);
    total += pinsDown;
    $("#total").text(total);
    ball++;
    if(ball === 3) {
      frame++;
      ball = 1;
    }
  });
});