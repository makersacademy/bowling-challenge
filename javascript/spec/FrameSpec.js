describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("has a default empty rolls array and a score of 0", function(){
    expect(frame.getRolls()).toEqual([]);
    expect(frame.getScore()).toEqual(0);
  });

  describe("amendScore", function(){
    it("adds the score to the frame", function(){
      frame.amendScore(5)
      expect(frame.getScore()).toEqual(5);
    })
  })


});
