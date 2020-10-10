describe('Frame', function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('knows if frame was a spare', function () {
    expect(frame.isSpare()).toEqual(false);
    frame.addRoll(5);
    frame.addRoll(5);
    expect(frame.isSpare()).toEqual(true);
    expect(frame.isStrike()).toEqual(false);
  });

  it('doesn\'t allow the player to input more pins felled than available', function () {
    frame.addRoll(5);
    expect(function () {
      frame.addRoll(6);
    }).toThrow(new Error("You cannot down more pins than available"));
  });

  it('doesn\'t let you enter more than two rolls', function () {
    frame.addRoll(5);
    frame.addRoll(4);
    expect(function () { frame.addRoll(1) }).toThrow(new Error("You have already finished this frame"));

  });

  it('doesn\'t allow you to enter anymore rolls after a strike', function () {
    frame.addRoll(10);
    expect(function () { frame.addRoll(1) }).toThrow(new Error("You have already finished this frame"));
  });

  it('doesn\'t allow you to enter anymore rolls after a spare', function () {
    frame.addRoll(5);
    frame.addRoll(5);
    expect(function () { frame.addRoll(1) }).toThrow(new Error("You have already finished this frame"));
  });

  it('', function () {
    frame.addRoll(10);
    frame.addFollowingFrameRoll(9);
    expect(function () { frame.addFollowingFrameRoll(2) }).toThrow(new Error("You can only fell 10 pins in a frame"));
  });

  it('allows the frame to be updated with information from the next frame when frame was a spare', function () {
    frame.addRoll(5);
    frame.addRoll(5);
    expect(frame.frameScore()).toEqual(0);
    frame.addFollowingFrameRoll(3);
    expect(frame.frameScore()).toEqual(13);
  });

  it('allows the frame to be updated with information from the next frame when frame was a strike', function () {
    frame.addRoll(10);
    expect(frame.frameScore()).toEqual(0);
    frame.addFollowingFrameRoll(3);
    expect(frame.frameScore()).toEqual(0);
    frame.addFollowingFrameRoll(6);
    expect(frame.frameScore()).toEqual(19);
  });

  it('handles 3 strikes in a row', function () {
    frame.addRoll(10);
    expect(frame.frameScore()).toEqual(0);
    frame.addFollowingFrameRoll(10);
    expect(frame.frameScore()).toEqual(0);
    frame.addFollowingFrameRoll(10);
    expect(frame.frameScore()).toEqual(30);
  });

});