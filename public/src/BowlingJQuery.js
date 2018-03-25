$(document).ready(function(){
  $(function() {
    $(frame = new Frame());
    $(baseScore = new BaseScore());
    $(roll1_input = document.getElementById("roll1"));
    $(roll2_input = document.getElementById("roll2"));
  });

  $("input#submit_rolls").click(function() {
    console.log("Clicked")
    getScores();
    console.log(baseScore._score)
    updateTable(frame._currFrame);
    clearInputs();
  });

  function getScores() {
    baseScore.calculate(frame._currFrame, parseInt(roll1.value), parseInt(roll2.value));
    frame.nextFrame();
  };

  function updateTable(frame) {
    roll1_val = document.getElementById("row_roll1_" + frame);
    roll2_val = document.getElementById("row_roll2_" + frame);
    console.log(frame._currFrame);
    console.log(roll1_val);
    console.log(roll1_input.value);
    roll1_val.innerText = roll1_input.value;
    roll2_val.innerText = roll2_input.value;
  };

  function clearInputs() {
    roll1_input.clear;
    roll2_input.clear;
  };

});
