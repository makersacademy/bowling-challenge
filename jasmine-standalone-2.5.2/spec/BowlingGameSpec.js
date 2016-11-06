describe('BowlingGame', function () {
  var game

  beforeEach(function () {
    game = new BowlingGame();
  });

  describe('on starting a new game', function functionName() {

    it ('Should start a game with 10 frames', function functionName() {
      expect(game.frames.length).toBe(10);
    });

    it ('should number each frame from 1 - 10', function () {
      expect(game.frames[0].number).toEqual(1);
      expect(game.frames[4].number).toEqual(5);
      expect(game.frames[5].number).toEqual(6);
      expect(game.frames[8].number).toEqual(9);
      expect(game.frames[9].number).toEqual(10);
    });

    it ('should set up the final frame of the game', function () {
      expect(game.frames[9].thirdRoll).toBe(0)
    });
  });

  describe('scoring the game', function () {

    beforeEach(function() {
      game.frames[0].firstRoll = 3;
      game.frames[0].secondRoll = 1;
      game.frames[1].firstRoll = 10;
      game.frames[2].firstRoll = 4;
      game.frames[2].secondRoll = 6;
      game.frames[3].firstRoll = 7;
      game.frames[4].firstRoll = 4;
      game.frames[5].firstRoll = 10;
      game.frames[6].firstRoll = 4;
      game.frames[6].rollTwoScore = 3;
      game.frames[7].firstRoll = 7;
      game.frames[8].firstRoll = 6;
      game.frames[8].rollTwoScore = 4;
      game.frames[9].firstRoll = 7;
    });


  });
});
