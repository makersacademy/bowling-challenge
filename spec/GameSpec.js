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

  it('Total score is the sum of all frame scores', function() {
    for (var i = 0; i < 10; i++) {
      game.roll(1)
    }
    expect(game.totalScore()).toEqual(10)
  })

  describe('spare', function() {
    it('next roll gets added to spare frames score', function() {
      game.roll(5)
      game.roll(5)
      game.roll(4)
      game.roll(3)
      expect(game.frameScore(1)).toEqual(14)
    })
  })

    describe('strike', function() {
    it('next 2 rolls gets added to strike frames score', function() {
      game.roll(10)
      game.roll(5)
      game.roll(4)
      expect(game.frameScore(1)).toEqual(19)
    })
  })

})

