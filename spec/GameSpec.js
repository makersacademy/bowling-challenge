describe('Game',function(){
  beforeEach(function(){
    game = new Game();
  })

  it('if user does strike the score is changed by 10',function(){
    game.turn(10);
    expect(game.score).toEqual(30);
  })

  it('counts the frames',function(){
    game.turn(5);
    game.turn(3);
    expect(game.frame).toEqual(1);
  })

  it('it ads the score of the frame to the total if no spare',function(){
    game.turn(4);
    game.turn(4);
    expect(game.score).toEqual(8);
  })

  it('if spare the total score is not changing at the end of the frame',function(){
    game.turn(5);
    game.turn(5);
    expect(game.score).toEqual(0);
  })

  it('if spare it ads the points of the first roll in the next fram to the frame before',function(){
    game.turn(5);
    game.turn(5);
    game.turn(2);
    expect(game.score).toEqual(12);
  })

  it('the score is 300 if a perfect game is played',function(){
    for(var i=1; i < 11; i++){
      game.turn(10)
    };
    expect(game.score).toEqual(300);
  })

  it('the game ends if 10 frames are played',function(){
    for(var i=0; i < 10; i++){
      game.turn(10)
    };
  })
})
