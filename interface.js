$(document).ready(function() {
  let player = new Player("Jane");
  let frame = 1;
  let roll = 0;

  function refreshData(frame, roll) {
    rollData();
    fillFrameScore();
    addNotes();

    function rollData() {
      $(`#F${frame}R${roll}`).text(returnRollScore());

      function returnRollScore() {
        return frameComplete()
          ? player.currentFrame.rolls[0].score
          : player.frames[0].rolls[roll - 1].score;
      }
    }

    function fillFrameScore() {
      // console.log(player.frames[0].score);
      $(`#F${frame}T`).text(player.frames[frame - 1].score);
    }

    function addNotes() {
      $(`#Notes${frame}`).text(player.frames[frame - 1].notes);
    }
  }

  function frameComplete() {
    return player.currentFrame.rolls[0] ? true : false;
  }

  $(".button").click(function(event) {
    // if player.currentFram
    roll += 1;
    player.enterRoll(parseInt(this.id));
    refreshData(frame, roll);
  });
});
