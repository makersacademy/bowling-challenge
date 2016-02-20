'use strict';

describe("Player", function() {

  var player

  beforeEach(function() {
    player = new Player();
  });

  it("can start a game", function() {
    player.play();
    expect(player.game).toEqual(new Game());
  });


  it("can bowl a ball and start a frame", function() {
    expect(player.firstBowl).toBeDefined();
  });

  it("can bowl a second ball and end a frame", function() {
    expect(player.secondBowl).toBeDefined();
  });


});
