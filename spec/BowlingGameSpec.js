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

  it('returns the previous frame', function(){
    bowling.addFrame(frame);
    bowling.addFrame(frame2);
    expect(bowling.getPreviousFrame()).toEqual(frame);
  });

  it('a score can be entered', function(){
    bowling.startGame();
    bowling.enterScore(5);
    expect(bowling.getCurrentFrame().firstBall).toEqual(5);
  });

  it('starts a new frame after 2 balls', function(){
    bowling.startGame();
    bowling.enterScore(5);
    bowling.enterScore(3);
    expect(bowling._frames.length).toEqual(2);
  });

  it('starts a new frame after a strike', function(){
    bowling.startGame();
    bowling.enterScore(10);
    expect(bowling._frames.length).toEqual(2);
  })

});
