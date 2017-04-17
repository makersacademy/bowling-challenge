describe("Frame", function(){
  var frame;
  beforeEach(function(){
    frame = new Frame()
    });

  it("initializes with 10 pins remaining", function() {
    expect(frame.pinsremaining).toEqual(10);
  });

  describe("bowl", function(){

    it("knocks down a random number of pins", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      frame.bowl();
      expect(frame.pinsremaining).toEqual(5)
    });

    it("adds individual bowling scores to the frame", function() {
      spyOn(Math, 'floor').and.returnValue(4);
      frame.bowl();
      frame.bowl();
      expect(frame.frameScores).toEqual([4, 4])
    });

    it("adds the total score of the two bowls together", function() {
      spyOn(Math, 'floor').and.returnValue(4);
      frame.bowl();
      frame.bowl();
      expect(frame.frameTotalScore).toEqual(8);
    });
  });

  describe("_isComplete", function() {

    it("a frame is complete after two bowls", function() {
      spyOn(Math, 'floor').and.returnValue(4);
      frame.bowl();
      frame.bowl();
      expect(frame._isComplete()).toBe(true);
    });
  });

  describe("_isFrameAStrike", function() {

    it("is a strike if 10 pins are knocked down on first ball", function() {
      spyOn(Math, 'floor').and.returnValue(10);
      frame.bowl();
      expect(frame.wasAStrike).toBe(true);
    });
  });
});
