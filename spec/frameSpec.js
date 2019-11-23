describe ('Frame', function() {

  it('normal frame returns two rolls', function() {
    var frame = new Frame(1,6);
    expect(frame.getFirstRoll()).toEqual(1);
    expect(frame.getSecondRoll()).toEqual(6);
  });

  it('normal frame shows two rolls in array for first roll', function() {
    var frame = new Frame(2, 7);
    expect(frame.getEndFrame()).toEqual([2, 7])
  });



});
