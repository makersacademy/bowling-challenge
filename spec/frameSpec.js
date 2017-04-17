describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('new game parameters', function() {

    it('starts with no pins hit', function() {
      expect(frame.pinsHit).toEqual(0);
    });
    it('starts with 10 pins standing', function() {
      expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
    });
    it('starts with a frame score of 0', function() {
      expect(frame.frameScore).toEqual(0);
    });
  });

  describe('#firstRoll', function() {
    describe('strike', function() {
      beforeEach(function() {
          spyOn(Math, 'random').and.returnValue(0.95);
          frame.firstRoll();
      });

      it('changes isStrike to true', function() {
        expect(frame.isStrike).toBe(true);
      });

      it('expects isSpare to be false', function() {
        expect(frame.isSpare).toBe(false);
      });

      it('adds to bonus score the number of pins hit', function() {
        expect(frame.scoreBonus).toEqual(10);
      });

      it('expects framescore to be 0', function() {
        expect(frame.frameScore).toEqual(0);
      });

      it('resets the frame', function() {
        expect(frame.pinsHit).toEqual(0);
        expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
      });
    });

    describe('#no strike', function() {
      beforeEach(function() {
          spyOn(Math, 'random').and.returnValue(0.4);
          frame.firstRoll();
      });

      it('isStrike expected to be false', function() {
        expect(frame.isStrike).toBe(false);
      });

      it('expects isSpare to be false', function() {
        expect(frame.isSpare).toBe(false);
      });

      it('adds to the frame score the number of pins hit', function() {
        expect(frame.frameScore).toEqual(4);
      });

      it('ensures pins hit are removed from frame', function() {
        expect(frame.pinsLeft).toEqual(6);
      });
    });
  });

  describe('#secondRoll', function() {
    describe('strike', function() {
      beforeEach(function() {
          spyOn(Math, 'random').and.returnValue(0.95);
          frame.firstRoll();
          frame.secondRoll();
      });

      it('changes isStrike to true', function() {
        expect(frame.isStrike).toBe(true);
      });

      it('adds to the frame bonus the number of pins hit', function() {
        expect(frame.scoreBonus).toEqual(20);
      });

      it('resets the frame', function() {
        expect(frame.pinsHit).toEqual(0);
        expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
      });

      it('adds to the frame bonus the number of pins hit', function() {
        expect(frame.scoreBonus).toEqual(20);
      });
    });

    describe('#no strike', function() {
      beforeEach(function() {
          spyOn(Math, 'random').and.returnValue(0.4);
          frame.firstRoll();
          frame.secondRoll();
      });

      it('isStrike expected to be false', function() {
        expect(frame.isStrike).toBe(false);
      });

      it('isSpare expected to be false', function() {
        expect(frame.isSpare).toBe(false);
      });

      it('adds to the frame score the number of pins hit', function() {
        expect(frame.frameScore).toEqual(6);
      });

      it('ensures pins hit are removed from frame', function() {
        expect(frame.pinsLeft).toEqual(4);
      });
    });

    describe('#spare', function() {
      beforeEach(function() {
          spyOn(Math, 'random').and.returnValues(0.4, 0.9);
          frame.firstRoll();
          frame.secondRoll();
      });

      it('isStrike expected to be false', function() {
        expect(frame.isStrike).toBe(false);
      });

      it('allows spare roll', function () {
        expect(frame.pinsLeft).toEqual(0);
        expect(frame.isSpare).toBe(true);
      });
    });
  });

  describe('#resetFrame', function() {

    it('ensures number of pins left is reset to 10', function() {
      frame.resetFrame();
      expect(frame.pinsLeft).toEqual(frame.MAX_PINS);
    });
    it('ensures number of pins hit is reset to 0', function() {
      frame.resetFrame();
      expect(frame.pinsHit).toEqual(0);
    });
  });
});
