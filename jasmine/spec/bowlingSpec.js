describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });
  describe('Scoring', function() {

    it('score starts as 0', function() {
      expect(game.score()).toEqual(0);
    });
    it('starts with an empty scorecard', function() {
      expect(game.showScoreCard()).toEqual([]);
    });
    it('keeps score card', function() {
      game.roll(4, 5);
      expect(game.showFrame(1).rollOne).toEqual(4);
      expect(game.showFrame(1).rollTwo).toEqual(5);
    });
    it('starts at frame 1', function() {
      expect(game._currentFrame).toEqual(1);
    });
    it('keeps normal scoring', function() {
      game.roll(4, 5);
      expect(game.score()).toEqual(9);
    });
    it('keeps score for each frame', function() {
      game.roll(4, 5);
      expect(game.showFrame(1).score).toEqual(9);
    });
    it('has 10 frames only', function() {
      for (var i = 1; i <= 9; i++) {
        game.roll(6, 4);
      }
      expect(function() {
        game.roll(1, 3);
      }).toThrowError('game has finished!');
    });
  });

  describe("Strike", function() {
    it('ends the frame; roll 2 scores 0', function() {
      game.roll(10);
      expect(game.score()).toEqual(10);
      expect(game.showScoreCard()[0].rollTwo).toEqual(0);
    });
    it('awards bonus points - strike first roll', function() {
      game.roll(10);
      // expect(game.score()).toEqual(10);
      game.roll(4, 5);
      expect(game.showFrame(1).score).toEqual(19);
      expect(game.score()).toEqual(28);
    });
    // it('awards bonus points - strike not first roll', function() {
    //   game.roll(2, 3);
    //   expect(game.score()).toEqual(5);
    //   game.roll(10);
    //   game.roll(3, 4);
    //   expect(game.showFrame(2).score).toEqual(22);
    //   expect(game.showFrame(3).score).toEqual(29);
    //   expect(game.score()).toEqual(29);
    //   console.log(game._currentFrame);
    //   console.log(game.showFrame(game._currentFrame - 1));
    //   console.log(game.score());
    //   expect(game.showFrame(game._currentFrame - 1)).toEqual(game.score());
    // });

    // it("rolls two strikes in a row", function() {
    //
    // });
    // it('prints strike message', function(){
    //
    // });
  });

  // describe("Spare", function() {
  //   it('awards bonus points', function() {
  //     game.roll(4, 6);
  //     expect(game.score()).toEqual(10);
  //     game.roll(4, 5);
  //     expect(game.score()).toEqual(23);
  //   });
  //
  //
  //   // it('prints spare message', function(){
  //   //
  //   // });
  //
  // });

  // describe("Edge-case", function() {
  //   // it("two strikes in a row", function() {
  //   //
  //   // });
  //
  //   // it("10th frame", function(){
  //   //
  //   // });
  // });

  // describe("Match report", function() {
  //   // it("reports a Gutter Game", function(){
  //   //
  //   // });
  //   // it("reports a Perfect Game", function(){
  //   //
  //   // });
  // });
});
