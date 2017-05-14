describe('Frames', function() {

  var frames;

  beforeEach(function(){
    frames = new Frames();
  });

  it('stores frames from current game', function() {
    expect(frames._frames).toEqual([]);
  });

  it('has an array storing results, empty by default', function() {
    expect(frames._frames).toEqual([]);
  });

  it('has a frame counter, 1 by default', function() {
    expect(frames._frameCounter).toEqual(1);
  });

  it('has a frame counter, 1 by default', function() {
    expect(frames._frameCounter).toEqual(1);
  });

  it('has a bonus points counter, 0 by default', function() {
    expect(frames._bonusPoints).toEqual(0);
  });

  it('has a boolean value for strike set to false by default', function() {
    expect(frames._isStrike).toEqual(false);
  });
});
