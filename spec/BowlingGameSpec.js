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
      game.frames[3].secondRoll = 3;
      game.frames[4].firstRoll = 4;
      game.frames[4].secondRoll = 1;
      game.frames[5].firstRoll = 10;
      game.frames[6].firstRoll = 4;
      game.frames[6].secondRoll  = 3;
      game.frames[7].firstRoll = 10;
      game.frames[8].firstRoll = 10;
      game.frames[9].firstRoll = 7;
      game.frames[9].secondRoll = 3;
      game.frames[9].thirdRoll = 8;
    });

    it ('can calculate the total bonus points for the game)', function () {
      expect(game.totalScoreBonuses()).toBe(55);
    });

    it ('can calculate total base score of the game)', function () {
      expect(game.totalBaseScore()).toBe(94);
    });

    it ('can calculate the final score of the game', function () {
      expect(game.finalScore()).toBe(149);
      console.log(game);
    })

  });

  describe('the perfect game', function () {

    beforeEach(function () {
      for (var i = 0; i < 9; i++){
        game.frames[i].firstRoll = 10;
      };
      game.frames[9].firstRoll = 10;
      game.frames[9].secondRoll = 10;
      game.frames[9].thirdRoll = 10;
    });

    it ('can score a perfect game', function () {
      expect(game.finalScore()).toBe(300);
      console.log(game.finalScore());
    });
  });

  describe('the gutter game', function () {

    beforeEach(function () {
      for (var i = 0; i < 9; i++){
        game.frames[i].firstRoll = 0;
      };
      game.frames[9].firstRoll = 0;
      game.frames[9].secondRoll = 0;
      game.frames[9].thirdRoll = 0;
    });

    it('can score a gutter game', function () {
      expect(game.finalScore()).toBe(0);
      console.log(game.finalScore());
    })
  });
});
