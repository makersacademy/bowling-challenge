describe('Player', function () {

  beforeEach(function() {
    player = new Player();
  });
  
  it("rolls", function () {
    player.hit(0);
    expect(player.hit(0)).toBe(0);
  });




})