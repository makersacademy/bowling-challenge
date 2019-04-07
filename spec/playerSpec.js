'use strict';

describe("Player", function () {
  var player;

  beforeEach(function(){
    player = new Player();
  });

  describe('roll', function () {
    it("returns the number of pins player rolled over", function () {
      expect(player.roll(5)).toEqual(5);
    });
  });

  describe('rollType', function () {
    it("returns the rollType - gutter - if the user knocked down no pins", function () {
      expect(player.rollType(0)).toEqual("gutter");
    });
  });

});
