describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('should be able to roll a gutter game', function() {
    bowling.roll(20, 0);
    expect(bowling.currentScore).toEqual(0);
  });

});