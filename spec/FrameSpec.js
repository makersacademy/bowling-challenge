describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it ('has no rolls by default', function() {
    expect(frame._rolls).toEqual([]);
  });
  it ('can add a roll', function() {
    frame.addRoll(9);
    expect(frame._rolls).toEqual([9]);
  });

})