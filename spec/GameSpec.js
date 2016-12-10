'use strict';
describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.rackUp();
  });

    // it("should initialize with no pins set up (rack = false)", function(){
    //   expect(game.rack).toBe(false);
    // });

    it("should initialize with a constant of pins", function(){
      expect(game.pins).toEqual([0,1,2,3,4,5,6,7,8,9,10])
    });

    it("should return an empty array when score is initialized", function(){
      expect(game.score).toEqual([]);
    });

    it("should initialize with a frame count of zero", function(){
      expect(game.frameCount).toEqual(0);
    });

    it("should load pins", function(){
      expect(game.rack).toBe(true);
    });

    it("should return number of pins hit on first roll - if not a strike", function(){
      spyOn(game,'roll_1').and.returnValue(5);
      expect(game.roll_1()).toEqual(5);
    });

    it("should return strike if 10 is returned", function(){
      spyOn(game,'roll_1').and.returnValue('Strike');
      expect(game.roll_1()).toEqual('Strike');
    });

    it("should return the new amount of pins", function(){
      game.firstScore = 9;
      game.pinSweep();
      expect(game.pins).toEqual([0,1]);
    });

      it("should return number of pins hit on first and second roll", function(){
      spyOn(game,'roll_2').and.returnValue(0);
      expect(game.roll_2()).toEqual(0);
    });

    it("should return spare if total set score is 10", function(){
      spyOn(game,'roll_2').and.returnValue('Spare');
      expect(game.roll_2()).toEqual('Spare');
    });

    it("should return the result of the current set", function(){
      game.firstScore = 3;
      game.secondScore = 4;
      game.currentScore();
      expect(game.score).toContain([3,4])
    });

    it("should return the amount of frames used", function(){
      game.firstScore = 3;
      game.secondScore = 4;
      game.currentScore();
      game.currentFrame();
      expect(game.frameCount).toEqual(1);
    });

    it("should give an error if a player attempts to play more than 10 sets", function(){

    });


});
