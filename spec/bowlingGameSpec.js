describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    frame = new Frame()
  });

  describe("addFrame", function() {
    it("should add a frame to the current game", function() {
      game.addFrame(frame);
      expect(game._frames).toContain(frame);
    });

    it("should add the score from that frame to a total score", function() {
      frame.bowl(7);
      frame.bowl(1);
      game.addFrame(frame);
      expect(game._score).toEqual(8);
    });
  });
});

describe("Frame", function() {
  var game;

  beforeEach(function() {
    frame = new Frame()
  });

  describe("bowl", function() {
    it("should deduct the correct amount of pins from frame", function() {
      frame.bowl(7);
      expect(frame._pins).toEqual(3);
    });

    it("should raise an error if bowl is used more than twice per frame", function() {
      frame.bowl(7);
      frame.bowl(1);
      expect(function(){
        frame.bowl(9);
      }).toThrowError("You have used all your rolls in this frame");
    });

    it("should not add a score immediately if a spare is scored", function() {
      frame.bowl(7)
      frame.bowl(3)
      expect(frame._frameScore).toEqual(7);
    });

    // it("should add the correct score if a spare has been scored in the previous frame")
  });

  describe("isSpare", function() {
    it("should return true when there are 0 pins remaining after 2 rolls of a frame", function() {
      frame.bowlSpare();
      expect(frame.isSpare()).toEqual(true);
    });
  });
});

//Helper Methods//

Frame.prototype.bowlSpare = function() {
  this.bowl(7);
  this.bowl(3);
};
