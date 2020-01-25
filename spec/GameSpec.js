describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })
  
  it('starts with score of 0', function() {
    expect(game.viewScore()).toEqual(0)
  })

  it('starts with empty array of frames', function() {
    expect(game.viewFrames()).toEqual([])
  })

  describe('#roll', function() {
    it('returns number of pins when user rolls < 10', function() {
      expect(game.roll(5)).toEqual(5)
    })

    it('returns "strike" when user rolls 10', function() {
      expect(game.roll(10)).toEqual('strike')
    })

    it('updates score when user rolls', function() {
      game.roll(1)
      expect(game.score).toEqual(1)
    })
  })

})