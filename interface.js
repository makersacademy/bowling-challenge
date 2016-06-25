$(document).ready(function() {
    var game = new Game();
    $('#play').click(function() {
        $('#pinsStruck').text("CURRENT ROLL = " + game.pinStruck());
        appendToTable();
        console.log('Game before click:');
        console.log(game);
        game.play();
        console.log('Game before click:');
        console.log(game);
    })

    $('#reset').click(function(){
      var game = new Game();
      game.resetGameNew();
      game.play();
    })

    function appendToTable() {
        var table_row = `
      <tr class="child">
        <td>${game.currentFrame()}</td>
        <td>${game.getMoves()}</td>
        <td>${game.knockedDownPins()}</td>
        <td>${game.gameScore()}</td>
        `;
        $('#score_table tr:last').after(table_row);
    }
})
