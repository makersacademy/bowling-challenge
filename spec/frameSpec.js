describe('Frame', function() {
  var rollOne
  var rollTwo
  var frame
  beforeEach(function() {
     rollOne = new Roll();
     frame = new Frame();
     rollTwo = new Roll();
  });

  it('has a score', function() {
    rollOne.enterPinsDown(5);
    frame.addRoll(rollOne);
    rollTwo.enterPinsDown(3);
    frame.addRoll(rollTwo);
    expect(frame.score).toEqual(8);
  });

});
