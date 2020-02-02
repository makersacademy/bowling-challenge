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

  describe("isPinResetRequired", function(){
    it("returns false after non strike first roll", function() {
      game.play(3);
      expect(game.isPinResetRequired()).toEqual(false);
    })

    it("returns true after second roll", function() {
      game.play(3);
      game.play(4);
      expect(game.isPinResetRequired()).toEqual(true);
    })

    it("returns true after second roll strike", function() {
      game.play(0);
      game.play(10);
      expect(game.isPinResetRequired()).toEqual(true);
    })

    it("returns true after spare", function() {
      game.play(1);
      game.play(9);
      expect(game.isPinResetRequired()).toEqual(true);
    })
    
    it("returns true after strike", function() {
      game.play(10);
      expect(game.isPinResetRequired()).toEqual(true);
    })


    it("returns false after non strike in 10th frame", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(5);
      expect(game.isPinResetRequired()).toEqual(false);
    })

    it("returns true after first roll 5 and second roll 3 in 10th frame", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(5);
      game.play(3);
      expect(game.isPinResetRequired()).toEqual(true);
    })

    it("returns true after first roll 5 and second roll 5 in 10th frame", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(5);
      game.play(5);
      expect(game.isPinResetRequired()).toEqual(true);
    })

    it("returns false after first roll 10 and second roll 5 in 10th frame", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(5);
      expect(game.isPinResetRequired()).toEqual(false);
    })

    it("returns true after 3rd roll in 10th frame", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(5);
      game.play(5);
      expect(game.isPinResetRequired()).toEqual(true);
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

    it("handles a spare on the second roll where there was no scoring on the previous roll", function() {
      game.pinsDown(1,1,0);
      game.pinsDown(1,2,10);
      game.pinsDown(2,1,3);
      game.pinsDown(2,2,5);
      expect(game.getScore()).toEqual(21);
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

  describe("play", function(){
    it("plays a game with no spare or strike in the 10th frame", function() {
      game.play(3);
      game.play(4);
      game.play(1);
      game.play(2);
      game.play(0);
      game.play(5);
      game.play(10);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(0);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(38);
    })

    it("plays a game with a spare in the 10th frame", function() {
      game.play(3);
      game.play(4);
      game.play(1);
      game.play(2);
      game.play(0);
      game.play(5);
      game.play(10);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(0);
      game.play(1);
      game.play(1);
      game.play(4);
      game.play(6);
      game.play(1);
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(47);
    })

    it("plays a game with a strike in the 10th frame", function() {
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(10);
      game.play(1);
      game.play(6);
      
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(17);
    })


    it("plays a game with 3 strikes in the 10th frame", function() {
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(10);
      game.play(10);
      game.play(10);
      
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(30);
    })

    it("handles attempt to take one shot too many following strikes", function() {
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(0);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(30);
    })

    it("handles trying to take one shot too many after a spare in the 10th frame", function() {
      game.play(3);
      game.play(4);
      game.play(1);
      game.play(2);
      game.play(0);
      game.play(5);
      game.play(10);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(0);
      game.play(1);
      game.play(1);
      game.play(4);
      game.play(6);
      game.play(1);
      game.play(1);
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(47);
    })

    it("handles attempting to take one shot too many after no spare or strike in the 10th frame", function() {
      game.play(3);
      game.play(4);
      game.play(1);
      game.play(2);
      game.play(0);
      game.play(5);
      game.play(10);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(0);
      game.play(1);
      game.play(1);
      game.play(1);
      game.play(2);
      game.play(7);
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(39);
    })

    it("plays a perfect game", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      game.play(10);
      console.log(game.pins_down);
      expect(game.getScore()).toEqual(300);
    })
  })


})