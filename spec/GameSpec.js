describe('Game',function(){
  beforeEach(function(){
    game = new Game();
  })

  it('if user does strike in the current frame and strike in the next frame the score changes by 30',function(){
    game.turn(10);
    game.turn(10);
    game.turn(10);
    expect(game.scoreArray[0]).toEqual(30);
  })

  it('counts the frames',function(){
    game.turn(3);
    game.turn(3);
    expect(game.frame).toEqual(2);
  })

  it('it ads the score of the frame to the total if no spare',function(){
    game.turn(4);
    game.turn(4);
    expect(game.score).toEqual(8);
  })

  it('if spare the total score is not changing at the end of the frame',function(){
    game.turn(8);
    game.turn(2);
    expect(game.score).toEqual(0);
  })

  it('if spare it ads the points of the first roll in the next fram to the frame before',function(){
    game.turn(5);
    game.turn(5);
    game.turn(5);
    expect(game.score).toEqual(15);
  })

  it('if spare it ads the points of the first roll in the next fram to the frame before',function(){
    game.turn(10);
    game.turn(10);
    game.turn(8);
    game.turn(2);
    expect(game.score).toEqual(48);
  })

  it('the score is 300 if a perfect game is played',function(){
    for(var i=1; i < 13; i++){
      game.turn(10)
    };
    expect(game.score).toEqual(300);
  })

  it('the total frame remains 10 if 10 frames are played',function(){
    for(var i=1; i < 20; i++){
      game.turn(4);
    };
    game.turn(4);
    game.turn(4);
    expect(game.frame).toEqual(11);
  })

  it('throw error if the frame is more than 10',function(){
    for(var i=1; i < 21; i++){
      game.turn(4)
    };
    expect(game.turn(4)).toEqual('End of the game');
  })
})
