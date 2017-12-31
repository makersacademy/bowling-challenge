describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(0);
  });

  it('should return frame number as 0', function() {
    expect(frame.frameNumber).toEqual(0);
  });

  it('should increase roll count after each roll', function() {
    frame.roll(3);
    expect(frame._rollCount).toEqual(1);
  });

  it('should return default score of 0', function() {
    expect(frame.calculateScore()).toEqual(0);
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

  it('should be a strike if player knocks down 10 pins on the first roll', function() {
    frame.roll(10);
    expect(frame.isAStrike()).toBe(true);
  });

  it('should skip second roll if first roll is a strike', function() {
    frame.roll(10);
    expect(frame.isFinished()).toBe(true);
  });

  it('should not add points to the frame\'s score after a strike', function() {
    frame.roll(10);
    frame.roll(4);
    expect(frame.calculateScore()).toEqual(10);
  });

  it('should add points from next two rolls as bonus points for a strike', function() {
    frame.roll(10);
    frame.bonusRoll(2);
    frame.bonusRoll(3);
    expect(frame.calculateScore()).toEqual(15);
  });

  it('should not add points from third roll after a strike', function() {
    frame.roll(10);
    frame.bonusRoll(2);
    frame.bonusRoll(3);
    frame.bonusRoll(5);
    expect(frame.calculateScore()).toEqual(15);
  });

  it('should be a spare if player knocks down 10 pins using two rolls', function() {
    frame.roll(5);
    frame.roll(5);
    expect(frame.isASpare()).toBe(true);
  });

  it('should add points from the next roll as bonus points for a spare', function() {
    frame.roll(5);
    frame.roll(5);
    frame.bonusRoll(2);
    frame.bonusRoll(3);
    expect(frame.calculateScore()).toEqual(12);
  });

  it('should not add bonus points if it is not a strike or a spare', function() {
    frame.roll(3);
    frame.roll(2);
    frame.bonusRoll(2);
    frame.bonusRoll(3);
    expect(frame.calculateScore()).toEqual(5);
  });

});
