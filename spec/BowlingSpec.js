describe('Bowling', function() {

  var bowling;
  var frames;

  beforeEach(function(){
    bowling = new Bowling();
    frames = new Frames();
  });

  it('has an array storing results, empty by default', function() {
    expect(bowling.frames._frames).toEqual([]);
  });

  it('has a frame counter, 1 by default', function() {
    expect(bowling.frames._frameCounter).toEqual(1);
  });

  it('has a frame counter, 1 by default', function() {
    expect(bowling.frames._frameCounter).toEqual(1);
  });

  it('has a bonus points counter, 0 by default', function() {
    expect(bowling.frames._bonusPoints).toEqual(0);
  });

  it('has a boolean value for strike set to false by default', function() {
    expect(bowling._isStrike).toEqual(false);
  });

  it('adds bonus points and toggles frame bowl number', function() {
    bowling.bowl(5);
    bowling.frames.applyBonus();
    expect(bowling._isFirstBowlOfFrame).toEqual(false);
  });

});
