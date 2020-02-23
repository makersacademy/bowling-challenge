$( document ).ready(function () {
  var game = new Game()
  var frame = new Frame()

  // $(`#te${'st'}`).text(`${frame.rolls[0]} + ${frame.rolls[1]}`)

  $('#1').click(function() {
    if (game.frames[0] === undefined ) {
      game.add_frame(new Frame([1])) 
      console.log(game.frames[0])
    } else if (game.frames[game.frames.length-1].rolls[0] !== 10 && game.frames[game.frames.length-1].rolls[1] !== undefined) {
      game.frames[game.frames.length-1].rolls.push(1)
      console.log(game.frames[0])
      console.log(game.frames[game.frames.length-1].rolls)
    }
  })
})

// 