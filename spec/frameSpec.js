Frame = require('../src/frame');

describe('Frame', function() {
  it ('Can recognise a strike when it sees one', function() {
    frame = new Frame(1);
    frame.setBall(1,10)
    expect(frame.isStrike()).toBe(true);
  });

  it ('Does not recognise a strike as a spare', function() {
    frame = new Frame(1);
    frame.setBall(1,10)
    expect(frame.isSpare()).toBe(false);
  });

  it ('Can recognise a spare when it sees one', function() {
    frame = new Frame(1);
    frame.setBall(1,3);
    frame.setBall(2,7)
    expect(frame.isSpare()).toBe(true);
  });

  it ('Does not recognise a spare asa strike', function() {
    frame = new Frame(1);
    frame.setBall(1,3);
    frame.setBall(2,7)
    expect(frame.isStrike()).toBe(false);
  });
  it ('can total up the pins knocked down in a frame', function() {
    frame = new Frame(1);
    frame.setBall(1,1);
    frame.setBall(2,3);
    expect(frame.total()).toEqual(4);
  });

  it ('knows a score can be finalised when not a strike or spare', function() {
    frame = new Frame(1);
    frame.setBall(1,2);
    frame.setBall(2,3);
    expect(frame.scoreCanBeFinalised()).toBe(true);
  });
  it ('has a total for frame when not a strike or spare', function() {
    frame = new Frame(1);
    frame.setBall(1,2);
    frame.setBall(2,3);
    expect(frame.totalForFrame).toEqual(5)
  });
  it ('knows a score cannot be finalised when a strike', function() {
    frame = new Frame(1);
    frame.setBall(1,10);
    expect(frame.scoreCanBeFinalised()).toBe(false);
  });
  it ('does not have a total for frame when a strike', function() {
    frame = new Frame(1);
    frame.setBall(1,10);
    expect(frame.totalForFrame).toEqual(undefined);
  });
  it ('knows a score cannot be finalised when a spare', function() {
    frame = new Frame(1);
    frame.setBall(1,5);
    frame.setBall(2,5);
    expect(frame.scoreCanBeFinalised()).toBe(false);
  });
  it ('Does not have a total for frame when a spare', function() {
    frame = new Frame(1);
    frame.setBall(1,5);
    frame.setBall(2,5);
    expect(frame.totalForFrame).toEqual(undefined)
  });
});
