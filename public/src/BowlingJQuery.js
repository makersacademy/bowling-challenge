$(document).ready(function(){
  $(function() {
    frame = new Frame();
    scorecard = new Scorecard();
    $("span#curr_frame").text(frame._currFrame);
    $(roll1_input = document.getElementById("roll1"));
    $(roll2_input = document.getElementById("roll2"));
  });

  $("input#submit_rolls").click(function() {
    console.log("Clicked")
    if (roll1_input.value !== "" && roll2_input.value !== "" ) {
      getScores();
      console.log(scorecard._score)
      updateTable(frame._currFrame);
      prepNextFrame();
    };
  });

  function getScores() {
    scorecard.calculate(frame._currFrame, parseInt(roll1.value), parseInt(roll2.value));
    if (frame._currFrame > 1) {
      scorecard.calc_bonus(frame._currFrame - 1);
      console.log(scorecard._score[frame._currFrame]);
    }
  };

  function updateTable(refFrame) {
    roll1_val = document.getElementById("row_roll1_" + refFrame);
    roll1_val.innerHTML = roll1_input.value;
    roll2_val = document.getElementById("row_roll2_" + refFrame);
    roll2_val.innerHTML = roll2_input.value;
    if (refFrame > 1) {
      prevFrame = parseInt(refFrame - 1);
      bonus_val = document.getElementById("row_bonus_" + prevFrame);
      console.log("bonus: " + scorecard._score[prevFrame][4])
      bonus_val.innerHTML = scorecard._score[prevFrame][4];
    }
  };

  function prepNextFrame() {
    strikeOrSpare = (scorecard._type === "strike" || scorecard._type ===  "spare" ? true : false);
    console.log("strike/spare:" + strikeOrSpare);
    frame.nextFrame(strikeOrSpare);
    $("span#curr_frame").text(frame._currFrame);
    roll1_input.value = "";
    roll2_input.value = "";
  };

});
