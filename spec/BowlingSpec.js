describe("Bowling", function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("Frames", function() {
    it("frame count to be equal to one at the start of a game", function() {
      expect(bowling.frameCount).toEqual(1);
    });

    it("starts with ten empty frame arrays", function() {
      expect(bowling.frames[1]).toEqual([0,0]);
    });

    it("updates frameCount to next frame", function() {
      bowling.updateFrame();
      expect(bowling.frameCount).toEqual(2);
    });
  });

  describe("Score", function() {
    it("starts with a score of 0", function() {
      expect(bowling.score).toEqual(0);
    });

    it("bowl should add scores to the relevant frame array", function() {
      bowling.bowl(3,6);
      expect(bowling.frames[1]).toEqual([3,6]);
    });

    it("should update the score with the values bowled", function() {
      bowling.bowl(3,6);
      expect(bowling.score).toEqual(9);
    });

    it("returns true if previous frame was a strike", function() {
      bowling.bowl(10,0);
      bowling.updateFrame();
      expect(bowling.isStrike()).toBe(true);
    });

    it("returns true if previous frame was a spare", function() {
      bowling.bowl(5,5);
      bowling.updateFrame();
      expect(bowling.isSpare()).toBe(true);
    });

    it("adds the strike bonus to the current frame", function() {
      bowling.bowl(10,0);
      bowling.updateFrame();
      bowling.bowl(5,4);
      expect(bowling.score).toEqual(28);
    });

    it("adds the spare bonus to the current frame", function() {
      bowling.bowl(5,5);
      bowling.updateFrame();
      bowling.bowl(5,4);
      expect(bowling.score).toEqual(24);
    });
  });

});
