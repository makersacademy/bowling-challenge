describe("UserStories", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

// As a bowler
// My score initializes with 0 points
  it('starts score at 0', function(){
    expect(game.score).toEqual(0);
  });

  // As a bowler
  // My game starts at frame 1
  it("game starts at frame 1", function(){
    expect(game.frameCount).toEqual(1);
  });

  // As a bowler
  // My shotCount for my currentFrame starts at 1
  it("shotCount is initially set to one for first frame", function(){
    expect(game.currentFrame.shotCount).toEqual(1);
  });

  // As a bowler
  // So I can start playing a game
  // I want to be able to take my first shot
  it("allows me to take a shot", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.1; });

    game.playFrame();
    expect(game.currentFrame.shotCount).toEqual(2);
    expect(game.score).not.toEqual(0);
  });

  // As a bowler
  // So I know which shot I am on in my frame
  // I want my shotCount to increase by one after my first shot
  it("changes the frame's shotCount to 2 after first shot", function() {
    spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    game.playFrame();
    expect(game.currentFrame.shotCount).toEqual(2);
  });

  it("changes the frameCount to 2 after the second shot", function() {
    spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    game.playFrame();
    game.playFrame();
    expect(game.frameCount).toEqual(2);
  });

  // As a bowler
  // So I know which shot I am on in my frame
  // I want my shotCount to be reset to 1 after my second shot of a frame
  it("reset shotCount to 1 after 2nd shot if not a strike", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    game.playFrame();
    game.playFrame();
    expect(game.currentFrame.shotCount).toEqual(1);
  });

  it("adds up the score", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.1; });
    game.playFrame();
    expect(game.score).not.toEqual(0);
  });

  // As a bowler
  // So I can have a proper bowl
  // If I get a strike, I should not be given a second shot on that frame
  it("does not give a second shot if a strike was achieved", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.95; });
    game.playFrame();
    expect(game.currentFrame.shotCount).toEqual(1);
  });

  // As a bowler
  // So I can have a proper bowl
  // If I do not get a strike, I should shoot another
  it("does not allow me to knock over more than ten pins per frame", function(){
    spyOn(Math, 'random').and.callFake(function() { return 0.5; });
    game.shoot();
    game.shoot();
    expect()
  });
});
