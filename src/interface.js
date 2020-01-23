// JQuery: submits data to backend and updates frontend. 
$(document).ready(function() {
  var game = new Game();

  function updatePage() {
    var frame = game.getFrames().pop();
    if (frame === undefined) {frame = ''};
    var roll = game.getRolls().pop();
    if (roll === undefined) {roll = ''};
    var pins = game.getPins().pop();
    if (pins === undefined) {pins = ''};
    var data = `<tr>
                <td>${frame}</td>
                <td>${roll}</td>
                <td>${pins}</td>
                </tr>`
    $('#prevTurns').append(data);

    $('#score').text(game.getScore());
    $('#frame').text(game.getCurrentFrame());
    $('#roll').text(game.getCurrentRoll());
    $('#frameScores').text(game.getFrameScores());
    $('#bonus').text(game.bonuses().pop());
    $('#frames').text(game.getFrames());
    $('#rolls').text(game.getRolls());
    $('#pins').text(game.getPins());

    updateChart(game.getFrameScores());
  }
  updatePage();

  $('#enter-pins').submit(function(event){
    event.preventDefault();
    var pins = $('#current-turn').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();

    // console.log(game.getCurrentFrame());
    // console.log(game.getCurrentRoll());
    // console.log(game.getScoreCard()[0].pins);
    //
    // console.log(game.getScore());
    // console.log(game.getFrameScores());
    // console.log(game.bonuses());
    // console.log(game.getFrames());
    // console.log(game.getRolls());
    // console.log(game.getPins());
  });
});
