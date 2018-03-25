describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe("Play", function() {
    it("Runs the game by calling the play method on frame and final_frame", function() {
      frame = jasmine.createSpyObj('frame', ['play']);
      final_frame = jasmine.createSpyObj('final_frame', ['play']);
      expect(frame.play).toHaveBeenCalledTimes(9);
      expect(final_frame.play).toHaveBeenCalled;
    })
  })

})
