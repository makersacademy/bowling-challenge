describe('BowlingGame', function () {

  var game
  var frame

  beforeEach(function () {
    game = new BowlingGame();
    frame = new Frame();
    frame.rollCounter = 2;
    frame.rollScore = 9;
  });

  describe('object is constructed with', function () {
    it('a score of zero', function () {
      expect(game.score).toEqual(0);
    });

    it('an empty array of frames', function () {
      expect(game.noOfFrames).toEqual([]);
    });
  });

  describe('increments', function () {
    it('the score on every frame', function () {
      game.addFrame(frame);
      expect(game.score).toEqual(9);
    });
    it('the no of Frames with a Frame object', function () {
      game.addFrame(frame);
      expect(game.noOfFrames.length).toEqual(1);
    });

  });



  it('only allows 10 frames', function () {
    for (var i = 1; i < 11; i ++) {
      game.addFrame(frame);
    }
    console.log(game.noOfFrames.length);
    console.log(game);
    expect(game.addFrame(new Frame())).toEqual('Game is over');
  });

});
