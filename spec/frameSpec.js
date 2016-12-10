describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  describe("Points", function(){
    it("can be a maximum of 10", function(){
      expect(frame.MAX_POINTS).toEqual(10);
    })
    it("can be calculated per roll", function(){
      expect(frame.roll()).toBeGreaterThan(-1);
      expect(frame.roll()).not.toBeGreaterThan(10);
    })
  })

  describe("Rolls", function(){
    it("sets a maximum value of 2", function(){
      expect(frame.MAX_ROLLS).toEqual(2);
    })
    it("count starts off at 0 with each frame", function(){
      expect(frame.rollCount).toEqual(0);
    })
    it("count increases by 1 when a roll is taken", function(){
      frame.roll();
      expect(frame.rollCount).toEqual(1);
    })
    it("count cannot exceed 2", function(){
      for(var i = 0; i<2; i++){ frame.roll(); }
      expect(function(){frame.roll();}).toThrow("Frame is over");
    })
  })







})
