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

    it("handles game with strikes", function() {
      game.pinsDown(1,1,4);
      game.pinsDown(3,1,10);
      game.pinsDown(4,1,2);
      game.pinsDown(4,2,7);
      expect(game.getScore()).toEqual(32);
      console.log(game.pins_down);
    })

    it("handles consecutive strikes", function() {
      game.pinsDown(3,1,10);
      game.pinsDown(4,1,10);
      game.pinsDown(5,1,2);
      game.pinsDown(5,2,7);
      expect(game.getScore()).toEqual(50);
      console.log(game.pins_down);
    })

    it("handles strikes in the 9th frame with no strikes or spares in 10th frame", function() {
      game.pinsDown(9,1,10);
      game.pinsDown(10,1,3);
      game.pinsDown(10,2,3);
      expect(game.getScore()).toEqual(22);
      console.log(game.pins_down);
    })


    it("handles strikes in the 9th frame with a spare in 10th frame", function() {
      game.pinsDown(9,1,10);
      game.pinsDown(10,1,3);
      game.pinsDown(10,2,7);
      game.pinsDown(10,3,5);
      expect(game.getScore()).toEqual(35);
      console.log(game.pins_down);
    })

    it("handles strikes in the 9th frame and a strike in 10th frame", function() {
      game.pinsDown(9,1,10);
      game.pinsDown(10,1,10);
      game.pinsDown(10,2,7);
      game.pinsDown(10,3,2);
      expect(game.getScore()).toEqual(46);
      console.log(game.pins_down);
    })

    it("handles game with spares", function() {
      game.pinsDown(1,1,4);
      game.pinsDown(3,1,7);
      game.pinsDown(3,2,3);
      game.pinsDown(4,1,2);
      game.pinsDown(4,2,7);
      expect(game.getScore()).toEqual(25);
      console.log(game.pins_down);
    })


    it("10 10 10 in 10th frame gives 30 points", function() {
      game.pinsDown(10,1,10);
      game.pinsDown(10,2,10);
      game.pinsDown(10,3,10);
      expect(game.getScore()).toEqual(30);
      console.log(game.pins_down);
    })

    it("10 10 7 in 10th frame gives 27 points", function() {
      game.pinsDown(10,1,10);
      game.pinsDown(10,2,10);
      game.pinsDown(10,3,7);
      expect(game.getScore()).toEqual(27);
      console.log(game.pins_down);
    })

    it("10 3 7 in 10th frame gives 20 points", function() {
      game.pinsDown(10,1,10);
      game.pinsDown(10,2,3);
      game.pinsDown(10,3,7);
      expect(game.getScore()).toEqual(20);
      console.log(game.pins_down);
    })


    it("handles perfect game", function() {
      game.pinsDown(1,1,10);
      game.pinsDown(2,1,10);
      game.pinsDown(3,1,10);
      game.pinsDown(4,1,10);
      game.pinsDown(5,1,10);
      game.pinsDown(6,1,10);
      game.pinsDown(7,1,10);
      game.pinsDown(8,1,10);
      game.pinsDown(9,1,10);
      game.pinsDown(10,1,10);
      game.pinsDown(10,2,10);
      game.pinsDown(10,3,10);
      expect(game.getScore()).toEqual(300);
      console.log(game.pins_down);
    })

    it("handles example game", function() {
      game.pinsDown(1,1,1);
      game.pinsDown(1,2,4);
      game.pinsDown(2,1,4);
      game.pinsDown(2,2,5);   
      game.pinsDown(3,1,6);
      game.pinsDown(3,2,4);
      game.pinsDown(4,1,5);
      game.pinsDown(4,2,5);
      game.pinsDown(5,1,10);
      game.pinsDown(6,1,0);
      game.pinsDown(6,2,1);
      game.pinsDown(7,1,7);
      game.pinsDown(7,2,3);
      game.pinsDown(8,1,6);
      game.pinsDown(8,2,4);
      game.pinsDown(9,1,10);
      game.pinsDown(10,1,2);
      game.pinsDown(10,2,8);
      game.pinsDown(10,3,6);
      expect(game.getScore()).toEqual(133);
      console.log(game.pins_down);
    })

  })


})

