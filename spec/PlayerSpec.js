describe ("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player;
  });

  it("can take a roll", function() {
    player.roll(3);
    expect(player.roll1).toEqual(3);
  });

  it("can take two rolls", function() {
    player.roll(3, 6);
    expect(player.roll1).toEqual(3);
    expect(player.roll2).toEqual(6);
  });

   it("can take zero value rolls", function() {
    player.roll(0, 0);
    expect(player.roll1).toEqual(0);
    expect(player.roll2).toEqual(0);
  });

  });

