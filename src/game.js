describe('Game', function() {
  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpy('frame', ['rollOne']);
  });
  describe('bowl', function() {
    it('updates the first roll in the current frame', function() {
      game.bowl(6);
    });
  });
});