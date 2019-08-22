$(document).ready(function() {
  game = new Game()

  $('#user_input').submit(function(event) {
    event.preventDefault();
    input = $('#input').val();
    game.add(input)

    // first frame
    $('#pins1a').text(game.frames[0].rolls[0])

    $('#pins1b').text(game.frames[0].rolls[1])
    $('#score1b').text(game.currentScore[0])

    // second frame
    $('#pins2a').text(game.frames[1].rolls[0])

    $('#pins2b').text(game.frames[1].rolls[1])
    $('#score2b').text(game.currentScore[1])

    // third frame
    $('#pins3a').text(game.frames[2].rolls[0])

    $('#pins3b').text(game.frames[2].rolls[1])
    $('#score3b').text(game.currentScore[2])

    // fourth frame
    $('#pins4a').text(game.frames[3].rolls[0])

    $('#pins4b').text(game.frames[3].rolls[1])
    $('#score4b').text(game.currentScore[3])
    // $('#notes3b').text('+ ' + game._bonusStrike + ' Bonus')

  });
});