'use strict';

describe('Player', function(){
  var player;
  var game;
  var roll;

  beforeEach(function(){
    player = new Player();
    game = jasmine.createSpyObj('game',['newRoll','increaseScore']);
    roll = jasmine.createSpy('roll');
  });


  it('player can make a first roll', function(){
    player.makeRoll(game,roll);
    expect(game.increaseScore).toHaveBeenCalledWith(roll);
  });

});
