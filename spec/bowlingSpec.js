describe("Bowling", function() {

  beforeEach(function() {
    bowling = new Bowling();
    // bowling.firstBowl() = jasmine.createSpy("bowling.firstBowl()");
    // bowling.firstBowl()("Game over. Please reset.");
  });


  describe("score", function() {
    it("increases score", function() {
      bowling.score = 0;
      bowling.firstBowl();
      expect(bowling.score).not.toEqual(0); // need to spy to account for misses
      console.log(bowling.score)
    });
    // it("increases score", function() {
    //   thermo.tempIncrease();
    //   expect(thermo.temperature).toEqual(21);
    // });
  });

  describe("frames", function() {
    it("increases frames", function() {
      bowling.frameCount = 0;
      bowling.firstBowl();
      expect(bowling.frameCount).toEqual(1);
    });
    it("won't increase frames over 10", function() {
      bowling.frameCount = 10;
      expect(bowling.firstBowl()).toEqual("Game over. Please reset.");
    });
  });

});
