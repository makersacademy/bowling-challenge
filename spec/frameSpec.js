describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should count the number of rolls in the frame', function() {
    expect(frame.rolls).toEqual([]);
  });

  it('can keep track of the score', function() {
    frame.roll(4);
    expect(frame.rolls).toEqual([4]);
  })

  it('knows the frame is over when there have been two rolls', function() {
    frame.roll(2);
    frame.roll(3);
    expect(frame.over).toEqual(true);
  })

  it('knows when a spare has been scored', function() {
    frame.roll(4);
    frame.roll(6);
    expect([frame.spare, frame.strike]).toEqual([true, false]);
  })

  it('knows when a strike has been scored', function() {
    frame.roll(10);
    expect([frame.spare, frame.strike]).toEqual([false, true]);
  })

  it('throws an error if the player rolls when the frame is over', function() {
    frame.roll(10);
    expect(function() {
      frame.roll(2);
    }).toThrowError('The frame is already over.');
  });

  it('throws an error if the player tries to total more than 10', function() {
    frame.roll(7);
    expect(function() {
      frame.roll(7);
    }).toThrowError('The overall pins knocked down cannot be over 10');
  });

  it('throws an error if the player tries to score more than 10', function() {
    expect(function() {
      frame.roll(15);
    }).toThrowError('The score on one roll cannot be over 10.');
  });

  it('throws an error if the player rolls when the frame is over', function() {
    frame.roll(10);
    expect(function() {
      frame.roll(2);
    }).toThrowError('The frame is already over.');
  });
});
