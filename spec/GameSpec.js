describe('Game', function() {

  var game
  var frame

  beforeEach(function() {
    game = new Game()
  })


  it('rolls add to a frame score', function() {
    game.roll(4)
    game.roll(3)
    expect(game.frameScore(1)).toEqual(7)
  })

  it('keeps track of number of rolls', function() {
    expect(game.rollNumber()).toEqual(0)
    game.roll(4)
    game.roll(3)
    expect(game.rollNumber()).toEqual(2)
  })

  it('keeps track of current frame', function() {
    for (var i = 0; i < 5; i++) {
      game.roll(1)
    }
    expect(game.currentFrame()).toEqual(3)
  })

  it('moves to next frame after 2 normal rolls', function() {
    game.roll(4)
    game.roll(3)
    game.roll(3)
    expect(game.frameScore(1)).toEqual(7)
    expect(game.frameScore(2)).toEqual(3)
  })

  it('moves to next frame immediately after a strike', function() {
    game.roll(10)
    expect(game.currentFrame()).toEqual(2)
  })

  it('game keeps track of the total number of rolls', function() {
    for (var i = 0; i < 9; i++) {
      game.roll(1)
    }
    expect(game.totalRolls()).toEqual(9)
  })


})

