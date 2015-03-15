describe ("Bowl", function() {

  var roll1;
  var bowl;
  beforeEach(function() {
  bowl = new Bowl;
  });

  describe ("Starting a game", function() {

    xit("should have a roll 1 with a score of 0 when created", function() {
      expect(bowl.roll1).toEqual(0);
    });

    xit("should have a roll 2 with a score of 0 when created", function() {
      expect(bowl.roll2).toEqual(0);
    });

    it("should have 10 pins when created", function() {
      expect(bowl.pins).toEqual(10);
    });

    it("should only have a maxiumum of 10 frames", function() {
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      bowl.nextFrame();
      expect(bowl.frameNumber).toEqual(10);
    });

  });

  describe ("Playing the game", function() {

    it("should be able to move onto the next frame", function() {
      bowl.nextFrame();
      expect(bowl.frameNumber).toEqual(2);
    });

    it("should let rolls hit pins", function() {
      bowl.roll1(1);
      expect(bowl.pins).toEqual(9);
    });

    it("should move to the next frame when a strike is scored", function() {
      bowl.roll1(10)
      expect(bowl.frameNumber).toEqual(2);
    });

  });

  describe("Scoring", function() {

    it("should increase the roll score when a roll hits a pin", function() {
      bowl.roll1(10);
      expect(bowl.roll1).toEqual(10);
    });

    it("should only let the roll have a maximum score of 10", function() {
      bowl.roll1(15);
      expect(bowl.roll1).toEqual(10)
    });

    it("should know that a strike is equal to 10 pins being hit", function() {
      bowl.roll1(10);
      expect(bowl.strikes).toEqual(1)
    });

    xit("should have a maximum frame score of 10", function() {
      bowl.frameScore(10);
      expect(bowl.frameScore).toEqual(10);
    });

  });

});
