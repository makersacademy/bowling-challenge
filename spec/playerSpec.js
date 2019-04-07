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

    it("returns the rollType - normal - if the user knocked down pins > 0 and pins < 10", function () {
      expect(player.rollType(5)).toEqual("normal");
    });

    it("returns the rollType - strike - if the user knocked down 10 pins", function () {
      expect(player.rollType(10)).toEqual("strike");
    });

  });

});
