describe("CurrentFrame", function() {
  beforeEach(function(){
    currentFrame = new CurrentFrame;
  });

  it("shotCount is initially set to one for first frame", function(){
    expect(currentFrame.shotCount).toEqual(1);
  });

  it("changes currentFrame's shotCount to 2 after first shot", function() {
    spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    currentFrame.shotOne();
    expect(currentFrame.shotCount).toEqual(2);
  });

  it("resets shotCount to 1 after second shot of a frame", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    currentFrame.shotOne();
    currentFrame.shotOne();
    expect(currentFrame.shotCount).toEqual(1);
  });

  it("does not give a second shot if a strike was achieved", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.95; });
    game.playFrame();
    expect(currentFrame.shotCount).toEqual(1);
  });

});
