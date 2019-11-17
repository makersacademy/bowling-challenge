'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  // it("1 frame game, no strikes or spares", function(){
  //   frame = new Frame(4,5);
  //   game.addFrame(frame);
  //   expect(game.finalScore()).toEqual(9);
  // });

  it("10 frame game, no strikes or spares", function(){
    generateStandardFrames(5,game);
    expect(game.finalScore()).toEqual(50);
  });

  describe("strike scenarios", function(){

    it("one strike game", function(){
      var strikeFrame = new Frame(10,0);
      var frame = new Frame(4,5);
      game.addFrame(strikeFrame);
      game.addFrame(frame);
      generateStandardFrames(4,game);
      expect(game.finalScore()).toEqual(68);
    });

    it("three consecutive strike game", function(){
      var frame = new Frame(4,5);
      generateStrikeFrames(3,game);
      game.addFrame(frame);
      generateStandardFrames(3,game);
      expect(game.finalScore()).toEqual(112);
    });

    it("two consecutive strike game", function(){
      var strikeFrame = new Frame(10,0);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      generateStandardFrames(4,game);
      expect(game.finalScore()).toEqual(83);
    });

    it("two consecutive strike game. frames 8 and 9", function(){
      var frame = new Frame(4,5);
      generateStandardFrames(3,game);
      game.addFrame(frame);
      generateStrikeFrames(2,game);
      game.addFrame(frame);
      expect(game.finalScore()).toEqual(91);
    });
  });

  describe("spare scenarios", function(){

    it("one spare game", function(){
      var frame = new Frame(4,5);
      var spareFrame = new Frame(5,5);
      game.addFrame(spareFrame);
      game.addFrame(frame);
      generateStandardFrames(4,game);
      expect(game.finalScore()).toEqual(63);
    });

    it("two consecutive spare game", function(){
      var frame = new Frame(4,5);
      var spareFrame = new Frame(5,5);
      generateSpareFrames(2,game);
      generateStandardFrames(4,game);
      expect(game.finalScore()).toEqual(73);
    });
  });
  describe(" strike and spare scenarios", function(){

    it("two strikes followed by 1 spare, 1 strike followed by 1 spare",
    function(){
      generateStrikeFrames(2,game);
      generateSpareFrames(1,game);
      generateStrikeFrames(1,game);
      generateSpareFrames(1,game);
      var frame = new Frame(4,5);
      game.addFrame(frame);
      generateStandardFrames(2,game);
      expect(game.finalScore()).toEqual(132);
    });
  });

  describe("tenth frame strike and spare scenarios", function(){

    it("perfect score - 12 strikes", function(){
      generateStrikeFrames(9,game);
      var frame = new Frame(10,10,10);
      game.addFrame(frame);
      expect(game.finalScore()).toEqual(300);
    });

    it(" 10 spares", function(){
      generateSpareFrames(9,game);
      var frame = new Frame(9,1,10);
      game.addFrame(frame);
      console.log(game);
      expect(game.finalScore()).toEqual(191);
    });
  });
});
