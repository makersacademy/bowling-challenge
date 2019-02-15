$(document).ready(function() {
  let player = new Player("Jane");

  $(".button").click(function(event) {
    let frame = player.frames.length;
    let roll = player.currentFrame.rolls.length;

    player.enterRoll(parseInt(this.id));
    refreshData(frame, roll);
  });

  function refreshData(frame, roll) {
    rollData();
    fillFrameScore();
    fillRunningTotal();
    bonusRefresher(frame);
    bonusRefresher(frame-1);

    function rollData() {
      $(`#F${frame + 1}R${roll + 1}`).text(returnRollScore());

      function returnRollScore() {
        return frameComplete()
          ? player.currentFrame.rolls[0].score
          : player.frames[frame].rolls[roll].score;
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
          player.frames[frame - 1].score +
          player.frames[frame - 1].bonusScore;
        $(`#F${frame}T`).text(combinedScore);
      }
    }
  }

  function frameComplete() {
    return player.currentFrame.rolls[0] ? true : false;
  }
});
