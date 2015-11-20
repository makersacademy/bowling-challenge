describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Should house 10 frames", function() {
    expect(Object.keys(game.frames).length).toEqual(10);
  });

  it("Should start a game with 10 pins", function() {
    expect(game.pins).toEqual(10);
  });

  it("Should return the current roll", function() {
    expect(game.currentRoll).toEqual(1);
  });

  describe("frames", function() {
    it("Should store the current frame", function() {
      expect(game.currentFrame).toEqual(1);
    });

    it("Should return the current frame", function() {
      expect(game.returnCurrentFrame()).toEqual(1);
    });
  });

  describe("roll", function() {
    it("Should change the currentRoll", function() {
      game.roll();
      game.roll();
      expect(game.currentRoll).toEqual(1);
    });

    it("Should change the currentFrame on the second roll", function() {
      game.roll();
      game.roll();
      expect(game.currentFrame).toEqual(2);
    });

    it("Should return a number from 0 - 10", function() {
      spyOn(Math, 'floor').and.returnValue(10);
      expect(game.roll()).toEqual(10);
    });
  });



});
