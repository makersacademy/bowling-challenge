describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game;
  });
  describe("game start",function(){
  it("has a starting score of 0", function(){
    expect(game.gameScore()).toEqual(0);
  });
  it("starting frame is 1", function(){
    expect(game.currentFrame()).toEqual(1);
  });
});
  it("should allow the user to play",function(){
    expect(game.gameScore()).toEqual(0);
  });
  it ('should allow the user to get duck', function(){
    spyOn(Math, 'random').and.returnValue(0);
    game.play();
    expect(game.gameScore()).toEqual(0);
  });
  it('should have 2 rolls in each frame', function(){
    game.play()
    expect(game.currentFrame()).toEqual(1);
  });
  it('should not allow the user to play the eleventh frame', function(){
    for(var i; i<21; i++)
    {
      game.increaseFrame();
    }
    expect(game.currentFrame()).toEqual(1);
  });
  it('should increase the score to 4 if 4 pins fall on rolling the ball', function(){
    spyOn(Math, 'random').and.returnValue(.4);
    game.play();
    expect(game.gameScore()).toEqual(4);
  });
  it('should show score as 6', function(){
    spyOn(Math, 'random').and.returnValue(.6);
    game.play();
    expect(game.gameScore()).toEqual(6);
  })

});
