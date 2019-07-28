describe('Game', function(){

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('starts with a score of 0', function(){
    expect(game.score).toEqual(0);
  })

  it('returns the score of the first frame', function(){
    frame.bowlOne(7);
    frame.bowlTwo(2);
    frame.calculate();
    game.addFrame();
    expect(game.score).toEqual(9);
  })

  it('adds the score of the second frame to the game score', function(){
    game.score = 9
    frame.bowlOne(3);
    frame.bowlTwo(4);
    frame.calculate();
    game.addFrame();
    expect(game.score).toEqual(16);
  })

  // it('does not add points to the game score for a spare', function(){
  //
  //   expect(game.score).toEqual(0);
  // })
})
