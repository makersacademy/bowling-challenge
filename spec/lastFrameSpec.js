describe('LastFrame',function () {
  var frame;
  beforeEach(function () {
      frame = new LastFrame();
  });

  describe('new',function () {

    it('initiazes with a default number of pins',function () {
      expect(frame.pins).toEqual(frame._default.pins);
    });

    it('knows what number in the game it is',function () {
      expect(frame.number).toEqual(0);
    });
  });

  describe('.roll',function () {
    it('records the number of pins you scored in a roll',function () {
      frame.roll(7);
      expect(frame.rolls).toContain(7);
    });

    it('user cannot roll when the game is over',function () {
      frame.roll(5);
      frame.roll(4);
      var dirtyRoll = function () {
        frame.roll(1);
      };
      expect(dirtyRoll).toThrowError(frame._GAME_OVER_ERROR);
    });
  });

  describe('.numberOfRolls',function () {
    it('tells us the number of rolls played',function () {
      frame.roll(8);
      frame.roll(1);
      expect(frame.numberOfRolls()).toEqual(2);
    });
  });

  describe('.isStrike',function () {
    it('tells us the user rolled a strike',function () {
      frame.roll(frame._default.pins);
      expect(frame.isStrike()).toBe(true);
    });
  });

  describe('.pinsKnocked',function () {
    it('returns the total pins knocked in a frame',function () {
      frame.roll(7);
      frame.roll(2);
      expect(frame.pinsKnocked()).toEqual(9);
    });
  });

  describe('.isSpare',function () {
    it('tells us the user rolled a spare',function () {
      frame.roll(0);
      frame.roll(frame._default.pins);
      expect(frame.isSpare()).toBe(true);
    });

    it('does not return true if it was a strike',function () {
      frame.roll(10);
      expect(frame.isSpare).not.toBe(true);
    });
  });

  describe('.totalScore',function () {
      it('returns the score plust the bonus',function () {
        frame.bonus = 5;
        frame.roll(7);
        frame.roll(2);
        expect(frame.totalScore()).toEqual(14);
      });
  });

  describe('.isFinished', function() {
    describe('tells us when the frame has ended', function() {
      it('after a stike is not finished', function() {
        frame.roll(frame._default.pins);
        expect(frame.isFinished()).toBe(false);
      });
      it('after two rolls that are not a spare', function() {
        frame.roll(0);
        frame.roll(7);
        expect(frame.isFinished()).toBe(true);
      });

      it('after three rolls in a 3 roll frame', function() {
        frame.maxRolls = 3;
        frame.roll(10);
        frame.roll(10);
        frame.roll(8);
        expect(frame.isFinished()).toBe(true);
      });
    });
  });
});
