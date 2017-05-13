'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['method']);
  });

  describe('when beginning a new game', function() {
    it('contains an empty array to track the frames', function() {
      expect(game._frames).toEqual([]);
    });

    it('the total pins will start at zero', function() {
      expect(game._totalPins).toEqual(0);
    });

    it('the total bonus points will start at zero', function() {
      expect(game._totalBonus).toEqual(0);
    });

    it('the final score will start at zero', function() {
      expect(game._finalScore).toEqual(0);
    });
  });

  describe('when playing a game', function() {
    it('when player takes their turn it creates a new frame', function() {
      game.takeTurn(1, 1);
      expect(game._frames.length).toEqual(1);
    });

    it('will throw an error if a strike is rolled and the player tries to roll again in that frame', function () {
      expect(function(){ game.takeTurn(10, 1); }).toThrowError('You cannot have a second roll if you rolled a strike. Please enter your scores correctly');
    });
  });

  describe('when calculating pins knocked down', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(1, 1);
      }
    });
    it('can add up the total amount of pins knocked down', function() {
      expect(game._finalScore).toEqual(20);
    });
  });

  describe('when calculating bonus points', function() {
    it('can check whether each frame was a strike', function() {
      game.takeTurn(10, 0);
      game._checkForStrikes();
      expect(game._frames[0]._isStrike).toEqual(true);
    });

    it('can check whether each frame was a spare', function() {
      game.takeTurn(5, 5);
      game._checkForSpares();
      expect(game._frames[0]._isSpare).toEqual(true);
    });

    it('can calculate the correct bonus for a strike', function() {
      game.takeTurn(1, 1);
      game.takeTurn(10, 0);
      game.takeTurn(1, 1);
      game._addTotalBonus();
      expect(game._totalBonus).toEqual(2);
    });

    it('can calculate the correct bonus for multiple strikes', function() {
      game.takeTurn(1, 1);
      game.takeTurn(10, 0);
      game.takeTurn(10, 0);
      game.takeTurn(1, 1);
      game._addTotalBonus();
      expect(game._totalBonus).toEqual(13);
    });

    it('can calculated the correct bonus for a spare', function() {
      game.takeTurn(5, 5);
      game.takeTurn(1, 1);
      game._spareBonus();
      expect(game._bonusPoints[0]).toEqual(1);
    });

    it('can add the total of all bonus points scored during that game', function() {
      game.takeTurn(1, 1);
      game.takeTurn(10, 0);
      game.takeTurn(1, 1);
      game._addTotalBonus();
      expect(game._totalBonus).toEqual(2);
    });

  });

  describe('when eligible for bonus rolls in the final frame', function() {
    it('adds scores from the bonus rounds to the total bonus points', function() {
      for ( var i = 0; i < 9; i++) {
        game.takeTurn(0, 0);
      }
      game.takeTurn(5, 5);
      game.bonusRoll(5);
      game._addTotalBonus();
      expect(game._totalBonus).toEqual(5);
    });

    it('will only allow the player a bonus roll if the final frame was a strike or a spare', function() {
      expect(function() { game.bonusRoll(5); }).toThrowError('You do not get a bonus roll right now!')
    });
  });

  describe('when calculating the final score', function() {
    it('should calculate the sum of total pins knocked down and total bonus points', function() {
      game.takeTurn(10, 0);
      game.takeTurn(1, 1);
      game.takeTurn(1, 1);
      game._addFinalScore();
      expect(game._finalScore).toEqual(16);
    });
  });

  describe('when a game is finished you can play again, which will', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(1, 1);
      }
      game.playAgain();
    });

    it('reset the frames', function() {
      expect(game._frames).toEqual([]);
    });

    it('reset the pins down per frame', function() {
      expect(game._pinsDown).toEqual([]);
    });

    it('reset the bonus points', function() {
      expect(game._bonusPoints).toEqual([]);
    });

    it('reset the total pins back to zero', function() {
      expect(game._totalPins).toEqual(0);
    });

    it('resets the final score back to 0', function() {
      expect(game._finalScore).toEqual(0);
    });

    it('resets _isFinalFrame back to false', function() {
      expect(game._isFinalFrame).toEqual(false);
    });

    it('resets _isBonusAllowed back to false', function() {
      expect(game._isFinalFrame).toEqual(false);
    });
  });

  describe('exceptional game circumstances', function() {
    it('player can roll a gutter game', function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(0, 0);
      }
      expect(game._finalScore).toEqual(0);
    });

    // it('player can roll all spares', function() {
    //   for (var i = 0; i < 10; i++) {
    //     game.takeTurn(5, 5);
    //   }
    //   game._addFinalScore();
    //   expect(game._finalScore).toEqual(150);
    // });
    //
    // it('player can roll a perfect game', function() {
    //   for (var i = 0; i < 10; i++) {
    //     game.takeTurn(10, 0);
    //   }
    //   game.bonusRoll(10);
    //   game.bonusRoll(10);
    //   game._addFinalScore();
    //   expect(game._finalScore).toEqual(300);
    // });
  });

});
