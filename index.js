let scoreCard = new ScoreCard(Frame);

$(document).ready(() => {

  setupTable();
  $("#roll-score-button").on('click', () => {
    upDate();
  });
  
});

function setupTable() {
  for (let i = 1; i <= 10; i++) {
    let frame = scoreCard.frames[`frame${i}`];
    $("#frame-numbers").append(`<th id="frame-number${frame.number}" colspan="2"> Frame ${frame.number}</th>`);
    $("#roll-scores").append(`<td id="roll1"></td>`);
    $("#roll-scores").append(`<td id="roll2"></td>`);
    $("#frame-scores").append(`<td id="frame${frame.number}-score" colspan="2"></td`);
  }
}

function upDate() {
  console.log("Update function was ran");
  scoreCard.roll($("#roll-score").val());
  for (let i = 1; i <= 10; i++) {
    let frame = scoreCard.frames[`frame${i}`];

    $("#roll-scores").text(`<td id="roll1"></td>`);
    $("#roll-scores").text(`<td id="roll2"></td>`);
    $("#frame-scores").text(`<td id="frame${frame.number}-score" colspan="2"></td`);
  }
}

function updateRoll1(frame) {
    $($(`#frame-number${frame.number}`) )

}

function updateRoll2() {

}