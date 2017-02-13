describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should include 10 pins", function() {
    expect(frame.totPins).toEqual(10);
  });

  describe("#countPins", function(){
    it("should throw an error if n. of pins knocked down above pins available", function() {
      expect( function(){frame.countPins(11);} ).toThrow(new Error("Please enter a number between 0 and 10"));
    });
    it("should throw an error if entered n. of pins below 0", function() {
      expect( function(){frame.countPins(-3);} ).toThrow(new Error("Please enter a number between 0 and 10"));
    });
  });

  describe("#isStrike", function(){
    it("should return true if all pins have been knocked down", function() {
      frame.countPins(10)
      expect(frame.isStrike()).toBeTruthy();
    });
    it("should return false if some pins are still standing after a roll", function() {
      frame.countPins(7)
      expect(frame.isStrike()).toBeFalsy();
    });
  });

  describe("#isSpare", function(){
    it("should return true if all pins have been knocked down in 2 rolls", function() {
      frame.countPins(5)
      frame.countPins(5)
      console.log("HERE",frame.rollsNum)
      expect(frame.isSpare()).toBeTruthy();
    });
    it("should return false if some pins are still standing after  2 rolls", function() {
      frame.countPins(2)
      frame.countPins(4)
      expect(frame.isSpare()).toBeFalsy();
    });
    it("should return false if it was a strike", function() {
      frame.countPins(10)
      expect(frame.isSpare()).toBeFalsy();
    });
  });

  describe("#tenthFrame", function(){
    it("should add 1 bonus roll to the frame if spare", function() {
      frame.countPins(3)
      frame.countPins(7)
      frame.tenthFrame()
      expect(frame.rollsNum).toEqual(1);
    });
    it("should add 2 bonus rolls to the frame if strike", function() {
      frame.countPins(10)
      frame.tenthFrame()
      expect(frame.rollsNum).toEqual(2);
    });
  });

});
