$( document ).ready(function () {
  var game = new Game()

  $('#1').click(function() {
    if (game.frames[0] === undefined ) {
      game.add_frame(new Frame([1])) 
      $('#frame-1_roll-1').text(1)
    } else if (game.frames[game.frames.length-1].rolls[0] !== 10 && game.frames[game.frames.length-1].rolls[1] === undefined) {
      game.frames[game.frames.length-1].rolls.push(1)
      $(`#frame-${game.frames.length}_roll-2`).text(1)
    } else if (game.frames.length === 10) {
      if (game.frames[9].rolls[0] === 10 && game.frames[game.frames.length-1].rolls[1] === undefined) {
        game.frames[9].rolls.push(1)
        $('#frame-10_roll-2').text(1)
      } else if (game.frames[9].isSpare &&  game.frames[game.frames.length-1].rolls[2] === undefined) {
        game.frames[9].rolls.push(1)
        $('#frame-10_roll-3').text(1)
      } 
    } else {
      game.add_frame(new Frame([1])) 
      $(`#frame-${game.frames.length}_roll-1`).text(1)
    }
    $('#total_score').text(game.total_score());
  })

  $('#10').click(function() {
    if (game.frames[0] === undefined ) {
      game.add_frame(new Frame([10])) 
      $('#frame-1_roll-1').text("X")
    } else if (game.frames.length === 10) {
      if (game.frames[9].rolls[0] === 10 && game.frames[9].rolls[1] === undefined) {
        game.frames[9].rolls.push(10)
        $('#frame-10_roll-2').text("X")
      } else if (game.frames[9].rolls[1] === 10 && game.frames[9].rolls[2] === undefined) {
        game.frames[9].rolls.push(10)
        $('#frame-10_roll-3').text("X")
      } else if (game.frames[9].rolls[0] + game.frames[9].rolls[1] === 10 && game.frames[9].rolls[2] === undefined) {
        game.frames[9].rolls.push(10)
        $('#frame-10_roll-3').text("X")
      }
    } else if (game.frames[game.frames.length-1].rolls[1] !== undefined || game.frames[game.frames.length-1].isStrike() ) {
      game.add_frame(new Frame([10])) 
      $(`#frame-${game.frames.length}_roll-1`).text("X")
    }
    $('#total_score').text(game.total_score());
  })
})