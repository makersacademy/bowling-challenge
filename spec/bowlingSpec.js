describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('should have a total score of 0 when started', function() {
    expect(bowling.currentScore).toEqual(0);
  });

  it('should have a total score of 0 when a gutter game is bowled', function() {
    bowling.rolls(20);
    bowling.pinsHit(0);
    expect(bowling.currentScore).toEqual(0);
  });

  it('should know that one point is scored when one pin is knocked down', function() {
    bowling.rolls(1);
    bowling.pinsHit(1);
    expect(bowling.currentScore).toEqual(1);
  });

  it('should have a total score of 20 when all ones are bowled', function() {
    bowling.rolls(20);
    bowling.pinsHit(20);
    expect(bowling.currentScore).toEqual(20);
  });

});