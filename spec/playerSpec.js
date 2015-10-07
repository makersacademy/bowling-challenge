describe('Player', function() {

  beforeEach(function() {
    player = new Player();
  });

  it('should start with 0 points', function() {
    expect(player.scoresheet).toEqual(0);
  });

  it('throw generator should return a number that is less than 11', function() {
    expect(player.throwGenerator()).toBeLessThan(11);
  });

  it('should throw Miss if you hit nothing', function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(function() {player.throwBall(); }).toThrow('Miss!');
  });

});
