describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should have an inital score of 0', function() {
    expect(game._score).toEqual(0);
  });
});


describe('Frame', function() {
  var frame;
  var round;

  beforeEach(function() {
    frame = new Frame();
    // TODO: how to fake this and tests?
    round = new Round();
  });
  it('should have an inital frame score of 0', function() {
    expect(frame._score).toEqual(0);
  });
  it('should NOT be a last round frame unless specified', function() {
    expect(frame._isLastRoundFrame).toEqual(false);

    frame = new Frame(true);
    expect(frame._isLastRoundFrame).toEqual(true);
  });

  // TODO:
  it('should have two rounds if NOT a last round frame', function() {
    expect(frame._rounds).toEqual([round, round]);
  });

  // TODO:
  it('should have three rounds if frame is specified as a last round frame', function() {
    frame = new Frame(true);

    expect(frame._rounds).toEqual([round, round, round]);
  });
});


describe('Round', function() {
  var round;

  beforeEach(function() {
    round = new Round();
  });

  it('should have an inital score of 0', function() {
    expect(round._score).toEqual(0);
  });

  describe('updateScore', function() {
    it('updates the round score with how many pins knocked down', function() {
      round.updateScore(9);
      expect(round._score).toEqual(9);
    });

    it('throws an error if max number of pins are entered', function() {
      expect(function() {
        round.updateScore(11);
      }).toThrowError('Max number of pins exceeded');
    });
  });
});
