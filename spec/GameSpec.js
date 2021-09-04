describe('Game', function () {
  let game;
  let frame;

  beforeEach(function () {
    frame = { 

    };
    game = new Game(frame);
  });

  describe('new instancs of game class', function () {
    it('frame array is empty for frame instance', function () {
      expect(game.frames).toEqual([]);
    });

    it('have current frame set to frame passed in', function () {
      expect(game.current_frame).toEqual(frame);
    });
  });

  describe('method for each bowl', function () {
    it('adds score to current frame', function () {
      game.roll(5);
    });

  });





})
