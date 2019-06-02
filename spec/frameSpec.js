describe('Frame',function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('has a maximum of two rolls', function() {
    expect(frame.maxRolls).toEqual(2);
  });



});
