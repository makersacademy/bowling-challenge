describe("Frame", function(){
  var frame;
  beforeEach(function(){
    frame = new Frame()
    });

  it("initializes with 10 pins remaining", function() {
    expect(frame.pinsremaining).toEqual(10);
  });
});
