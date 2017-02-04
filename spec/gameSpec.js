'use strict';

describe('Game', function() {

  var game;
  var bowl;

  beforeEach(function() {
    game = new Game();
    bowl = jasmine.createSpyObj('bowl', ['currentGo']);
  });

  it('a player can roll two balls for their turn', function() {
    expect(game.bowl()).not.toBeNull();
  });

  describe('first ball is a strike', function() {
      beforeEach(function() {
        bowl.currentGo.and.returnValue([10,0]);
      });
        it('player makes a strike', function() {
          expect(game.strikeX()).toEqual(10);
        });
  });

  it('keeps a record of the score', function() {
    expect(game.score()).not.toBeNull();
  });
});
