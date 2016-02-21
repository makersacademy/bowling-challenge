describe("Game", function() {
  var game, frame1;

  beforeEach(function() {
    game = new Game();
    frame1 = jasmine.createSpyObj('frame', [3, 5]);
    frame2 = jasmine.createSpyObj('frame', [4, 5]);
  });

  describe("New Game", function(){

    it('begins with no frames', function(){
      expect(game.framesTotal).toEqual([]);
    });

  });

  describe("It adds frames to the game", function(){

    it('adds the first frame to the game', function(){
      game.addFrames(frame1);
      expect(game.framesTotal).toContain(frame1);
    });

    it("doesn't add more than 10 frames", function(){
      for (var i = 0; i < 10; i++) {
        game.addFrames(frame1);
      }
      expect(function() {game.addFrames(frame2);}).toThrowError("You have reached the limit of frames for the game");
    });

  });
});
