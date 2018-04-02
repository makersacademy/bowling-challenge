describe('Game', function() {
  let game, frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpy('Frame');
  });

  it('should have an inital score of 0', function() {
    expect(game._score).toEqual(0);
  });

  it('should have no frames played', function() {
    expect(game._frames).toEqual([]);
  });

  describe('addFrame', function() {
    it('stores a frame', function() {
      game.addFrame(frame);

      expect(game._frames).toEqual([frame])
    });

    it('throws an error if more than ten frames are added to a game', function() {
      for(var i = 0; i <= 10; i++) {
        game.addFrame(frame);
      }

      expect(function() {
        game.addFrame(frame);
      }).toThrowError('Max number of frames reached');
    });
  });

  describe('score', function() {
    it('returns the score from the current game', function() {
      // TODO: How to stub this
      var frame = new Frame();
      frame.addRound(new Round(7));
      frame.addRound(new Round(2));
      frame.score();

      var frame1 = new Frame();
      frame1.addRound(new Round(2));
      frame1.addRound(new Round(5));
      frame1.score();

      game.addFrame(frame);
      game.addFrame(frame1);
      expect(game.score()).toEqual(16);
    });
  });
});
