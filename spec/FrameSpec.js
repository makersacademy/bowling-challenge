describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('score is 0 by default', function() {
    expect(frame.score()).toEqual(0);
  });

});
