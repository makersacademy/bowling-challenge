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

  describe ('makeFrames', function() {
    it ('adds a default number of frame objects to the empty frames array', function() {
      game.makeFrames()
      expect(game.frames.length).toEqual(10)
    });
  });

  describe ('inputRoll', function() {
    it ('adds a roll to the correct place in the frames array', function() {
      game.makeFrames()
      game.inputRoll(3)
      expect(game.frames[0].roll_1).toEqual(3)
      game.inputRoll(5)
      expect(game.frames[0].roll_2).toEqual(5)
    });
  });


});
