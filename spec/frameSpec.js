describe('Frame', function() {
  var frame;
  var pins1 = 1, pins2 = 2, pins3 = 3;
  var pins9 = 9, pins10 = 10;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('handling rolls and #addRoll', function() {
    it('starts out with empty rolls', function() {
      expect(frame.showRolls()).toEqual([]);
    });

    it('records the first roll', function() {
      frame.addRoll(pins1);
      expect(frame.showRolls()).toContain(pins1);
    });

    it('records the first roll and the second roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins2);
      expect(frame.showRolls()).toContain(pins1);
      expect(frame.showRolls()).toContain(pins2);
    });

    it('throws error if recording a third roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins2);
      expect(function() {
        frame.addRoll(pins3);
      }).toThrowError("Rolls exceeded");
      expect(frame.showRolls()).not.toContain(pins3);
    });
  });

  describe('handling spares, #isSpare', function() {
    it('correctly identifies non-spare roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins2);
      expect(frame.isSpare()).toBeFalsy();
    });

    it('correctly identifies a spare roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins9);
      expect(frame.isSpare()).toBeTruthy();
    });

    it('correctly identifies a strike is not a spare', function() {
      frame.addRoll(pins10);
      expect(frame.isSpare()).toBeFalsy();
    });
  });

  describe('handling strikes, #isStrike', function() {
    it('correctly identifies non-strike roll', function() {
      frame.addRoll(pins1);
      frame.addRoll(pins9);
      expect(frame.isStrike()).toBeFalsy();
    });

    it('correctly identifies a strike roll', function() {
      frame.addRoll(pins10);
      expect(frame.isStrike()).toBeTruthy();
    });

    it('throws error if recording a second roll after a strike', function() {
      frame.addRoll(pins10);
      expect(function() {
        frame.addRoll(pins1);
      }).toThrowError("Rolls exceeded");
      expect(frame.showRolls()).not.toContain(pins1);
    });

  });

});
