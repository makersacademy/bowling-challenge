describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('creates a game of bowling', function() {
    it('starts the game', function() {
      expect(bowling).toBeInstanceOf(Bowling);
    });
  });

  describe('roll', function() {
    it('starts first roll and records to screen', function() {
      bowling.roll(5);
      expect(bowling.display()).toContain(5);
    });
    it('allows second roll and records to screen', function() {
      bowling.roll(5);
      bowling.roll(2);
      expect(bowling.display()).toContain(5,2);
    });
    it('can roll a spare', function() {
       bowling.roll(5);
       bowling.roll(5);
       bowling.roll(3);
      for (var i = 0; i < 17; i++) {
        bowling.roll(0);
      }
      expect(bowling.total()).toBe(16);
    });
    it('can roll a strike', function() {
      bowling.roll(10);
      bowling.roll(2);
      bowling.roll(2);
      for (var i = 0; i < 17; i++) {
        bowling.roll(0);
      }
      expect(bowling.total()).toBe(18);
    });
    it('can roll a perfect game', function() {
      for (var i = 0; i < 20; i++) {
        bowling.roll(10);
      }
      expect(bowling.total()).toBe(300);
    });
  });

  describe('total', function() {
    it('can roll a gutter game', function() {
      for (var i = 0; i < 20; i++) {
        bowling.roll(0);
      }
      expect(bowling.total()).toEqual(0);
    });
  });
});