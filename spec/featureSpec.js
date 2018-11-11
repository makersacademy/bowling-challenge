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

  it('update the total score when a new roll is added',function(){
    game.addNextRoll(4);
    expect(game.getScorecard().getTotalScore()).toEqual(4);
  });

  it('a frame should have maximum 2 rolls',function(){
    game.addNextRoll(4);
    game.addNextRoll(4);
    game.addNextRoll(4);
    expect(game.getScorecard().getFrames()[0].getRolls().length).toEqual(2);
  });

  it("a frame should have 1 roll if it's a strike",function(){
    game.addNextRoll(10);
    game.addNextRoll(2);
    expect(game.getScorecard().getFrames()[0].getRolls().length).toEqual(1);
  });
});
