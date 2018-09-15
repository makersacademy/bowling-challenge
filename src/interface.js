var scorecard = new Scorecard();

// $(document).ready(function() {

//   var firstRoll = true;

//   $("#submitRoll").click(function() {
//     // debugger;
//     var num = parseInt($("#inputBox").val());
//     scorecard.addRoll(num);
//     $("#score").text(scorecard.currentScore);
//     var frame = scorecard.frame;
//     console.log(frame);
//     if (firstRoll) {
//       $(`#frame${frame} #roll1`).text(num);
//       firstRoll = false;
//     } else {
//       $(`#frame${frame} #roll2`).text(num);
//       firstRoll = true;
//     }

//     if (scorecard.gameOver) {
//       alert("Game Over");
//     }

//   });

// });

document.addEventListener("DOMContentLoaded", function (event) {

  console.log("Frame:", scorecard.frame);
  console.log(scorecard.currentFrame);
  console.log("Roll Number:", scorecard.rollNumber);

  var firstRoll = false; 

  document.getElementById("submitRoll").onclick = function() {
    // debugger;
    var input = document.getElementById("inputBox").value;
    var num = parseInt(input);
    scorecard.addRoll(num);
    document.getElementById("score").innerHTML = scorecard.currentScore;

    var frame = scorecard.frame;

    if (firstRoll) {
      document.querySelector(`#frame${frame} #roll1`).innerHTML = input;
      firstRoll = false;
    } else {
      document.querySelector(`#frame${frame} #roll2`).innerHTML = input;
      firstRoll = true;
    }

    console.log("Frame:", frame);
    console.log("Roll Number:", scorecard.rollNumber);
    event.stopPropagation();
  }


});