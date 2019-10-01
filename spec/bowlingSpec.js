describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  })

  describe('keeps score', function() {
    it('initial score is 0', function() {
      expect(bowling.score).toEqual(0);
    })

    it('adds two non strike/spare rolls', function() {
      bowling.roll(1);
      bowling.roll(2);
      bowling.calculateScore();
      expect(bowling.score).toEqual(3);
    })

    it('adds bonus score when strike', function() {
      bowling.roll(10);
      bowling.roll(2);
      bowling.roll(3);
      bowling.calculateScore();
      expect(bowling.score).toEqual(20);
    })

    it('adds bonus score when strike and spare', function() {
      bowling.roll(10);
      bowling.roll(6);
      bowling.roll(4);
      bowling.roll(3);
      bowling.roll(2);
      bowling.calculateScore();
      expect(bowling.score).toEqual(38);
    })

    it('calculates score even when awaiting bonus rolls', function() {
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(10);
      bowling.calculateScore();
      expect(bowling.score).toEqual(60);
    })
  })

  describe('records rolls', function() {
    it('two non strike/spare rolls', function() {
      bowling.roll(3);
      bowling.roll(4);
      expect(bowling.rollsArray).toEqual([3,4]);
    })

    it('one strike', function() {
      bowling.roll(10);
      expect(bowling.rollsArray).toEqual([10, 'X']);
    })

    it('one spare', function() {
      bowling.roll(3);
      bowling.roll(7);
      expect(bowling.rollsArray).toEqual([3, '/']);
    })

    it('one strike and one spare', function() {
      bowling.roll(10);
      bowling.roll(4);
      bowling.roll(6);
      expect(bowling.rollsArray).toEqual([10, 'X', 4, '/']);
    })

    it('detects tenth frame', function() {
      for (let i = 0; i < 10; i++) {
        bowling.roll(10);
      }
      expect(bowling.isTenthFrame()).toEqual(true);
    })
  })
})
