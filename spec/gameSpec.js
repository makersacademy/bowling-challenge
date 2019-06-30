describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  })

  it('includes an empty frame', function() {
    expect(game.frames).toEqual([frame]);
  })

  describe('addFrame', function() {
    it('add a new instance of frame', function() {
      game.lastFrame().rolls = [1,2]
      game.addFrame()
      expect(game.frames.length).toEqual(2)
    })
  })

  describe('Score', function() {
    it('calculate the score', function() {
      game.lastFrame().rolls = [1,2]
      expect(game.score()).toEqual(3)
    })
  })
})