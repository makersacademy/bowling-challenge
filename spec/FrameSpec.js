describe("Frame", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('works out if it is a complete frame', function(){
    throwStrike(frame);
    expect(frame.isComplete()).toEqual(true);
    throwSpare(frame);
    expect(frame.isComplete()).toEqual(true);
    throwNormal(frame);
    expect(frame.isComplete()).toEqual(true);
  });

  it('returns the outcome if a strike', function(){
    throwStrike(frame);
    frame.getOutcome();
    expect(frame.outcome).toEqual("X");
  });

  it('returns the outcome if a spare', function(){
    throwSpare(frame);
    frame.getOutcome();
    expect(frame.outcome).toEqual("/");
  });

  it('returns the outcome if no strike or spare', function(){
    throwNormal(frame);
    frame.getOutcome();
    expect(frame.outcome).toEqual(5);
  });

  it('throws an error if the frame is not complete', function(){
    expect(function(){
      frame.getOutcome();
    }).toThrow("Frame is not complete.");
  });

  it('works out a strike', function(){
    expect(frame.isAStrike()).toEqual(false);
    throwStrike(frame);
    expect(frame.isAStrike()).toEqual(true);
  });

  it('works out a spare', function(){
    expect(frame.isASpare()).toEqual(false);
    throwSpare(frame);
    expect(frame.isASpare()).toEqual(true);
  });


});
