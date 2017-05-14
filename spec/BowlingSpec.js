describe('Bowling', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('has an array storing results, empty by default', function() {
    expect(bowling.getFrames()).toEqual([]);
  });

  it('has a frame counter, 1 by default', function() {
    expect(bowling.getFrameCounter()).toEqual(1);
  });

  it('has a frame counter, 1 by default', function() {
    expect(bowling.getFrameCounter()).toEqual(1);
  });

  it('has a bonus points counter, 0 by default', function() {
    expect(bowling.getBonusPoints()).toEqual(0);
  });

  it('has a boolean value for strike set to false by default', function() {
    expect(bowling.getIsStrike()).toEqual(false);
  });

});
