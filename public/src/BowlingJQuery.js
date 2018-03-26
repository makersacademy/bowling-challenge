$(document).ready(function(){
  $(function() {
    $(frame = new Frame());
    $(scorecard = new Scorecard());
    $("span#curr_frame").text(frame._currFrame);
    $(roll1_input = document.getElementById("roll1"));
    $(roll2_input = document.getElementById("roll2"));
  });

  $("input#submit_rolls").click(function() {
    console.log("Clicked")
    getScores();
    console.log(scorecard._score)
    updateTable(frame._currFrame);
    prepNextFrame();
  });

  function getScores() {
    scorecard.calculate(frame._currFrame, parseInt(roll1.value), parseInt(roll2.value));
  };

  function updateTable(refFrame) {
    roll1_val = document.getElementById("row_roll1_" + refFrame);
    roll2_val = document.getElementById("row_roll2_" + refFrame);
    roll1_val.innerHTML = roll1_input.value;
    roll2_val.innerHTML = roll2_input.value;
  };

  function prepNextFrame() {
    frame.nextFrame();
    roll1_input.clear;
    roll2_input.clear;
  };

});
