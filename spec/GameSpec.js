'use strict';

describe('Game', function() {

  var game;

  var frame;

  beforeEach(function() {
    game = new Game();
  });

  beforeEach(function() {
    frame = new Frame();
  });

  var repeatedRolls = function(pins_knocked_down, up_to) {
    for (var single = 0; single < up_to; single++) { game.rolls(pins_knocked_down); };
  };

  describe('storedFrames', function () {
    it("stores the pins in a frame array", function() {
      expect(game.storedFrames).toEqual([frame]);
    })
  });

  describe('normalScore', function () {
    it("returns a score of zero for a repeatedRolls game", function(){
      repeatedRolls(0,20);
      expect(game.totalScore()).toEqual(0);
    });

    it("returns a score of 20 for a game where 1 is rolled each time", function(){
      repeatedRolls(1,20);
      expect(game.totalScore()).toEqual(20);
    });
  });

  describe('rolls', function () {
    it("allows a maximum of 21 rolls per game", function(){
      repeatedRolls(1, 21);
      expect(game.stored_pins.length).toEqual(21);
    });

    it("displays an end of game message once there have been 21 rolls", function(){
      repeatedRolls(1, 21);
      expect(game.endGameMessage()).toEqual("Congratulations you have finished the game!");
    });
  });

  describe('strikeBonus', function() {
    it("returns the bonus points for a strike", function(){
      game.rolls(10);
      game.rolls(5);
      game.rolls(4);
      repeatedRolls(0, 16);
      expect(game.strikeBonus()).toEqual(9);
    });

    it("gives bonus points for multiple strikes", function() {
      game.rolls(10);
      game.rolls(10);
      game.rolls(5);
      game.rolls(1);
      expect(game.strikeBonus()).toEqual(21);
    });

    it("displays a congratulations message for a strike", function(){
      game.rolls(10);
      expect(game.strikeMessage()).toEqual("Congratulations you got a strike! Move on to the next frame");
    });
  });

  describe('spareBonus', function() {
    it("gives the bonus points for a spare", function() {
      game.rolls(8);
      game.rolls(2);
      game.rolls(3);
      repeatedRolls(0, 17);
      expect(game.spareBonus()).toEqual(3);
    });
  });

  describe('totalScore', function() {
    it("gives the score of the game including any bonus points from a strike", function(){
      game.rolls(10);
      game.rolls(5);
      game.rolls(4);
      repeatedRolls(1, 16);
      expect(game.totalScore()).toEqual(44);
    });

    it("gives the score of the game including any bonus points from a strike and a spare", function() {
      game.rolls(10);
      game.rolls(5);
      game.rolls(4);
      game.rolls(4);
      game.rolls(6);
      game.rolls(4);
      game.rolls(2);
      repeatedRolls(0, 12);
      expect(game.totalScore()).toEqual(46);
    });

    it("gives the total score for a perfect game", function() {
      repeatedRolls(10, 12);
      expect(game.totalScore()).toEqual(300);
    });
  });

  describe('tenthFrameBonus', function() {
    it("gives bonus points for 10th frame strike", function() {
      repeatedRolls(10, 12);
      expect(game.tenthFrameBonus()).toEqual(20);
    });

    it("gives bonus points for 10th frame spare", function() {
      repeatedRolls(0, 18);
      game.rolls(9);
      game.rolls(1);
      game.rolls(4);
      expect(game.tenthFrameBonus()).toEqual(4);
    });
  });
});
