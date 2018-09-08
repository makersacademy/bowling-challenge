describe('Frame behaviour', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('should have a constuctor variable of 10 pins as default', function() {
    expect(frame.pins).toEqual(10);
  });

  // it('can record the pins from the first roll', function(num) {
  //   frame.rollOne(num);
  //   expect(frame.pins).toEqual(10 - num);
  // });

});
