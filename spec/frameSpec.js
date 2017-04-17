describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("standard frame scoring", function(){
    it("scores the number of pins knocked down in an array", function() {
      frame.bowl(6);
      frame.bowl(3);
      expect(frame.getScoreCard()).toEqual([6,3]);
    });

    it("adds up the score of pins", function() {
      frame.bowl(6);
      frame.bowl(3);
      expect(frame.getScore()).toEqual(9)
    });
  });

  describe("marks the frame as complete", function() {
    it("Completes a standard frame after two bowls", function() {
      frame.bowl(6);
      frame.bowl(3);
      expect(frame.isComplete).toBe(true);
    });

    it("allows the user to enter a number that is no more than 10", function() {
      expect(function(){ frame.bowl(11); } ).toThrow(new Error
              ("Cannot score that number of pins!"));
    });

    it("does not score negative numbers", function() {
      expect(function(){ frame.bowl(-3); } ).toThrow(new Error
              ("Cannot score that number of pins!"));
    });

    it("stops the user scoring more pins than are available", function() {
      frame.bowl(6);
      expect(function(){ frame.bowl(5); } ).toThrow(new Error
              ("Cannot score that number of pins!"));
    });

    it("does not allow a second bowl if a strike was scored", function(){
      frame.bowl(10);
      expect(function(){ frame.bowl(1); } ).toThrow(new Error
              ("You already finished this frame"));
    });
  });

  describe("scoring a strike", function() {
    it("can be given a bonus", function() {
      frame.bowl(10);
      frame.addToBonus(4);
      frame.addToBonus(5);
      expect(frame.getScore()).toEqual(19);
    });
  });


});
