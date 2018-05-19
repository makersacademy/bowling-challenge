describe('bowling', function() {
  beforeEach(function() {
    bowlingGame = new Bowling();
  });

  it('Should knock down specified number of pins', function() {
    bowlingGame.roll(5);
    expect(bowlingGame.pins).toEqual(5)
  });

  it('Should throw an error if attempting to knock too many pins', function() {
    expect(function() { bowlingGame.roll(11) } ).toThrow("You cannot knock over more pins than there are standing")
  });

  it('Should throw an error if attempting to knock too many pins', function() {
    bowlingGame.roll(5);
    expect(function() { bowlingGame.roll(6) } ).toThrow("You cannot knock over more pins than there are standing")
  });
});
