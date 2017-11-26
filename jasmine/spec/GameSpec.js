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
      expect(game._frames).toEqual([[4,5]]);
    });

  it('should be able to count the total score', function(){
    game.playRound1(4);
    game.playRound2(5);
    expect(game.totalscore).toEqual(9);
  });

});
