$(document).ready(function() {
  var game = new Game();

  $("#input-rolls").submit(function(event) {
    event.preventDefault();
    var values = $(this).serializeArray();
    var firstRoll = parseInt(values[0].value);
    if (firstRoll === 10) game.roll([firstRoll]);
    else {
      var secondRoll = parseInt(values[1].value);
      game.roll([firstRoll, secondRoll]);
    };

    console.log(game);

    $("#score-card").find("tr:gt(0)").remove();

    for (var frame = 1; frame < game.currentFrame + 1; frame++) {
      $('#score-card tr:last').after(
        `<tr>
          <td>${frame}</td>
          <td>${game.frameSheet[frame - 1]}</td>
          <td>${game.scoreSheet[frame - 1]}</td>
          </tr>`
          );
    }
    $("#total-score").text(game.calculateTotalScore());
  });
});
