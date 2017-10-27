describe("Frame", function(){
  var frame;

  beforeEach (function(){
    frame = new Frame();
  });

  describe("score", function(){
    it("score begins at 0", function (){
      expect(frame.score()).toEqual(0);
    });
  });
});
