describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    secondFrame = new Frame();
    thirdFrame = new Frame();
    tenthFrame = new Frame(true);
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

    it("should add a bonus for a spare the frame after", function() {
      frame.bowlSpare();
      game.addFrame(frame);
      secondFrame.bowl(5);
      secondFrame.bowl(2);
      game.addFrame(secondFrame);
      expect(game._score).toEqual(22);
    });

    it("should add a bonus for a strike the frame after unless two strikes in a row are scored", function() {
      frame.bowl(10);
      game.addFrame(frame);
      secondFrame.bowl(5);
      secondFrame.bowl(2);
      game.addFrame(secondFrame);
      expect(game._score).toEqual(24);
    });

    it("should add a bonus for a strike the frame after next if two strikes in a row are scored", function() {
      frame.bowl(10);
      game.addFrame(frame);
      secondFrame.bowl(10);
      game.addFrame(secondFrame);
      thirdFrame.bowl(5);
      thirdFrame.bowl(2);
      game.addFrame(thirdFrame);
      expect(game._score).toEqual(49);
    });

    it("should add the correct score if a spare is scored in the 10th frame", function() {
      tenthFrame.bowl(7);
      tenthFrame.bowl(3);
      tenthFrame.bowl(4);
      game.addFrame(tenthFrame);
      expect(game._score).toEqual(14);
    });

    it("should add the correct score if a strike is scored with the first roll of the 10th frame", function() {
      tenthFrame.bowl(10);
      tenthFrame.bowl(5);
      tenthFrame.bowl(5);
      game.addFrame(tenthFrame);
      expect(game._score).toEqual(20);
    });
  });
});

describe("Frame", function() {
  var game;

  beforeEach(function() {
    frame = new Frame();
    tenthFrame = new Frame();
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

    it("without a spare or strike, users should get 2 rolls in the 10th frame", function() {
      tenthFrame.bowl(7);
      tenthFrame.bowl(1);
      expect(function(){
        tenthFrame.bowl(9);
      }).toThrowError("You have used all your rolls in this frame");
    });

    // it("should not add a score immediately if a spare is scored", function() {
    //   frame.bowlSpare();
    //   expect(frame._frameScore).toEqual(7);
    // });

    // it("should add the correct score if a spare has been scored in the previous frame")
  });

  describe("isSpare", function() {
    it("should return true when there are 0 pins remaining after 2 rolls of a frame", function() {
      frame.bowlSpare();
      expect(frame.isSpare()).toEqual(true);
    });
  });

  describe("isStrike", function() {
    it("should return true when there are 0 pins remaining after 1 roll of a frame", function() {
      frame.bowl(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });


});

//Helper Methods//

Frame.prototype.bowlSpare = function() {
  this.bowl(7);
  this.bowl(3);
};
