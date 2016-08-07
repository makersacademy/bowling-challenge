describe("Bowling game",function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe("Before first roll Player",function() {
    it("can have the first roll",function() {
      expect(game.rollNumber).toEqual(1);
    });
    it("has 10 pins to hit in first frame",function() {
      expect(game.pinsLeft).toEqual(10);
    });
    it("has 0 points",function() {
      expect(game.totalPoints).toEqual(0);
    });
  });
  describe("When Player rolls and knocks 5 pins",function() {
    beforeEach(function() {
     spyOn(Math,'random').and.returnValue(5);
     game.roll();
    });
    it("gets 5 points, and has another roll",function() {
      expect(game.totalPoints).toEqual(5);
      expect(game.rollNumber).toEqual(2);
    });
  });
});
