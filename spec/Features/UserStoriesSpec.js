describe("UserStories", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  // initializes with 0 no frames completed
  it("starts out with 0 frames completed", function(){
    expect(game.frames).toEqual([]);
  });

  // allows me to play a frame
  it("allows me to play a frame", function(){
    spyOn(Math, "random").and.returnValue(0.5)
    game.playFrame();
    expect(game.frames[0]).toEqual([5, 3]);
  });

  // each frame keeps track of it's shots
  it("initializes each frame with a shots array", function(){
    spyOn(Math, "random").and.returnValue(0.5)
    game.playFrame();
    expect(game.frames[0]).toEqual([5, 3])
  });

  // shoots a second shot if the first one is not a strike
  it("shoots second shot if first was not a strike", function(){
    spyOn(Math, "random").and.returnValue(0.5)
    game.playFrame();
    expect(game.frames[0]).toEqual([5, 3])
  })

  it("allows players to calculate the correct score", function(){
    spyOn(Math, "random").and.returnValue(0.5)
    for (var i=0; i<10; i++) {
      game.playFrame();
    }
    expect(game.calculateScore()).toEqual(80);
  });

});
