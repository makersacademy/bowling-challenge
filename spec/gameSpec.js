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
      game.currentFrame().rolls = [1,2];
      game.addFrame();
      expect(game.frames.length).toEqual(2);
    })
  })

  describe('Score', function() {
    it('calculate the score', function() {
      game.currentFrame().rolls = [1,2];
      game.score();
      expect(game.currentScore[0]).toEqual(3);
    })
  })

  describe('bonusStrike', function() {
    it('calculates the bonus for a strike', function() {
      game.add(10);
      game.add(0);
      game.add(5);
      game.add(4);
      game.bonusStrike();
      expect(game.currentScore[0]).toEqual(19);

    })
  })
})