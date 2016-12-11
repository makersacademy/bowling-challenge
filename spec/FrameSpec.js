describe("Frame", function(){
  var frame
  beforeEach(function(){
    frame = new frame();
  });

  describe("frames", function(){
    it("first throw of first frame", function(){
      frame.inputFirstThrow(6);
      expect(frane.frameScore).toEqual([6])
    });

    it("second throw of first frame", function(){
      frame.inputFirstThrow(6);
      frame.inputSecondThrow(0);
      expect(frame.frameScore).toEqual([6,0])
    });

    it("should give a third frame in the last score if 10 points", function(){
      frame.inputFirstThrow(10);
      frame.inputSecondThrow(0);
      frame.inputThirdThrow(5);
      expect(frame.frameScore).toEqual([10,0,5])
    });
  });

});
