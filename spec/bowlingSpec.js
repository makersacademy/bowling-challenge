describe('Bowling Game', function() {

  var bowling
  beforeEach(function() {
    bowling = new Bowling
  });

  it('has a score of nil when the game starts', function() {
    expect(bowling.score).toEqual(0);
  });

  it('has a score of 5 when the player his 5 pins', function() {
    bowling.roll(5);
    expect(bowling.score).toEqual(5);
  });

  it('has a score of 10 when the player hits 3 and 7', function() {
    bowling.roll(3);
    bowling.roll(7);
    expect(bowling.score).toEqual(10);
  });

  it('the game is on the 1st frame when it starts', function() {
    expect(bowling.frameNumber).toEqual(1);
  });

  it('the game is on the 3rd frame after the first two frames', function() {
    bowling.roll(1)
    bowling.roll(1)
    expect(bowling.frameNumber).toEqual(3);
  });

});
