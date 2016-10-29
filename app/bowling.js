$(document).ready(function() {
    var frame = 1;
    var ball = 1;
  $("#bowl").click(function() {
    // Calculate number of pins down
    // console.log(Math.abs($("#throwAngle").val()));
    var pinsDown =  10 - Math.abs($("#throwAngle").val());
    console.log(pinsDown);

    // Insert result into table

    $("#frame"+ frame +" #ball"+ ball).text(pinsDown);
    ball++;
    if(ball === 3) {
      frame++;
      ball = 1;
    }
  });
});