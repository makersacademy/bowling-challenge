
/// HANDLES THE SCORING CALCULATION

$("#calculateButton").on("click", function() {

  c.addFrame(0, 1, parseInt($("#frameOneRollOne").val()), parseInt($("#frameOneRollTwo").val()));
  c.addFrame(1, 2, parseInt($("#frameTwoRollOne").val()), parseInt($("#frameTwoRollTwo").val()));
  c.addFrame(2, 3, parseInt($("#frameThreeRollOne").val()), parseInt($("#frameThreeRollTwo").val()));
  c.addFrame(3, 4, parseInt($("#frameFourRollOne").val()), parseInt($("#frameFourRollTwo").val()));
  c.addFrame(4, 5, parseInt($("#frameFiveRollOne").val()), parseInt($("#frameFiveRollTwo").val()));
  c.addFrame(5, 6, parseInt($("#frameSixRollOne").val()), parseInt($("#frameSixRollTwo").val()));
  c.addFrame(6, 7, parseInt($("#frameSevenRollOne").val()), parseInt($("#frameSevenRollTwo").val()));
  c.addFrame(7, 8, parseInt($("#frameEightRollOne").val()), parseInt($("#frameEightRollTwo").val()));
  c.addFrame(8, 9, parseInt($("#frameNineRollOne").val()), parseInt($("#frameNineRollTwo").val()));
  c.addFrame(9, 10, parseInt($("#frameTenRollOne").val()), parseInt($("#frameTenRollTwo").val()));
  c.addFrame(10, 11, parseInt($("#frameBonusRollOne").val()), parseInt($("#frameBonusRollTwo").val()));

  c.calculate();
  $("#output").text(String(c.finalScore));

});
