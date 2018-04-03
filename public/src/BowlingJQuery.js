$(document).ready(function(){
  $(function() {
    frame = new Frame();
    scorecard = new Scorecard();
    $("span#curr_frame").text(frame._currFrame);
    $(roll1_input = document.getElementById("roll1"));
    $(roll2_input = document.getElementById("roll2"));
    //roll1_input.focus();
  });


  $("input#submit_rolls").click(function() {

    if (frame._gameEnd === false) {
      try {
        getScores();
        updateTable(frame._currFrame);
        prepNextFrame();
      }
      catch(err) {
        $("h2#message").text(err);
      };
    }
  });

  function getScores() {
    scorecard.calculate(frame._currFrame, parseInt(roll1.value), parseInt(roll2.value));
    if (frame._currFrame > 2 && frame._currFrame < 10) {
      scorecard.calc_bonus(frame._currFrame - 2);
    }
    else if (frame._currFrame === 10 && scorecard._type === "normal") {
      scorecard.calc_bonus(frame._currFrame - 2);
      scorecard.calc_bonus(frame._currFrame - 1);
    }
    else if (frame._currFrame === 10 && scorecard._type !== "normal") {
      scorecard.calc_bonus(frame._currFrame - 2);
    }
    else if (frame._currFrame === 11) {
      scorecard.calc_bonus(frame._currFrame - 2);
      scorecard.calc_bonus(frame._currFrame - 1);
    };

  };

  function calcGrandtotal() {
    grandtotal_cell = document.getElementById("row_grandtotal");
    grandtotal_cell.innerHTML = scorecard.grandtotal();
  }

  function updateTable(refFrame) {
    roll1_val = document.getElementById("row_roll1_" + refFrame);
    roll2_val = document.getElementById("row_roll2_" + refFrame);
    roll1_val.innerHTML = roll1_input.value;
    roll2_val.innerHTML = roll2_input.value;

    if (refFrame > 2 && frame._currFrame < 10) {
      prevFrame = parseInt(refFrame - 2);
      bonus_val = document.getElementById("row_bonus_" + prevFrame);
      bonus_val.innerHTML = scorecard._score[prevFrame][4];
    }
    else if (frame._currFrame === 10 && scorecard._type === "normal") {
      for (i = 1; i <= 2; i++) {
        prevFrame = parseInt(refFrame - i);
        bonus_val = document.getElementById("row_bonus_" + prevFrame);
        bonus_val.innerHTML = scorecard._score[prevFrame][4];
      }
      calcGrandtotal();
    }
    else if (frame._currFrame === 10 && scorecard._type !== "normal") {
      prevFrame = parseInt(refFrame - 2);
      bonus_val = document.getElementById("row_bonus_" + prevFrame);
      bonus_val.innerHTML = scorecard._score[prevFrame][4];
    }
    else if (frame._currFrame === 11) {
      for (i = 1; i <= 2; i++) {
        prevFrame = parseInt(refFrame - i);
        bonus_val = document.getElementById("row_bonus_" + prevFrame);
        bonus_val.innerHTML = scorecard._score[prevFrame][4];
      }
      calcGrandtotal();
    }
  };

  function prepNextFrame() {
    strikeOrSpare = (scorecard._type === "strike" || scorecard._type ===  "spare" ? true : false);
    frame.nextFrame(strikeOrSpare);
    $("span#curr_frame").text(frame._currFrame);
    roll1_input.value = "";
    roll2_input.value = "";
    roll1_input.focus();
  };

});
