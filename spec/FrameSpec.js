describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  })  
  it('has no rolls by default', function() {
    expect(frame._rolls).toEqual([]);
  });

  describe('addRoll', function() {
    it('can add a roll', function() {
      frame.addRoll(9);
      expect(frame._rolls).toEqual([9]);
    })
    it('can add a second roll', function() {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame._rolls).toEqual([5,4]);
    })
    it('throws error when rolling a third time', function() {
      frame.addRoll(5);
      frame.addRoll(4);
      expect(function(){frame.addRoll(1)}).toThrowError('Already rolled twice!');
    })
  })
})
