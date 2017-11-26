describe('Game', function() {
  var game
  beforeEach(function(){
     game = new Game();
  });

  it('should be able to create one frame', function(){
    expect(game._newFrame()).toEqual('Added new frame')
  });

  it('should be able to play round 1', function(){
    game.playRound1(4);
    expect(game.currentframe).toEqual([4]);
  });

  it('should clear the current frame when end of second round', function(){
      game.playRound1(4);
      game.playRound2(5);
      expect(game.currentframe).toEqual([]);
    });

  it('should add the current frame to the frames array', function(){
      game.playRound1(4);
      game.playRound2(5);
      expect(game._frames).toEqual([[0,0],[0,0],[4,5]]);
    });

  it('should be able to count the total score', function(){
    game.playRound1(4);
    game.playRound2(5);
    expect(game.totalscore).toEqual(9);
  });

  it('if a spare has been thrown, the next game should add the pins twice to the total score', function(){
    game.playRound1(1);
    game.playRound2(9);
    game.playRound1(5);
    game.playRound2(3);
    expect(game.totalscore).toEqual(26);
  })

  it('if a strike has been thrown, the next 2 games should add the pins twice to the total score', function(){
    game.playRound1(10);
    game.playRound1(1);
    game.playRound2(1);
    game.playRound1(1);
    game.playRound2(1);
    expect(game.totalscore).toEqual(18);
  })

});
