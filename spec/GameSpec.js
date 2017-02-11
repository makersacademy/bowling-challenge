describe("Game", function(){
  var game;
  var player;

  beforeEach(function(){
    game = new Game();
    player = new Player(game);
  });

  it("should track the framescore", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    expect(game._frameScore).toEqual(3);
  });

  it("should update the roll tracker on each throw", function(){
    player.throwBall();
    expect(game._rollTracker).toEqual(2);
  });

  it("should update the frame number after 2 normal throws", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._frame).toEqual(2);
  });

  it("should update the frame to frame 3 after 4 normal throws", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    player.throwBall();
    player.throwBall();
    expect(game._frame).toEqual(3);
  });

  it("should reset the roll tracker when frame changes", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._rollTracker).toEqual(1);
  });

  it("should update the total score at the end of each frame", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._totalScore).toEqual(6);
  });

  it("should NOT update the total score until the frame is over", function(){
    player.throwBall();
    expect(game._totalScore).toEqual(0);
  });

  it("should reset the frame score after each frame", function(){
    player.throwBall();
    player.throwBall();
    expect(game._frameScore).toEqual(0);
  })

})
