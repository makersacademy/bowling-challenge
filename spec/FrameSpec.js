describe('Frame',function () {
  var frame;
  var oneRoll;

  beforeEach(function() {
    frame = new Frame();
    oneRoll = new Roll();
  });

  it('is initialize with 10 pins left',function() {

    expect(frame.pinsLeft).toEqual(10)
  });



});
