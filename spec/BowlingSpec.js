describe('Bowling game', function(){
  var game

  beforeEach(function(){
    game = new Game
  })

  it ('each game starts with 10 pins standing', function(){
    expect(game.pins_standing).toEqual(10)
  })

  it ('confirms if the score entered is a strike', function(){
    expect(game.is_it_a_strike(10)).toEqual(true)
  })

  it ('adds a pins hit to the scores entered array', function(){
    game.roll(3)
    expect(game.scores_entered).toEqual([3])
  })

  it ('should add up scores inside the scores_entered array', function(){
    game.roll(3)
    game.roll(5)
    expect(game.score_sum()).toEqual(8)
  })

})
