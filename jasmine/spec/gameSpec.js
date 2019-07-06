  describe ('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  describe ('constructor', function() {
    it ('initializes with a current frame set to 1', function() {
      expect(game.current_frame).toEqual(1);
    });
    it ('initializes with an empty frames array', function() {
      expect(game.frames.length).toEqual(0);
    });
  });

  describe ('make_frames', function() {
    it ('adds a default number of frame objects to the empty frames array', function() {
      game.make_frames()
      expect(game.frames.length).toEqual(10)
      console.log(game.frames)
    });
  });

});
