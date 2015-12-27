describe("Frame", function() {


  beforeEach( function() {
  newFrame = new Frame();
  });


    it("each frame should have 10 pins", function() {
      expect(newFrame.pins).toEqual(10);
    });

    it("should let you roll the ball and reduce the number of rolls", function() {
      newFrame.hit();
      expect(newFrame.rolls).toEqual(1);
    });

    it("should let you roll the ball twice", function() {
      newFrame.hit();
      newFrame.hit();
      expect(function(){ newFrame.hit(); }).toThrow("Can not roll ball, frame is over!");
    });

    it("should reduce the number of pins per roll", function() {
      newFrame.hit(2);
      expect(newFrame.pins).toEqual(8);
    });

    it("should not let you roll if there are no pins", function() {
      newFrame.hit(10);
      expect(function(){ newFrame.hit(); }).toThrow("Can not roll ball, frame is over!");
    });

    it("should know when a frame is over when a strike", function() {
      newFrame.hit(10);
      expect(newFrame.isOver()).toEqual(true);
    });

    it("should know when a frame is over when been rolled twice with no strike", function() {
      newFrame.hit(2);
      newFrame.hit(1);
      expect(newFrame.isOver()).toEqual(true);
    });

    it("should be a strike when 10 pins are hit in one roll", function () {
      newFrame.hit(10);
      expect(newFrame.isStrike()).toEqual(true);
    });

    it("should be a spare when 10 pins are hit in two rolls", function () {
      newFrame.hit(5);
      newFrame.hit(5);
      expect(newFrame.isSpare()).toEqual(true);
    });

    it("should allow to roll 3 times in last frame if strike", function() {
      newFrame.isLastFrame = true;
      newFrame.hit(10);
      expect(newFrame.isOver()).toEqual(false);
    });

    it("should be over with 2 rolls with pins left over in last frame", function () {
      newFrame.isLastFrame = true;
      newFrame.hit(1);
      newFrame.hit(2);
      expect(newFrame.isOver()).toEqual(true);
    });

    it("should allow to roll 3 times in last frame if spare", function() {
      newFrame.isLastFrame = true;
      newFrame.hit(5);
      newFrame.hit(5);
      expect(newFrame.isOver()).toEqual(false);
    });

    it("if you've rolled three times then the game should be over", function () {
      newFrame.isLastFrame = true;
      newFrame.hit(10);
      newFrame.hit(10);
      newFrame.hit(10);
      expect(newFrame.isOver()).toEqual(true);
    });
})
