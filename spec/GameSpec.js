describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ("should with at a score of zero", function() {
    expect(game.score).toBe(0);
  });

  it ("should with ten pins", function() {
    expect(game.pins).toBe(10);
  });

  describe("first bowl of frame", function() {
    it("should bowl a number between 0 and 10", function() {
      game.bowl(10);
      expect(game.score).toBeLessThan(11);
      expect(game.score).toBeGreaterThan(0);
    });

    describe("0 is bowled", function() {
      it("should leave 10 pins standing", function() {
        spyOn(Math, 'floor').and.returnValue(0);
        game.bowl(10);
        expect(game.pins).toBe(10);
      });

      it("should have a score of 0", function() {
        spyOn(Math, 'floor').and.returnValue(0);
        game.bowl(10);
        expect(game.score).toBe(0);
      });
    });

    describe("10 is bowled", function() {
      it("should leave 0 pins standing", function() {
        spyOn(Math, 'floor').and.returnValue(10);
        game.bowl(10);
        expect(game.pins).toBe(0);
      });

      it("should have a score of 10", function() {
        spyOn(Math, 'floor').and.returnValue(10);
        game.bowl(10);
        expect(game.score).toBe(10);
      });
    });
  });
});
