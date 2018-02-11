describe('game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('Strike or Spare', function () {
    it('Should increment frame counter by 1', function () {
      game.pinsDroppedEachRoll(3);
      expect(game.frameCounter).toEqual(1);
    });

    it('Should return true for a Strike', function () {
      expect(game.isStrike(10)).toBeTruthy();
    });

    it('Score array should contain 10 and 0 for frame one - after strike', function () {
      game.pinsDroppedEachRoll(10);

      expect(game.scoreArray).toEqual([10,0]);
    });

    it('Should return true if a Spare', function () {
      game.pinsDroppedEachRoll(4);

      expect(game.isSpare(6)).toBeTruthy();
    });

    it('Neither spare or strike with 4 and 5 rolls', function () {
      game.pinsDroppedEachRoll(4);

      expect(game.isSpare(5)).toBeFalsy();
    });

    it('Score array should contain 4 and 5 rolls', function () {
      game.pinsDroppedEachRoll(4);
      game.pinsDroppedEachRoll(5);

      expect(game.scoreArray).toEqual([4,5]);
    });

  });

  describe('Total score after each frame', function () {
    it('Return total score for 3 frames: 4 and 5 rolls', function () {
      game.startGame(5);
      game.startGame(4);

      game.startGame(5);
      game.startGame(4);

      game.startGame(5);
      game.startGame(4);

      expect(game.finalScore).toEqual(27);
    });

    it('Return total score for 2 frames: strike followed by 4 and 5 rolls', function () {
      game.startGame(10);
      game.startGame(4);
      game.startGame(5);

      expect(game.finalScore).toEqual(28);
    });

    it('Return total score for 3 frames: 2 strikes followed by 4 and 4 rolls', function () {
      game.startGame(10);
      game.startGame(10);
      game.startGame(4);
      game.startGame(4);

      expect(game.finalScore).toEqual(50);
    });

    it('Return total score for 3 strikes followed by: 3,4 and 5,2 rolls', function () {
      game.startGame(10);
      game.startGame(10);
      game.startGame(10);
      game.startGame(3);
      game.startGame(4);
      game.startGame(5);
      game.startGame(2);
      expect(game.finalScore).toEqual(84);
    });

    it('Return total score for spare (0,10) and a strike followed by: 3,4 and 5,2 rolls', function () {
      game.startGame(0);
      game.startGame(10);
      game.startGame(10);
      game.startGame(5);
      game.startGame(2);
      game.startGame(4);
      game.startGame(1);
      
      expect(game.finalScore).toEqual(49);
    });
  });


});
