'use-strict';

describe("Game", function() {

  var game;
  var roundOne;

  beforeEach(function() {
    game = new Game();
    roundOne = jasmine.createSpyObj("roundOne", ['roll', 'showRawScore', 'showNumRolls']);
  });

  describe("At the start the game ...", function() {

    it("should have a constant of 10 frames", function() {
      expect(game.showRounds()).toEqual([]);
    });

    it("should have a score of 0", function() {
      expect(game.showScore()).toEqual(0);
    });

    it("should have a currentRound set to null", function() {
      expect(game.showCurrentRound()).toEqual(null);
    });

  });

  describe("After one roll it... ", function() {

    it("should add the round to the Rounds array", function () {
      helperModule.playGame(1, game, roundOne);
      expect(game._rounds.length).toEqual(1);
      expect(game.showCurrentRound()).toEqual(roundOne);
    });

  });

  describe("After two regular rolls it ... ", function() {

    beforeEach(function(){
        roundOne.showRawScore.and.returnValue(7);
        roundOne.showNumRolls.and.returnValues(1,2);
      });

    it("should have 1 round in the Rounds array", function () {
      helperModule.playGame(2, game, roundOne);
      expect(game._rounds.length).toEqual(1);
      expect(game.showCurrentRound()).toEqual(roundOne);
    });

    it("should update the score", function () {
      helperModule.playGame(2, game, roundOne);
      expect(game.showScore()).toEqual(7);
    });

    it("should reset the currentRound to null", function() {
      helperModule.playGame(2, game, roundOne);
      expect(game.showCurrentRound()).toEqual(null);
    });

  });

  describe("After three regular rolls it ...", function() {

    it("should have 2 rounds in the Rounds array", function () {
      helperModule.playGame(2, game, roundOne);
      expect(game._rounds.length).toEqual(1);
      expect(game.showCurrentRound()).toEqual(roundOne);
    });
    });

    it("should have update the score", function () {
      // something!
    });

  })

});
