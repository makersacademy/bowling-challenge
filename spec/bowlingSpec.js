describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('should have a total score of 0 when started', function() {
    expect(bowling.currentScore).toEqual(0);
  });

  it('should have a total score of 0 when a gutter game is bowled', function() {
    expect(bowling.gutterGame).toEqual(0);
  });

  it('should have a total score of 20 when all ones are bowled', function() {
    bowling.roll(20);
    expect(bowling.currentScore).toEqual(20)
  });

});