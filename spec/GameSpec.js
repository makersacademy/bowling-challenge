'use-strict';

describe("Game", function() {

  var game;
  var roundOne;
  var roundOneStrike;
  var roundOneSpare;
  var roundTwo;

  beforeEach(function() {
    game = new Game();
    roundOne = jasmine.createSpyObj("roundOne", ['roll', 'showRawScore', 'showNumRolls', 'showCurrentRound', 'showStrike', 'showSpare', 'firstRollPinsHit']);
    roundOneStrike = jasmine.createSpyObj("roundOneStrike", ['roll', 'showRawScore', 'showNumRolls', 'showCurrentRound', 'showStrike', 'showSpare', 'firstRollPinsHit']);
    roundOneSpare = jasmine.createSpyObj("roundOneSpare", ['roll', 'showRawScore', 'showNumRolls', 'showCurrentRound', 'showStrike', 'showSpare', 'firstRollPinsHit']);
    roundTwo = jasmine.createSpyObj("roundTwo", ['roll', 'showRawScore', 'showNumRolls', 'showCurrentRound', 'showStrike', 'showSpare', '_rolls', 'firstRollPinsHit']);
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
    });

    it("should update the score", function () {
      helperModule.playGame(2, game, roundOne);
      expect(game.showScore()).toEqual(7);
    });

    it("should reset the currentRound to null", function() {
      helperModule.playGame(2, game, roundOne);
      expect(game._currentRound).toEqual(null);
    });

  });

  describe("After four regular rolls it ...", function() {

    beforeEach(function(){
        roundOne.showRawScore.and.returnValue(7);
        roundOne.showNumRolls.and.returnValues(1,2);
        roundTwo.showRawScore.and.returnValue(5);
        roundTwo.showNumRolls.and.returnValues(1,2);
      });

    it("should have 2 rounds in the Rounds array", function () {
      helperModule.playGame(2, game, roundOne);
      helperModule.playGame(2, game, roundTwo);
      expect(game.showRounds().length).toEqual(2);
      expect(game.showCurrentRound()).toEqual(null);
    });

    it("should update the score", function () {
      helperModule.playGame(2, game, roundOne);
      helperModule.playGame(2, game, roundTwo);
      expect(game.showScore()).toEqual(12);
      expect(game.showCurrentRound()).toEqual(null);
    });

  });

  describe("If round 1 = strike & round 2 = regular it ...", function() {

    beforeEach(function(){
        roundOneStrike.showRawScore.and.returnValue(10);
        roundOneStrike.showStrike.and.returnValue(true);
        roundOneStrike.showNumRolls.and.returnValues(1,2);
        roundTwo.showRawScore.and.returnValue(5);
        roundTwo.showStrike.and.returnValue(false);
        roundTwo.showNumRolls.and.returnValues(1,2);
      });

    it("should add a bonus to the score", function() {
      helperModule.playGame(2, game, roundOneStrike);
      helperModule.playGame(2, game, roundTwo);
      expect(game.showScore()).toEqual(20);
    });

  });

  describe("If round 1 = spare & round 2 = regular it ...", function() {

    beforeEach(function(){
        roundOneSpare.showRawScore.and.returnValue(10);
        roundOneSpare.showSpare.and.returnValue(true);
        roundOneSpare.showNumRolls.and.returnValues(1,2);
        roundTwo.showRawScore.and.returnValue(5);
        roundTwo.showNumRolls.and.returnValues(1,2);
        roundTwo.firstRollPinsHit.and.returnValues(2);
      });

    it("should add a bonus to the score", function() {
      helperModule.playGame(2, game, roundOneSpare);
      helperModule.playGame(2, game, roundTwo);
      expect(game.showScore()).toEqual(17);
    });

  });

});
