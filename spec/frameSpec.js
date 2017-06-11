describe("Frames", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame;
  });

  it("Get's points for the first roll", function(){
    expect(frame.getFirstRoll()).not.toBeNaN();
  });

});
