$(document).ready( function() {
  let table = new Table()
  let frames
  let indivframe
  let score
  $('#create-table').click(function(){
    table.remove_table('#score-div')
    $('#result').hide()
    $('#update').show()
    $('#knocked-text').show()
    indivframe = new indivFrame
    frames = new Frames(indivframe)
    score = new Score
    table.build_table('#score-div')
    table.build_header('#score-table')
  })

  $('#update').click(function(){
    let knocked = parseInt($('#knocked-text').val())
    table.new_round({frame: frames.index, knocked: knocked})
	  frames.add(knocked)
    if (frames.isEnd()) {
      $('#update').hide()
      $('#knocked-text').hide()
      $("#result").show()
      $("#result").text("Game over! The score is " + score.result(frames.collection))
    }
  })
})
