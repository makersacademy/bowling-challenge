describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame;
  })
  it('should have empty array of rolls when initialized', function() {
    expect(frame.rolls()).toEqual([]);
  })
  it('should push a roll to rolls array when addRoll is called', function() {
    frame.addRoll(7);
    expect(frame.rolls()).toEqual([7]);
  })
  it('should calculate a frame total score when totalScore is called', function() {
    frame.addRoll(7);
    frame.addRoll(2);
    expect(frame.totalScore()).toEqual(9);
  })
});
