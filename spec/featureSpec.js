'use strict';

describe('Feature Test:', function(){
  var player;
  var game;

  beforeEach(function(){
    player = new Player("John")
    game = new BowlingGame(player);
  });

  it('creates a game that has a player with a name', function(){
    expect(game.getPlayer()).toEqual(player);
    let john = game.getPlayer();
    expect(john.getName()).toEqual("John");
  });

  it('creates a game that has a scorecard that can provide scores',function(){
    expect(game.getScorecard().getTotalScore()).toEqual(0);
  });
});