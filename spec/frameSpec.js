describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame;
  });
  it('should have empty array of rolls when initialized', function() {
    expect(frame.rolls()).toEqual([]);
  });
  it('should have have _score set to 0 when initialized', function() {
    expect(frame._score).toEqual(0);
  })
  it('should have have _bonus set to none when initialized', function() {
    expect(frame._bonus).toEqual('none');
  })

  describe('.addRoll', function() {
    it('should push a roll to rolls array', function() {
      frame.addRoll(7);
      expect(frame.rolls()).toEqual([7]);
    });
    it('should add roll value to _score', function() {
      frame.addRoll(7);
      frame.addRoll(2);
      expect(frame._score).toEqual(9);
    });
    it('should throw exception when roll will increase sum of rolls to > 10', function() {
      expect(function() {
        frame.addRoll(5); frame.addRoll(6);
      }).toThrow(new Error('Input Error: Cannot knock down more than 10 Pins per frame!'));
    });
  });

  describe('.score', function() {
    it('should return _score when score is called', function() {
      frame.addRoll(7);
      frame.addRoll(2);
      expect(frame.score()).toEqual(9);
    })
  });

  describe('.addToScore', function() {
    it('should add argument to _score', function() {
      frame.addToScore(4)
      expect(frame.score()).toEqual(4);
    })
  });

  describe('.bonus', function() {
    it('should return _bonus when bonus is called', function() {
      expect(frame.bonus()).toEqual('none');
    })
  });

  describe('.calcBonus', function() {
    it('should change _bonus to spare when spare is scored', function() {
      frame._rolls = [5, 5];
      frame._score = 10;
      frame.calcBonus();
      expect(frame.bonus()).toEqual('spare');
    })
  });
});
