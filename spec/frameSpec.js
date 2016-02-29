describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('handling rolls and #addRoll', function() {
    it('starts out with empty rolls', function() {
      expect(frame.rolls).toEqual([]);
    });

    it('records the first roll', function() {
      frame.addRoll(1);
      expect(frame.rolls).toContain(1);
    });

    it('records the first roll and the second roll', function() {
      frame.addRoll(1);
      frame.addRoll(2);
      expect(frame.rolls).toContain(1);
      expect(frame.rolls).toContain(2);
    });

    it('throws error if invalid roll total', function() {
      frame.addRoll(9);
      expect(function() { frame.addRoll(2); }).toThrowError("Invalid roll");
      expect(frame.rolls).not.toContain(2);
    });
  });

  describe('#isRollsComplete', function() {
    it('is is false if only one roll', function() {
      frame.addRoll(0);
      expect(frame.isRollsComplete()).toBeFalsy();
    });

    it('is true after two rolls', function() {
      frame.addRoll(0);
      frame.addRoll(10);
      expect(frame.isRollsComplete()).toBeTruthy();
    });

    it('is true after a strike roll', function() {
      frame.addRoll(10);
      expect(frame.isRollsComplete()).toBeTruthy();
    });
  });

  describe('bonusBalls property for spares and strikes', function() {
    it('no bonusBalls for non-spare roll', function() {
      frame.addRoll(1);
      frame.addRoll(2);
      expect(frame.bonusBalls).toEqual(0);
    });

    it('one bonusBalls for a spare roll', function() {
      frame.addRoll(1);
      frame.addRoll(9);
      expect(frame.bonusBalls).toEqual(1);
    });

    it('one bonusBalls for a spare roll, first roll 0', function() {
      frame.addRoll(0);
      frame.addRoll(10);
      expect(frame.bonusBalls).toEqual(1);
    });

    it('two bonusBalls for a strike roll', function() {
      frame.addRoll(10);
      expect(frame.bonusBalls).toEqual(2);
    });
  });

  describe('#isFrameClosed and #addBonus', function() {
    it('is true for normal roll without bonus', function() {
      frame.addRoll(1);
      frame.addRoll(2);
      expect(frame.isFrameClosed()).toBeTruthy();
    });

    it('is false for unfinished frames', function() {
      frame.addRoll(1);
      expect(frame.isFrameClosed()).toBeFalsy();
    });

    it('is false for spare before adding bonus roll, true after', function() {
      frame.addRoll(9);
      frame.addRoll(1);
      expect(frame.isFrameClosed()).toBeFalsy();
      frame.addBonus(0);
      expect(frame.isFrameClosed()).toBeTruthy();
    });

    it('is false for strike before adding bonus rolls, true after', function() {
      frame.addRoll(10);
      expect(frame.isFrameClosed()).toBeFalsy();
      frame.addBonus(10);
      frame.addBonus(0);
      expect(frame.isFrameClosed()).toBeTruthy();
    });
  });
});
