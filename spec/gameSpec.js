describe('Game', function(){

  var game

  it('can correctly increment its score for ordinary rolls', function(){
    game = new Game([2,2,2,3,4,5,6,3,7,2,5,1,2,1,9,0,7,2,4,4]);
    expect(game.scoreForFrame(1)).toEqual(4);
    expect(game.scoreForFrame(2)).toEqual(9);
    expect(game.scoreForFrame(3)).toEqual(18);
    expect(game.scoreForFrame(4)).toEqual(27);
    expect(game.scoreForFrame(5)).toEqual(36);
    expect(game.scoreForFrame(6)).toEqual(42);
    expect(game.scoreForFrame(7)).toEqual(45);
    expect(game.scoreForFrame(8)).toEqual(54);
    expect(game.scoreForFrame(9)).toEqual(63);
    expect(game.scoreForFrame(10)).toEqual(71);
  });
  
});