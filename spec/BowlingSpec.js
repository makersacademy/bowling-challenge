'use script';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('initially', function() {
    it('starts at 0 points', function() {
      expect(bowling.score).toEqual(0);
    });
  });
});
