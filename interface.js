$(document).ready(function() {
  let player = new Player("Jane");

  $(".button").click(function(event) {
    let frame = player.frames.length;
    let roll = player.currentFrame.rolls.length;
    let rollNumber = parseInt(this.id);
    let possible = checkIfPossible(roll, rollNumber);

    if (possible) {
      warning.className = "hidden";
      player.enterRoll(rollNumber);
      refreshData(frame, roll);
    } else {
      warning.className = "visible";
    }
    if(endOfGame(frame)) {gameover.className = "visible"}
  });

  function endOfGame(frame) {
    calculateBonusRound(frame)
    return player.remainingFrames === 0

    function calculateBonusRound(frame) {
      if (
        player.remainingFrames === 0 &&
        player.frames[frame].notes &&
        ((player.frames[frame].notes === "Strike" &&
          player.frames.length <= 12) ||
          (player.frames[frame].notes === "Spare" &&
            player.frames.length <= 11))
      ) {
        addBonusRound(frame);
      }

      function addBonusRound(frame) {
        player.remainingFrames +=1
          revealHidden()
      }

      function revealHidden() {
        extras = document.getElementsByName('extra')
       extras.forEach(extra => { extra.className = "visible" })
      }
    }
  }


  function checkIfPossible(roll, rollNumber) {
    return roll === 0 || rollNumber + player.currentFrame.rolls[0].score <= 10;
  }

  function refreshData(frame, roll) {
    rollData();
    fillFrameScore();
    fillRunningTotal();
    bonusRefresher(frame);
    bonusRefresher(frame - 1);

    function rollData() {
      $(`#F${frame + 1}R${roll + 1}`).text(returnRollScore());

      function returnRollScore() {
        return frameComplete()
          ? player.currentFrame.rolls[0].score
          : player.frames[frame].rolls[roll].score;

            function frameComplete() {
              return player.currentFrame.rolls[0] ? true : false;
            }
      }
    }

    function fillFrameScore() {
      $(`#F${frame + 1}T`).text(returnFrameScore());

      function returnFrameScore() {
        return player.frames[frame]
          ? (addNotes(), player.frames[frame].score)
          : player.currentFrame.score;

        function addNotes() {
          $(`#Notes${frame + 1}`).text(player.frames[frame].notes);
        }
      }
    }

    function fillRunningTotal() {
      $(`#total`).text(player.totalScore);
    }

    function bonusRefresher(frame) {
      if (player.frames[frame - 1] && player.frames[frame - 1].bonusScore) {
        let combinedScore =
          player.frames[frame - 1].score + player.frames[frame - 1].bonusScore;
        $(`#F${frame}T`).text(combinedScore);
      }
    }
  }
});
