describe('Frame',function () {
  var frame;

  beforeEach(function() {

    frame = new Frame();
  });

  it('initialize with 10 pins left',function() {

    expect(frame.pinsLeft).toEqual(10)
  });

});
