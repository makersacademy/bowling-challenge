describe("Feature Spec", function() {
  var game;
  var frame1;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame1 = new Frame();
    frame2 = new Frame();
  });

  it("score goes up when you bowl", function() {
    frame1.rollOne(5)
    frame1.rollTwo(3)
    game.addScore(frame1.frameScore)
    expect(game.score).toBe(8)
  })

  it("cannot bowl more than 10 frames", function() {
    for(i = 0; i < 10; i++) {
      frame1.rollOne(5);
      frame1.rollTwo(3);
      game.addScore(frame1.frameScore);
    }
    expect(game.frameCount).toEqual(game.MAX_FRAMES);
  });

  it("player can get a strike", function(){ 
    frame1.rollOne(10);
    game.addScore(frame1.frameScore);
    frame2.rollOne(2);
    frame2.rollTwo(3);
    game.addScore(frame2.frameScore);
    expect(game.score).toEqual(20);
  });
});