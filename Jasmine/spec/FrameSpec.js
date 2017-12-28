describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(0);
  });

  it('should return frame number as 0', function() {
    expect(frame.frameNumber).toEqual(0);
  });

  it('initializes frame as not being finished', function() {
    expect(frame._isFinished).toBe(false);
  });

  it('should return default score of 0', function() {
    expect(frame.calculateScore()).toEqual(0);
  });

  it('should increase roll count after each roll', function() {
    frame.roll(3);
    expect(frame._rollCount).toEqual(1);
  });

  it('should calculate frame score', function() {
    frame.roll(2);
    frame.roll(3);
    expect(frame.calculateScore()).toEqual(5);
  });

  it('should return true if frame is finished', function() {
    frame.roll(2);
    frame.roll(3);
    expect(frame.isFinished()).toBe(true);
  });

});
