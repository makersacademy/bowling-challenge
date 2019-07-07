$(document).ready(function() {
  game = new Game()

  $('#user_input').submit(function(event) {
    event.preventDefault();
    input = $('#input').val();
    game.add(input)

    // first frame
    // $('#frame1a').text(game.frames.length)
    // $('#roll1a').text(game.frames[0].rolls.length)
    $('#pins1a').text(game.frames[0].rolls[0])

    // $('#frame1b').text(game.frames.length)
    // $('#roll1b').text(game.frames[0].rolls.length)
    $('#pins1b').text(game.frames[0].rolls[1])
    $('#score1b').text(game.currentScore[0])

    // second frame
      // $('#frame2a').text(game.frames.length)
      // $('#roll2a').text(game.frames[1].rolls.length)
      $('#pins2a').text(game.frames[1].rolls[0])

      // $('#frame2b').text(game.frames.length)
      // $('#roll2b').text(game.frames[1].rolls.length)
      $('#pins2b').text(game.frames[1].rolls[1])
      $('#score2b').text(game.currentScore[1])

    // third frame
      // $('#frame3a').text(game.frames.length)
      // $('#roll3a').text(game.frames[2].rolls.length)
      $('#pins3a').text(game.frames[2].rolls[0])

      // $('#frame3b').text(game.frames.length)
      // $('#roll3b').text(game.frames[2].rolls.length)
      $('#pins3b').text(game.frames[2].rolls[1])
      $('#score3b').text(game.currentScore[2])

    // fourth frame
      // $('#frame4a').text(game.frames.length)
      // $('#roll4a').text(game.frames[3].rolls.length)
      $('#pins4a').text(game.frames[3].rolls[0])

      // $('#frame4b').text(game.frames.length)
      // $('#roll4b').text(game.frames[3].rolls.length)
      $('#pins4b').text(game.frames[3].rolls[1])
      $('#score4b').text(game.currentScore[3])
      $('#notes3b').text('+ ' + game._bonusStrike + ' Bonus')

  });
});