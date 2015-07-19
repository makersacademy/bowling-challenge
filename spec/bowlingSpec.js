describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('bowling', function() {
    it('displays scores as zero at the start', function() {
      expect(bowling.scoreTotal).toBe(0);
    });
  });

  describe('count', function() {
    it('stores the number of fallen pins in a roll', function() {
      bowling.roll(6);
      expect(bowling.rollArray[0]).toBe(6);
    });
  });

  describe('frameScores', function() {
    it('adds up the number of fallen pins in two rolls', function() {
      bowling.roll(6);
      bowling.roll(3);
      expect(bowling.frameScores[0]).toBe(9);
    });
  });

  describe('strike', function() {
    it('ends the frame', function() {
      bowling.roll(10);
      bowling.roll(2);
      expect(bowling.rollArray[1]).toBe(0);
    });
  });

  describe('strike bonus', function() {
    it('adds next two rolls as bonus points', function() {
      bowling.roll(10);
      bowling.roll(0);
      bowling.roll(3);
      bowling.roll(3);
      expect(bowling.frameScores[0]).toBe(16);
    });

    it('after 2 consecutive strikes, it also adds the next non-strike roll as bonus to the frame of the first strike', function() {
      bowling.roll(10);
      bowling.roll(0);
      bowling.roll(10);
      bowling.roll(0);
      bowling.roll(3);
      bowling.roll(4);
      expect(bowling.frameScores[0]).toBe(23);
      expect(bowling.frameScores[1]).toBe(17);
    });
  });

  describe('spare bonus', function() {
    it('adds next roll as bonus points', function() {
      bowling.roll(7);
      bowling.roll(3);
      bowling.roll(3);
      bowling.roll(3);
      expect(bowling.frameScores[0]).toBe(13);
    });
  });

  describe('scoreTotal', function() {
    it('adds up all of the frame scores', function() {
      for (var i = 0; i < 20; i++) {
        bowling.roll(3);
      };
      expect(bowling.scoreTotal).toBe(60);
    });

    it('knows how to score a perfect game', function() {
      for (var i = 0; i < 10; i++) {
        bowling.roll(10);
        bowling.roll(0);
      };
      bowling.roll(10);
      expect(bowling.scoreTotal).toBe(300);
    });
  });

  describe('tenth frame', function() {
    it('adds maximum 30 to the score', function() {
      for (var i = 0; i < 18; i++) {
        bowling.roll(5);
      };
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(10);
      expect(bowling.frameScores[9]).toBe(30);
    });
  });
});
