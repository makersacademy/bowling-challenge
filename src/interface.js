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

  $('#zero').click(function(event){
    event.preventDefault();
    var pins = $('#zero').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#one').click(function(event){
    event.preventDefault();
    var pins = $('#one').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#two').click(function(event){
    event.preventDefault();
    var pins = $('#two').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#three').click(function(event){
    event.preventDefault();
    var pins = $('#three').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#four').click(function(event){
    event.preventDefault();
    var pins = $('#four').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#five').click(function(event){
    event.preventDefault();
    var pins = $('#five').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#six').click(function(event){
    event.preventDefault();
    var pins = $('#six').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#seven').click(function(event){
    event.preventDefault();
    var pins = $('#seven').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#eight').click(function(event){
    event.preventDefault();
    var pins = $('#eight').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#nine').click(function(event){
    event.preventDefault();
    var pins = $('#nine').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });

  $('#ten').click(function(event){
    event.preventDefault();
    var pins = $('#ten').val();
    pins = Number(pins)
    game.roll(pins);
    updatePage();
  });
});
