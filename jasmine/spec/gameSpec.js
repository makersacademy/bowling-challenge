  describe ('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe ('constructor', function() {
    it ('initializes with a current frame set to 1', function() {
      expect(game.current_frame).toEqual(1);
    });
    it ('initializes with an empty frames array', function() {
      expect(game.frames.length).toEqual(0);
    });
  });

});
