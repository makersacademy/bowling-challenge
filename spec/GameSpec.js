'use strict';

describe ("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe("initialize", function(){
    it("starts score at zero", function() {
      expect(game.getScore()).toEqual(0);
    })

  })

  describe("pinsDown", function(){
    it("records pins knocked down, first frame, first roll", function() {
      expect(game.pinsDown(1,1,5)).toEqual(5);
      console.log(game.pins_down);
    })

    it("records pins knocked down, first frame, second roll", function() {
      expect(game.pinsDown(1,2,10)).toEqual(10);
      console.log(game.pins_down);
    })

    it("records pins knocked down, third frame, second roll", function() {
      expect(game.pinsDown(3,2,7)).toEqual(7);
      console.log(game.pins_down);
    })

    it("records pins knocked down, tenth frame, third roll", function() {
      expect(game.pinsDown(10,3,5)).toEqual(5);
      console.log(game.pins_down);
    })

  })

  describe("getScore", function(){
    it("handles game with no strikes or spares", function() {
      game.pinsDown(1,1,4);
      game.pinsDown(1,2,1);
      game.pinsDown(3,2,7);
      game.pinsDown(10,1,1);
      game.pinsDown(10,3,7);
      expect(game.getScore()).toEqual(20);
      console.log(game.pins_down);
    })

  })


})

