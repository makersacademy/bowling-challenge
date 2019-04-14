describe('can only knock down 10 pins in a frame', function() {
  it('should not allow frame rolls to sum more than 10', function() {
    game = new Game
      expect(function() { game.roll(5); game.roll(6); }).toThrow(new Error('Input Error: Cannot knock down more than 10 Pins per frame!'));
  });
});
