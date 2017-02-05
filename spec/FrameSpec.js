describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe("Single Frame", function() {
    it("initializes with a score of 0" , function(){
      expect(frame.viewScore()).toEqual(0)
    });
    it("initializes as an incomplete frame", function(){
      expect(frame.isComplete()).toBe(false)
    })
  });

  describe("when playing", function(){

    it("stores the score for the player's first bowl", function(){
      frame.firstBowl(7);
      expect(frame._firstBowlScore).toEqual(7)
    });

    it("stores the score for the player's second bowl", function(){
      frame.secondBowl(2);
      expect(frame._secondBowlScore).toEqual(2)
    });

    it("stores the total score the player's two bowls", function(){
      frame.firstBowl(3);
      frame.secondBowl(4);
      expect(frame.viewScore()).toEqual(7)
    });

    it("records the frame as complete when the player has bowled twice", function(){
      frame.firstBowl(8);
      frame.secondBowl(2);
      expect(frame.isComplete()).toEqual(true)
    });
  });

  describe("when the player scores a strike", function(){

    it("records a strike if the player scores ten with the first bowl", function(){
      frame.firstBowl(10);
      expect(frame.isStrike()).toEqual(true)
    });

    it("records the frame as complete", function(){
      frame.firstBowl(10);
      expect(frame.isComplete()).toBe(true)
    });

  });

  describe("when a player scores a spare", function(){

    it("records a spare if the player scores ten after the second bowl", function(){
      frame.firstBowl(5);
      frame.secondBowl(5);
      expect(frame.isSpare()).toEqual(true)
    });

    it("records a spare if the player scores ten with the second bowl only", function(){
      frame.firstBowl(0);
      frame.secondBowl(10);
      expect(frame.isSpare()).toEqual(true)
    });
  });
});
