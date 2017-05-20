describe('Bowling', function() {
  var bowling = new Bowling()

  it('begins a game with an empty score card', function() {
    expect(bowling.score).toEqual(0);
  })

  it('begins a game with a frame counter of 0', function() {
    expect(bowling.frameCounter).toEqual(0);
  })

  describe('#startGame', function() {
    it('creates a new frame at the start of a new game', function() {
      bowling
    })
  })
})
