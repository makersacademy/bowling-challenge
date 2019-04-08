describe("Frame", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has two rolls', function() {
    expect(frame.firstRoll).toEqual(null);
    expect(frame.secondRoll).toEqual(null);
  });

  it('can add one roll', function() {
    frame.roll(3);
    expect(frame.firstRoll).toEqual(3);
    expect(frame.secondRoll).toEqual(null);
  });

  it('can add second roll', function() {
    frame.roll(3);
    frame.roll(6);
    expect(frame.firstRoll).toEqual(3);
    expect(frame.secondRoll).toEqual(6);
  });
})
