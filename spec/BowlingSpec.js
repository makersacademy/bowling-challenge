describe('Bowling game', function(){
  var game

  beforeEach(function(){
    game = new Game
  })

  it ('confirms if the score entered is a strike', function(){
    expect(game.is_it_a_strike(10)).toEqual(true)
  })

  it ('adds a pins hit to the scores entered array', function(){
    game.roll(3)
    expect(game.scores_entered).toEqual([3])
  })

})
