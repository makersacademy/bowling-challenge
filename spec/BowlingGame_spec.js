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
    expect(game.addFrame(new Frame())).toEqual('Game is over');
  });

  describe('last frame was a', function () {
    it('spare', function () {
      frame1 = new Frame();
      frame1.rollScore = 10;
      console.log(game.noOfFrames);
      game.addFrame(frame1);
      console.log(game.noOfFrames);
      frame2 = new Frame();
      frame2.roll1 = 5;
      frame2.roll2 = 2;
      frame2.rollScore = 7;
      game.addFrame(frame2);
      console.log(game.noOfFrames);
      expect(game.score).toEqual(22);
    });
  });

  describe('outcome is', function () {
    it('gutter game', function () {
      for (var i = 1; i < 11; i ++) {
        game.addFrame(new Frame());
      }
      expect(game.outcome()).toEqual('Gutter game! Too bad, try again next time!');
    });
    it('a perfect game', function () {
      game.score = game.HIGHESTSCORE;
      expect(game.outcome()).toEqual('Perfect game!');
    });
    it('regular score', function () {
      for (var i = 1; i < 11; i ++) {
        game.addFrame(frame);
      }
      expect(game.outcome()).toEqual('Your score is 90');
    });
  });

});
