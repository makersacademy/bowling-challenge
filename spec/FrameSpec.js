describe("Frame", function() {

  it("starts with a score of zero", function(){
    var frame = new Frame();
    expect(frame.score).toEqual(0);
  });

});