$(document).ready(function() {
  game = new Game()

  // first frame
  game.add(4)
  $('#frame1a').text(game.frames.length)
  $('#roll1a').text(game.frames[0].rolls.length)
  $('#pins1a').text(game.frames[0].rolls[0])

  game.add(5)
  $('#frame1b').text(game.frames.length)
  $('#roll1b').text(game.frames[0].rolls.length)
  $('#pins1b').text(game.frames[0].rolls[1])
  $('#score1b').text(game.currentScore + game._bonusStrike)

  // second frame
  game.add(3)
  $('#frame2a').text(game.frames.length)
  $('#roll2a').text(game.frames[1].rolls.length)
  $('#pins2a').text(game.frames[1].rolls[0])

  game.add(2)
  $('#frame2b').text(game.frames.length)
  $('#roll2b').text(game.frames[1].rolls.length)
  $('#pins2b').text(game.frames[1].rolls[1])
  $('#score2b').text(game.currentScore + game._bonusStrike)

  // third frame
  game.add(10)
  $('#frame3a').text(game.frames.length)
  $('#roll3a').text(game.frames[2].rolls.length)
  $('#pins3a').text(game.frames[2].rolls[0])

  $('#frame3b').text(game.frames.length)
  $('#roll3b').text(game.frames[2].rolls.length)
  $('#pins3b').text(game.frames[2].rolls[1])
  $('#score3b').text(game.currentScore + game._bonusStrike)

  // fourth frame
  game.add(4)
  $('#frame4a').text(game.frames.length)
  $('#roll4a').text(game.frames[3].rolls.length)
  $('#pins4a').text(game.frames[3].rolls[0])

  game.add(5)
  $('#frame4b').text(game.frames.length)
  $('#roll4b').text(game.frames[3].rolls.length)
  $('#pins4b').text(game.frames[3].rolls[1])
  $('#score4b').text(game.currentScore + game._bonusStrike)
  $('#notes3b').text('+ ' + game._bonusStrike + ' Bonus')



  // var value = $('#input').val();
  // $.post({ value: value },
  //   function(data) {
  //     game.add(data)
  //     $('#user_input')[0].reset();
  //   })

  
});