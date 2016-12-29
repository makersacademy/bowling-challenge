describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

describe('should start the frame with', function() {
  it("0 rolls", function(){
    expect(frame.rollNumber).toEqual(0);
  });
});

});
