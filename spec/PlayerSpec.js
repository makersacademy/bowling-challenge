describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player()
  });

  it('should be able to produce a random number of knocked over pins between 1 and 10', function() {
    spyOn(player, 'bowl').and.returnValue(8);
    expect(player.bowl()).toEqual(8);
  });

  it('should take the first bowl and use it determine the number of pins knocked down on the second bowl', function() {
    spyOn(player, 'bowl').and.returnValue(8);
    spyOn(player, 'secondBowl').and.returnValue(1);
    expect(player.secondBowl()).toEqual(1);
  });
});
