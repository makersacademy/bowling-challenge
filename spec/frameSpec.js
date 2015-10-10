describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame;
  });

  it('should start with a roll index of 0', function() {
    expect(frame.rollIndex).toEqual(0);
  });

  it('should start with a firstRollScore 0', function() {
    expect(frame.firstRollScore).toEqual(0);
  });

  it('should start with a secondRollScore of 0', function() {
    expect(frame.secondRollScore).toEqual(0);
  });

  it('firstRoll should update firstRollScore with pinsKnocked', function() {
    frame.firstRoll(1);
    expect(frame.firstRollScore).toEqual(1);
  });

  it('secondRoll should update secondRollScore with pinsKnocked', function() {
    frame.secondRoll(1);
    expect(frame.secondRollScore).toEqual(1);
  });

  it('firstRoll should update rollIndex to 1 when it is called', function() {
    frame.firstRoll(1);
    expect(frame.rollIndex).toEqual(1);
  });

  it('should record strike as true if pinsKnocked is 10', function() {
    frame.firstRoll(10);
    expect(frame.strike).toEqual(true);
  });

  it('should record spare as true if pinsKnocked is 10', function() {
    frame.firstRoll(5);
    frame.secondRoll(5);
    expect(frame.spare).toEqual(true);
  });

});
