$(document).ready(function() {
  let player = new Player("Jane");
  let frame = player.frames.length + 1;
  let roll = 0;

  $(".button").click(function(event) {
    console.log(player.frames);
    roll +=1

    // if(roll === 1) {roll = 0} else {roll = 1}
    player.enterRoll(parseInt(this.id));
    refreshData(frame, roll);
  });

  function refreshData(frame, roll) {
    rollData();
    fillFrameScore();
    fillRunningTotal();

    function rollData() {
      $(`#F${frame}R${roll}`).text(returnRollScore());

      function returnRollScore() {
        return frameComplete()
          ? player.currentFrame.rolls[0].score
          : player.frames[0].rolls[roll - 1].score;
      }
    }

    function fillFrameScore() {
      $(`#F${frame}T`).text(returnFrameScore());

      function returnFrameScore() {
        return player.frames[frame - 1]
          ? (player.frames[frame - 1].score, addNotes())
          : player.currentFrame.score;

          function addNotes() {
            $(`#Notes${frame}`).text(player.frames[frame - 1].notes);
          }
      }
     }

    function fillRunningTotal() {
      $(`#total`).text(player.totalScore);
     }
  }

  function frameComplete() {
    return player.currentFrame.rolls[0] ? true : false;
  }
});
