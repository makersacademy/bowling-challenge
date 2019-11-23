describe ('Frame', function() {

  it('normal frame returns two rolls', function() {
    var frame = new Frame(1,6);
    expect(frame.getFirstRoll()).toEqual(1);
    expect(frame.getSecondRoll()).toEqual(6);
  });

});
