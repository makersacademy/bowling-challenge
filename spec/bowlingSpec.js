describe('Bowling', function() {
  var frames;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('frames start off as an empty array', function() {
    expect(bowling.frames.length).toBe(0);
  });

  it('allows you to start a new frame', function() {
    bowling.startNewFrame();
    expect(bowling.frames.length).toBe(1);
  });

  it('adds a score, for a frame, into the scorecard', function() {
    bowling.startNewFrame();
    bowling.addScore(2);
    expect(bowling.frames[0][0]).toBe(2);
  });

  it('adds a second score, for a frame, into the scorecard', function() {
    bowling.startNewFrame();
    bowling.addScore(2);
    bowling.addScore(6);
    expect(bowling.frames[0][1]).toBe(6);
  });

  it('only allows for two scores in one frame', function() {
    bowling.startNewFrame();
    for (var i = 1; i <= 2; i++) {
      bowling.addScore(3);
    }
    expect(function() { bowling.addScore(3) }).toThrowError('START A NEW FRAME');
  });

  it('adds up the scores for a single frame', function() {
    bowling.startNewFrame();
    bowling.addScore(4);
    bowling.addScore(5);
    bowling.finishFrame();
    expect(bowling.currentScore).toEqual(9);
  })
});
