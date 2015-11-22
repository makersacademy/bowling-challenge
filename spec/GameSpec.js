describe('Game',function(){
  beforeEach(function(){
    game = new Game();
    strike = 10;
  })

  it('if user does strike the score is changed by 10',function(){
    game.turn(10);
    expect(game.score).toEqual(30);
  })

  it ('if strike changes the frame and it does not allow second roll',function(){
    game.turn(10)
    expect(game.frame).toEqual(1)
  })

  it('if spare the total score is not changing at the end of the frame',function(){
    game.turn(5);
    game.turn(5);
    expect(game.score).toEqual(0)
  })

  it('it ads the score of the frame to the total if no spare',function(){
    game.turn(4);
    game.turn(4);
    expect(game.score).toEqual(8);
  })

  it('it prints the game is finish if frames equal 10',function(){
    for(var i=0; i < 10; i++){
    }
  })
})
