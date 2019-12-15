$(document).ready(function() {
  var game = new Game();

  $("#input-rolls").submit(function(event) {
    event.preventDefault();
    var values = $(this).serializeArray();
    var firstRoll = values[0].value;
    var secondRoll = values[1].value;

    game.roll([firstRoll, secondRoll]);
    console.log(game)

    $('#score-card tr:last').after(
      `<tr>
        <td>${game.currentFrame}</td>
        <td>${game.frameSheet[game.frameSheet.length - 1]}</td>
        <td>${game.calculateTotalScore()}</td><
        /tr>`
        );
  });
});
