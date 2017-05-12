'use strict';

describe('BowlingGame', function() {

  var game;
  var player;


    beforeEach(function() {
      game = new Game();
      player = new Player('AJ');
      game.addPlayer(player);
      this.rollTimes = function(number) {
          for(var i=0; i < number; i++) {
            game.roll();
          }
      };
    });

    describe('new game', function() {
      it('should have 10 pins', function() {
          expect(game.pins).toEqual(10);
      });
      it('should be frame 1', function() {
          expect(game.frame).toEqual(1);
      });
      it('should have a player with score of 0', function() {
          expect(player.score).toEqual(0);
      });
    });

  describe('single frame', function() {
      it('starts a new frame after scoring an open', function() {
        spyOn(game, '_calculateRoll').and.returnValue(3);
        this.rollTimes(2);
        expect(game.frame).toEqual(2);
      });
    it('starts a new frame after scoring a spare', function() {
      spyOn(game, '_calculateRoll').and.returnValue(5);
      this.rollTimes(2);
      expect(game.frame).toEqual(2);
    });
    it('starts a new frame after scoring a strike', function() {
      spyOn(game, '_calculateRoll').and.returnValue(10);
      game.roll();
      expect(game.frame).toEqual(2);
    });
  });

  describe('scoring', function() {
    it('records the score after scoring an open', function() {
      spyOn(game, '_calculateRoll').and.returnValue(3);
      this.rollTimes(2);
      expect(game.score).toEqual(6);
    });
    it('properly calculates the score after a player has scored a single spare', function() {
      spyOn(game, '_calculateRoll').and.returnValue(5);
      this.rollTimes(3);
      game._calculateRoll = jasmine.createSpy().and.returnValue(3);
      game.roll();
      expect(game.score).toEqual(23);
    });
    it('properly calculates the score after a player has scored a single strike', function() {
        spyOn(game, '_calculateRoll').and.returnValue(10);
        game.roll();
        game._calculateRoll = jasmine.createSpy().and.returnValue(3);
        this.rollTimes(2);
        expect(game.score).toEqual(22);
    });
    it('properly calculates the score when a player scores a strike then a spare', function () {
        spyOn(game, '_calculateRoll').and.returnValue(10);
        game.roll();
        game._calculateRoll = jasmine.createSpy().and.returnValue(5);
        this.rollTimes(2);
        game._calculateRoll = jasmine.createSpy().and.returnValue(3);
        this.rollTimes(2);
        expect(game.score).toEqual(39);
    });
    it('properly calculates the score when a player scores a spare then a strike', function () {
        spyOn(game, '_calculateRoll').and.returnValue(5);
        this.rollTimes(2);
        game._calculateRoll = jasmine.createSpy().and.returnValue(10);
        game.roll();
        game._calculateRoll = jasmine.createSpy().and.returnValue(3);
        this.rollTimes(2);
        expect(game.score).toEqual(42);
    });
  });
  describe('10th frame', function() {
      it('should end the game after an open score on the tenth frame', function() {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(20);
        expect(game.isOver).toBe(true);
      });
      it('should raise an exception if a player tries to roll again after game has ended', function() {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(20);
        expect(function() {game.roll();}).toThrowError("Game is over!");
      });
    it('should allow a bonus roll if player scores a spare', function() {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(5);
        this.rollTimes(2);
        expect(function() { game.roll(); }).not.toThrowError("Game is over!");
    });
    it('should properly calculate the score if a player scores a spare and gets a bonus roll', function() {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(5);
        this.rollTimes(3);
        expect(game.score).toEqual(87);
    });
    it('should end the game after a spare bonus roll', function() {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(5);
        this.rollTimes(3);
        expect(game.isOver).toBe(true);
    });
    it('should allow two bonus rolls if a player scores a strike', function () {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(10);
        game.roll();
        game._calculateRoll = jasmine.createSpy().and.returnValue(4);
        expect(function() { game.roll(); }).not.toThrowError("Game is over!");
        expect(function() { game.roll(); }).not.toThrowError("Game is over!");
    });
    it('should calculate the score properly if a player rolls a strike and then scores an open on their bonus roll', function () {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(10);
        game.roll();
        game._calculateRoll = jasmine.createSpy().and.returnValue(4);
        this.rollTimes(2);
        console.log("1 strike, open:");
        console.log(game);
        expect(game.score).toEqual(90);
    });
    it('should calculate the score properly if a player rolls a strike and then scores a spare on their bonus rolls', function () {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(10);
        game.roll();
        game._calculateRoll = jasmine.createSpy().and.returnValue(5);
        this.rollTimes(2);
        console.log("1 strike, spare:");
        console.log(game);
        expect(game.score).toEqual(92);
    });
    it('should calculate the score properly if a player rolls a strike and then rolls a strike and an open on their bonus rolls', function () {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(10);
        this.rollTimes(2);
        game._calculateRoll = jasmine.createSpy().and.returnValue(5);
        game.roll();
        expect(game.score).toEqual(97);
    });
    it('should calculate the score properly if a player rolls three strikes on their bonus rolls', function () {
        spyOn(game, '_calculateRoll').and.returnValue(4);
        this.rollTimes(18);
        game._calculateRoll = jasmine.createSpy().and.returnValue(10);
        this.rollTimes(3);
        expect(game.score).toEqual(102);
    });
    it('should calculate the score properly if a player rolls a perfect game', function () {
        spyOn(game, '_calculateRoll').and.returnValue(10);
        this.rollTimes(12);
        expect(game.score).toEqual(300);
    });
    it('should calculate the score properly if a player rolls a gutter game', function () {
        spyOn(game, '_calculateRoll').and.returnValue(0);
        this.rollTimes(20);
        expect(game.score).toEqual(0);
    });
  });
});
