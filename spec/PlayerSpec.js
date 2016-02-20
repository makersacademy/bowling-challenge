'use strict';

describe("Player", function() {

  var player

  beforeEach(function() {
    player = new Player();
  });

  // As a player
  // So I can begin playing
  // I want to bowl a ball

  it("can bowl a ball", function() {
    expect(player.bowl).toBeDefined();
  });

});
