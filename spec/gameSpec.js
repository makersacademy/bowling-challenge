describe('game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe('Strike or Spare', function () {
    it('Should return value of the score', function () {
      expect(game.playerRolls(10)).toEqual(10);
    });

    it('Should return true for a Strike', function () {
      game.playerRolls(10);

      expect(function functionName() {game.isStrike();} ).toBeTruthy();
    });

    it('Should return true if a Spare', function () {
      game.playerRolls(4);
      game.playerRolls(6);

      expect(function functionName() {game.isSpare();} ).toBeTruthy();
    });
  });

  describe('Should give correct score for first frame', function () {
    it('Return total score for 4 rolls', function () {
      game.playerRolls(10);
      game.playerRolls(10);
      game.playerRolls(7);
      game.playerRolls(2);
      game.playerRolls(5);
      game.playerRolls(5);


      console.log(game.finalScore);
      console.log(game.scoreArray);

      expect(game.scorePerFrame(1)).toEqual(28);
    });
  });


});
