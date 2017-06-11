describe("Frames", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame(new Rack);
  });

  it("has a score based on the number of downed pins", function(){
    frame.bowlBall();
    expect(frame.getScore()).not.toBeNaN();
  });

});
