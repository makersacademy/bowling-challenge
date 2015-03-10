describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('should have a total score of 0 when started', function() {
    expect(bowling.currentScore).toEqual(0);
  });

  it('should have a total score of 0 when a gutter game is bowled', function() {
    bowling.firstRoll;
    bowling.secondRoll;
    bowling.pinsHit(0);
    expect(bowling.currentScore).toEqual(0);
  });

});