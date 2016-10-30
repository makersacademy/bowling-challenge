'use strict';

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {

    var frame1 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame2 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame3 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame4 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame5 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame6 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame7 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame8 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame9 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame10 = jasmine.createSpyObj('BowlingFrame',['addScore']);

    var fakeArray = [frame1, frame2, frame3, frame4, frame5,
                    frame6, frame7, frame8, frame9, frame10];

    game = new BowlingGame();
    game.framesArray = fakeArray;

  });

  describe("when starting a game", function(){

    it('should start with a total score of 0', function(){
      expect(game.totalScore).toEqual(0)
    });

    it("should know that it's on the first frame", function(){
      expect(game.currentFrame).toEqual(game.frame1);
    });

    it("should start with an array of 10 frames", function(){
      expect(game.framesArray.length).toEqual(10);
    });

  });

  describe("starting a frame", function(){

    it('should be able to add a score of 3 to frame one', function(){
      game.takeShot(3);
      expect(game.frame1.addScore).toHaveBeenCalledWith(3);
    });

    it('should be able to add a score of 10', function(){

    });

    it('', function(){

    });

  });

});
