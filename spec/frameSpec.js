describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame();
  });

  it('has one bowl', function() {
    expect(frame.roll()).toEqual(1);
  });

  it('has two bowls', function() {
    frame.roll(1);
    expect(frame.roll()).toEqual(2);
  });

  it('has a maximum of two bowls', function() {
    frame.roll(1);
    frame.roll(1);
    expect(frame.roll()).toEqual(0);
  })

  // it('ends frame if strike scored', function() {
  //   expect()
  // });

});
