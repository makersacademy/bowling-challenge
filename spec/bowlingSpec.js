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
    expect(function() { bowling.addScore(3) }).toThrowError(newFrameError);
  });

  it('adds up the scores for a single frame', function() {
    bowling.startNewFrame();
    bowling.addScore(4);
    bowling.addScore(5);
    bowling.finishFrame();
    expect(bowling.currentScore).toEqual(9);
  });

  it('returns a score of 0 for a Gutter game', function() {
    for (var i = 1; i <= 10; i++) {
      bowling.startNewFrame();
      bowling.addScore(0);
      bowling.addScore(0);
    }
    bowling.calculateGutter();
    expect(bowling.currentScore).toEqual(0);
  });

  it('double the score of the first roll if the last frame was a spare', function() {
    bowling.startNewFrame();
    bowling.addScore(5);
    bowling.addScore(5);
    bowling.finishFrame();
    bowling.startNewFrame();
    bowling.calculateSpare(3);
    expect(bowling.frames[1][0]).toBe(6);
  });

  it('will input a score of 0 for the second roll, after a strike', function() {
    bowling.startNewFrame();
    bowling.strike();
    expect(bowling.frames[0][0]).toBe(10);
    expect(bowling.frames[0][1]).toBe(0);
  });

  it('after a strike the next frame is doubled', function() {
    bowling.startNewFrame();
    bowling.addScore(4);
    bowling.addScore(5);
    bowling.calculateStrike();
    expect(bowling.currentScore).toEqual(18);
  });
});
