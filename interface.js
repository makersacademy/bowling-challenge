var game = new Game()
$(document).ready(function () {
  for (var i = 0; i < 10; i++) {
    frame = new Frame(i === 9)
    game.add_frame(frame)
  }

  $('#calculate_score').click(function () {
    $('#final_score').val(game.finalScore())
  })

  function createUpdate (i, j) {
    $('#frame_' + (i + 1) + '_' + j + '_pins').change(function () {
      var frame = game.frames[i]
      frame.add_roll(parseInt($('#frame_' + (i + 1) + '_' + j + '_pins').val()))
      $('#frame_' + (i + 1) + '_' + Math.max(j,2) + '_score').text(frame.score_no_bonus())
    })
  }

  for (var i = 0; i < 10; i++) {
    createUpdate(i, 1)
    createUpdate(i, 2)
  }
  createUpdate(9, 3)
})
