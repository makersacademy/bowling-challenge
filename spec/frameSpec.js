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

});
