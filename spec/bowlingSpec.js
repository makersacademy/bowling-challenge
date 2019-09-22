describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  })

  it('initial score is 0', function() {
    expect(bowling.score).toEqual(0);
  })

  it('tallies the score on multiple rolls', function() {
    bowling.roll(1);
    bowling.roll(2);
    expect(bowling.score).toEqual(3);
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
      console.log(bowling.score);
      expect(bowling.rollsArray).toEqual([10, 'X', 4, '/']);
    })
  })
})
