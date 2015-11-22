describe('Game',function(){
  beforeEach(function(){
    game = new Game();
  })

  it('if user does strike in the turn and the bonus rolls the score is changed by 30',function(){
    spyOn(Math, "round").and.returnValue(10);
    game.turn();
    expect(game.score).toEqual(30);
  })

  it('counts the frames',function(){
    game.turn();
    game.turn();
    expect(game.frame).toEqual(1);
  })

  it('it ads the score of the frame to the total if no spare',function(){
    spyOn(Math, "round").and.returnValue(4);
    game.turn();
    game.turn();
    expect(game.score).toEqual(8);
  })

  it('if spare the total score is not changing at the end of the frame',function(){
    spyOn(Math, "round").and.returnValue(5);
    game.turn();
    game.turn();
    expect(game.score).toEqual(0);
  })

  it('if spare it ads the points of the first roll in the next fram to the frame before',function(){
    spyOn(Math, "round").and.returnValue(5);
    game.turn();
    game.turn();
    game.turn();
    expect(game.score).toEqual(15);
  })

  it('the score is 300 if a perfect game is played',function(){
    spyOn(Math, "round").and.returnValue(10);
    for(var i=1; i < 11; i++){
      game.turn()
    };
    expect(game.score).toEqual(300);
  })
  it('the total frame remains 10 if 10 frames are played',function(){
    spyOn(Math, "round").and.returnValue(10);
    for(var i=1; i < 11; i++){
      game.turn()
    };
    expect(game.frame).toEqual(10);
  })
  it('throw error if the frame is more than 10',function(){
    spyOn(Math, "round").and.returnValue(10);
    for(var i=1; i < 11; i++){
      game.turn(10)
    };
    expect(function() {game.turn(10)}).toThrow('End of the game');
  })
})
