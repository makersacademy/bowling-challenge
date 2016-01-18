describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    frame = {
      firstRole: function() {},
      secondRole: function() {},
      totalScore: function() {},
    };
  });

    describe('initialisation of game', function() {
      it('starts the game with an empty array of frames', function() {
        expect(game.frames.length).toEqual(0);
      });
      it('starts the game with a score of 0', function() {
        expect(game.score).toEqual(0);
      });
    });

    describe('#playFrame', function() {
      it('appends to frames a new frame', function() {
        game.playFrame();
        expect(game.frames.length).toEqual(1);
      });
    });


});
