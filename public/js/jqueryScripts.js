
/// HANDLES THE SCORING CALCULATION

$("#calculateButton").on("click", function() {

  c.addFrame(0, 1, parseInt($("#frameOneRollOne").val()), parseInt($("#frameOneRollTwo").val()));
  c.addFrame(1, 2, parseInt($("#frameTwoRollOne").val()), parseInt($("#frameTwoRollTwo").val()));

  c.calculate();
  $("#output").text(String(c.finalScore));

});
