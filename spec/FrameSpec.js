describe("Frame", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('takes two rolls', function() {
    expect(frame.firstRoll).toEqual(null);
    expect(frame.secondRoll).toEqual(null);
  });

  it('can add first roll', function() {
    frame.roll(2);
    expect(frame.firstRoll).toEqual(2);
    expect(frame.secondRoll).toEqual(null);
  });

  it('can add second roll', function() {
   frame.roll(2);
   frame.roll(3);
   expect(frame.firstRoll).toEqual(2);
   expect(frame.secondRoll).toEqual(3);
 });

});
