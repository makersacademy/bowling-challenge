describe('Player', function() {

  beforeEach(function() {
    player = new Player();
  });

  it('should start with 10 pins', function() {
    expect(player.pinCount).toEqual(10);
  });

  it('should start with 0 points', function() {
    expect(player.scoresheet).toEqual(0);
  });

  it('throw generator should return a number that is less than 11', function() {
    expect(player.throwGenerator()).toBeLessThan(11);
  });

  it('pinCount should remain at 10 if player misses', function() {
    expect(player.pinCount).toEqual(10);
  });

  it('pinCount should be 5 if player hits 5 pins', function() {
    spyOn(Math, 'floor').and.returnValue(5);
    player.throwBall();
    expect(player.pinCount).toEqual(5);
  });


});
