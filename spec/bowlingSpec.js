describe("Bowling Game", function(){

  beforeEach(function(){
    game = new Game();
  });

  it("will return the current frame", function(){
    expect(game.frame).toEqual(1);
  });

  it("will return the current bowl", function(){
    expect(game.ball).toEqual(1);
  });

  it("will record the knocked down pins of a ball", function(){
    var knockedDown = 8
    game.bowl(knockedDown)
    expect(game.score).toEqual(knockedDown);
  });

  it("will record the knocked down pins of a frame", function(){
    var knockedDownBall1 = 5
    var knockedDownBall2 = 2
    game.bowl(knockedDownBall1)
    game.bowl(knockedDownBall2)
    expect(game.score).toEqual(knockedDownBall1 + knockedDownBall2);
  });

  it("knows the next ball and frame to be played", function(){
    var knockedDown = 2
    game.bowl(knockedDown)
    game.bowl(knockedDown)
    expect(game.ball).toEqual(1);
    expect(game.frame).toEqual(2);
  });

  it("moves to the next frame if a strike is scored", function(){
    var knockedDown = 10
    game.bowl(knockedDown)
    expect(game.ball).toEqual(1);
    expect(game.frame).toEqual(2);
  });



});