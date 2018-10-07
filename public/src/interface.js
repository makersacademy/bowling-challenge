$(document).ready( function() {
  var table = new Table()
  var game
  var b
  $('#create-table').click(function(){
    table.remove_table('#score-div')
    game = new Game()
    table.build_table('#score-div')
    table.build_header('#score-table')
  })

  $('#update').click(function(){
	   game.play(parseInt($('#knocked-text').val()))
     game.endTurn()
     var a = game.bowlingAPI()
     console.log(a.knocked)
     console.log(game.round_score)
     table.new_round(game.bowlingAPI())

  })
})
