describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("returns one game", function() {
    frame.oneGame(0);
    expect(frame.defaultPins()).toEqual(10);
  });

});
