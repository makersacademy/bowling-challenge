describe('Frame', function(){
  var game;
  var frame;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });

  it('a game starts with a score of zero', function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  describe("#begin", function() {
    it("initialises frame 1", function() {
      game.begin();
      expect(game.frame).toEqual(new Frame(1));
    });
  });

  describe("#nextFrame", function() {
    it("increases current frame by one", function() {
      game.begin();
      game.nextFrame();
      expect(game.frame).toEqual(new Frame(2));
    });
  });
});
