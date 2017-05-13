describe('Bowling', function () {
  game = new Bowling();

  describe('First Frame', function () {

    it('starts with a frame score of zero', function () {
      expect(game.pinsKnockedFirst()).toEqual(0);
    });

    it('starts with all pins standing', function () {
      expect(game.pinsLeftAfterFirstRoll()).toEqual(10);
    });

    it('selects a number greater than 0 for the first frame', function () {
      game.firstRoll();
      expect(game.pinsKnockedFirst()).toBeGreaterThan(-1);
    });

    it('selects a number less than 10 for the first frame', function () {
      game.firstRoll();
      expect(game.pinsKnockedFirst()).toBeLessThan(11);
    });

    it('first roll sets to the second roll', function () {
      expect(game.rollNum).toEqual(1);
    });

    it('second roll sets to a new frame', function () {
      game.firstRoll();
      expect(game.rollNum).toEqual(2);
    })

  });

  it('deletes knocked pins from available pins for second frame', function () {
    var pinsKnockedF1 = game.pinsKnockedFirst();
    expect(game.pinsLeftAfterFirstRoll()).toEqual(10 - pinsKnockedF1 );
  });

  it('increments the frame number on second roll', function () {
    var frameBeforeRoll = game.frameNum;
    game.firstRoll();
    game.firstRoll();
    expect(game.currentFrame()).toEqual(frameBeforeRoll + 1 );
  });

  it('calculates total score for first frame as both rolls combined', function () {
    game.roll1Score = 5;
    game.roll2Score = 3;
    game.rollNum = 2;
    game.calculateScore();
    expect(game.score()).toEqual(8);
  });


})
