describe("BowlingGame", function(){
  var bowling;
  var frame;

  beforeEach(function(){
    bowling = new BowlingGame();
    frame = jasmine.createSpy('frame');
    frame2 = jasmine.createSpy('frame');
  });

  it('adds a .last method to Array objects', function(){
    expect(Array.prototype.last).not.toBeUndefined();
  })

  it('has a way of storing frames', function(){
    expect(bowling._frames).toEqual([]);
  });

  it('adds a frame', function(){
    bowling.addFrame(frame);
    expect(bowling._frames).toEqual([frame]);
  });

  it('returns the current frame', function(){
    bowling.addFrame(frame);
    bowling.addFrame(frame2);
    expect(bowling.getCurrentFrame()).toEqual(frame2);
  });

  it('a score can be entered', function(){
    bowling.enterScore(5);
    expect(bowling._currentScore).toEqual(5);
  });

  
});
