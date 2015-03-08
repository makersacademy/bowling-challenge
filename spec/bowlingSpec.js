describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('has a total score of 0 when started', function() {
    expect(bowling.currentScore).toEqual(0);
  });

});
