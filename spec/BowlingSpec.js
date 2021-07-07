describe('Bowling game', function(){
  var game
  beforeEach(function(){
    game = new Game
  })

  it ('each game starts with 10 pins standing', function(){
    expect(game.pins_standing).toEqual(10)
  })

  it ('confirms if the score entered is a strike', function(){
    expect(game.strike(10)).toEqual(true)
  })

  it ('adds a number of pins hit to frames,scores array if it is not a strike', function(){
    game.roll(3)
    expect(game.frame_input[1][0]).toEqual(3)
  })

  it ('confirms that the frame is complete if it has 2 scores inside it', function(){
    game.frame_input = {1:[1,2]}
    expect(game.frame_complete()).toEqual(true)
  })

  it ('should add up scores inside the scores_entered array', function(){
    game.frame_input = {1:[1,2]}
    expect(game.score_sum()).toEqual(3)
  })

  it ('should calculate score for the frame', function(){
    game.frame_input={1:[1,2],2:[3,4]}
    game.score_for_output()
    expect(game.frame_output[1]).toEqual([3])
  })

})
