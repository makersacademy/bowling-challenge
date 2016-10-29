describe('Bowling', function () {
  game = new Bowling();

  describe('First Frame', function () {

    it('starts with a frame score of zero', function () {
      expect(game.pinsKnockedFirst()).toEqual(0);
    });

    it('starts with all pins standing', function () {
      expect(game.pinsLeftAfterFirstRoll()).toEqual(10);
    });

    it('selects a number from 0 to 10 for the first frame', function () {
      game.firstRoll();
      expect(game.pinsKnockedFirst()).toBeGreaterThan(0);
    });

    it('first roll sets to the second roll', function () {
      expect(game.rollNum).toEqual(2);
    });

    it('second roll sets to a new frame', function () {
      game.firstRoll();
      expect(game.rollNum).toEqual(1);
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
    
  });


})
