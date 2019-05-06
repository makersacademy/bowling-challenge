describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame();
  });

  it('has one bowl', function() {
    expect(frame.roll()).toEqual(1);
  });

});
