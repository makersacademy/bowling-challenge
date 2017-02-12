describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
    spyOn(window, 'addFrame');
  });

  describe("Single Frame", function() {
    it("initializes with a score of 0" , function(){
      expect(frame.viewFrameScore()).toEqual(0)
    });
    it("initializes as an incomplete frame", function(){
      expect(frame.isComplete()).toBe(false)
    })
  });

  describe("when playing", function(){

    it("stores the scores for both of the player's bowls", function(){
      frame.bowl(7);
      expect(frame._scores[0]).toEqual(7)
      frame.bowl(2);
      expect(frame._scores[1]).toEqual(2)
    });

    it("stores the total score the player's two bowls", function(){
      frame.bowl(3);
      frame.bowl(4);
      expect(frame.viewFrameScore()).toEqual(7)
    });

    it("records the frame as complete when the player has bowled twice", function(){
      frame.bowl(8);
      frame.bowl(2);
      expect(frame.isComplete()).toEqual(true)
    });
  });

  describe("when the player scores a strike", function(){

    it("records a strike if the player scores ten with the first bowl", function(){
      frame.bowl(10);
      expect(frame.isStrike()).toEqual(true)
    });

    it("records the frame as complete", function(){
      frame.bowl(10);
      expect(frame.isComplete()).toBe(true)
    });

  });

  describe("when a player scores a spare", function(){

    it("records a spare if the player scores ten after the second bowl", function(){
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.isSpare()).toEqual(true)
    });

    it("records a spare if the player scores ten with the second bowl only", function(){
      frame.bowl(0);
      frame.bowl(10);
      expect(frame.isSpare()).toEqual(true)
    });
  });
});
