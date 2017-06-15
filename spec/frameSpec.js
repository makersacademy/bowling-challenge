describe("Frames", function() {

  var frame;

  it("has a score based on passed in scores", function(){
    frame = new Frame(1, 1);
    expect(frame.getScore()).toEqual(2);
  });

});
