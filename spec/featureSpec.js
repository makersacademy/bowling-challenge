describe ('Game',function(){


  var game;

  beforeEach(function(){

    game = new Game();
  });

  it('To play, you roll a ball',function(){
    // frame.frameScore.length = 0
    spyOn(Math, 'random').and.returnValue(5/10);
    game.Roll()
    expect(game.frameScore).toEqual([5]);
  });

  it('If you score < 10 on FirstRoll, you roll again',function(){
    spyOn(Math, 'random').and.returnValue(5/10);
    game.BowlFrame()
    expect(game.frameScore).toEqual([5,5])
  });

  it('If you score 10 on FirstRoll, you don\'t roll again', function(){
    spyOn(Math, 'random').and.returnValue(10/10);
    game.BowlFrame()
    expect(game.frameScore).toEqual([10])
  });

  it('Game is played by rolling 10 frames',function(){
    spyOn(Math, 'random').and.returnValue(2/10);
    game.play();
    expect(game.GameScore).toEqual(40)
  });
});
