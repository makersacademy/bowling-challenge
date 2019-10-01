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
    game.addNextRoll(0);
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

  it("the points of the next roll should be added to a frame that is a spare",function(){
    game.addNextRoll(8);
    game.addNextRoll(2);
    game.addNextRoll(3);
    expect(game.getScorecard().getScores()[0]).toEqual(13);
  });

  it("twelve strikes is 300 points",function(){
    for(var i = 0; i< 12; ++i) {
      game.addNextRoll(10);
    }
    expect(game.getScorecard().getTotalScore()).toEqual(300);
  });

  it("twelve strikes should be 10 frames",function(){
    for(var i = 0; i< 12; ++i) {
      game.addNextRoll(10);
    }
    expect(game.getScorecard().getFrames().length).toEqual(10);
  });

  it("the last frame of twelve strikes should have three rolls",function(){
    for(var i = 0; i< 12; ++i) {
      game.addNextRoll(10);
    }
    expect(game.getScorecard().getFrames()[9].getRolls().length).toEqual(3);
  });
});
