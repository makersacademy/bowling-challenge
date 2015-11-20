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

  it("Should start with a score of 0", function() {
    expect(game.score).toEqual(0);
  })

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
      spyOn(Math, 'floor').and.returnValue(5);
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

    it("Should reduce the number of pins by the amount rolled", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.roll();
      expect(game.pins).toEqual(5);
    });

    it("Should increase the score by the amount rolled", function() {
      spyOn(Math, 'floor').and.returnValue(6);
      game.roll();
      expect(game.score).toEqual(6);
    });

    it("Should move to the next frame upon a strike", function() {
      spyOn(Math, 'floor').and.returnValue(10);
      game.roll();
      expect(game.currentFrame).toEqual(2);
      expect(game.currentRoll).toEqual(1);
    });
  });



});
