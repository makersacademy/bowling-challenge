describe('Frame', function() {
  var rollOne
  var rollTwo
  var frame
  beforeEach(function() {
     rollOne = new Roll();
     frame = new Frame();
     rollTwo = new Roll();
  });

  it('has a score', function() {
    rollOne.enterPinsDown(5);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(3);
    frame.addRoll(rollTwo);
    expect(frame.score).toEqual(8);
  });

  it('can record a strike', function() {
    rollOne.enterPinsDown(10);
    frame.addRoll(rollOne);
    expect(frame.strike).toEqual(true);
  });

  it('can record a spare', function() {
    rollOne.enterPinsDown(6);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(4);
    frame.addRoll(rollTwo);
    expect(frame.spare).toEqual(true);
  });

  it('is complete when it contains two rolls', function() {
    rollOne.enterPinsDown(6);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(4);
    frame.addRoll(rollTwo);
    var rollThree = new Roll();
    rollThree.enterPinsDown(5);
    expect(function() {frame.addRoll(rollThree)}).toThrow('Frame already complete')
  });

  it('allows three rolls in last frame if strike', function() {
    frame.lastFrame = true;
    rollOne.enterPinsDown(10);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(10);
    frame.addRoll(rollTwo);
    var rollThree = new Roll();
    rollThree.enterPinsDown(5);
    frame.addRoll(rollThree);
    expect(frame.score).toEqual(25);
  });

  it('allows three rolls in last frame if spare', function() {
    frame.lastFrame = true;
    rollOne.enterPinsDown(3);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(7);
    frame.addRoll(rollTwo);
    var rollThree = new Roll();
    rollThree.enterPinsDown(5);
    frame.addRoll(rollThree);
    expect(frame.score).toEqual(15);
  });

  it('is complete after two rolls in last frame if not strike or spare', function() {
    frame.lastFrame = true;
    rollOne.enterPinsDown(3);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(4);
    frame.addRoll(rollTwo);
    var rollThree = new Roll();
    rollThree.enterPinsDown(5);
    expect(function() {frame.addRoll(rollThree)}).toThrow('Frame already complete')
  });

});
